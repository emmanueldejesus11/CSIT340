const projects = [
  { id: 1, title: "Portfolio Site", text: "My first React website." },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;