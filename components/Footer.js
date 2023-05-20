import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-3 py-3">
          
          <Link href="https://linkedin.com/in/jaredhooker" target="_blank">
              <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer text-orange-500 text-3xl"></i>
          </Link>
          <Link href="https://github.com/jrh89" target="_blank">
              <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer text-orange-500 text-3xl"></i>
          </Link>
          <Link href="https://jaredsportfolio.netlify.app" target="_blank">
              <i className="fa-solid fa-house-chimney duration-300 hover:opacity-30 cursor-pointer text-orange-500 text-3xl"></i>
          </Link>
    </div>
  )
}