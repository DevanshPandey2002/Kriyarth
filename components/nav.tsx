'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
export function Nav(){const path=usePathname();const links=[['Work','/work'],['About','/about'],['Services','/services']];return <nav className="nav"><Link className="logo" href="/">KRIYARTH<span style={{color:'var(--gold)'}}>.</span></Link><div className="navlinks">{links.map(([label,href])=><Link key={href} className={path.startsWith(href)?'active':''} href={href}>{label}</Link>)}<Link className="navcta" href="/contact">Let’s talk ↗</Link></div><button className="menu" aria-label="Open navigation" onClick={()=>document.body.classList.toggle('nav-open')}>Menu</button></nav>}
