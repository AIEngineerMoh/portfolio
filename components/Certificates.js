import Link from 'next/link'

export default function Certificates() {
  const certificates = [
    {
      title: '🏅 Intro to Machine Learning',
      issuer: 'Kaggle',
      date: 'October 2025',
      description:
        'Learned the foundations of machine learning, including model training, data preprocessing, and evaluation.',
      link: 'https://www.kaggle.com/learn/certification/usmohamed/intro-to-machine-learning',
    },
    {
      title: '🤖 AI Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'September 2025',
      description:
        'Completed an introduction to Artificial Intelligence, covering neural networks, supervised learning, and real-world AI applications.',
      link: 'https://www.coursera.org/account/accomplishments/your-cert-link',
    },
    {
      title: '💻 Python for Data Science',
      issuer: 'DataCamp',
      date: 'August 2025',
      description:
        'Covered Python basics, Pandas, NumPy, and data visualization using Matplotlib and Seaborn.',
      link: 'https://www.datacamp.com/statement-of-accomplishment/your-cert-link',
    },
  ]

  return (
    <section className="max-w-5xl mx-auto py-10 px-6 space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
        My Certificates 🎓
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        Here are some of my recent certifications in AI, machine learning, and programming.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="block bg-white dark:bg-slate-800 p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition transform"
          >
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
              {cert.title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {cert.issuer} — {cert.date}
            </p>
            <p className="text-slate-700 dark:text-slate-300 mt-2">
              {cert.description}
            </p>

            <div className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium">
              → View Certificate
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
