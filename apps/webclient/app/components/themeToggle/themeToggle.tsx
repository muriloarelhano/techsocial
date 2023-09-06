import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <button className="btn btn-square text-lg" onClick={toggleTheme}>
      <span>{theme === 'dark' ? <FaMoon /> : <FaSun />}</span>
    </button>
  );
}
