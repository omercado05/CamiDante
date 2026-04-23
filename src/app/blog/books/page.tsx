import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import styles from '../blog.module.css';

export default function Books() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Books</h1>
          <p className={styles.description}>Reseñas, notas al margen y diarios de lectura.</p>
        </div>
        <div className={styles.grid}>
          {[1, 2, 3].map((item) => (
            <Card key={item} interactive>
              <div className={styles.cardContent}>
                <span className={styles.category}>Books</span>
                <h3>Lecturas de Otoño {item}</h3>
                <p className={styles.cardExcerpt}>
                  Explorando los clásicos rusos bajo una nueva luz.
                </p>
                <span className={styles.date}>05 Octubre, 2026</span>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
