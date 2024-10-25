"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogsCmp() {
  return (
    <div className="container mx-auto px-4 lg:px-44">
           <div className="heading text-3xl font-bold my-6 text-center mt-16">Blogs</div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 flex-col gap-6 px-4 md:px-0 w-full">
      <Link
        href={`/blogs/item._id`}
        className="box flex flex-col sm:flex-col py-4"
        >
        <div className="left">
          <Image
            src={"https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148076833.jpg?t=st=1729843931~exp=1729847531~hmac=8d5ce23101d2c327f420f6ea7d1843e2d0f6d19593f4788a228ea85ef53f506b&w=740"}
            height={150}
            width={150}
            alt="error"
            className="rounded-lg rounded-b-none w-full h-full object-cover"
            />
        </div>
        <div className="right pt-4 space-y-2 sm:mt-0 sm:py-4 flex flex-col sm:w-full">
          <div className="title font-semibold text-lg">Smile Smart: Tips for a Healthier</div>
          <div className="para text-zinc-600 pb-4">Regular dental check-ups are crucial for maintaining oral health. These visits allow your dentist to identify potential...</div>
        </div>
      </Link>
      <Link
        href={`/blogs/item._id`}
        className="box flex flex-col sm:flex-col py-4"
        >
        <div className="left">
          <Image
            src={"https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148076833.jpg?t=st=1729843931~exp=1729847531~hmac=8d5ce23101d2c327f420f6ea7d1843e2d0f6d19593f4788a228ea85ef53f506b&w=740"}
            height={150}
            width={150}
            alt="error"
            className="rounded-lg rounded-b-none w-full h-full object-cover"
            />
        </div>
        <div className="right pt-4 space-y-2 sm:mt-0 sm:py-4 flex flex-col sm:w-full">
          <div className="title font-semibold text-lg">Benefits of Regular Dental Visits</div>
          <div className="para text-zinc-600 pb-4">Regular dental check-ups are crucial for maintaining oral health. These visits allow your dentist to identify potential...</div>
        </div>
      </Link>
      <Link
        href={`/blogs/item._id`}
        className="box flex flex-col sm:flex-col py-4"
        >
        <div className="left">
          <Image
            src={"https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148076833.jpg?t=st=1729843931~exp=1729847531~hmac=8d5ce23101d2c327f420f6ea7d1843e2d0f6d19593f4788a228ea85ef53f506b&w=740"}
            height={150}
            width={150}
            alt="error"
            className="rounded-lg rounded-b-none w-full h-full object-cover"
            />
        </div>
        <div className="right pt-4 space-y-2 sm:mt-0 sm:py-4 flex flex-col sm:w-full">
          <div className="title font-semibold text-lg"> Debunking Dental Myths</div>
          <div className="para text-zinc-600 pb-4">Regular dental check-ups are crucial for maintaining oral health. These visits allow your dentist to identify potential...</div>
        </div>
      </Link>
      <Link
        href={`/blogs/item._id`}
        className="box flex flex-col sm:flex-col py-4"
        >
        <div className="left">
          <Image
            src={"https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148076833.jpg?t=st=1729843931~exp=1729847531~hmac=8d5ce23101d2c327f420f6ea7d1843e2d0f6d19593f4788a228ea85ef53f506b&w=740"}
            height={150}
            width={150}
            alt="error"
            className="rounded-lg rounded-b-none w-full h-full object-cover"
            />
        </div>
        <div className="right pt-4 space-y-2 sm:mt-0 sm:py-4 flex flex-col sm:w-full">
          <div className="title font-semibold text-lg"> The Role of Diet in Oral Health</div>
          <div className="para text-zinc-600 pb-4">Regular dental check-ups are crucial for maintaining oral health. These visits allow your dentist to identify potential...</div>
        </div>
      </Link>
    </div>
            </div>
  );
}
