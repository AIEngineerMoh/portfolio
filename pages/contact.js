export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-slate-600 mt-2">You can reach me at <strong>mohamedwork280@gmail.com</strong> or via GitHub/LinkedIn.</p>

      <form className="mt-4 space-y-3">
        <div>
          <label className="text-sm">Your name</label>
          <input className="w-full border rounded px-3 py-2 mt-1" placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm">Your email</label>
          <input className="w-full border rounded px-3 py-2 mt-1" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea className="w-full border rounded px-3 py-2 mt-1" rows="4" placeholder="Message"></textarea>
        </div>
        <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded">Send (placeholder)</button>
      </form>
    </section>
  )
}