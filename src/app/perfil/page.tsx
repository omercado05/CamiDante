import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';

export default function Perfil() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '24px' }}>Mi Perfil</h1>
        <p style={{ color: 'var(--on-surface-variant)', marginBottom: '48px' }}>
          Configuración y artículos guardados (Próximamente con Supabase).
        </p>
        <Button variant="secondary">Cerrar Sesión</Button>
      </main>
    </>
  );
}
