import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center h-[calc(100vh-6rem)]">
      <h1 className=" text-4xl font-bold ">Seems Like you are missing😅</h1>
      <h2 className="text-2xl">want to explore?</h2>
      <h2 className="text-2xl">visit: <Link href="/cmd" className=" text-blue-800 underline italic">/cmd</Link></h2>
    </div>
  );
};

export default NotFound;
