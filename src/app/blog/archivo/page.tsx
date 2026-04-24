import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from '../blog.module.css';

export default async function Archivo() {
  const { data: posts } = await supabase
    .from('posts')
    .select('*, categories(name)')
    .eq('published', true)
    .order('published_at', { ascending: false });

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Archivo Completo</h1>
          <p className={styles.description}>Todas las publicaciones en un solo lugar.</p>
        </div>
        <div className={styles.grid}>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Card interactive>
                  <div className={styles.cardContent}>
                    <span className={styles.category}>{post.categories?.name}</span>
                    <h3>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <span className={styles.date}>
                      {new Date(post.published_at).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <p>No hay artículos publicados todavía.</p>
          )}
        </div>
      </main>
    </>
  );
}
