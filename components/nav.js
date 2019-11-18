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
  <div>
    <ul className="nav nav-tabs" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab"className="nav-link" data-toggle="tab" role="tab" href='/'
        aria-controls="index" aria-selected="true"> Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" role="tab" href='blog' aria-controls="blog" aria-selected="false">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href='learning' role="tab" aria-controls="learning" aria-selected="false">
          What I'm Learning
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href='projects'role="tab" aria-controls="projects" aria-selected="false">
          Projects
        </a>
      </li>        
    </ul>


    </div>
)

export default Nav
