"use client"

import { useState } from "react"

interface GameProps {
    randomNumber: number
}

export default function Game({ randomNumber }: GameProps) {
    const [inputSet, setInputSet] = useState<number[]>([])
    const [inputVal, setInputVal] = useState<string>("")
    const [win, setWin] = useState<number>(0)

    function isPrime(num: number): boolean {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        const boundary = Math.sqrt(num);
        for (let i = 3; i <= boundary; i += 2) {
            if (num % i === 0) return false;
        }

        return true;
    }

    function check(set: number[]): boolean {
        let sum = 0;
        for (const num of set) {
            sum += num;
        }
        return sum == randomNumber;
    }

    const handleAdd = () => {
        let num: number = Number(inputVal);

        if (isNaN(num) || inputVal.trim() === "") {
            alert("That is not a valid number! Please type digits only.");
            setInputVal("");
            return;
        }
        if (!isPrime(num)) {
            alert(`${num} is not a prime number!`);
            return;
        }
        if (inputSet.includes(num)) {
            alert(`${num} has already been used! Try a different prime number.`);
            return;
        }

        setInputSet([...inputSet, num])
        setInputVal("")
    }
    
    const handleSubmit = () => {
        const ans: boolean = check(inputSet)
        if (ans) {
            setWin(1);
        } else {
            setWin(-1);
        }
    }

    return (
        <div className="p-4 max-w-sm mx-auto font-sans text-slate-700">
            <div className="space-y-4">
                {/* Simple Input Box */}
                <input
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Enter a prime number"
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded text-slate-800 outline-none focus:border-indigo-500"
                    onKeyDown={(e) => {
                        if (e.ctrlKey && e.key === "'") {
                            e.preventDefault()
                            handleAdd()
                        } else if (e.ctrlKey && e.key === "Enter") {
                            handleSubmit()
                        }
                    }}
                />

                {/* Normal Action Buttons */}
                <div className="space-y-2">
                    <button
                        onClick={handleAdd}
                        className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-sm font-medium flex justify-between items-center"
                    >
                        <span>Add Number</span>
                        <span className="text-xs text-slate-400">ctrl + '</span>
                    </button>

                    <button 
                        onClick={handleSubmit}
                        className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm font-medium flex justify-between items-center"
                    >
                        <span>Submit Guess</span>
                        <span className="text-xs text-indigo-200">ctrl + ↵</span>
                    </button>
                </div>

                {/* Clear & Flat Results Section */}
                <div className="pt-2 text-sm space-y-2 border-t border-slate-100">
                    <p>
                        <span className="font-medium text-slate-600">Chosen Primes:</span>{" "}
                        {inputSet.length > 0 ? (
                            <span className="font-mono text-indigo-600">{inputSet.join(" + ")}</span>
                        ) : (
                            <span className="text-slate-400 italic">None yet</span>
                        )}
                    </p>

                    {win === 1 && (
                        <p className="text-emerald-600 font-medium">
                            🎉 You Win! The sum matches {randomNumber}!
                        </p>
                    )}
                    {win === -1 && (
                        <p className="text-rose-600 font-medium">
                            ❌ Try Again! The sum is incorrect.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
