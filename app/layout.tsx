import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import "./image-overrides.css";
import "./improvements.css";
import "./real-platform.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-title", display: "swap" });

export const metadata: Metadata = {
  title: "LC Concursos Policiais | Estude com direção",
  description: "Questões, caderno de erros, revisões automáticas, cronograma personalizado e mentoria para concursos policiais.",
  openGraph: {
    title: "LC Concursos Policiais",
    description: "Pare de estudar sem direção.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${inter.variable} ${sora.variable}`}>{children}</body></html>;
}
