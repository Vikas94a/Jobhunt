import React from "react";
import { Popover, PopoverContent } from "../ui/popover.jsx";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar.jsx";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import store from "../../context/store.js";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);


  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const user = useSelector((state) => state.auth.user);

  // const handleLogOut = () => {
  //   dispatch(logout());
  //   navigate("/");
  // };

  return (
    <div className="bg-white p-5">
      <div className="flex item-center justify-between mx-auto max-w-7xl h-16 ">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">
              Job <span className="text-[#f83002]">Portal</span>
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ul className="flex font-medium item-center gap-5">
            <Link to={"/"}>
              <li className="cursor-pointer">Home</li>
            </Link>

            <Link to={"/jobs"}>
              <li className="cursor-pointer">Jobs</li>
            </Link>

            <Link to={"/browse"}>
              <li className="cursor-pointer">Browse</li>
            </Link>
          </ul>
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={"/signup"}>
                <Button className="bg-blue-500 hover:bg-blue-700">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage
                    className=" rounded-full cursor-pointer"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage
                      className="h-6 rounded-full cursor-pointer"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-bold ">{user.fullname}</h4>
                    <p className="text-sm  text-muted-foreground">
                      Lorem ipsum dolor sit, amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Link to={"/viewprofile"}>
                      <Button className="border-none" variant="link">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
