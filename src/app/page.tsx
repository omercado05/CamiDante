import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Fetch featured post (latest)
  const { data: featuredPosts } = await supabase
    .from('posts')
    .select('*, categories(name)')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(1);

  const featured = featuredPosts?.[0];

  // Fetch recent posts (next 3)
  const { data: recentPosts } = await supabase
    .from('posts')
    .select('*, categories(name)')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .range(1, 3);

  return (
    <>
      <Header />
      <main className={`${styles.main} animate-fade-in`}>
        {featured ? (
          <section className={`${styles.hero} animate-fade-in animate-delay-1`}>
            <div className={styles.heroContent}>
              <span className={styles.label}>Nuevo Artículo</span>
              <h1 className={styles.title}>{featured.title}</h1>
              <p className={styles.excerpt}>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`}>
                <Button variant="primary">Leer Artículo</Button>
              </Link>
            </div>
          </section>
        ) : (
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Bienvenido a CamiDante</h1>
              <p className={styles.excerpt}>Explora nuestras reflexiones sobre la pausa y el arte de vivir.</p>
            </div>
          </section>
        )}

        <section className={styles.recentSection}>
          <div className={styles.sectionHeader}>
            <h2>Recientes</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.grid}>
            {recentPosts && recentPosts.length > 0 ? (
              recentPosts.map((post) => (
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
              <p>No hay artículos recientes.</p>
            )}
          </div>
          
          <div className={styles.centerAction}>
            <Link href="/blog/archivo">
              <Button variant="outline">Ver Archivo Completo</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
