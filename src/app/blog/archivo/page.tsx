import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import styles from '../blog.module.css';

export default function Archivo() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Archivo Completo</h1>
          <p className={styles.description}>Todas las publicaciones en un solo lugar.</p>
        </div>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} interactive>
              <div className={styles.cardContent}>
                <span className={styles.category}>Reflections</span>
                <h3>Título del artículo {item}</h3>
                <p className={styles.cardExcerpt}>
                  Un breve extracto de lo que trata este artículo en el archivo general.
                </p>
                <span className={styles.date}>10 Octubre, 2026</span>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
