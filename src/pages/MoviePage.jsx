import React from "react";
import { useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { ImFacebook, ImWhatsapp } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import data from "../assets/data/data";

import adLogo from "../assets/images/ad-logo.jpg";

import HorizontalMovieCard from "../components/HorizontalMovieCard";
import Category from "../components/Category";

const horizontalCard = data.horizontalCard;
const category = data.category;

const MoviePage = () => {
  const location = useLocation();
  console.log("location: ", location);
  const movie = location.state?.movie;
  console.log("data: ", movie);

  return (
    <section className="flex flex-col items-center py-2 relative">
      <div className="w-full px-2 flex flex-col bg-neutral-900 md:flex-row md:w-[88.5%]">
        <main className="flex flex-col ml-auto md:w-[70%] ">
          {/* heading  */}
          <section className="flex mb-8">
            <img src={movie.image} alt="movie" className="h-36 md:h-52" />
            <div>
              <h1 className="text-white ml-6 text-3xl font-normal">
                {movie.title}
              </h1>
              <h3 className="text-gray-400 text-sm ml-6 py-2">{movie.date}</h3>
            </div>
          </section>

          {/* button-group  */}
          <section className="grid grid-cols-2 border-t-2 border-b-2 border-neutral-700 py-8 text-white md:flex">
            <button className="w-[190px] my-2 py-2 bg-red-600 text-lg rounded md:w-20">
              Info
            </button>
            <button className="w-[190px] my-2 mx-2 py-2 bg-neutral-700 rounded text-lg md:w-20">
              Link
            </button>
            <button className="w-[180px] my-2 py-2 bg-neutral-700 rounded text-lg md:w-20">
              Cast
            </button>
          </section>

          {/* Synopsis */}
          <section className="flex flex-col px-4">
            <div name="heading" className="">
              <h2 className="text-white text-xl py-4 font-extrabold">
                Synopsis
              </h2>
              <p className="text-gray-400 text-base tracking-wide font-extrabold md:font-normal md:text-sm">
                Synopsis A family is attacked by demons and only two members
                survive – Tanjiro and his sister Nezuko, who is turning into a
                demon slowly. Tanjiro sets out to become a demon slayer to
                avenge his family and cure his sister.
              </p>
            </div>
            <div className="py-4">
              <h5 className="text-gray-400 text-lg">ScreenShot</h5>
              <img
                src="https://i.ibb.co/SxKcPrq/Screenshot-1012.png"
                className="my-4"
                alt=""
              />
              <img
                src="https://i.ibb.co/bLwkLfr/Screenshot-1011.png"
                className="my-4"
                alt=""
              />
              <img
                src="https://i.ibb.co/MRcGWBv/Screenshot-1013.png"
                className="my-4"
                alt=""
              />
              <p className="text-gray-400 text-base tracking-wide font-extrabold md:font-normal md:text-sm">
                Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train (Japanese:
                劇場版「鬼滅の刃」 無限列車編, Hepburn: Gekijō-ban “Kimetsu no
                Yaiba” Mugen Ressha-hen), also known as Demon Slayer: Mugen
                Train or Demon Slayer: Infinity Train. Demon Slayer Mugen Train
                Arc. Demon Slayer: Kimetsu No Yaiba – Entertainment District Arc
                . Demon Slayer Entertainment District Arc .
              </p>
            </div>
            <img
              src="https://image.tmdb.org/t/p/w300/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg"
              alt=""
              className="w-60"
            />
            <div className="md:flex items-center">
              <h6 className="text-white font-bold text-base py-3 mr-10">
                Original title
              </h6>
              <p className="text-gray-400 text-base">
                Demon Slayer: Kimetsu No Yaiba - Mugen Train Arc
              </p>
            </div>
            <div className="md:flex items-center">
              <h6 className="text-white font-bold text-base py-3 mr-10">
                IMDb Rating
              </h6>
              <div className="flex text-white text-base bg-neutral-900 px-1 py-1 items-center w-16">
                {" "}
                <AiFillStar className="mr-1" /> {movie.rating}
              </div>
            </div>
          </section>

          {/* Download Button  */}
          <section className="flex border-t-2 border-b-2 items-center border-gray-600 py-6 px-4">
            <button className="px-2 py-1 text-base text-white bg-neutral-900 mr-4">
              Links
            </button>
            <button className="px-2 py-1 text-base text-white bg-red-600">
              Download
            </button>
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
                  <HorizontalMovieCard
                    key={i}
                    image={e.image}
                    title={e.title}
                    rating={e.rating}
                    year={e.year}
                  />
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

      {/* social icons  */}
      <section className="flex abosolute bottom-0 left-0 text-white text-2xl w-full justify-center md:hidden">
        <div className="px-10 py-2 bg-blue-700 flex justify-center text-center">
          {" "}
          <ImFacebook />{" "}
        </div>
        <div className="px-10 py-2 bg-blue-400">
          {" "}
          <BsTwitter />{" "}
        </div>
        <div className="px-10 py-2 bg-red-700">
          {" "}
          <FaPinterestP />{" "}
        </div>
        <div className="px-10 py-2 bg-green-500">
          {" "}
          <ImWhatsapp />{" "}
        </div>
      </section>
      <footer className="hidden md:text-xs text-gray-600  px-10 py-12 w-[88.5%]">
        MLWBD does not rip or host any files on it’s servers. All files or
        contents hosted on third party websites. MLWBD doesn't accept the
        responsibility for contents hosted on third party websites. Also MLWBD
        doesn't RIP/Pirate any file. We just collect links from other websites.
        Nothing Else.
      </footer>
    </section>
  );
};

export default MoviePage;
