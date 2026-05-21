import Link from 'next/link'
import Certificates from '../components/Certificates'

export default function Home() {
  const skills = [
    'Python',
    'PyTorch',
    'Computer Vision',
    'NLP',
    'Streamlit',
    'Scikit-learn',
    'Data Visualization',
    'Machine Learning',
    'Deep Learning',
  ]

  return (
    <section className="space-y-10">
      {/* 🧠 Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-3xl shadow-lg transform transition duration-500 hover:scale-[1.01]">
        <h1 className="text-4xl font-bold tracking-tight">Mohamed Tarek</h1>
        <p className="text-lg text-indigo-100 mt-3 max-w-2xl">
          AI Student · Machine Learning & Deep Learning Enthusiast · Cairo, Egypt
        </p>
        <div className="mt-6 flex gap-4 flex-wrap">
          <a
            className="px-6 py-2 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-50 transition"
            href="/projects"
          >
            🚀 View Projects
          </a>

          {/* 📄 CV Buttons */}
          <div className="flex gap-3 flex-wrap">
            <a
              className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
              href="/files/Mohamed_Tarek_AI_Updated.docx"
              target="_blank"
              rel="noreferrer"
            >
              🔍 View CV
            </a>

            <a
              href="/files/Mohamed_Tarek_AI_Updated.docx"
              download
              className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </header>

      {/* 👤 About Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-indigo-700">About Me</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I’m a passionate AI student at Arab Open University, currently in my
            2nd year. I enjoy building intelligent systems using Machine Learning
            and Deep Learning — transforming data into real-world insights.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:mohamedwork280@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                mohamedwork280@gmail.com
              </a>
            </li>
            <li>
              <strong>Location:</strong> Cairo, Egypt
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/MohamedWo"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                github.com/MohamedWo
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/mohamed-mohamed-230ba4364/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                linkedin.com/in/mohamed-mohamed-230ba4364
              </a>
            </li>
          </ul>
        </div>

        {/* 🧠 Skills */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-indigo-700">Skills</h2>
          <p className="mt-3 text-slate-700">
            Technologies and tools I use most often:
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-sm font-medium hover:bg-indigo-100 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🌐 Quick Links */}
      <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-indigo-700">Quick Links</h3>
        <p className="text-slate-600 mt-1 mb-4">
          Connect with me or explore my online work:
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            className="px-4 py-2 border rounded-lg text-indigo-700 font-medium hover:bg-indigo-50 transition"
            href="https://github.com/MohamedWo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="px-4 py-2 border rounded-lg text-indigo-700 font-medium hover:bg-indigo-50 transition"
            href="https://www.kaggle.com/"
            target="_blank"
            rel="noreferrer"
          >
            Kaggle
          </a>
          <a
            className="px-4 py-2 border rounded-lg text-indigo-700 font-medium hover:bg-indigo-50 transition"
            href="https://www.linkedin.com/in/mohamed-mohamed-230ba4364/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 border rounded-lg text-indigo-700 font-medium hover:bg-indigo-50 transition"
          >
            Contact
          </Link>
        </div>
        <Certificates />

      </section>
    </section>
  )
}

// npm run dev


