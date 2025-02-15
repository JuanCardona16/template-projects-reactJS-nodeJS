import { QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./routes/router";
import { QueryClientConfig } from "./TantasQuery/queryClientConfig";
import { Suspense } from "react";
import { GoogleProviderConfig } from "../modules/authentication/google/config/GoogleProviderConfig";

function App() {
  return (
    <Suspense
      fallback={
        <>
          Cargando contenido... <br /> Por favor espere!
        </>
      }
    >
      <GoogleProviderConfig>
        <QueryClientProvider client={QueryClientConfig}>
          <Router />
        </QueryClientProvider>
      </GoogleProviderConfig>
    </Suspense>
  );
}

export default App;
