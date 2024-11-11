import { notFound } from "next/navigation"

interface ReviewParams{
    params: {
        productId: string,
        reviewId: string
    }
}

export default function Review({params}:ReviewParams){
    if(parseInt(params.reviewId) > 1000) notFound()
        
    if(parseInt(params.reviewId) === 900) throw Error('Invalid Id: 900')
    
    return (
        <div>
            <h1>Review do Produto {params.productId}</h1>
            <h2>Review {params.reviewId}</h2>
        </div>
    )
}