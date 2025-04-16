import { QueryClient } from '@tanstack/react-query';

export const QueryClientConfig = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: true, // Evita que las consultas se vuelvan a cargar automaticamente al enfocar la ventana del navegador
      retry: 1, // Numero de intentos de en caso de error en las consultas
    }
  }
})
