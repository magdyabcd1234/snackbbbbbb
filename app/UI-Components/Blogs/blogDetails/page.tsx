"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import blogData from "@/app/JsonData/Blogs.json";


export default function BlogDetails() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const blog = blogData.find((b) => b.id.toString() === id)

    if(!blog) return <div>No Blog Found</div>
  return (
    <>
     <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
    <div className="flex justify-between items-center">
        <h2 className="Unbounded text-2xl">
            Blog Details :
            <span className="text-xl font-normal ps-2">
                {blog.title}
            </span>


        </h2>
        <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
            Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]"> &nbsp;Blog Details</h2>
        </div>
    </div>
</div>

    <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
            {/* Blog Details  */}
            <div className="w-full lg:w-1/1 flex lg:sticky top-22 left-0 h-[100%]">
            <div className="blog-details">
                    <img src={blog.image} alt={blog.title} className="rounded-md w-full mb-5" />
                    <span className="bg-[#e6f9ef] p-3 rounded-md text-2xl Unbounded">
                        {blog.tag}
                    </span>
                    <h1 className="text-4xl Unbounded my-4">{blog.title}</h1>
                    <p className="text-gray-500 mb-5">
                        <i className="bi bi-calendar2-week text-[var(--prim-color)] pr-1"></i> {" "}
                        {blog.date}
                    </p>
                    <p className="text-lg mb-3">{blog.pere}</p>
                    <p className="text-lg mb-3">{blog.pere2}</p>
                    <p className="text-lg mb-3">{blog.pere3}</p>
                </div>
            </div>
             {/* Sidebar */}
        <div className="w-full lg:w-1/2">
        <div className="border border-gray-300 rounded">
            <div className="border-b border-gray-300 p-5">
                <h2 className="Unbounded text-2xl">Recent Post</h2>
            </div>
            <div className="p-5">
                {blogData.map((blog, index) => (
                    <Link
                    key={blog.id}
                    className="flex justify-between items-center mb-5 gap-5 cursor-pointer"
                    href={{
                        pathname: "/UI-Components/Blogs/blogDetails",
                        query: { id: blog.id }
                    }}
                    >
                        <div className="w-1/2">
                        <img src={blog.image} alt={blog.title} />
                        </div>
                        <div className="w-1/2">
                        <div className="blog-content">
                            <h2 className="Unbounded hover:text-[var(--prim-color)] hover:underline">{blog.title}</h2>
                            <div className="flex gap-5 mt-2">
                                <p className="text-gray-500">
                                    <i className="bi bi-calendar2-week text-[var(--prim-color)] pr-1"></i> {blog.date}
                                </p>
                            </div>
                        </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </div>


        </div>
    </div>
    </>
  )
}
