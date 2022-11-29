import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'

async function fetchProducts() {
    const fetchedProducts = await fetch("http://localhost:3000/api/hello")
    return fetchedProducts.json()
}

async function Test1() {
    const nameTest = await fetchProducts()
    alert(nameTest.name)
}

function SignUp() {
  return (
    <div className='relative flex h-[100vh] items-center text-center bg-gradient-to-b from-[#0B48BDb2] via-[#B1E3EDb2] to-[#C0FF7Ab2] justify-center overflow-hidden'>
        <motion.div
            initial={{
              y: -150,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="w-full md:max-w-md"
          >
            <form
              action="login"
              className="bg-white rounded-md px-8 pt-6 pb-8 mb-4"
            >
              <div className="text-4xl text-center font-bold font-sans py-4 mb-10">
                ¡Bienvenido!
              </div>
              <div className="my-8">
                <label className="block text-left pb-2">Username</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  placeholder="Username"
                />
              </div>
              <div className="my-8">
                <label className="block text-left pb-2">Password</label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="bg-[#B1E3ED] transition-all font-bold w-full py-2 px-4 rounded hover:bg-teal-200 focus:outline-none focus:shadow-outline"
                  onClick={Test1}
                >
                  Nombre Prueba API
                </button>
                </div>
                <div className="text-middle font-semibold text-sm mt-4">
                  <Link href='/' className=" text-gray-600 hover:text-blue-600 transition-colors">Regresar al inicio</Link>
              </div>
            </form>
          </motion.div>
    </div>
  )
}

export default SignUp