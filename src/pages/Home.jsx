import React, { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

import adLogo from "../assets/images/ad-logo.jpg";

import data from "../assets/data/data";

import SliderComponent from "../components/Slider";
import HorizontalMovieCard from "../components/HorizontalMovieCard";
import VerticalMovieCard from "../components/VerticalMovieCard";
import Heading from "../components/Heading";
import MainMovieCard from "../components/MainMovieCard";
import Category from "../components/Category";
import Instruction from "../components/Instruction";
import Alpha from "../components/Alpha";

const horizontalCard = data.horizontalCard;
const mainCard = data.mainCard;
const category = data.category;
const instruction = data.instruction;

const Home = () => {
  const [movie, setMovie] = useState([]);
  return (
    <section className="w-full flex flex-col bg-neutral-900 mx-auto md:w-[88.5%]">
      <Alpha />
      <div className="w-full flex flex-col  m-auto md:w-[88.5%] py-2 md:flex-row">
        <main className="w-full  px-4 md:w-[70%] flex-row mx-auto border-r-[1px] border-gray-700">
          <div className="py-1 md:py-4">
            <SliderComponent />
          </div>

          {/* Bangla Subbed  */}
          <section
            name="movies-card"
            className="flex flex-col border-b-[1px] border-gray-600 py-4"
          >
            {/* heading  */}
            <div
              name="heading"
              className="py-4 flex justify-between items-center"
            >
              <h2 className="border-l-4 border-l-red-600 text-white px-2 text-xl">
                Bangla Subtitled
              </h2>
              <div className="flex">
                <IoMdArrowDropleft className="text-white text-2xl hover:text-red-600" />
                <IoMdArrowDropright className="text-white text-2xl hover:text-red-600" />
              </div>
            </div>

            {/* movies stack */}
            <div className="w-full grid grid-cols-3 md:grid-cols-5">
              {horizontalCard.map((e) => {
                return (
                  <VerticalMovieCard
                    image={e.image}
                    title={e.title}
                    subtitle={e.subtitle}
                    rating={e.rating}
                    year={e.year}
                  />
                );
              })}
            </div>
          </section>

          {/* Latest Movies  */}
          <section className="flex flex-col border-b-[1px] border-gray-600 py-4">
            <Heading heading="Latest Movies" numbers={10239} />
            <div className="grid grid-cols-3 md:grid-cols-5">
              {mainCard.map((e, i) => {
                return (
                  <Link to="/movies" state={{ movie }}>
                    <div onMouseOver={() => setMovie(e)}>
                      <MainMovieCard
                        key={i}
                        image={e.image}
                        title={e.title}
                        level={e.level}
                        rating={e.rating}
                        date={e.date}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* TV & WEB Series */}
          <section className="flex flex-col py-4">
            <Heading heading="TV & WEB Series" />
            <div className="grid grid-cols-3 md:grid-cols-5">
              {mainCard.map((e, i) => {
                return (
                  <Link to="/movies" state={{ movie }}>
                    <div onMouseOver={() => setMovie(e)}>
                      <MainMovieCard
                        key={i}
                        image={e.image}
                        title={e.title}
                        level={e.level}
                        rating={e.rating}
                        date={e.date}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Extras and news  */}
          <section className="flex flex-col py-4">
            <Heading heading="Last entries" />
            {instruction.map((e, i) => {
              return (
                <Instruction
                  key={i}
                  title={e.title}
                  date={e.date}
                  month={e.month}
                  description={e.description}
                />
              );
            })}
          </section>
        </main>

        {/* Sidebar  */}
        <aside className="w-full flex flex-col justify-center items-center relative md:w-[30%] ml-4">
          <section className=" md:absolute top-10 left-4">
            <img
              src={adLogo}
              alt="adLogo"
              className="w-[200px] my-10 mx-auto"
            />
            <div className="">
              <h2 className="text-base text-white text-left my-2">
                Latest Updates
              </h2>

              {horizontalCard.map((e, i) => {
                return (
                  <Link to="/movies" state={{ movie }}>
                    <div onMouseOver={() => setMovie(e)}>
                      <HorizontalMovieCard
                        key={i}
                        image={e.image}
                        title={e.title}
                        rating={e.rating}
                        year={e.year}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col items-start my-2">
              <h2 className="text-base text-white text-left">Category</h2>
              {category.map((e) => {
                return <Category category={e} />;
              })}
            </div>
          </section>
        </aside>
      </div>
      <footer className="text-xs text-gray-600 border-t-[1px] border-gray-700 px-10 py-4">
        MLWBD does not rip or host any files on it’s servers. All files or
        contents hosted on third party websites. MLWBD doesn't accept the
        responsibility for contents hosted on third party websites. Also MLWBD
        doesn't RIP/Pirate any file. We just collect links from other websites.
        Nothing Else.
      </footer>
    </section>
  );
};

export default Home;
