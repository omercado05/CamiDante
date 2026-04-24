import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from '../blog.module.css';

export default async function Reflections() {
  const { data: catData } = await supabase.from('categories').select('name').eq('slug', 'reflections').single();
  const categoryName = catData?.name || 'Reflexiones';

  const { data: posts } = await supabase
    .from('posts')
    .select('*, categories!inner(name, slug)')
    .eq('categories.slug', 'reflections')
    .eq('published', true)
    .order('published_at', { ascending: false });

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{categoryName}</h1>
          <p className={styles.description}>Pensamientos sueltos, ideas y ensayos personales.</p>
        </div>
        <div className={styles.grid}>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Card interactive>
                  <div className={styles.cardContent}>
                    <span className={styles.category}>{categoryName}</span>
                    <h3>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <span className={styles.date}>
                      {new Date(post.published_at).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'long'
                      })}
                    </span>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <p>No hay artículos en esta categoría aún.</p>
          )}
        </div>
      </main>
    </>
  );
}
