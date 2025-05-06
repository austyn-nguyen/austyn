import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a sophomore at the University of Michigan - Ann Arbor,
              majoring in Computer Science. I’m exploring my interests in
              software development with a focus on systems software and the
              intersection of technology, business management, healthcare, and
              finance. With experience in AI, Human-Computer Interaction, and
              haptic tools, I aim to create impactful, user-friendly solutions
              that bridge technical efficiency with real-world applications.
            </p>

            <p className="text-muted-foreground">
              Apart from my professional aspirations, I'm a HUGE foodie and an
              amateur mechanical keyboard builder. Currently, I sport a Leobog
              Hi75 frame with Boba U4T "thocky" tactile switches and pink piggy
              keycaps. I've also been playing the viola for 9 years and was
              classically trained by the very esteemed Kenneth Goldstein from
              the Baltimore Symphony Orchestra. Learn more about my musical
              journey below!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Music Life
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating efficient applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Human-Centered Computing
                  </h4>
                  <p className="text-muted-foreground">
                    Seeking out ethical technical solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
