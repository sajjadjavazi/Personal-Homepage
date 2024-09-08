import type { AppProps } from "next/app";
import '../styles/globals.css'; // Your global styles if any
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

// The custom App component
function MyApp({ Component, pageProps }: AppProps) {
  // Create a new QueryClient instance
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
