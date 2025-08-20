"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
    const mouse = useRef({x: 0, y: 0})
    const cursor = useRef<HTMLDivElement>(null)
    const size = 150

    const manageMoveMouse = (e: MouseEvent) => {
        const {clientX, clientY} = e

        mouse.current = {
            x: clientX,
            y: clientY
        }
        moveCursor(mouse.current.x, mouse.current.y)
    }

    const moveCursor = (x: number, y: number) => {
        gsap.set(cursor.current, {x,y,xPercent: -50, yPercent: -50})  

    }
    useEffect(()=>{
        window.addEventListener("mousemove", manageMoveMouse)
        return () => window.removeEventListener("mousemove", manageMoveMouse)
    },[])

    return (
      <div className="relative hidden lg:block">
        <div
          ref={cursor}
          style={{
            backgroundColor: "#7c5157",
            filter: `blur(350px)`,
            width: size,

            height: size,
          }}
          className="top-0 left-0 fixed rounded-full pointer-events-none"
        />
      </div>
    );
}

