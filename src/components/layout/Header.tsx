import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/logo.png"
            alt="CamiDante logo"
            width={40}
            height={40}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>CamiDante</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/blog/reflections" className={styles.navLink}>Reflections</Link>
          <Link href="/blog/books" className={styles.navLink}>Books</Link>
          <Link href="/blog/lifestyle" className={styles.navLink}>Lifestyle</Link>
          <Link href="/blog/archivo" className={styles.navLink}>Archivo</Link>
          <Link href="/about" className={styles.navLink}>Sobre Mí</Link>
        </nav>
        <div className={styles.actions}>
          <Link href="/login" className={styles.loginLink}>Iniciar Sesión</Link>
        </div>
      </div>
    </header>
  );
};
