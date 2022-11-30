import React from 'react'

type Props = {}

async function fetchProducts() {
    const fetchedProducts = await fetch("http://localhost:3000/api/hello")
    return fetchedProducts.json()
}

async function Test1() {
    const nameTest = await fetchProducts()
    alert(nameTest.name)
}

function SignUpButton({}: Props) {
  return (
    <div>
        <button
        type="button"
        className="bg-[#B1E3ED] transition-all font-bold w-full py-2 px-4 rounded hover:bg-teal-200 focus:outline-none focus:shadow-outline"
        onClick={Test1}
        >
            Nombre Prueba API
        </button>
    </div>
  )
}

export default SignUpButton