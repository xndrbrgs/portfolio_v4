import React from "react";
import { motion } from "framer-motion";
import { riseHero } from "../utils/animations";

function Hero() {
  return (
    <motion.div
      className="h-screen flex items-center justify-center mx-auto max-w-7xl px-5"
      variants={riseHero}
    >
      <div>
        <p className="md:text-lg text-air-force-blue text-sm">Hi, my name is</p>
        <h1 className="md:text-9xl text-7xl font-bold text-ash-gray py-3">
          Alexander
          <br />
          Borges{" "}
        </h1>
        <p className="pt-4 text-lg md:text-4xl text-air-force-blue">
          I’m a full-stack web developer specializing in building (and
          occasionally designing) exceptional digital experiences.
        </p>
      </div>
      <div></div>
    </motion.div>
  );
}

export default Hero;
