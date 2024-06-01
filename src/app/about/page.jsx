"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { Brain } from "@/components";
import { useRef } from "react";
const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/profile.jpeg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66 2C66 29.4851 68.6687 64.5118 49.3333 87.4444C42.4997 95.5495 35.7683 97.6796 26.2222 101C20.002 103.164 8.87322 103.873 4 99C-0.260934 94.7391 2.94804 88.1756 8.22222 86.2222C13.7053 84.1915 17.942 84 23.7778 84C33.359 84 41.3193 83.5602 50.2222 87C56.6125 89.469 63.5773 91.9131 69.5555 95.5C75.4778 99.0533 87.1838 104.357 93.5 99.4444C96.1292 97.3995 96.2752 92.5118 96.9444 89.5C97.9646 84.9092 92.6432 83.2024 89 83C84.472 82.7484 82.3397 81.8856 82 88C81.8025 91.5554 83.5627 94.4193 86 97C88.9648 100.139 92.0717 100.96 96 98.7778C99.3106 96.9386 98 90.7299 98 87.5C98 85.0327 98.4365 83.1348 99.2222 80.7778C100.357 77.3743 99.2311 78.4486 101.5 77.9444C105.352 77.0886 108 76.4766 108 81.5C108 85.6646 109 89.3473 109 93.5C109 100.142 108.863 95.0454 110.5 91.4444C112.765 86.4616 116.631 81.205 121.5 78.5C127.057 75.4129 126 82.1509 126 85.5C126 92.5532 124.42 102 134 102C142.932 102 153 102.569 153 91.2222C153 87.1735 153.772 81.3206 148 81C141.934 80.663 142.107 81.8068 139.5 86.5C134.378 95.7204 137.972 105 149.5 105C153.589 105 153.996 99.8977 155.5 96.8889C157.902 92.0843 161 85.4067 161 80C161 74.0547 158.407 82.7413 157.222 84.2222C155.194 86.7574 155 92.5718 155 95.7778C155 99.9302 153.8 104.999 158 107.222C161.954 109.316 164.884 106.382 167.778 103.778C171.15 100.743 175.896 99.1107 180 97C186.143 93.8409 191.659 91.4099 198.222 89.2222C206.505 86.4614 214.839 87 223.5 87C230.613 87 231.628 104 222.5 104C216.954 104 199.251 107.814 207 95.2222C211.456 87.9805 214.484 80.6007 220 73.7778C229.781 61.6805 242.696 50.8197 256.222 43C264.769 38.0591 274.192 34.6264 283 30.2222C286.55 28.4473 280.07 32.3343 278.5 33.5556C271.707 38.8391 266.609 45.3914 260.556 51.4444C255.356 56.6444 250.682 61.459 246.5 67.5C242.917 72.6757 239.364 77.3825 236.556 83C233.829 88.4524 231.82 94.3142 228.556 99.4444C226.693 102.371 225.518 107.823 222.5 109.5C214.795 113.78 217.517 100.438 218.056 95.0556C218.678 88.8318 227.982 85.7572 233.056 88.6111C239.614 92.3003 245.506 97.7883 252 101.778C254.886 103.551 259.46 107 263 107C271.267 107 273.32 81.9392 268.778 77.2222C264.112 72.3774 261.206 80.5039 261 84C260.576 91.2135 257.836 96.9269 264.778 102C272.242 107.454 285.041 112.276 292.111 104.833C298.002 98.6323 304.301 90.8902 308.556 83.4444C310.355 80.295 310.132 84.6251 309.444 86C305.387 94.1158 303 102.264 303 111.5C303 116.021 337.534 99.1863 340.5 98C347.33 95.2679 355.47 93.8299 361.778 90C363.935 88.6902 365.473 88 368 88"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
    //     <motion.div
    //       className=" h-full"
    //       initial={{ y: "-200vh" }}
    //       animate={{ y: "0" }}
    //       transition={{ duration: 1 }}
    //     >
    //       <div className="h-full overflow-scroll">
    //         <div className="p-4 sm:p-8 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
    //           <div className="flex flex-col gap-12 justify-center">
    //             <h1 className=" font-bold text-2xl">BIOGRAPHY</h1>
    //             <p className="text-lg">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
    //               temporibus obcaecati veniam nisi, consequatur sunt aperiam
    //               doloribus earum ad esse et consectetur aliquam nesciunt magni illo
    //               id vel excepturi recusandae.
    //             </p>
    //             <span>
    //               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //             </span>
    //             <div>
    //               <svg
    //                 version="1.0"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="333"
    //                 height="100"
    //                 viewBox="0 0 500.000000 150.000000"
    //                 preserveAspectRatio="xMidYMid meet"
    //               >
    //                 <g
    //                   transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
    //                   fill="#000000"
    //                   stroke="none"
    //                 >
    //                   <path
    //                     d="M3262 984 c-25 -31 -69 -120 -138 -281 -21 -48 1 -40 31 11 43 73
    // 135 145 135 105 0 -6 -12 -30 -26 -54 -26 -45 -29 -85 -6 -93 7 -2 10 2 6 11
    // -3 8 7 41 21 71 22 46 24 60 15 71 -18 22 -35 18 -73 -15 -19 -16 -38 -30 -41
    // -30 -13 0 23 56 54 85 41 37 90 113 90 137 0 30 -36 21 -68 -18z m58 15 c0
    // -24 -86 -146 -97 -136 -9 10 68 147 82 147 8 0 15 -5 15 -11z"
    //                   />
    //                   <path
    //                     d="M925 996 c-82 -26 -125 -72 -125 -134 0 -72 83 -104 159 -61 46 25
    // 50 38 5 14 -48 -25 -99 -20 -124 12 -29 37 -20 78 24 120 58 54 162 68 206 28
    // 43 -39 31 -96 -40 -186 -48 -60 -51 -98 -10 -112 27 -9 57 0 100 30 l24 18
    // -24 -44 c-14 -24 -47 -68 -74 -98 -59 -66 -128 -91 -196 -73 -64 17 -87 49
    // -81 110 3 31 25 59 55 74 17 9 25 16 18 16 -27 0 -72 -31 -88 -61 -59 -115
    // 104 -200 247 -128 55 27 118 105 179 220 30 57 72 130 94 164 24 38 31 53 17
    // 41 -12 -11 -45 -56 -75 -100 -83 -126 -160 -187 -194 -152 -14 14 -11 22 31
    // 83 54 79 67 134 43 180 -25 50 -91 64 -171 39z"
    //                   />
    //                   <path
    //                     d="M3125 996 c-35 -15 -74 -63 -106 -130 -21 -41 -27 -46 -56 -46 -67 0
    // -133 46 -133 92 0 9 10 29 23 43 29 34 84 43 128 21 18 -9 34 -14 36 -12 2 2
    // -13 11 -33 21 -78 37 -174 -3 -174 -74 0 -47 78 -101 146 -101 13 0 24 -4 24
    // -8 0 -15 -58 -99 -86 -126 -76 -70 -199 -21 -164 65 20 47 75 60 145 35 19 -7
    // 19 -7 2 4 -60 38 -137 28 -163 -21 -22 -43 -10 -86 29 -110 81 -49 180 -1 250
    // 122 15 27 31 40 52 45 46 10 97 39 125 71 l25 28 -30 -26 c-51 -45 -135 -79
    // -135 -55 0 24 86 141 113 154 39 19 61 0 53 -42 -4 -22 -3 -27 4 -16 14 22 12
    // 46 -6 64 -19 19 -29 19 -69 2z"
    //                   />
    //                   <path
    //                     d="M2245 910 c-45 -67 -48 -70 -87 -70 -43 0 -68 -20 -131 -109 -59 -82
    // -94 -84 -53 -2 30 59 32 74 10 92 -13 11 -21 11 -45 -3 -27 -16 -28 -16 -34 3
    // -6 19 -39 26 -49 10 -4 -5 3 -7 14 -4 30 8 25 -15 -19 -88 -43 -70 -44 -94 -2
    // -39 47 62 103 120 117 120 25 0 23 -17 -7 -74 -17 -32 -28 -64 -25 -72 9 -23
    // 40 -16 71 16 32 33 45 38 45 15 0 -8 10 -20 22 -26 17 -9 28 -8 55 6 26 14 36
    // 16 45 7 18 -18 39 -15 64 9 l22 20 6 -25 c12 -47 82 -47 133 -1 l28 26 -39
    // -26 c-72 -46 -115 -27 -96 44 10 40 59 91 86 91 35 0 -1 -64 -50 -87 l-31 -14
    // 30 6 c39 8 75 43 75 72 0 61 -80 29 -138 -56 -73 -107 -103 -53 -42 76 16 35
    // 43 83 60 108 17 25 27 45 21 45 -5 0 -30 -31 -56 -70z m-56 -87 c-4 -37 -39
    // -110 -61 -126 -36 -27 -58 -17 -58 29 0 45 53 104 94 104 14 0 26 -3 25 -7z"
    //                   />
    //                   <path
    //                     d="M1341 821 c-14 -26 -14 -41 3 -73 14 -26 13 -29 -16 -53 -35 -29 -54
    // -32 -66 -7 -13 26 3 74 39 110 17 18 26 32 19 32 -19 0 -77 -65 -84 -95 -8
    // -31 16 -75 40 -75 23 0 71 27 77 45 4 8 12 15 19 15 9 0 13 17 13 57 0 46 -3
    // 58 -17 61 -9 2 -21 -6 -27 -17z m39 -20 c0 -59 -23 -82 -34 -35 -9 33 1 64 20
    // 64 9 0 14 -11 14 -29z"
    //                   />
    //                   <path
    //                     d="M1699 823 c-15 -10 -45 -41 -67 -69 -43 -54 -102 -103 -102 -84 0 6
    // 16 42 35 80 l35 69 -35 7 c-52 9 -85 -3 -126 -47 -29 -31 -35 -45 -31 -69 5
    // -35 33 -54 68 -46 42 11 27 -17 -27 -49 -69 -40 -111 -89 -107 -123 2 -20 10
    // -28 27 -30 33 -5 82 46 121 124 17 35 35 64 39 64 5 0 29 18 53 40 l46 40 5
    // -30 c11 -51 80 -53 134 -5 l28 26 -39 -26 c-72 -46 -115 -27 -96 44 10 40 59
    // 91 86 91 35 0 -1 -64 -50 -87 l-31 -14 30 6 c43 9 77 44 73 75 -4 31 -33 37
    // -69 13z m-124 -12 c9 -15 -63 -121 -90 -133 -72 -33 -71 64 1 121 28 22 78 28
    // 89 12z m-118 -248 c-31 -60 -62 -93 -87 -93 -25 0 -25 16 0 57 19 31 99 97
    // 107 89 3 -2 -7 -26 -20 -53z"
    //                   />
    //                   <path
    //                     d="M3731 805 c-17 -20 -31 -39 -31 -42 0 -3 15 11 33 32 21 24 38 36 46
    // 31 16 -10 6 -39 -31 -99 -17 -26 -27 -51 -24 -55 8 -7 6 -10 68 86 70 105 108
    // 91 52 -19 -14 -28 -22 -54 -18 -57 4 -4 9 -2 11 5 8 22 78 116 95 127 31 19
    // 33 -5 5 -55 -15 -27 -27 -56 -27 -64 0 -24 27 -29 56 -10 25 16 27 16 41 -4 8
    // -12 22 -21 31 -21 16 1 16 1 0 11 -50 28 23 149 89 149 13 0 26 -6 29 -14 7
    // -18 -36 -87 -72 -115 -15 -11 -23 -21 -18 -21 4 0 18 10 31 22 20 19 23 19 23
    // 4 0 -42 54 -27 91 26 21 31 20 31 -13 -4 -20 -21 -41 -38 -47 -38 -18 0 -13
    // 38 14 90 18 36 21 48 10 44 -8 -4 -15 -1 -15 5 0 16 -56 14 -90 -4 -16 -8 -42
    // -34 -58 -58 -61 -88 -103 -102 -64 -22 30 62 29 95 -2 95 -13 0 -29 -7 -37
    // -16 -12 -14 -14 -14 -21 5 -9 25 -49 28 -68 6 -11 -13 -14 -13 -27 0 -21 21
    // -27 19 -62 -20z"
    //                   />
    //                   <path
    //                     d="M2474 818 c-4 -7 -14 -24 -22 -38 -14 -25 -14 -25 3 -2 18 22 45 30
    // 45 12 0 -5 -9 -24 -20 -42 -24 -40 -26 -76 -3 -85 23 -9 61 16 85 57 20 33 20
    // 33 -16 -7 -60 -69 -86 -52 -46 28 21 40 21 40 1 65 -14 18 -21 21 -27 12z"
    //                   />
    //                   <path
    //                     d="M3376 786 c-60 -65 -99 -116 -88 -116 5 0 17 10 25 23 13 18 16 19
    // 16 5 1 -22 36 -41 60 -33 10 3 26 14 36 25 17 19 18 19 35 -3 l18 -22 28 20
    // c15 12 34 32 43 45 9 14 -1 7 -22 -14 -29 -30 -40 -37 -49 -28 -9 9 -6 25 15
    // 67 29 60 32 69 18 60 -5 -3 -12 -1 -16 5 -3 5 -22 10 -42 10 -29 0 -43 -8 -77
    // -44z m114 16 c0 -24 -52 -96 -83 -117 -26 -17 -57 -11 -57 10 0 53 64 125 111
    // 125 22 0 29 -5 29 -18z"
    //                   />
    //                   <path
    //                     d="M3594 818 c-4 -7 -14 -24 -22 -38 -14 -25 -14 -25 3 -2 18 22 45 30
    // 45 12 0 -5 -9 -24 -20 -42 -24 -40 -26 -76 -3 -85 23 -9 61 16 85 57 20 33 20
    // 33 -16 -7 -60 -69 -86 -52 -46 28 21 40 21 40 1 65 -14 18 -21 21 -27 12z"
    //                   />
    //                   <path
    //                     d="M1833 798 c-15 -20 -25 -38 -20 -38 3 0 12 11 21 25 17 26 16 35 -1
    // 13z"
    //                   />
    //                   <path d="M868 713 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
    //                 </g>
    //               </svg>
    //               <svg
    //                 width="50px"
    //                 height="50px"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
    //                   stroke="#000000"
    //                   strokeWidth="1.5"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //                 <path
    //                   d="M12 6V14"
    //                   stroke="#000000"
    //                   strokeWidth="1.5"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //                 <path
    //                   d="M15 11L12 14L9 11"
    //                   stroke="#000000"
    //                   strokeWidth="1.5"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //               </svg>
    //             </div>
    //           </div>

    //           <div className="flex flex-col gap-12 justify-center">
    //             <h1 className=" font-bold text-2xl">SKILLS</h1>
    //             <div className="flex gap-4 flex-wrap">
    //               {skills.map((skill) => (
    //                 <div
    //                   key={skill.name}
    //                   className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
    //                 >
    //                   {skill.name}
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //           <div className="flex flex-col gap-12 justify-center pb-48">
    //             <h1 className=" font-bold text-2xl">EXPERIENCE</h1>
    //             {/* Experience list */}
    //             <div>
    //               {/* Experience list item */}
    //               <div className="flex justify-between h-48">
    //                 {/* Left */}
    //                 <div className="w-1/3">
    //                   {/* title */}
    //                   <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
    //                     Senior Js engineer
    //                   </div>
    //                   {/* desc */}
    //                   <div className=" p-3 text-sm italic">
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.

    //                   </div>
    //                   {/* date */}
    //                   <div className="p-3 text-red-400 text-sm font-semibold">
    //                     2020 - 2022
    //                   </div>
    //                   {/* company */}
    //                   <div className="p-1 rounded bg-white text-sm font-semibold">
    //                     Google
    //                   </div>
    //                 </div>
    //                 {/* Center */}
    //                 <div className="w-1/6 bg-red-300">
    //                   {/* line */}
    //                   <div>
    //                     {/* circle */}
    //                     <div></div>
    //                   </div>
    //                 </div>
    //                 {/* Right */}
    //                 <div className="w-1/3 bg-red-900"></div>
    //               </div>
    //               <div>
    //                 {/* Left */}
    //                 <div></div>
    //                 {/* Center */}
    //                 <div>
    //                   {/* line */}
    //                   <div>
    //                     {/* circle */}
    //                     <div></div>
    //                   </div>
    //                 </div>
    //                 {/* Right */}
    //                 <div>
    //                   {/* title */}
    //                   <div>Senior Js engineer</div>
    //                   {/* desc */}
    //                   <div>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                     Natus, quam!
    //                   </div>
    //                   {/* date */}
    //                   <div>2020 - 2022</div>
    //                   {/* company */}
    //                   <div>Google</div>
    //                 </div>
    //               </div>
    //               <div>
    //                 {/* Left */}
    //                 <div>
    //                   {/* title */}
    //                   <div>Senior Js engineer</div>
    //                   {/* desc */}
    //                   <div>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                     Natus, quam!
    //                   </div>
    //                   {/* date */}
    //                   <div>2020 - 2022</div>
    //                   {/* company */}
    //                   <div>Google</div>
    //                 </div>
    //                 {/* Center */}
    //                 <div>
    //                   {/* line */}
    //                   <div>
    //                     {/* circle */}
    //                     <div></div>
    //                   </div>
    //                 </div>
    //                 {/* Right */}
    //                 <div></div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="hidden"></div>
    //       </div>
    //     </motion.div>
  );
};

export default About;
