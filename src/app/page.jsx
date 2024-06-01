"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4 sm:px-8 lg:px-20 xl:px-48">
        <div className="h-1/2 relative">
          <Image src={"/hero.png"} alt="" fill className=" object-contain" />
        </div>
        <div className="h-1/2 flex flex-col gap-4 md:gap-8 items-center justify-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Empowering Tomorrow's Tech Innovators Today
          </h1>
          <p className="md:text-xl">
            Welcome to my digital canvas where I showcase my passion for
            computer science, experimenting with code to craft innovative
            solutions that shape the future.
          </p>
          <div className="w-full justify-center flex gap-4 text-lg">
            <Link href="/portfolio">
              <button className="p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-2 md:p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
