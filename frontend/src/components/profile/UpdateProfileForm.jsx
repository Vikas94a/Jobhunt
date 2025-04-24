import React, { useState } from "react";
import axios from "axios";
import { login } from "../../context/AuthSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../ui/input";
import { Label } from "../ui/label.jsx";
import { Button } from "../ui/button.jsx";
import { toast } from "sonner";
import { use } from "react";

function UpdateProfileForm() {
  const dispatch = useDispatch();

  const [updatedDetails, setUpdatedDetails] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    bio: "",
    skills: "",
  });
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  function handleUpdateDetails(e) {
    setUpdatedDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
   
    try {
      const respond = await axios.put(
        `http://localhost:8000/api/v1/user/profile/update`,
        updatedDetails,
        {
          withCredentials: true,
        }
      );

      if (respond.status === 200) {
        toast.success("Profile updated Successfully");
        setUpdatedDetails({
          fullname: "",
          email: "",
          phoneNumber: "",
          bio: "",
          skills: "",
        });
      }
    } catch (error) {
      if (error.respond) {
        toast.error(error.respond.message || "Something went wront");
      } else {
        toast.error("Network error or server is down");
      }
    }
  }
  console.log(updatedDetails);
  return (
    <div className="bg-blue">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-10 inset-0 bg-white gap-2 max-w-7xl rounded-2xl shadow-2xl"
      >
        <h2>Update Profile</h2>
        <div>
          <Label> Name </Label>
          <Input
            className="border-black mt-2"
            type="fullname"
            name="fullname"
            value={updatedDetails.name}
            placeholder="Enter your full name"
            onChange={handleUpdateDetails}
            required
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            className="border-black mt-2"
            type="email"
            name="email"
            value={updatedDetails.email}
            placeholder="name@xyz.com"
            onChange={handleUpdateDetails}
            required
          />
        </div>
        <div>
          <Label>phoneNumber</Label>
          <Input
            className="border-black mt-2"
            type="phoneNumber"
            name="phoneNumber"
            value={updatedDetails.phoneNumber}
            placeholder="937403830"
            onChange={handleUpdateDetails}
          />
        </div>
        <div>
          <Label>Bio</Label>
          <Input
            className="border-black mt-2"
            type="bio"
            name="bio"
            value={updatedDetails.bio}
            placeholder="Write something about you"
            onChange={handleUpdateDetails}
          />
        </div>
        <div>
          <Label>Skills</Label>
          <Input
            className="border-black mt-2 "
            type="skills"
            name="skills"
            value={updatedDetails.skills}
            placeholder="Html, CSS, Js"
            onChange={handleUpdateDetails}
            required
          />
        </div>
        <div>
          <Label>Resume</Label>
          <Input type="file" />
        </div>
        <div className="flex">
          <Button type="submit">Update Profile</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfileForm;
