import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">College Management</h1>
        <nav>
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
        </nav>
      </header>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 shadow rounded bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-2 text-sm">A modern, responsive portal for students, teachers and administrators.</p>
        </div>
        <div className="p-6 shadow rounded bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold">AI Assistant</h2>
          <p className="mt-2 text-sm">Ask the AI panel for study tips, schedules, and procedural help.</p>
        </div>
      </section>
    </main>
  )
}
