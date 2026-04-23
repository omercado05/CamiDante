import { Header } from '@/components/layout/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import styles from '../auth.module.css';

export default function Registro() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.authCard}>
          <div className={styles.header}>
            <h1 className={styles.title}>Registro</h1>
            <p className={styles.subtitle}>Crea tu cuenta para guardar tus reflexiones favoritas.</p>
          </div>
          <form className={styles.form}>
            <Input label="Nombre" type="text" placeholder="Tu nombre" />
            <Input label="Correo Electrónico" type="email" placeholder="tu@email.com" />
            <Input label="Contraseña" type="password" placeholder="••••••••" />
            
            <div className={styles.actions}>
              <Button variant="primary" fullWidth>Crear Cuenta</Button>
            </div>
          </form>
          <div className={styles.footer}>
            ¿Ya tienes cuenta? <Link href="/login" style={{color: 'var(--primary)', fontWeight: 600}}>Inicia sesión</Link>
          </div>
        </div>
      </main>
    </>
  );
}
