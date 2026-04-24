'use client';

import { Header } from '@/components/layout/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/perfil');
      }
    };
    checkUser();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await supabase.auth.signInWithPassword({ 
      email, 
      password 
    });

    if (error) {
      setError(error.message === 'Invalid login credentials' 
        ? 'Credenciales inválidas. Revisa tu correo y contraseña.' 
        : error.message);
      setLoading(false);
    } else {
      // Refresh to ensure middleware catches the new session cookie
      router.refresh();
      router.push('/perfil');
    }
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.authCard}>
          <div className={styles.header}>
            <h1 className={styles.title}>Iniciar Sesión</h1>
            <p className={styles.subtitle}>Bienvenido de nuevo al rincón de lectura.</p>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
            <Input
              label="Correo Electrónico"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={error}
            />
            <div className={styles.actions}>
              <Button variant="primary" fullWidth disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </div>
          </form>
          <div className={styles.footer}>
            ¿No tienes cuenta?{' '}
            <Link href="/registro" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              Regístrate aquí
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
