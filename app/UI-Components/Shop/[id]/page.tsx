"use client";

import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import products from "@/app/JsonData/Recommend.json";

export default function Page() {
  // هنا بنمرر JSON كامل لـ ProductDetails
  return (
    <div>
      <ProductDetails products={products} />
    </div>
  );
}