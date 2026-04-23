import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'normal' | 'large';
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  padding = 'large',
  interactive = false,
  children,
  ...props
}) => {
  return (
    <div
      className={`${styles.card} ${styles[padding]} ${interactive ? styles.interactive : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
