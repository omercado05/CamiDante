import { Header } from '@/components/layout/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from '../auth.module.css';

export default function AdminLogin() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.authCard} style={{ borderColor: 'var(--tertiary)' }}>
          <div className={styles.header}>
            <h1 className={styles.title} style={{ color: 'var(--tertiary)' }}>Admin Login</h1>
            <p className={styles.subtitle}>Acceso reservado para el autor.</p>
          </div>
          <form className={styles.form}>
            <Input label="Admin Email" type="email" />
            <Input label="Admin Password" type="password" />
            
            <div className={styles.actions}>
              <Button variant="outline" fullWidth>Acceder al Panel</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
