import React, { useEffect, useState } from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", function() {
            console.log("Resized")
        })
    }, [])
    return (
        <h1>window width: {window.innerWidth}</h1>
    )
}