'use client';

import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function AdminPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (!profile?.is_admin) {
        // Si no es admin, redirigir a perfil normal
        router.push('/perfil');
      } else {
        setProfile(profile);
      }
      setLoading(false);
    };
    checkAdmin();
  }, [router]);

  if (loading) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <p>Verificando permisos de administrador...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.authCard} style={{ borderColor: 'var(--tertiary)', maxWidth: '600px' }}>
          <div className={styles.header}>
            <h1 className={styles.title} style={{ color: 'var(--tertiary)' }}>Panel de Administración</h1>
            <p className={styles.subtitle}>Hola, {profile?.display_name}. Tienes acceso completo.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
            <p><strong>Estado:</strong> Conectado como Administrador</p>
            <p><strong>Email:</strong> {profile?.id} (UUID)</p>
            <hr style={{ border: 'none', borderBottom: '1px solid var(--outline-variant)', margin: '12px 0' }} />
            <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)' }}>
              Próximamente: Panel de creación de artículos, gestión de categorías y comentarios.
            </p>
          </div>

          <div className={styles.actions} style={{ marginTop: '24px' }}>
            <Button variant="outline" fullWidth onClick={() => router.push('/')}>Volver al Inicio</Button>
          </div>
        </div>
      </main>
    </>
  );
}
