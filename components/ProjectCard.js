export default function ProjectCard({ project }) {
  return (
    <article className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-slate-700 mt-2">{project.description}</p>

      <div className="mt-4 flex gap-2 items-center">
        {project.github && (
          <a className="px-3 py-1 border rounded text-sm" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
        )}
        {project.kaggle && (
          <a className="px-3 py-1 border rounded text-sm" href={project.kaggle} target="_blank" rel="noreferrer">Kaggle</a>
        )}
        <span className="ml-auto text-sm text-slate-500">{project.tags?.join(', ')}</span>
      </div>
    </article>
  )
}