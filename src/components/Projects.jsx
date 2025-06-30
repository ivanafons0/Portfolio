import React from "react";

const projectList = [
  {
    title: "App de Tareas",
    image: "",
    description: "Un gestor de tareas hecho con React.",
    link: "https://github.com/tuusuario/todo-app",
  },
  {
    title: "Mi Portafolio",
    image: "",
    description: "Este portafolio construido con React y Tailwind.",
    link: "https://tu-portafolio.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-8">
      <h3 className="text-3xl font-semibold mb-4 text-center">Proyectos</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {projectList.map((project, idx) => (
          <div key={idx} className="p-4 border rounded-lg shadow hover:shadow-lg">
            <h4 className="text-xl font-bold">{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}