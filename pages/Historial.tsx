import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

function Historial({}: Props) {
  return (
    <div>
      <Header />
      <div className="h-[100vh] justify-center text-center items-center bg-gray-300 w-full max-w-7xl mx-auto rounded-lg">
        Aquí va el historial médico
      </div>

      <Footer />
    </div>
  );
}

export default Historial;
