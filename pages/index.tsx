import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Historial from './Historial'
import LoginContainer from './LoginContainer'
import Link from 'next/link'
import CreateRegistry from './CreateRegistry'

export default function Home() {
  return (
    <div className='relative flex-col'>
        <Header />
        <div className='h-[100vh] justify-center text-center items-center bg-gray-300 w-full max-w-7xl mx-auto rounded-lg'>
          <div>
            Esta es la pagina principal  
          </div>  
          <div className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vel ratione quo eveniet deleniti sed harum repellat tenetur dolore iste in adipisci placeat, libero saepe facilis, error ipsa nemo sint.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, error libero dolorum unde sed in numquam voluptas quam eveniet quaerat blanditiis, iure necessitatibus quis quidem earum expedita debitis odit nobis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius laudantium illum voluptatum, ut nisi ipsa amet voluptas delectus tempore eum? Quae exercitationem error deleniti quasi fuga quidem nisi accusantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, totam? Placeat ducimus alias delectus dolorem maxime accusamus, vero nam, sed explicabo, officiis assumenda optio officia? Earum exercitationem incidunt dolorem temporibus.
          </div>
        </div>  
        <Footer />
    </div>
  )
}
