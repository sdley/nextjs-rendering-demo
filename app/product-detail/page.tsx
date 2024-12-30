import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductDetailPage() {
    return(
        <div>
            <h1>Product detail Page</h1>
            <Suspense fallback={<p>Loading product deatils..</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading reviews..</p>}>
                <Reviews />
            </Suspense>
        </div>
    );
}