import React from 'react';
import styles from '../styles/StoragePanel.module.scss';

export const StoragePanel = ({ onClear, onReset, theme, onThemeChange }) => {
  const handleExportToSession = () => {
    const localData = localStorage.getItem('binaryTreeData');
    if (localData) {
      sessionStorage.setItem('binaryTreeBackup', localData);
      alert('Árbol exportado a Session Storage');
    } else {
      alert('No hay datos para exportar');
    }
  };

  const handleImportFromSession = () => {
    const sessionData = sessionStorage.getItem('binaryTreeBackup');
    if (sessionData) {
      localStorage.setItem('binaryTreeData', sessionData);
      alert('Datos importados. Recarga la página para ver los cambios.');
    } else {
      alert('No hay datos en Session Storage');
    }
  };

  return (
    <div className={styles.storagePanel}>
      <h2 className={styles.title}>Opciones de Almacenamiento</h2>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Local Storage</h3>
        <div className={styles.buttonGroup}>
          <button onClick={onReset} className={styles.btnPrimary}>
            Resetear Árbol
          </button>
          <button onClick={onClear} className={styles.btnDanger}>
            Limpiar Todo
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Session Storage</h3>
        <div className={styles.buttonGroup}>
          <button onClick={handleExportToSession} className={styles.btnSecondary}>
            Exportar
          </button>
          <button onClick={handleImportFromSession} className={styles.btnSecondary}>
            Importar
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Tema</h3>
        <div className={styles.themeButtons}>
          <button 
            onClick={() => onThemeChange('dark')}
            className={`${styles.themeBtn} ${theme === 'dark' ? styles.active : ''}`}
          >
            Oscuro
          </button>
          <button 
            onClick={() => onThemeChange('light')}
            className={`${styles.themeBtn} ${theme === 'light' ? styles.active : ''}`}
          >
            Claro
          </button>
        </div>
      </div>
    </div>
  );
};