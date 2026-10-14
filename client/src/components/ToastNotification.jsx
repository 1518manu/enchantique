import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const ToastNotification = () => {
  const { toast } = useShop();

  if (!toast) return null;

  const isError = toast.type === 'error';

  return (
    <div style={{
      position: 'fixed',
      bottom: '5.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 150,
      backgroundColor: isError ? '#991b1b' : 'var(--color-obsidian)',
      color: '#ffffff',
      padding: '0.85rem 1.4rem',
      borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-elevated)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.65rem',
      fontSize: '0.85rem',
      fontWeight: 600,
      border: isError ? '1px solid #ef4444' : '1px solid var(--color-primary)',
      animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      maxWidth: '90%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }}>
      {isError ? (
        <AlertCircle size={18} style={{ color: '#fca5a5', flexShrink: 0 }} />
      ) : (
        <Sparkles size={18} style={{ color: 'var(--color-primary-fixed)', flexShrink: 0 }} />
      )}
      <span>{toast.message}</span>
    </div>
  );
};
