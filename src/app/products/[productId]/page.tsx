import { notFound } from "next/navigation"

interface InfoParams{
    params: {
        productId: string
    }
}

export default function Info({params}: InfoParams){
    if(parseInt(params.productId) > 100) notFound()
    return(<>
            <p>Informações do produto {params.productId}</p>
    </>)
}