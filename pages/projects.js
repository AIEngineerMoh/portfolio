
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: '🎓 Student Behavior Prediction',
      description:
        'A machine learning project predicting student performance using logistic regression and Streamlit.',
      tech: ['Python', 'Scikit-learn', 'Streamlit'],
      github: 'https://github.com/MohamedWo/Student-Behavior-Prediction-using-Machine-Learning',
    },
    {
      title: '🧠 Object Detection App',
      description:
        'Real-time object detection using OpenCV and a pre-trained SSD MobileNet model for detecting people and objects in images.',
      tech: ['Python', 'OpenCV', 'TensorFlow'],
      github: 'https://github.com/MohamedWo/photo_detection_project',
    },
    {
      title: '🌐 AI Portfolio Website',
      description:
        'Personal AI-focused portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      github: 'https://github.com/MohamedWo/portfolio',
    },
  ]

  return (
    <section className="max-w-5xl mx-auto py-10 px-6 space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
        My Projects 🚀
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        Explore some of my favorite AI and web development projects below. Each one links directly to my GitHub repository.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className="block bg-white dark:bg-slate-800 p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition transform"
          >
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
              {proj.title}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mt-2">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-indigo-50 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium">
              → View on GitHub
            </div>
          </a>
        ))}
      </div>

      <div className="text-center pt-8">
        <Link
          href="/"
          className="inline-block px-5 py-2 border border-indigo-300 rounded-lg text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-slate-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  )
}
  