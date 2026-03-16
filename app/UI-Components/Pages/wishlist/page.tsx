"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type WishlistItem = {
    Id: string;
    title: string;
    price: string;
    review: string;
    image: string;
}

export default function Wishlist() {
    const [wishlistItems , setWishlistItems] = useState<WishlistItem[]>([]);

    // Load wishlist from localStorage 

    useEffect(() => {
            const loadWishlist = () => {
                try {
                    const wishlist: WishlistItem[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
                    setWishlistItems(wishlist) 
                }
                catch (error) {
                    console.error("Failed to load wishlist", error);
                    setWishlistItems([]);
                }
            };
            loadWishlist();
            window.addEventListener("storageUpdate", loadWishlist);
        return () => window.removeEventListener("storageUpdate", loadWishlist)  
    }, []);

    // Remove Product from Wishlist 
    const handleRemove = (productId: string) => {
        const updatedWishlist = wishlistItems.filter((item) => item.Id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
        window.dispatchEvent(new Event("storageUpdate"))
        toast.success("Product Removed From Wishlist")
    }

    const handleAddToCart = (product: any) => {
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");

        const existingProduct = cart.find((item: any) => item.Id === product.Id)

        if(existingProduct) {
            toast(`${product.title} is already in cart`, {
                icon: "⚠️",
                style:{
                    border: "1px solid #facc15",
                    padding: "16px",
                    color: "#333",
                    background: "#fff9c4"
                }
            })
        }
        else {
            cart.push({...product , qty: 1})
            localStorage.setItem("cart", JSON.stringify(cart));

            window.dispatchEvent(new Event('storageUpdate'));

            toast.success(`${product.title} added to cart!`)
        }
    }
  return (
    <>
    <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">
            <h2 className="Unbounded text-2xl">Wishlist</h2>
            <div className="flex">
                <Link href="/" className="text-2xl Unbounded">
                Home &nbsp; :
                </Link>
                <h2 className="Unbounded text-2xl text-[var(--prim-color)]"> &nbsp; Wishlist</h2>
            </div>
        </div>
    </div>
    <div className="px-[8%] lg:px-[12%] py-10">
        {wishlistItems.length === 0 ? (
            <p className="text-lg bg-red-200 px-5 py-2 rounded">Your Wishlist is Empty!</p>
        ) : (
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    {/* Desktop List  */}
                    <table className="min-w-full border border-gray-300 rounded hidden md:table">
                        <thead className="bg-[var(--prim-light)]">
                            <tr>
                                <th className="py-3 px-4 Unbounded border-r border-gray-300 font-normal text-left">Product</th>
                                <th className="py-3 px-4 Unbounded border-r border-gray-300 font-normal text-left">Price</th>
                                <th className="py-3 px-4 Unbounded border-r border-gray-300 font-normal text-left">Stock Status</th>
                                <th className="py-3 px-4 Unbounded border-r border-gray-300 font-normal text-left">Add to Cart</th>
                                <th className="py-3 px-4 Unbounded text-left cursor-pointer">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlistItems.map((item) => (
                                <tr key={item.Id} className="border-b border-gray-300">
                                    <td className="py-3 px-4 flex items-center gap-3 border-r border-gray-300">
                                        <img src={item.image} alt={item.title} className="object-contain rounded"/>
                                        <div className="flex flex-col">
                                            <p className="font-medium Unbounded text-xl">{item.title}</p>
                                            <h6 className="text-sm text-gray-500 flex items-center gap-1 mt-1.5">
                                                <i className="bi bi-shop text-[var(--prim-color)]"></i> By Lucky Supermarket
                                            </h6>
                                            <span className="flex items-center text-yellow-500 text-md">
                                             <i className="bi bi-star-fill me-1"></i> {item.review} Review
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 Unbounded border-r border-gray-300">
                                        ${parseFloat(item.price.replace(/[^0-9.-]+/g, "")).toFixed(2)}
                                    </td>
                                    <td className="py-3 px-4 Unbounded border-r border-gray-300">In Stock</td>
                                    <td className="px-3 Unbounded border-r border-gray-300">
                                        <button 
                                        onClick={() => handleAddToCart(item)}
                                        className="w-full cursor-pointer px-4 py-2 text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md hover:bg-[var(--prim-color)] hover:text-white transition"
                                        >
                                            Add To Cart <i className="bi bi-cart"></i>
                                        </button>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <button
                                        className="text-red-500 hover:text-red-700 cursor-pointer"
                                        onClick={() => handleRemove(item.Id)}
                                        >
                                                ✕ Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Mobile List  */}
                    <div className="md:hidden space-y-4">
                    {wishlistItems.map((item) => (
                                <div key={item.Id} className="border border-gray-300 rounded p-4 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img src={item.image} alt={item.title} className="object-contain rounded"/>
                                        <div className="flex flex-col">
                                            <p className="font-medium Unbounded text-xl">{item.title}</p>
                                            <h6 className="text-sm text-gray-500 flex items-center gap-1 mt-1.5">
                                                <i className="bi bi-shop text-[var(--prim-color)]"></i> By Lucky Supermarket
                                            </h6>
                                            <span className="flex items-center text-yellow-500 text-md">
                                             <i className="bi bi-star-fill me-1"></i> {item.review} Reviews
                                            </span>
                                        </div>
                                   </div>
                                    <p className="Unbounded text-sm">Price ${parseFloat(item.price.replace(/[^0-9.-]+/g, "")).toFixed(2)}</p>
                                    <p className="Unbounded text-sm mb-2">Status: In Stock</p>
                                  
                                      <div className="flex justify-between items-center">
                                        <button 
                                        onClick={() => handleAddToCart(item)}
                                        className="px-4 py-2 text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md hover:bg-[var(--prim-color)] hover:text-white transition"
                                        >
                                            Add To Cart <i className="bi bi-cart"></i>
                                        </button>
                                        <button
                                        className="text-red-500 hover:text-red-700 cursor-pointer"
                                        onClick={() => handleRemove(item.Id)}
                                        >
                                                ✕ Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        )}
    </div>
    </>
  )
}
