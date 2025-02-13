import { QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./routes/router";
import { QueryClientConfig } from "./TantasQuery/queryClientConfig";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<>Cargando contenido... <br /> Por favor espere!</>}>
      <QueryClientProvider client={QueryClientConfig}>
        <Router />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
