import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RO-Crate Data Packaging Tool",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/portfolio.png",
    tags: ["Python", "Jupyter", "Open Source"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "It's this very page you're looking at! Made with React.",
    image: "/projects/project2.png",
    tags: ["React", "Vite", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my proudest works!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {projects.map((project, key) => (
            <div
              key={key}
              className="relative flex flex-col md:flex-row items-center justify-between bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="pt-12 pb-6 px-6 w-full md:w-1/2 flex flex-col justify-between">
                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* GitHub and External Link Icons (Top-right) */}
                <div className="absolute top-4 right-4 flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>

                {/* Tags (Bottom Center, Uniform Height) */}
                <div className="mt-auto flex justify-center">
                  <div className="h-16 flex items-center justify-center flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground text-center"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
