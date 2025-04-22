import React from "react";
import AppliedJob from "./AppliedJob.jsx";
import { Button } from "../../../components/ui/button.jsx";
import { Pen, Mail, Contact } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar.jsx";
import { Badge } from "../../../components/ui/badge.jsx";

function StudentDashbord() {
  return (
    <div>
      <div className="w-full p-10">
        <div className="flex flex-col  max-w-4xl mx-auto p-10 gap-5 shadow">
          <div className="flex justify-between items-center gap-5">
            <Avatar>
              <AvatarImage
                className=" rounded-full cursor-pointer"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
            </Avatar>
            <div>
              <h1 className="font-bold">Full Name</h1>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                natus aspernatur nesciunt alias temporibus at omnis perspiciatis
                neque nisi odit?
              </p>
            </div>
            <Button className="bg-white text-black border-1  hover:bg-blue-200">
              <Pen />
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <a className="flex gap-2" href="mailto:Vikas@gmail.com">
              <Mail />
              Vikas@gmail.com
            </a>
            <a className="flex gap-2" href="tel:94712904">
              <Contact />
              94712904
            </a>
          </div>
          <div>
            <span className="ml-2">Skills</span>
            <div className="flex gap-3 ">
              <Badge className="bg-black text-white" variant="Secondary">
                HTML
              </Badge>
              <Badge className="bg-black text-white" variant="Secondary">
                HTML
              </Badge>
              <Badge className="bg-black text-white" variant="Secondary">
                HTML
              </Badge>
            </div>
          </div>

          <div>
            <span className="flex font-bold">Resume(CV)</span>
            <a className="text-blue-400" href="">
              Laste ned{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="p-20">
        <h1 className="font-bold text-xl">Applied Jobs</h1>
        <div className="border mt-4">
        <AppliedJob />

        </div>
        
      </div>
    </div>
  );
}

export default StudentDashbord;
