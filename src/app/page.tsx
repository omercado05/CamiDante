import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import styles from './page.module.css';

const FEATURED = {
  slug: 'el-arte-de-la-pausa',
  title: 'El arte de la pausa en un mundo acelerado',
  excerpt: 'Reflexiones sobre cómo encontrar la calma cuando todo a nuestro alrededor parece ir demasiado rápido. Un pequeño diario de quietud.',
};

const RECENT_POSTS = [
  { slug: 'el-silencio-de-las-mananas', category: 'Reflections', title: 'El silencio de las mañanas', excerpt: 'Por qué levantarme a las 5 AM ha cambiado mi perspectiva del tiempo y el espacio.', date: '24 Octubre, 2026' },
  { slug: 'lecturas-de-otono', category: 'Books', title: 'Lecturas de Otoño', excerpt: 'Explorando los clásicos rusos bajo una nueva luz dorada.', date: '18 Octubre, 2026' },
  { slug: 'el-ritual-del-cafe', category: 'Lifestyle', title: 'El ritual del café matutino', excerpt: 'Cómo preparar el café se convirtió en una meditación silenciosa.', date: '10 Octubre, 2026' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main} animate-fade-in`}>
        <section className={`${styles.hero} animate-fade-in animate-delay-1`}>
          <div className={styles.heroContent}>
            <span className={styles.label}>Nuevo Artículo</span>
            <h1 className={styles.title}>{FEATURED.title}</h1>
            <p className={styles.excerpt}>{FEATURED.excerpt}</p>
            <Link href={`/blog/${FEATURED.slug}`}>
              <Button variant="primary">Leer Artículo</Button>
            </Link>
          </div>
        </section>

        <section className={styles.recentSection}>
          <div className={styles.sectionHeader}>
            <h2>Recientes</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.grid}>
            {RECENT_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Card interactive>
                  <div className={styles.cardContent}>
                    <span className={styles.category}>{post.category}</span>
                    <h3>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                </Card>
              </Link>
            ))}
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
