// "use client"

// import { useSearchParams } from "next/navigation";


// import Arrivals from "@/app/JsonData/Arrivals.json";
// import BestDeals from "@/app/JsonData/BestDeals.json";
// import BestSales from "@/app/JsonData/BestSales.json";
// import HotDeals from "@/app/JsonData/HotDeals.json";
// import OrganicFood from "@/app/JsonData/OrganicFood.json";
// import Recommend from "@/app/JsonData/Recommend.json";
// import ShortProducts from "@/app/JsonData/ShortProducts.json";
// import ProductDetails from "./ProductDetails/ProductDetails";
// import Products from "./Products/Products";



// export default function ShopPage() {
//     const allProducts =[
//         ...Arrivals,
//         ...BestDeals,
//         ...BestSales,
//         ...HotDeals,
//         ...OrganicFood,
//         ...Recommend,
//         ...(ShortProducts?.Featured || []),
//         ...(ShortProducts?.TopSelling || []),
//         ...(ShortProducts?.OnSale || []),
//         ...(ShortProducts?.TopRated || []),
// ];

// const searchParams = useSearchParams();
// const productId = searchParams.get("id")
//   return (
//     <div className="">
//         {productId ? (
//             <ProductDetails id={productId} products={allProducts}/>
//         ): (
//             <Products />
//         )}
//     </div>
//   )
// }




"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Arrivals from "@/app/JsonData/Arrivals.json";
import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/HotDeals.json";
import OrganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortProducts from "@/app/JsonData/ShortProducts.json";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";

function ShopContent() {
  const allProducts = [
    ...Arrivals,
    ...BestDeals,
    ...BestSales,
    ...HotDeals,
    ...OrganicFood,
    ...Recommend,
    ...(ShortProducts?.Featured || []),
    ...(ShortProducts?.TopSelling || []),
    ...(ShortProducts?.OnSale || []),
    ...(ShortProducts?.TopRated || []),
  ];

  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  return (
    <div className="">
      {productId ? (
        <ProductDetails id={productId} products={allProducts} />
      ) : (
        <Products />
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}