'use client';

import { Header } from '@/components/layout/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function Registro() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      // Optional: redirect after success or show message
      // router.push('/login');
    }
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.authCard}>
          <div className={styles.header}>
            <h1 className={styles.title}>Registro</h1>
            <p className={styles.subtitle}>Crea tu cuenta para guardar tus reflexiones favoritas.</p>
          </div>

          {success ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: '20px' }}>
                ¡Registro exitoso! 
              </p>
              <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', marginBottom: '20px' }}>
                Revisa tu correo electrónico para confirmar tu cuenta antes de iniciar sesión.
              </p>
              <Link href="/login">
                <Button variant="primary" fullWidth>Ir al Login</Button>
              </Link>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSignUp}>
              <Input 
                label="Nombre" 
                type="text" 
                placeholder="Tu nombre" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
                  {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
                </Button>
              </div>
            </form>
          )}

          <div className={styles.footer}>
            ¿Ya tienes cuenta? <Link href="/login" style={{color: 'var(--primary)', fontWeight: 600}}>Inicia sesión</Link>
          </div>
        </div>
      </main>
    </>
  );
}
