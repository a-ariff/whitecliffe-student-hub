export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Whitecliffe Student Hub</h1>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-300">Next.js + TypeScript + Tailwind CSS</p>
        <div className="mt-8 inline-flex gap-3">
          <a className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500" href="#">Get Started</a>
          <a className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800" href="#">Learn More</a>
        </div>
      </div>
    </main>
  )
}
