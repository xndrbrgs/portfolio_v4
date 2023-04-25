import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Projects from "@/components/Projects";

const myFont = localFont({ src: "../public/fonts/Satoshi-Regular.ttf" });

export default function Home() {
  return (
    <motion.main
      className="bg-rich-black text-beige"
      initial="initial"
      animate="animate"
    >
      <Header />
      <Hero />
      <Projects/>
    </motion.main>
  );
}
