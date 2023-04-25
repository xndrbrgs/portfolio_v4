import React from "react";
import { motion } from "framer-motion";
import { riseHero } from "../utils/animations";

function Hero() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center mx-auto max-w-7xl"
      variants={riseHero}
    >
      <div>
        <p className="text-lg text-air-force-blue">Hi, my name is</p>
        <h1 className="text-9xl font-bold text-ash-gray py-3">
          Alexander
          <br />
          Borges{" "}
        </h1>
        <p className="pt-4 text-4xl text-air-force-blue">
          I’m a full-stack web developer specializing in building (and
          occasionally designing) exceptional digital experiences.
        </p>
      </div>
      <div></div>
    </motion.div>
  );
}

export default Hero;
