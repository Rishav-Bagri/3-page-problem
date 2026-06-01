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

        if (isNaN(num)) {
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

    return <div>
        <div>
            <br />
            <input
                value={inputVal}
                onChange={(e) => {
                    setInputVal(e.target.value)
                }}
                placeholder="Enter a prime number"
                type="text"
                onKeyDown={(e) => {
                    if (e.ctrlKey && e.key == "'") {
                        e.preventDefault()
                        handleAdd()
                    }else if(e.ctrlKey && e.key=="Enter"){
                        handleSubmit()
                    }

                }}
            />
            <br />
            <button
                onClick={handleAdd}

            > add ( ctrl + ' ) </button>
            <br />
            <button onClick={handleSubmit}>submit ( ctrl + ↵ )</button>
            <div>
                <p>Your Chosen Primes: {inputSet.join(" + ") || "None yet"}</p>

                {win === 1 && <h3 >🎉 You Win! The sum matches {randomNumber}!</h3>}
                {win === -1 && <h3 >❌ Try Again! The sum is incorrect.</h3>}
            </div>
        </div>
    </div>
}