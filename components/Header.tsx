import React from "react";
import { motion } from "framer-motion";
import { riseHeader } from "../utils/animations";

function Header() {
  return (
    <motion.div
      className="flex p-7 justify-between text-2xl z-50 sticky top-0 xl:items-center"
      variants={riseHeader}
    >
      <div className="font-bold">
        <h1>HOME</h1>
      </div>
      <div className="flex space-x-7">
        <div>
          <p>ABOUT</p>
        </div>
        <div>
          <p>EXPERIENCE</p>
        </div>
        <div>
          <p>CONTACT</p>
        </div>
        <div>
          <p>RESUME</p>
        </div>
      </div>
      {/* <div>
        hamburger
      </div> */}
    </motion.div>
  );
}

export default Header;
