import Image from "next/image";

const skillGroups = [
  {
    title: "Languages",
    skills: [],
    featuredSkills: [
      { name: "JavaScript", image: "/skills/javascript.png" },
      { name: "Python", image: "/skills/python.jpg" },
      { name: "TypeScript", image: "/skills/typescript.png" },
      { name: "Java", image: "/skills/java.png" },
    ],
  },
  {
    title: "Frontend",
    skills: [],
    featuredSkills: [
      { name: "React", image: "/skills/react.png" },
      { name: "Next.js", image: "/skills/nextjs.png" },
      { name: "Tailwind CSS", image: "/skills/tailwind.png" },
      { name: "Framer Motion", image: "/skills/framermotion.png" },
    ],
  },
  {
    title: "Backend",
    skills: [],
    featuredSkills: [
      { name: "Node.js", image: "/skills/node.png" },
      { name: "Express.js", image: "/skills/express.png" },
      { name: "Flask", image: "/skills/flask.png" },
      { name: "REST APIs", image: "/skills/restapi.png" },
      { name: "Authentication", image: "/skills/authentication.png" },
    ],
  },
  {
    title: "Tools",
    skills: [],
    featuredSkills: [
      { name: "Git", image: "/skills/git.png" },
      { name: "GitHub", image: "/skills/github.png" },
      { name: "Android Studio", image: "/skills/androidstudio.png" },
      { name: "VS Code", image: "/skills/vscode.png" },
    ],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1a3a52] to-[#0a1628] px-6 py-32 md:px-8 md:py-40">
      <section className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <div className="mb-8 h-1.5 max-w-xs rounded-full bg-gradient-to-r from-[#a78bfa] via-[#60a5fa] to-transparent" />
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Skills
          </h1>
          <p className="text-lg leading-relaxed text-white/70 md:text-xl">
            A closer look at the technologies I use to build full-stack applications,
            polished interfaces, and practical software projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[#60a5fa]/20 bg-[#0f172a]/55 p-7 backdrop-blur-sm"
            >
              <h2 className="mb-5 text-2xl font-bold text-white">{group.title}</h2>
              {group.featuredSkills && (
                <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {group.featuredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition hover:-translate-y-1 hover:border-[#60a5fa]/70 hover:bg-white/10"
                    >
                      <div className="flex h-16 w-16 items-center justify-center">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain drop-shadow-2xl transition group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                    </div>
                  ))}
                </div>
              )}
              {group.skills.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-[#dbeafe]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
