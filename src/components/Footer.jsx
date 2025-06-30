import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="p-6 text-center bg-gray-100 dark:bg-gray-900 border-t mt-8">
      <p className="text-sm">Contáctame en <a href="mailto:afovancho1@gmail.com" className="underline text-blue-500">afovancho1@gmail.com</a></p>
      <p className="text-xs mt-2">&copy; {new Date().getFullYear()} Iván Afonso Cerdeira. Todos los derechos reservados.</p>
    </footer>
  );
}
