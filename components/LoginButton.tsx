import Link from 'next/link';
import React from 'react'

type Props = {}


function LoginButton({}: Props) {
  return (
    <div>
        <button
        type="submit"
        className="bg-[#B1E3ED] transition-all font-bold w-full py-2 px-4 rounded hover:bg-teal-200 focus:outline-none focus:shadow-outline"
        >
            Iniciar sesión
        </button>
        <div className="text-left font-semibold text-sm mt-4">
            ¿No tienes una cuenta? 
            <span className="ml-2 font-bold underline">
                <Link href='/SignUp' className=" text-gray-600 hover:text-blue-600 transition-colors">Crear cuenta</Link>
            </span>
        </div>
    </div>
  )
}

export default LoginButton