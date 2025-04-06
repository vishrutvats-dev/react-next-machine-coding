import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ReviewDetails(
    {params}: {params: {productId: string, reviewId: string};}
) {
    const {productId, reviewId} = await params
    if(parseInt(reviewId) > 1000) {
        return <h1>{notFound()}</h1>
    }

    function randomDigit(count: number) {
        return Math.random()*count
    }
    
    if(randomDigit(2) > 1) {
        throw new Error("Greater than 2 Product - Review")
    }
    return (<>
    <h1>Review {reviewId} for Product {productId}</h1>
    <Link href="/">Back to </Link>
    </>)
}