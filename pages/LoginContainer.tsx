import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {}

const Presionado = () => {
  let textoIniciarSesion = "Presionado perro :v. Este botón iniciará sesión solamente si existe un usuario. Si no existe, se le pedirá al usuario que se registre."
  alert(textoIniciarSesion)
}

const Presionado2 = () => {
  let textoIniciarSesion = "Presionado pinche gato :v. Este botón llevará a una página distinta para crear un nuevo usuario. El usuario se guarda en una base de datos"
  alert(textoIniciarSesion)
}

function LoginContainer({}: Props) {
  return (
    <div>
      <div className='absolute flex w-full max-w-full'>
        <section className='relative flex h-[100vh] items-center justify-center text-center bg-white md:w-[50vw] overflow-hidden'>
          <motion.div
          initial={{
            x: -150,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className='flex-row'>
            <h1>
              Wenas tardes aquí va una foto chida promocional  
            </h1>
            <Link href='/' className='underline transition-all font-bold text-slate-400 hover:text-blue-400'>Regresar al inicio</Link>
          </motion.div>
        </section>
        <section className='relative flex h-[100vh] items-center text-center bg-gradient-to-br from-[#0B48BD] via-[#B1E3ED] to-[#C0FF7A] justify-center md:w-[50vw] overflow-hidden'>
          <motion.div
          initial={{
            x: 150,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className='w-full md:max-w-md'>
            <form action="login" className='bg-white rounded-md px-8 pt-6 pb-8 mb-4'>
              <div className='text-4xl text-center font-bold font-sans py-4 mb-10'>
                Iniciar Sesión
              </div>
              <div className='my-8'>
                <label className='block text-left pb-2'>
                  Username
                </label>
                <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3' placeholder='Username' />
              </div>
              <div className='my-8'>
                <label className='block text-left pb-2'>
                  Password
                </label>
                <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3' placeholder='Password' />
              </div>
              <div className='flex items-center justify-between'>
                <button type='button' className='bg-[#B1E3ED] transition-all font-bold py-2 px-4 rounded hover:bg-teal-200 focus:outline-none focus:shadow-outline' onClick={Presionado}>
                  Iniciar sesión
                </button>
                <button type='button' className='bg-[#B1E3ED] transition-all font-bold py-2 px-4 rounded hover:bg-teal-200 focus:outline-none focus:shadow-outline' onClick={Presionado2}>
                  Crear cuenta
                </button>
              </div>
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default LoginContainer