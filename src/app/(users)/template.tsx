'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import './styles.css'
import {useState} from 'react'

const navlinks = [
    {name: 'Profile', href: '/profile'},
    {name: 'Config', href: '/config'},
    {name: 'Info', href: '/info'}
]

export default function UsersLayout({children}: {children: React.ReactNode}) {
    const [value, setValue] = useState('')
    const pathname = usePathname()

    return(
        <div>
            <div className="w-full flex justify-around items-center">
                <input className="text-background p-1" type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
            </div>
            {navlinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return(
                    <Link 
                    className={`${isActive ? 'text-red-900' : 'text-blue-900'}`}
                    key={link.href} href={link.href}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    )
}