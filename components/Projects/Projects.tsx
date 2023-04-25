import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";

function Projects() {
  return (
    <div>
      <ProjectsHeader />
      <div className="">
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center px-5 py-7 border-y-2 gap-2">
          <div className="text-5xl text-bold text-ash-gray">
            <div>THE CHRONICLER</div>
          </div>
          <div className="text-lg">
            <p className="py-2">
              The Chronicler is a database of 10,000 books which allows users to
              find similar books based on title, authors, and genre. Users can
              also save their newfound books in a collection section. This app
              uses JavaScript, MySQL, NodeJS, Express, and Bootstrap. App hosted
              on free Heroku server.
            </p>
            <p className="py-2">Please allow 10-15s to spin up.</p>
            <a href="">
              <AiFillGithub className="py-2 w-20 h-20 hover:translate-y-2 transition" />
            </a>
          </div>
          <div>
            <Image
            src='https://i.ibb.co/JH4JGyN/homepage.png'
            width={800}
            height={800}
            alt='Chronicler Homepage'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
