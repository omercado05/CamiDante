import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import styles from '../blog.module.css';

export default function Lifestyle() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Lifestyle</h1>
          <p className={styles.description}>Reflexiones sobre el estilo de vida, hábitos y rutinas.</p>
        </div>
        <div className={styles.grid}>
          {[1, 2, 3].map((item) => (
            <Card key={item} interactive>
              <div className={styles.cardContent}>
                <span className={styles.category}>Lifestyle</span>
                <h3>El ritual del café matutino {item}</h3>
                <p className={styles.cardExcerpt}>
                  Cómo preparar el café se convirtió en una meditación diaria.
                </p>
                <span className={styles.date}>01 Octubre, 2026</span>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
