"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVarients = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVarients = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const listItemVarients = {
    closed: {
      y: -10,
      opacity: 0,
    },
    opened: {
      y: 0,
      opacity: 1,
    },
  };

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div className=" h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>

      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <Link
          href={"/"}
          className=" text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className=" text-white mr-1">Yogi</span>
          <span className="w-12 h-6 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3 md:justify-center">
        <Link href={"https://github.com/yogicompute"} target="_blank">
          <Image src={"/github.png"} alt="" width={24} height={24} />
        </Link>
        <Link href={"https://www.instagram.com/sweet__error/"} target="_blank">
          <Image src={"/instagram.png"} alt="" width={24} height={24} />
        </Link>
        <Link
          href={"https://www.facebook.com/yogender.jangir.0/"}
          target="_blank"
        >
          <Image src={"/facebook.png"} alt="" width={24} height={24} />
        </Link>
        <Link href={"https://in.pinterest.com/yogiatpin/"} target="_blank">
          <Image src={"/pinterest.png"} alt="" width={24} height={24} />
        </Link>
        <Link href={"https://www.linkedin.com/in/yog-ender/"} target="_blank">
          <Image src={"/linkedin.png"} alt="" width={24} height={24} />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVarients}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-3xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVarients} key={link.url}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
