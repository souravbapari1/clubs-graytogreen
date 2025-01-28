import React from "react";
import BlogPostBox from "./_components/BlogPostBox";
import BlogCategory from "./_components/BlogCategory";
import Navigations from "../_components/Navigations";

function page() {
  return (
    <>
    
    <Navigations/>

    <div className="container my-10">
      <BlogCategory />
      <div className="grid lg:grid-cols-3 mt-10 md:grid-cols-2  gap-8 md:px-9 w-full">
        <BlogPostBox />
        <BlogPostBox />
        <BlogPostBox />
        <BlogPostBox />
        <BlogPostBox />
        <BlogPostBox />
      </div>
    </div>
    </>
  );
}

export default page;
