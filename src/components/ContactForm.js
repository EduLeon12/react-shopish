import React from "react";

export default function ContactForm() {
  return (
    <form className="container items-center justify-center mx-auto w-full max-w-lg ">
      <h1 className="text-gray-600 text-lg italic">Dejanos tu comentario</h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Nombre Completo
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-full-name"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="text"
          />
          <p className="text-red-500 text-xs italic">Campo obligatorio</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-text"
          >
            Asunto
          </label>
          <input
            className="appearance-none block w-full h-24 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
          />

          <button className="shadow  bg-gray-600 text-base w-auto m-2 items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  ">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
