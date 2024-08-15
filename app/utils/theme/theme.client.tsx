import {
  type Dispatch,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import * as v from 'valibot';

import { type Theme, colorSchemeSchema } from './schema';

type ContextType = {
  theme: Theme;
  setTheme: Dispatch<Theme>;
};
const ThemeContext = createContext<ContextType>(undefined as never);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState({
    colorScheme: v.parse(
      colorSchemeSchema,
      document.documentElement.dataset.colorScheme || 'system',
    ),
    themeColor: 'default', // The only implemented themeColor
  } satisfies Theme);

  const setTheme = useCallback((theme: Theme) => {
    setThemeState(theme);
    document.documentElement.dataset.colorScheme = theme.colorScheme;
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const clientColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';

  const { theme, setTheme } = useContext(ThemeContext);

  const effectiveColorScheme =
    theme.colorScheme !== 'system' ? theme.colorScheme : clientColorScheme;

  return { effectiveColorScheme, setTheme, theme };
}

export { useTheme, type Theme, ThemeProvider };
