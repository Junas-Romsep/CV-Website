"use client"

import { Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Junas-Romsep",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/junas-romero-sepulveda-8117a921b/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/junas_romsep/",
  },
]

export default function Sidebar() {
  return (
    <aside className="fixed right-0 top-0 z-30 h-screen w-16 flex-col border-r md:flex">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <link.icon className="h-5 w-5" />
            <span className="sr-only">{link.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  )
}
