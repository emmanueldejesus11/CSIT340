const projects = [
  { id: 1, title: "Portfolio Site", text: "My first React website." },
];

function Projects() {
  return (
  <section className="px-10 py-16 text-center" id="projects">
    <h2 className="text-3xl font-bold">Projects</h2>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div className="rounded-xl bg-slate-800 p-6" key={project.id}>
          <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
          <p>{project.text}</p>
        </div>
      ))}
    </div>
  </section>
);
}
export default Projects;