import { Header } from '@/components/layout/Header';
import styles from './about.module.css';

export default function About() {
  return (
    <>
      <Header />
      <main className={`${styles.container} animate-fade-in`}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={`${styles.avatarWrapper} animate-fade-in animate-delay-1`}>
            {/* Placeholder ilustración — reemplaza con foto real */}
            <div className={styles.avatarPlaceholder}>
              <span>✍️</span>
            </div>
          </div>
          <div className={`${styles.heroText} animate-fade-in animate-delay-2`}>
            <span className={styles.label}>El rincón de</span>
            <h1 className={styles.title}>CamiDante</h1>
            <p className={styles.tagline}>
              Escritora de diarios. Lectora de clásicos. Caminante con perro.
            </p>
          </div>
        </section>

        <div className={styles.divider}>♦</div>

        {/* Historia */}
        <section className={`${styles.section} animate-fade-in animate-delay-2`}>
          <h2 className={styles.sectionTitle}>Mi historia</h2>
          <div className={styles.textBody}>
            <p>
              Este blog nació de una costumbre simple: escribir al margen de los libros que leía.
              Notas, preguntas, conexiones inesperadas con la vida cotidiana. Con el tiempo,
              esos márgenes se quedaron pequeños y decidí crear un espacio propio.
            </p>
            <p>
              <strong>CamiDante</strong> es una mezcla de mi nombre y mi amor por mi perro Dante Patricio —
              ese compañero fiel que me acompaña caminando en esta vida entre libros, problemas, dudas y alegrías.
            </p>
            <p>
              Aquí escribo sobre los libros que me cambiaron, las rutinas que me sostienen y los
              pequeños momentos que merecen ser recordados. Sin algoritmos, sin prisas.
              Solo palabras en papel digital.
            </p>
          </div>
        </section>

        <div className={styles.divider}>♦</div>

        {/* Qué encontrarás */}
        <section className={`${styles.section} animate-fade-in animate-delay-3`}>
          <h2 className={styles.sectionTitle}>¿Qué encontrarás aquí?</h2>
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>📚</span>
              <h3>Libros</h3>
              <p>Reseñas, anotaciones y diarios de lectura de libros que dejaron huella.</p>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>📷</span>
              <h3>Galería</h3>
              <p>Fotografías, pinturas, lugares, momentos, y todo aquello que me inspira.</p>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>💭</span>
              <h3>Reflexiones</h3>
              <p>Ensayos personales, preguntas sin respuesta y pensamientos sueltos.</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
