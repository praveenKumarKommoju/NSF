'use client';

import { useEffect } from 'react';
import { toggleTheme } from './theme';

const ThemeInitializer=()=> {
  useEffect(() => {
    toggleTheme();
  }, []);

  return null;
}

export default ThemeInitializer;