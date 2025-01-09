import React from "react";
import BlogPostBox from "./_components/BlogPostBox";
import BlogCategory from "./_components/BlogCategory";

function page() {
  return (
    <div className="container my-10">
      <BlogCategory />
      <div className="grid lg:grid-cols-3 mt-10 md:grid-cols-2  gap-8 w-full">
        <BlogPostBox />
        <BlogPostBox />
        <BlogPostBox />
        <BlogPostBox />
        <BlogPostBox />
        <BlogPostBox />
      </div>
    </div>
  );
}

export default page;
