import GoogleAuthClient from "../../components/auth/GoogleAuthClient";
import GoogleOneTap from "../../components/auth/GoogleOneTap";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import { ThemeContextProvider } from "../../contextApi/ThemeContextApi";
import { UserContextProvider } from "../../contextApi/userContextApi";
import ThemeProvider from "../../providers/ThemeProvider";
import "../global.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { inter, publicSans, NunitoSans } from "../fonts/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <GoogleOAuthProvider clientId="575999030621-q9l875mbikilrm28q7sbj7ed3pf3kehq.apps.googleusercontent.com">
              <UserContextProvider>
                <div className="container">
                  <NavBar />

                  <div
                    className={`wrapper ${inter.variable} ${publicSans.variable} ${NunitoSans.variable}`}
                  >
                    {children}
                  </div>
                  <Footer />
                </div>
              </UserContextProvider>
            </GoogleOAuthProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
