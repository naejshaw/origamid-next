import {NextRequest} from 'next/server'
import {headers, cookies} from 'next/headers'

export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers)
    const headerList = await headers()
    const cookieStore = await cookies()
    cookieStore.set('token', '123abc')
    cookieStore.set('theme', 'dark')
    // const theme = request.cookies.get('theme')
    
    console.log(requestHeaders.get('Authorization'))
    console.log(headerList.get('Authorization'))
    // console.log(theme)
    console.log(cookieStore.get('theme'))
    console.log(cookieStore.get('token'))

    return new Response('<h1>Profile</h1>', {
        headers: {
            "Content-Type": "text/html",
            // "Set-Cookie": "theme=dark"
        }
    })
}