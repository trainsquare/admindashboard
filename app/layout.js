import MenuContextProvider from "@/context/MenuContext";
import MainLayout from "./components/MainLayout";
import "./globals.css";
import { AuthContext } from "@/context/AuthContext";

export const metadata = {
  title: "Trainsquare Dashboard for Operations",
  description: "Created by Trainsquare Tech Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
        
      </body>
    </html>
  );
}
