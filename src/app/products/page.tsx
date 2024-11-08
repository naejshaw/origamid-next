import Link from "next/link";

export default function Products(){
    return(<div className="p-4">
            <h1>Página de Produtos</h1>
            <div className="flex flex-col justify-between p-4 gap-2">
                <Link href={"products/1"}>Produto 1</Link>
                <Link href={"products/2"}>Produto 2</Link>
                <Link href={"products/3"}>Produto 3</Link>
            </div>
    </div>)
}