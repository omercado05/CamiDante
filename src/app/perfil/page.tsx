'use client';

import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './perfil.module.css';

export default function Perfil() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      } else {
        router.push('/login');
      }
      setLoading(false);
    };
    getUser();
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
          <h2>Tus Reflexiones Guardadas</h2>
          <div className={styles.emptyState}>
            <p>Aún no has guardado ningún artículo.</p>
          </div>
        </section>

        <div className={styles.actions}>
          <Button variant="secondary" onClick={handleSignOut}>
            Cerrar Sesión
          </Button>
        </div>
      </main>
    </>
  );
}
