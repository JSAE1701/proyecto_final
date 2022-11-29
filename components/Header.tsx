import React from "react";
import Link from "next/link";


type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 shadow bg-teal-100 rounded-lg bg-opacity-70 backdrop-blur-sm">
      <div className="flex flex-row items-center">
        <div className="mx-4">
          <Link href="/CreateRegistry">Nuevo registro</Link>
        </div>
        <div className="mx-4">
          <Link href="/Historial"> Historial </Link>
        </div>
        <div className="mx-4">
          <Link href="/"> Inicio </Link>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div>
          <Link href="/LoginContainer">Iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
