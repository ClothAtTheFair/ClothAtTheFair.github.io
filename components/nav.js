import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
    <ul className="nav nav-tabs">
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='blog'>
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href='learning'>
          <a>What I'm Learning</a>
        </Link>
      </li>
      <li>
        <Link href='projects'>
          <a>Projects</a>
        </Link>
      </li>        
    </ul>
)

export default Nav
