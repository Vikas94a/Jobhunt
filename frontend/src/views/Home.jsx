import React from "react";
import {Link} from "react-router"
import Jobcards from "../components/shared/Jobcards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import store from "../context/store";

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Dummy logo image
    location: "Oslo, Norway",
    type: "Full-time",
    positions: 2,
    salary: "NOK 650,000/year",
  },
  {
    id: 2,
    title: "React Developer Intern",
    company: "CodeSprinters",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
,
    location: "Bergen, Norway",
    type: "Part-time",
    positions: 1,
    salary: "NOK 200/hour",
  },
  {
    id: 3,
    title: "IT Support Specialist",
    company: "Nordic IT Hub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
,
    location: "Stavanger, Norway",
    type: "Full-time",
    positions: 3,
    salary: "NOK 550,000/year",
  },
  {
    id: 4,
    title: "Backend Developer (Node.js)",
    company: "ScandiTech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
,
    location: "Trondheim, Norway",
    type: "Full-time",
    positions: 1,
    salary: "NOK 720,000/year",
  },
  {
    id: 5,
    title: "Junior Web Developer",
    company: "InnovateX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
,
    location: "Kristiansand, Norway",
    type: "Part-time",
    positions: 2,
    salary: "NOK 250/hour",
  },
];

function Home() {
  console.log(store)
  return (
    <div>
      {/* heading and title of page */}
      <div className="flex justify-center items-center">
        <h2 className="bg-gray-200 text-red-700 px-4 py-3 rounded-full">
          No.1 Jobhunt website
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="text-5xl w-115 text-center font-bold">
          Search , Apply & Get your{" "}
          <span className="text-purple-700">Dream Job</span>
        </h1>
        <p className="mt-4 text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          expedita, asperiores eum illum maxime labore aspernatur commodi qui ex
          a!
        </p>
      </div>

      {/* search bar for home page  */}
      <div className="flex justify-center items-center mt-8 max-w-7xl">
        <div className="flex items-center border rounded-2xl w-140 h-10">
          <input
            className="w-full h-auto outline-0 px-2"
            type="text"
            placeholder="Find your dream jobs"
          />
          {/* Maginifying from fontawesome  */}
          <FontAwesomeIcon
            className="w-12 bg-purple-600 p-2 rounded-r-md text-white font-bold text-2xl"
            icon={faMagnifyingGlass}
          />
        </div>
      </div>

      {/* carousel  */}
      <div className="flex justify-center items-center w-full mt-9">
        <Carousel className="flex justify-center items-center w-1/2 ">
          <CarouselContent className="w-50">
            <CarouselItem>
              <p className="bg-zinc-400 flex justify-center items-center rounded-full w-40   cursor-pointer">
                Front-end
              </p>
            </CarouselItem>
            <CarouselItem>
              <p className="bg-zinc-400 flex justify-center items-center rounded-full w-40 cursor-pointer ">
                Front-end
              </p>
            </CarouselItem>
            <CarouselItem>
              <p className="bg-zinc-400 flex justify-center items-center rounded-full w-40 cursor-pointer ">
                Front-end
              </p>
            </CarouselItem>
            <CarouselItem>
              <p className="bg-zinc-400 flex justify-center items-center rounded-full w-40  cursor-pointer">
                Front-end
              </p>
            </CarouselItem>
            <CarouselItem>
              <p className="bg-zinc-400 flex justify-center items-center rounded-full w-40  cursor-pointer">
                Front-end
              </p>
            </CarouselItem>
            <CarouselItem>
              <p className="bg-zinc-400 flex justify-center items-center rounded-full w-40  cursor-pointer">
                Front-end
              </p>
            </CarouselItem>
            <CarouselItem>
              <p className="bg-zinc-400 flex justify-center items-center rounded-full w-40 cursor-pointer ">
                Front-end
              </p>
            </CarouselItem>
            <CarouselItem>
              <p className="bg-zinc-400 flex justify-center items-center rounded-full w-40 cursor-pointer ">
                Front-end
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div>
        <h3 className="text-2xl mt-18 px-20 font-medium ">
          Suggestion for today
          <span className="text-purple-600"> Jobs opening</span>
        </h3>
      </div>

      <div className="flex flex-wrap  justify-center m-auto gap-8 p-7 w-full mt-15">
        {jobData.length === 0 ? (
          <div> Loading </div>
        ) : (
          jobData.map((data) => {
            return (
              <div key={data.id}>
                <Jobcards
                  id={data.id}
                  logo={data.logo}
                  company={data.company}
                  location={data.location}
                  title={data.title}
                  position={data.positions}
                  type={data.type}
                  salary={data.salary}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
