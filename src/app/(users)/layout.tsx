import Link from 'next/link'

const navlinks = [
    {name: 'Profile', href: '/profile'},
    {name: 'Config', href: '/config'},
    {name: 'Info', href: '/info'}
]

export default function UsersLayout({children}: {children: React.ReactNode}) {
    return(
        <div>
            {navlinks.map((link) => {
                return(
                    <Link key={link.href} href={link.href}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    )
}