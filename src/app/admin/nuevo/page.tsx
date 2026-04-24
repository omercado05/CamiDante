'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import styles from '../admin.module.css';

export default function NewPost() {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category_id: '',
    published: false
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from('categories').select('*');
      setCategories(data || []);
      if (data && data.length > 0) {
        setFormData(prev => ({ ...prev, category_id: data[0].id }));
      }
    };
    fetchCategories();
  }, []);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { session } } = await supabase.auth.getSession();

    const { error } = await supabase.from('posts').insert({
      ...formData,
      author_id: session?.user.id,
      published_at: formData.published ? new Date().toISOString() : null
    });

    if (error) {
      alert('Error al guardar: ' + error.message);
      setLoading(false);
    } else {
      router.push('/admin');
      router.refresh();
    }
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Nuevo Artículo</h1>
          <Button variant="outline" onClick={() => router.back()}>Cancelar</Button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Título</label>
            <input 
              className={styles.input}
              value={formData.title}
              onChange={handleTitleChange}
              required
              placeholder="Ej: El arte de la pausa"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Slug (URL)</label>
            <input 
              className={styles.input}
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Categoría</label>
            <select 
              className={styles.select}
              value={formData.category_id}
              onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Resumen (Corta descripción)</label>
            <input 
              className={styles.input}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Un breve resumen para la tarjeta..."
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Contenido (Markdown soportado)</label>
            <textarea 
              className={styles.textarea}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              placeholder="Escribe aquí tu historia..."
            />
          </div>

          <div className={styles.formGroup} style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <input 
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
            />
            <label htmlFor="published" className={styles.label}>Publicar inmediatamente</label>
          </div>

          <div className={styles.formActions}>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Guardando...' : 'Crear Artículo'}
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
