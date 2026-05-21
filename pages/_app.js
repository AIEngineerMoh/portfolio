import '../styles/globals.css'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}