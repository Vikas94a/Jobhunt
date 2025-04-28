import React, { useState, useEffect } from "react";
import axios from "axios";
// import { login } from "../../context/AuthSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../ui/input.jsx";
import { Label } from "@radix-ui/react-label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.jsx";
import { Button } from "../ui/button.jsx";
import { Loader2, Target } from "lucide-react";

function UpdateProfileForm({ open, setOpen }) {
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    Skills: user?.profile?.skills.map((skill) => skill),
  });

  const fileHandler = (e) => {
    const file = e.target.file?.[0];
    setInput({ ...input, file });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdateProfile}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="fullname"
                  id="name"
                  value={input.fullname}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  value={input.email}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-1">
                <Label htmlFor="number">Number</Label>
                <Input
                  name="phoneNumber"
                  id="phoneNumber"
                  value={input.phoneNumber}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-1">
                <Label htmlFor="Bio">Bio</Label>
                <Input
                  name="Bio"
                  id="Bio"
                  value={input.bio}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-1">
                <Label htmlFor="Skills">Skills</Label>
                <Input
                  name="Skills"
                  id="Skills"
                  value={input.Skills}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-1">
                <Label htmlFor="resume">Resume</Label>
                <Input
                  type="file"
                  id="file"
                  name="file"
                  onChange={fileHandler}
                  accept="application/pdf"
                  className="col-span-3"
                />
              </div>
            </div>
            <div>
              {loading ? (
                <Button className="w-full my-4">
                  <Loader2 className="mr-2 h-4 w-4  animate-spin">
                    Please Wait
                  </Loader2>
                </Button>
              ) : (
                <Button type="submit">Update</Button>
              )}
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileForm;
