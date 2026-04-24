import { Header } from '@/components/layout/Header';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import styles from '../blog.module.css';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch post from Supabase
  const { data: post, error } = await supabase
    .from('posts')
    .select('*, categories(name)')
    .eq('slug', slug)
    .single();

  if (error || !post) {
    console.error('Error fetching post:', error);
    return notFound();
  }

  const formattedDate = new Date(post.published_at || post.created_at).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Header />
      <main className={`${styles.articleContainer} animate-fade-in`}>
        <article className="animate-fade-in animate-delay-1">
          <header className={styles.articleHeader}>
            <div className={styles.articleMeta}>
              <span style={{ color: 'var(--secondary)' }}>{post.categories?.name}</span>
              <span>•</span>
              <span>{formattedDate}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            {post.excerpt && <p className={styles.articleExcerpt}>{post.excerpt}</p>}
          </header>
          
          <div className={styles.articleContent}>
            {/* Split content by newlines to render as paragraphs for now */}
            {post.content?.replace(/\\n/g, '\n').split('\n').map((para: string, index: number) => (
              para.trim() ? (
                para.startsWith('#') ? (
                  <h2 key={index}>{para.replace(/^#+\s/, '')}</h2>
                ) : para.startsWith('>') ? (
                  <blockquote key={index}>{para.replace(/^>\s/, '')}</blockquote>
                ) : (
                  <p key={index}>{para}</p>
                )
              ) : <br key={index} />
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
