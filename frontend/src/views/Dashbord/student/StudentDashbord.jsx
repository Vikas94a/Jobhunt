import axios from "axios";
import { useState } from "react";
import AppliedJob from "./AppliedJob.jsx";
import UpdateProfileForm from "../../../components/profile/UpdateProfileForm.jsx";
import { useSelector } from "react-redux";
import { setUser, setLoading } from "../../../context/AuthSlice.js";

import { Button } from "../../../components/ui/button.jsx";
import { Pen, Mail, Contact } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar.jsx";
import { Badge } from "../../../components/ui/badge.jsx";

function StudentDashbord() {
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const skills = ["HTML", "CSS", "JS"];

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
              <h1 className="font-bold">{user?.fullname}</h1>
              <p className="text-zinc-400">
               {user?.bio}
              </p>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="bg-white text-black border-1  hover:bg-blue-200"
            >
              <Pen />
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <a className="flex gap-2" href="mailto:Vikas@gmail.com">
              <Mail />
           {user?.email}
            </a>
            <a className="flex gap-2" href="tel:94712904">
              <Contact />
              {user?.phoneNumber}
            </a>
          </div>
          <span className="ml-2">Skills</span>
          <div className="flex">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="flex ">
                  <Badge className="bg-black text-white" variant="Secondary">
                    {skill}
                  </Badge>
                </div>
              );
            })}
          </div>

          <div>
            <span className="flex font-bold">Resume(CV)</span>
            <a className="text-blue-400" href="">
              Laste ned
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

      <UpdateProfileForm open={open} setOpen={setOpen} />
    </div>
  );
}

export default StudentDashbord;
