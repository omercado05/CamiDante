import { Header } from '@/components/layout/Header';
import styles from './about.module.css';

export default function About() {
  return (
    <>
      <Header />
      <main className={`${styles.container} animate-fade-in`}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={`${styles.avatarWrapper} animate-delay-1`}>
            {/* Placeholder ilustración — reemplaza con foto real */}
            <div className={styles.avatarPlaceholder}>
              <span>✍️</span>
            </div>
          </div>
          <div className={`${styles.heroText} animate-delay-2`}>
            <span className={styles.label}>El rincón de</span>
            <h1 className={styles.title}>CamiDante</h1>
            <p className={styles.tagline}>
              Escritora de diarios. Lectora de clásicos. Caminante con perro.
            </p>
          </div>
        </section>

        <div className={styles.divider}>♦</div>

        {/* Historia */}
        <section className={`${styles.section} animate-delay-2`}>
          <h2 className={styles.sectionTitle}>Mi historia</h2>
          <div className={styles.textBody}>
            <p>
              Este blog nació de una costumbre simple: escribir al margen de los libros que leía.
              Notas, preguntas, conexiones inesperadas con la vida cotidiana. Con el tiempo,
              esos márgenes se quedaron pequeños y decidí crear un espacio propio.
            </p>
            <p>
              <strong>CamiDante</strong> es una mezcla de mi nombre y mi admiración por Dante Alighieri —
              ese poeta que también emprendió un viaje sin mapa claro, guiado por la curiosidad y la fe
              en que al final del camino habría algo que valiera la pena ver.
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
        <section className={`${styles.section} animate-delay-3`}>
          <h2 className={styles.sectionTitle}>¿Qué encontrarás aquí?</h2>
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>📚</span>
              <h3>Books</h3>
              <p>Reseñas, anotaciones y diarios de lectura de libros que dejaron huella.</p>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>🌿</span>
              <h3>Lifestyle</h3>
              <p>Rituales matutinos, hábitos lentos y la belleza de lo ordinario.</p>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>💭</span>
              <h3>Reflections</h3>
              <p>Ensayos personales, preguntas sin respuesta y pensamientos sueltos.</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
