import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../ui/input.jsx";
import { Label } from "@radix-ui/react-label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog.jsx";
import { Button } from "../ui/button.jsx";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { setUser, setLoading } from "../../context/AuthSlice.js";

function UpdateProfileForm({ open, setOpen }) {
  const { loading } = useSelector((state) => state.auth);
  console.log(loading);
  const dispatch = useDispatch();

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

  console.log("🔥 handleUpdateProfile fired!", input);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  console.log(input.fullname);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // Validate required fields
    if (!input.fullname || !input.email || !input.phoneNumber) {
      toast.error("Required fields cannot be empty");
      return;
    }
    const formData = new FormData();
    formData.append("fullname", input.fullname || "");
    formData.append("email", input.email || "");
    formData.append("phoneNumber", input.phoneNumber || "");
    formData.append("bio", input.bio || "");
    formData.append("skills", input.Skills || "");
    if (file) {
      formData.append("file", input.file);
    }

    console.log(formData);
    dispatch(setLoading(true));
    try {
      const respond = await axios.put(
        `http://localhost:8000/api/v1/user/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
          timeout: 5000,
        }
      );

      if (respond) {
        toast.success(respond.data.message);
        dispatch(setUser(respond.data.user));
        setOpen(false);
      }

      setInput({
        fullname: "",
        email: "",
        phoneNumber: "",
        bio: "",
        Skills: "",
      });
    } catch (error) {
      if (error.response) {
        console.log("123");
        toast.error(error.response.data.message || "Something went wrong");
      } else {
        toast.error("Network error or server is down");
      }
    } finally {
      console.log("tset 5");
      dispatch(setLoading(false));
    }
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
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  name="fullname"
                  id="fullname"
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
                <Label htmlFor="bio">Bio</Label>
                <Input
                  name="bio"
                  id="bio"
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
