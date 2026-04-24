'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';

export default function AdminDashboard() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/login');
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', session.user.id)
        .single();

      if (!profile?.is_admin) {
        router.push('/');
        return;
      }

      setIsAdmin(true);
      fetchPosts();
    };

    checkAdmin();
  }, [router]);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from('posts')
      .select('*, categories(name)')
      .order('created_at', { ascending: false });
    
    setPosts(data || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) {
        alert('Error al eliminar: ' + error.message);
      } else {
        setPosts(posts.filter(p => p.id !== id));
      }
    }
  };

  if (!isAdmin) return null;

  return (
    <>
      <Header />
      <main className={`${styles.container} animate-fade-in`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Panel de Administración</h1>
          <Link href="/admin/nuevo">
            <Button variant="primary">+ Nuevo Artículo</Button>
          </Link>
        </div>

        <div className={styles.tableContainer}>
          {loading ? (
            <p style={{ padding: '20px' }}>Cargando artículos...</p>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Categoría</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className={styles.postTitle}>{post.title}</td>
                    <td>{post.categories?.name}</td>
                    <td>
                      <span className={`${styles.status} ${post.published ? styles.published : styles.draft}`}>
                        {post.published ? 'Publicado' : 'Borrador'}
                      </span>
                    </td>
                    <td>{new Date(post.published_at || post.created_at).toLocaleDateString()}</td>
                    <td className={styles.actions}>
                      <Link href={`/admin/editar/${post.id}`} className={styles.editBtn}>
                        Editar
                      </Link>
                      <button onClick={() => handleDelete(post.id)} className={styles.deleteBtn}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}
