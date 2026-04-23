import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import styles from '../blog.module.css';

export default function Reflections() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Reflections</h1>
          <p className={styles.description}>Pensamientos sueltos, ideas y ensayos personales.</p>
        </div>
        <div className={styles.grid}>
          {[1, 2, 3].map((item) => (
            <Card key={item} interactive>
              <div className={styles.cardContent}>
                <span className={styles.category}>Reflections</span>
                <h3>El valor del silencio {item}</h3>
                <p className={styles.cardExcerpt}>
                  En un mundo ruidoso, encontrar el silencio es un acto de rebeldía.
                </p>
                <span className={styles.date}>28 Septiembre, 2026</span>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
