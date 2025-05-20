import "./globals.css";
import { Header } from "@/components/header";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'aula nextJs',
  description: 'Site para fazer orcamento de cortinas e persianas',
  openGraph:{
    title: 'aprendendo NextJs',
    description: 'aprendendo nextJs do zero com o youtube',
    images: ['https://sujeitoprogramador.com/steve.png']
  },
  robots:{
    index:true,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        <Header/>
        {children}
      </body>
    </html>
  );
}
