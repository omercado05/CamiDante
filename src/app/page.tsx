import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main} animate-fade-in`}>
        <section className={`${styles.hero} animate-fade-in animate-delay-1`}>
          <div className={styles.heroContent}>
            <span className={styles.label}>Nuevo Artículo</span>
            <h1 className={styles.title}>El arte de la pausa en un mundo acelerado</h1>
            <p className={styles.excerpt}>
              Reflexiones sobre cómo encontrar la calma cuando todo a nuestro alrededor parece ir demasiado rápido. 
              Un pequeño diario de quietud.
            </p>
            <Button variant="primary">Leer Artículo</Button>
          </div>
        </section>

        <section className={styles.recentSection}>
          <div className={styles.sectionHeader}>
            <h2>Recientes</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.grid}>
            {[1, 2, 3].map((item) => (
              <Card key={item} interactive>
                <div className={styles.cardContent}>
                  <span className={styles.category}>Reflections</span>
                  <h3>El silencio de las mañanas</h3>
                  <p className={styles.cardExcerpt}>
                    Por qué levantarme a las 5 AM ha cambiado mi perspectiva del tiempo y el espacio.
                  </p>
                  <span className={styles.date}>24 Octubre, 2026</span>
                </div>
              </Card>
            ))}
          </div>
          
          <div className={styles.centerAction}>
            <Button variant="outline">Ver Archivo Completo</Button>
          </div>
        </section>
      </main>
    </>
  );
}
