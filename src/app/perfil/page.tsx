'use client';

import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './perfil.module.css';

export default function Perfil() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        
        // Check admin status
        const { data: profile } = await supabase
          .from('profiles')
          .select('is_admin')
          .eq('id', session.user.id)
          .single();
        setIsAdmin(profile?.is_admin || false);
      } else {
        router.push('/login');
      }
      setLoading(false);
    };
    getUserData();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <p>Cargando perfil...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.profileHeader}>
          <div className={styles.avatar}>
            {user?.email?.charAt(0).toUpperCase()}
          </div>
          <h1 className={styles.title}>Mi Perfil</h1>
          <p className={styles.email}>{user?.email}</p>
        </section>

        <div className={styles.divider}>♦</div>

        <section className={styles.section}>
          <h2>Gestión</h2>
          <div className={styles.adminActions}>
            {isAdmin ? (
              <div style={{ background: 'var(--surface-container-low)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--outline-variant)' }}>
                <h3 style={{ marginBottom: '12px', color: 'var(--tertiary)' }}>Eres Administrador</h3>
                <p style={{ marginBottom: '20px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
                  Tienes acceso para crear, editar y eliminar artículos del blog.
                </p>
                <Link href="/admin">
                  <Button variant="primary">Ir al Panel de Control</Button>
                </Link>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <p>Aún no has guardado ningún artículo.</p>
              </div>
            )}
          </div>
        </section>

        <div className={styles.actions} style={{ marginTop: '40px' }}>
          <Button variant="secondary" onClick={handleSignOut}>
            Cerrar Sesión
          </Button>
        </div>
      </main>
    </>
  );
}
