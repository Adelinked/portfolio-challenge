"use client";
import { useRef } from "react";
import { blogType, useBlogsStore } from "@/store";
import Image from "next/image";
import { Pagination } from "./Pagination";
import { BLOGS_PER_PAGE } from "@/data/variable";

const Blog = ({ title, description,link, image }: blogType) => {
  return (
    <div className="flex flex-col md:flex-row w-full mb-8">
      <div className="w-1/2 order-2 md:order-1">
        <p className="text-2xl text-gray1 w-[178px] mb-[26px]">{title}</p>
        <p className="text-gray3 w-[318px] mb-[21px]">{description}</p>
        <a href={link} className="text-blue1">dev.to</a>
      </div>
      <div className="relative w-full md:w-1/2 order-1 md:order-2 h-[250px] rounded-xl overflow-hidden mb-[20px] md:mb-0">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export const Blogs = () => {
  const blogsRef = useRef(null);
  const blogs = useBlogsStore((state) => state.blogs);
  const uniqueTags = [...new Set(blogs.flatMap((blog) => blog.tags))];
  const filter = useBlogsStore((state) => state.filterTags);
  const toggleFilter = useBlogsStore((state) => state.toggleFilter);
  const currentPage =  useBlogsStore((state) => state.currentPage);
  const setCurrentPage = useBlogsStore((state) => state.setCurrentPage);  

  const filtredBlogs =
    filter.length === 0
      ? blogs
      : blogs.filter((blog) => blog.tags.some((tag) => filter.includes(tag)));
      
      const startIndex = currentPage * BLOGS_PER_PAGE;
      const endIndex = startIndex + BLOGS_PER_PAGE;
      const displayedElements = filtredBlogs.slice(startIndex, endIndex);
  return (
    <div className="pt-[22px] px-[22px] pb-[10px] rounded-xl shadow">
      <div className="p-[22px] mt-4">
        <p className="text-lg mb-4">Blogs ({filtredBlogs.length})</p>
        <div className="">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              className={`text-sm py-2 px-4 md:px-[22px] rounded-xl border-[1px] mr-2 md:mr-4 mb-4 ${
                filter.includes(tag)
                  ? "bg-blue1 text-white border-blue1"
                  : "border-gray2"
              }`}
              onClick={() => toggleFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col " ref={blogsRef}>
        {displayedElements.map((blog) => (
          <Blog key={blog.title} {...blog} />
        ))}
      </div>
      <Pagination
        numberElements={filtredBlogs.length}
        elementsPerPage={BLOGS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        toViewRef={blogsRef}
      />
    </div>
  );
};
