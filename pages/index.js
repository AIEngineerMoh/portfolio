

import Link from "next/link";
import Certificates from "../components/Certificates";

export default function Home() {
  const skills = [
    "Python",
    "PyTorch",
    "Computer Vision",
    "NLP",
    "Streamlit",
    "Scikit-learn",
    "Data Visualization",
    "Machine Learning",
    "Deep Learning",
  ];

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/AIEngineerMoh",
      icon: "💻",
    },
    {
      name: "Email",
      url: "mailto:m18308840@gmail.com",
      icon: "📧",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: "🔗",
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/",
      icon: "📊",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-14">

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl p-12">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_60%)]"></div>

        <h1 className="text-5xl font-extrabold">
          Mohamed Tarek
        </h1>

        <p className="mt-4 text-lg text-white/90 max-w-2xl">
          AI Engineer · Machine Learning & Deep Learning Developer · Building intelligent systems from data to real-world impact.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:scale-105 transition"
          >
            🚀 View Projects
          </Link>

          <a
            href="/files/Mohamed_Tarek_AI_Updated.docx"
            className="px-6 py-3 border border-white rounded-xl hover:bg-white/10 transition"
            target="_blank"
          >
            📄 View CV
          </a>
        </div>
      </header>

      {/* ABOUT + SKILLS */}
      <section className="grid md:grid-cols-2 gap-10">

        {/* ABOUT */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            About Me
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Passionate AI Engineer focused on Machine Learning, Deep Learning,
            and building intelligent systems that solve real-world problems.
          </p>

          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>📍 Cairo, Egypt</p>
            <p>🎓 AI Student</p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-sm hover:bg-indigo-100 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
        <h3 className="text-xl font-bold text-indigo-700 mb-6">
          Connect With Me
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 border rounded-xl hover:bg-indigo-50 transition font-medium"
            >
              <span>{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-10">
          <Certificates />
        </div>
      </section>

    </main>
  );
}
