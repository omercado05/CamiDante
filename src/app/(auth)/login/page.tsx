import { Header } from '@/components/layout/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import styles from '../auth.module.css';

export default function Login() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.authCard}>
          <div className={styles.header}>
            <h1 className={styles.title}>Iniciar Sesión</h1>
            <p className={styles.subtitle}>Bienvenido de nuevo al rincón de lectura.</p>
          </div>
          <form className={styles.form}>
            <Input label="Correo Electrónico" type="email" placeholder="tu@email.com" />
            <Input label="Contraseña" type="password" placeholder="••••••••" />
            
            <div className={styles.actions}>
              <Button variant="primary" fullWidth>Entrar</Button>
            </div>
          </form>
          <div className={styles.footer}>
            ¿No tienes cuenta? <Link href="/registro" style={{color: 'var(--primary)', fontWeight: 600}}>Regístrate aquí</Link>
          </div>
        </div>
      </main>
    </>
  );
}
