import Link from "next/link"

export default function Home() {
  return (
    /* Soft canvas background matching your game theme */
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-100 px-4 py-16 flex flex-col justify-center items-center">
      
      {/* Centered Welcome Container Card */}
      <div className="w-full max-w-sm bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-6 font-sans text-zinc-700 text-center">
        
        {/* Title Block */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Prime Sum Puzzle
          </h1>
          <p className="text-xs font-medium text-indigo-600 tracking-wide uppercase">
            A Mathematical Brain Game
          </p>
        </div>

        {/* Short Rules Summary Layout */}
        <div className="text-sm text-zinc-500 space-y-2 border-y border-zinc-100 py-4 text-left">
          <p className="font-medium text-zinc-700">How to Play:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Get a random target number from the server</li>
            <li>Input unique prime numbers to build the sum</li>
            <li>No duplicate prime numbers allowed</li>
            <li>Hit the goal perfectly to claim victory</li>
          </ul>
        </div>

        {/* Call To Action Controls */}
        <div className="space-y-3">
          <Link 
            href="/prime"
            className="w-full block text-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm active:scale-[0.99]"
          >
            Start Game
          </Link>
          
          <div className="text-[11px] text-zinc-400 font-mono">
            Pro Controls: <kbd className="px-1 py-0.5 bg-zinc-100 rounded border">Ctrl</kbd> + <kbd className="px-1 py-0.5 bg-zinc-100 rounded border">'</kbd> supported
          </div>
        </div>

      </div>

      {/* Subtle Footer */}
      <footer className="mt-8 text-xs text-zinc-400 font-mono">
        v1.0.0 • Made with Next.js & Tailwind
      </footer>

    </div>
  )
}
