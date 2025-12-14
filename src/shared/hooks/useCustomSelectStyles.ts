import { useEffect, useState } from 'react';
import { localStorageService } from '../services/localStorageService ';
import { StorageKeys } from '../constants/localStorageConstants';

export function useCustomSelectStyles() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
      const storedTheme = localStorageService.getItem<string>(StorageKeys.THEME)
    
    if (storedTheme) {
      return storedTheme === 'dark';
    }
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
      localStorageService.setItem(StorageKeys.THEME, isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

    const customStyles = {
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: isDarkMode ? '#3A3A3A' : '#F9FAFB',
        // placeholder:"#99a1af",
        borderColor: state.isFocused
        ? isDarkMode
            ? '#ffffff'
            : '#1C306E'
        : isDarkMode
        ? '#3A3A3A'
        : '#D5DBE7',
        boxShadow: 'none',
        borderWidth: '2px',
        height: '40px',
        color: isDarkMode ? '#fff' : '#000',
        borderRadius: '6px',
        '&:hover': {
        borderWidth: '2px',
        borderColor: isDarkMode ? '#3A3A3A' : '#1C306E',
        },
    }),
    singleValue: (base: any) => ({
        ...base,
        color: isDarkMode ? '#fff' : '#374151',
    }),
    input: (base: any) => ({
    ...base,
    color: isDarkMode ? '#fff' : '#000',
  }),
    menu: (base: any) => ({
        ...base,
        backgroundColor: isDarkMode ? '#3A3A3A' : '#fff',
        color: isDarkMode ? '#F5F9FF' : '#374151',
        // zIndex:'500',
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isSelected
        ? isDarkMode
            ? '#4C8AFF'
            : '#E4EFFF'
        : state.isFocused
        ? isDarkMode
            ? '#333'
            : '#F0F8FF'
        : 'transparent',
        color: isDarkMode ? '#fff' : '#000',
    }),
    placeholder: (base: any) => ({
        ...base,
        color: isDarkMode ? '#99a1af' : '#6B7280', 
    }),
    };

  return customStyles;
}
