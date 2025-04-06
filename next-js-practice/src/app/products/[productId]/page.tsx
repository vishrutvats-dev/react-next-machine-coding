export default async function ProductDetails({params,}: {params:{productId: string};}) {
    const {productId} = await params
    return <h1 className="font-bold">Product Details for { productId}</h1>
}