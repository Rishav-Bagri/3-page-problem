import Game from "@/components/Game";
import { connection } from "next/server";

const validTargets: number[] = [
  8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 
  32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 
  54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75, 
  76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 
  96, 98, 99
];

export default async function About() {
    await connection()
    
    const randomIndex = Math.floor(Math.random() * validTargets.length)
    const initialTarget = validTargets[randomIndex]

    return (
        /* ✅ Soft canvas background (Light & clean even in dark mode) */
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-100 px-4 py-12 flex justify-center items-start">
            
            {/* ✅ Floating elegant white box layout card */}
            <div className="w-full max-w-sm bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans text-zinc-700">
                
                {/* Clear instructions text */}
                <div className="text-sm text-zinc-500 leading-relaxed">
                    You gotta find unique prime numbers whose sum is equal to number below
                </div>
                
                {/* Target Number Display line */}
                <div className="text-base font-medium text-zinc-800 border-b border-zinc-100 pb-3">
                    Number to find: <span className="font-mono text-indigo-600 font-semibold">{initialTarget}</span>
                </div>
                
                {/* Game Logic Core Components */}
                <Game randomNumber={initialTarget} />
            </div>

        </div>
    )
}
