'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import styles from './Header.module.css';

export const Header = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

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
          {user ? (
            <Link href="/perfil" className={styles.profileCircle}>
              {user.email?.charAt(0).toUpperCase()}
            </Link>
          ) : (
            <Link href="/login" className={styles.loginLink}>Iniciar Sesión</Link>
          )}
        </div>
      </div>
    </header>
  );
};
