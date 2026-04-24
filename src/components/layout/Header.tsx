'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

export const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('is_admin')
          .eq('id', currentUser.id)
          .single();
        setIsAdmin(profile?.is_admin || false);
      } else {
        setIsAdmin(false);
      }
    };

    getUserData();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      
      if (currentUser) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('is_admin')
          .eq('id', currentUser.id)
          .single();
        setIsAdmin(profile?.is_admin || false);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    closeMenu();
    router.push('/');
    router.refresh();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrapper} onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="CamiDante logo"
            width={40}
            height={40}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>CamiDante</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/blog/reflections" className={styles.navLink}>Reflections</Link>
          <Link href="/blog/books" className={styles.navLink}>Books</Link>
          <Link href="/blog/lifestyle" className={styles.navLink}>Lifestyle</Link>
          <Link href="/blog/archivo" className={styles.navLink}>Archivo</Link>
          <Link href="/about" className={styles.navLink}>Sobre Mí</Link>
          {isAdmin && (
            <Link href="/admin" className={styles.navLink} style={{ color: 'var(--tertiary)', fontWeight: 'bold' }}>
              Admin
            </Link>
          )}
        </nav>

        <div className={styles.actions}>
          {user ? (
            <Link href="/perfil" className={styles.profileCircle}>
              {user.email?.charAt(0).toUpperCase()}
            </Link>
          ) : (
            <Link href="/login" className={styles.loginLink}>Iniciar Sesión</Link>
          )}

          <button 
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
        <Link href="/blog/reflections" className={styles.mobileNavLink} onClick={closeMenu}>Reflections</Link>
        <Link href="/blog/books" className={styles.mobileNavLink} onClick={closeMenu}>Books</Link>
        <Link href="/blog/lifestyle" className={styles.mobileNavLink} onClick={closeMenu}>Lifestyle</Link>
        <Link href="/blog/archivo" className={styles.mobileNavLink} onClick={closeMenu}>Archivo</Link>
        <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>Sobre Mí</Link>
        
        <div style={{ marginTop: '20px', width: '100%', borderTop: '1px solid var(--outline-variant)', paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {isAdmin && (
            <Link href="/admin" className={styles.mobileNavLink} style={{ color: 'var(--tertiary)' }} onClick={closeMenu}>
              Panel Admin
            </Link>
          )}
          {user ? (
            <>
              <Link href="/perfil" className={styles.mobileNavLink} onClick={closeMenu}>Mi Perfil</Link>
              <button 
                onClick={handleSignOut}
                style={{ background: 'none', border: 'none', font: 'inherit', cursor: 'pointer', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '18px' }}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link href="/login" className={styles.mobileNavLink} onClick={closeMenu}>Iniciar Sesión</Link>
          )}
        </div>
      </nav>
    </header>
  );
};
