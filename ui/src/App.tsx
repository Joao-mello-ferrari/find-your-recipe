import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/global';
import { darkTheme, lightTheme } from './theme';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Header isDark={isDark} setIsDark={setIsDark} />      
        <Dashboard />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
