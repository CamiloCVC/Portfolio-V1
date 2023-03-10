import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex justify-between items-start max-w-7xl mx-auto z-20 xl:items-center p-4">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/camilocastellanos-dev"
          fgColor="gray"
          bgColor="transparent"
        />

        {/* <SocialIcon
          url="https://linkedin.com/in/camilocastellanos-dev"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://linkedin.com/in/camilocastellanos-dev"
          fgColor="gray"
          bgColor="transparent"
        /> */}
      </motion.div>
      <div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="#contactme"
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <Link href="#contactme">
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get in touch!
            </p>
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
