import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_GOOGLE_ID } from "../../../../constants";

type Props = {
  children: React.ReactNode;
};

export const GoogleProviderConfig: React.FC<Props> = ({ children }) => {
  return (
    <html lang="es">
      <body className="antialiased">
        <GoogleOAuthProvider clientId={CLIENT_GOOGLE_ID!}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
};
