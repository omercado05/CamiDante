import { Header } from '@/components/layout/Header';
import styles from './about.module.css';

export default function About() {
  return (
    <>
      <Header />
      <main className={`${styles.container} animate-fade-in`}>
        <div className={`${styles.content} animate-delay-1`}>
          <h1 className={styles.title}>Sobre Mí</h1>
          <div className={styles.divider}></div>
          <div className={styles.textBody}>
            <p>
              Bienvenido a CamiDante. Este es un espacio dedicado a la reflexión, los libros y la belleza 
              de lo cotidiano. Inspirado en la estética editorial tradicional, he creado este rincón para 
              compartir pensamientos sin la prisa de las redes sociales.
            </p>
            <p>
              Soy un apasionado de la literatura clásica y el diseño minimalista. Mi objetivo es que cada 
              artículo aquí se sienta como una página arrancada de un diario personal bien cuidado.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
