import {
  Public_Sans,
  Inter,
  Roboto_Mono,
  Nunito_Sans,
  Lato,
} from "next/font/google";

// H2
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

// p
export const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--publicSans-font",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

// H2
export const NunitoSans = Nunito_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--NunitoSans-font",
});

// Lable , sub heading, h3
export const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--Lato-font",
});
