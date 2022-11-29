import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {};

function CreateRegistry({}: Props) {
  return (
    <div>
      <Header />

      <div className="h-[100vh] justify-center text-center items-center bg-gray-300 w-full max-w-7xl mx-auto rounded-lg">
        Aquí va el registro médico
      </div>

      <Footer />
    </div>
  );
}

export default CreateRegistry;
