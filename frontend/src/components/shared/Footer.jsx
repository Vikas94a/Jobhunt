import React from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import jobhuntLogo from "../../assets/jobhunt.png";

function Footer() {
  return (
    <>
      <div className="flex justify-between items-center p-12">
        <div>
          <img className="h-52 w-52 " src={jobhuntLogo} alt="Jobhunt Logo" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <h3 className="font-medium  text-zinc-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
          </div>
          <div className="flex border-1 rounded-2xl ">
            <input
              className="outline-none h-auto px-4"
              type="text"
              name="email"
            />
            <Button className="bg-blue-500 rounded-r-md hover:bg-blue-700">
              {" "}
              Send
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-xl">
          <div>
            <h5 className="font-bold text-zinc-400 text-xl"> Folow us</h5>
          </div>
          <FontAwesomeIcon className="cursor-pointer" icon={faFacebook} />
          <FontAwesomeIcon className="cursor-pointer" icon={faInstagram} />
          <FontAwesomeIcon className="cursor-pointer" icon={faTwitter} />
          <FontAwesomeIcon className="cursor-pointer" icon={faYoutube} />
        </div>
      </div>
      <div className="bg-zinc-300 flex justify-center items-center font-bold text-2xl ">
        <h3 className="p-4">Copyright@2025</h3>
      </div>
    </>
  );
}

export default Footer;
