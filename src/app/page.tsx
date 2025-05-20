import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'orcamentos',
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

export default function Home(){
  return(
    <div>
      <h1>Pagina Home</h1>
    </div>
  )
}