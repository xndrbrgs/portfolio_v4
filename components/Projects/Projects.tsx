import React, { useEffect, useRef } from "react";
import ProjectsHeader from "./ProjectsHeader";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { useInView } from "framer-motion";

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Projects() {
  return (
    <div>
      <ProjectsHeader />
      <Section>
        <div className="grid xl:grid-cols-3 grid-cols-1  px-5 gap-2 xl:divide-x divide-y">
          <div className="xl:text-8xl text-5xl font-bold text-ash-gray w-[40rem] leading-[90%] tracking-[-2px] lg:py-12 py-5">
            <div>
              LABORATORIO <br />
              SAN BLAS
            </div>
          </div>
          <div className="leading-[150%] lg:py-12 py-5 px-5">
            <div>
              <p className="py-2 md:text-3xl text-lg">
                Laboratorio San Blas is a chain of clinical laboratories found
                throughout the southern region of Puerto Rico. This website uses
                React, NextJS, TypeScript, Sanity.io, and TailwindCSS.
              </p>
              <p className="py-2 md:text-xl text-lg font-bold text-air-force-blue">
                Some pages may seem incomplete as I am currently working with
                the client (currently being fixed in development).
              </p>
              <div className="flex space-x-5">
                <a href="https://github.com/xndrbrgs/lab_sanblas">
                  <AiFillGithub className="py-2 md:w-20 md:h-20 h-10 w-10 hover:translate-y-2 transition" />
                </a>
                <a href="https://lab-sanblas.vercel.app/">
                  <AiOutlineArrowRight className="py-2 md:w-20 md:h-20 h-10 w-10 hover:translate-y-2 transition" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:py-12 py-5 flex items-center justify-center flex-col">
            <Image
              src="https://i.ibb.co/g95ytsB/Capture.png"
              width={700}
              height={700}
              alt="San Blas Homepage"
              className="p-5"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid xl:grid-cols-3 grid-cols-1  px-5 gap-2 xl:divide-x divide-y">
          <div className="xl:text-8xl text-5xl font-bold text-ash-gray w-[40rem] leading-[90%] tracking-[-2px] lg:py-12 py-5">
            <div>
              SPOTIFY WEB <br />
              PLAYER REMAKE
            </div>
          </div>
          <div className="lg:py-12 py-5 flex items-center justify-center">
            <Image
              src="https://i.ibb.co/PrK0ggS/spotiofy.png"
              width={800}
              height={800}
              alt="Spotify Homepage"
              className="p-5"
            />
          </div>
          <div className="leading-[150%] lg:py-12 py-5 px-5">
            <div>
              <p className="py-2 md:text-3xl text-lg">
                Personal remake of the online Spotify music player. View your
                top artists, top tracks, recently played tracks, and saved
                playlists. This website uses React, NextJS, TailwindCSS,
                NextAuth and the Spotify API.
              </p>
              <p className="py-2 md:text-xl text-lg font-bold text-air-force-blue">
                Because of how the Spotify API works, separate official Spotify
                app window must be open to hear music from app.
              </p>
              <p className="py-2 md:text-xl text-lg">
                Please allow 10-15s to spin up.
              </p>
              <div className="flex space-x-5">
                <a href="https://github.com/xndrbrgs/spotify_remake">
                  <AiFillGithub className="py-2 md:w-20 md:h-20 h-10 w-10 hover:translate-y-2 transition" />
                </a>
                <a href="https://spotify-remake-ab.vercel.app/">
                  <AiOutlineArrowRight className="py-2 md:w-20 md:h-20 h-10 w-10 hover:translate-y-2 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid xl:grid-cols-3 grid-cols-1  px-5 gap-2 xl:divide-x divide-y">
          <div className="xl:text-8xl text-5xl font-bold text-ash-gray w-[40rem] leading-[90%] tracking-[-2px] lg:py-12 py-5">
            <div>
              FINDING
              <br />
              ACES
            </div>
          </div>
          <div className="leading-[150%] lg:py-12 py-5 px-5">
            <div>
              <p className="py-2 md:text-3xl text-lg">
                Finding Aces is a personal blog discussing everything golf, from
                new golf tech to personal swing analysis. This website uses
                React, NextJS, TypeScript, Sanity.io, and TailwindCSS.
              </p>
              <div className="flex space-x-5">
                <a href="https://github.com/xndrbrgs/finding-aces-next">
                  <AiFillGithub className="py-2 md:w-20 md:h-20 h-10 w-10 hover:translate-y-2 transition" />
                </a>
                <a href="https://finding-aces-next.vercel.app/">
                  <AiOutlineArrowRight className="py-2 md:w-20 md:h-20 h-10 w-10 hover:translate-y-2 transition" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:py-12 py-5 flex items-center justify-center flex-col">
            <Image
              src="https://i.ibb.co/ZBzPrqN/finding-aces.png"
              width={700}
              height={700}
              alt="San Blas Homepage"
              className="p-5"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid xl:grid-cols-3 grid-cols-1  px-5 gap-2 xl:divide-x divide-y">
          <div className="xl:text-8xl text-5xl font-bold text-ash-gray w-[40rem] leading-[90%] tracking-[-2px] lg:py-12 py-5">
            <div>
              THE <br />
              CHRONICLER
            </div>
          </div>
          <div className="lg:py-12 py-5 flex items-center justify-center">
            <Image
              src="https://i.ibb.co/JH4JGyN/homepage.png"
              width={500}
              height={500}
              alt="Spotify Homepage"
              className="p-5"
            />
          </div>
          <div className="leading-[150%] lg:py-12 py-5 px-5">
            <div>
              <p className="py-2 md:text-3xl text-lg">
                The Chronicler is a database of 10,000 books which allows users
                to find similar books based on title, authors, and genre. Users
                can also save their newfound books in a collection section. This
                app uses JavaScript, MySQL, NodeJS, Express, and Bootstrap.
              </p>
              <p className="py-2 md:text-xl text-lg font-bold text-air-force-blue">
                Heroku has taken down application (currently being fixed in
                development).
              </p>
              <div className="flex space-x-5">
                <a href="https://github.com/xndrbrgs/the_chronicler">
                  <AiFillGithub className="py-2 md:w-20 md:h-20 h-10 w-10 hover:translate-y-2 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid xl:grid-cols-3 grid-cols-1  px-5 gap-2 xl:divide-x divide-y">
          <div className="xl:text-8xl text-5xl font-bold text-ash-gray w-[40rem] leading-[90%] tracking-[-2px] lg:py-12 py-5">
            <div>LYFE</div>
          </div>
          <div className="leading-[150%] lg:py-12 py-5 px-5">
            <div>
              <p className="py-2 md:text-3xl text-lg">
                Lyfe is a lifestyle tracker, allowing a user to track daily
                habits to lead towards a better life. The four main components
                of the Lyfe application are: Exercise, Mindfulness, Nutrition
                and Water. These four pillars will help you feel better and
                motivated to conquer every day life. This app uses React,
                GraphQL, Express, and SCSS.
              </p>
              <p className="py-2 md:text-xl text-lg font-bold text-air-force-blue">
                Heroku has taken down application (currently being fixed in
                development).
              </p>
              <p className="py-2 md:text-xl text-lg">
                Please allow 10-15s to spin up.
              </p>
              <a href="https://github.com/labrecquemegan/lyfe">
                <AiFillGithub className="py-2 md:w-20 md:h-20 h-10 w-10 hover:translate-y-2 transition" />
              </a>
            </div>
          </div>
          <div className="lg:py-12 py-5 flex items-center justify-center flex-col">
            <Image
              src="https://i.ibb.co/h1xbPKc/landing-preview.png"
              width={700}
              height={700}
              alt="Chronicler Homepage"
              className="p-5"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Projects;
