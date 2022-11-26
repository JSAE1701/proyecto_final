import React from 'react'
import Link from 'next/link'

/*  Ejemplo de animación sencilla usando framer-motion
         initial={{
            x: -150,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
*/

type Props = {}

function Header({}: Props) {
  return (
    <div className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 shadow bg-teal-100 rounded-lg'>
        <div
          className="flex flex-row items-center">
            <div className='mx-4'>
                <Link href='/CreateRegistry'>
                    Nuevo registro
                </Link>
            </div>
            <div className='mx-4'>
                <Link href='/Historial'> Historial </Link>
            </div>
            <div className='mx-4'>
                <Link href='/'> Inicio </Link>
            </div>
        </div>
        <div
          className="flex flex-row items-center">
            <div>
                <Link href='/LoginContainer'>Iniciar sesión</Link>
            </div>
        </div>
    </div>
  )
}

export default Header