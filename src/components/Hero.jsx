import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <img src="/IppoAnime.png" alt="Your profile" className="rounded-full w-40 h-40 mb-6 shadow-lg border-4 border-white" />
      <h2 className="text-4xl md:text-6xl font-bold mb-3">Iván Afonso Cerdeira</h2>
      <p className="text-lg md:text-2xl mb-2">Programador</p>
      <p className="text-sm">📧 afovancho1@gmail.com &nbsp;&nbsp; 🌐 <a className="underline text-blue-500" href="https://github.com/ivanafons0">GitHub</a></p>
    </section>
  );
}