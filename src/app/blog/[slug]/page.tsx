import { Header } from '@/components/layout/Header';
import styles from '../blog.module.css';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <>
      <Header />
      <main className={`${styles.articleContainer} animate-fade-in`}>
        <article className="animate-delay-1">
          <header className={styles.articleHeader}>
            <div className={styles.articleMeta}>
              <span style={{ color: 'var(--secondary)' }}>Reflections</span>
              <span>•</span>
              <span>24 Octubre, 2026</span>
            </div>
            <h1 className={styles.title}>El arte de la pausa en un mundo acelerado ({slug})</h1>
          </header>
          
          <div className={styles.articleContent}>
            <p>
              Vivimos en una época donde la velocidad se premia y la lentitud se castiga. 
              Sin embargo, es en las pausas donde realmente encontramos el sentido a lo que hacemos.
              Este artículo es un recordatorio personal sobre la importancia de detenerse.
            </p>
            
            <blockquote>
              "El silencio no es la ausencia de sonido, sino la presencia de uno mismo."
            </blockquote>
            
            <p>
              Cuando decidí empezar a levantarme más temprano, no lo hice para ser más productivo. 
              Lo hice para tener una hora donde el mundo no exigiera nada de mí. Ese espacio de 
              tiempo se ha vuelto sagrado.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
