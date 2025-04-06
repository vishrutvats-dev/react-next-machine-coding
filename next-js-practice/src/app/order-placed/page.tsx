"use client";
import { useRouter } from "next/navigation"

export default function OrderPlaced() {
    const router = useRouter()

    function clicked() {
        router.push("/")
    }

    return(
        <button onClick={clicked}>Click to go Home!</button>
    )
}