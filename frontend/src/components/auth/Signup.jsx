import React from "react";
import axios from "axios";
import { useState } from "react";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup } from "../ui/radio-group.jsx";
import { Button } from "../ui/button.jsx";
import { Toaster } from "../ui/sonner.jsx";
import { toast } from "sonner";

function Signup() {
  // State to store form input values
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  // Handle file upload 
  function fileHandler(e) {
    setInput({ ...input, file: e.target.files?.[0] });
  }

  // Handle changes in form inputs
  function handleChange(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Send POST request to register endpoint
      const response = await axios.post(
        `http://localhost:8000/api/v1/user/register`,
        input
      );

      // If registration successful, show success message
      if (response.status === 200 || response.status === 201) {
        toast.success("Signup Successful!");
        // Reset form fields
        setInput({
          fullname: "",
          email: "",
          phoneNumber: "",
          password: "",
          role: "",
          file: "",
        });
      }
    } catch (error) {
      // Show error message if registration fails
      if (error.response) {
        toast.error(error.response.data.message || "Signup failed");
      } else {
        toast.error("Network error or server is down");
      }
    }
  }

  return (
    <div className="h-screen ">
      {/* Main container */}
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        {/* Toast notifications */}
        <Toaster position="bottom-right" />
        
        {/* Signup form */}
        <form
          onSubmit={handleSubmit}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          
          {/* Full Name input */}
          <div className="my-2 ">
            <Label> Full Name </Label>
            <Input
              className="mt-2"
              name="fullname"
              onChange={handleChange}
              type="text"
              placeholder="David Smith"
              value={input.fullname}
              required
            />
          </div>

          {/* Email input */}
          <div className="my-2 ">
            <Label> Email </Label>
            <Input
              className="mt-2"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="David@gmail.com"
              value={input.email}
              required
            />
          </div>

          {/* Phone Number input */}
          <div className="my-2 ">
            <Label>Phone Number</Label>
            <Input
              className="mt-2"
              name="phoneNumber"
              onChange={handleChange}
              type="tel"
              placeholder="123456789"
              value={input.phoneNumber}
              required
            />
          </div>

          {/* Password input */}
          <div className="my-2 ">
            <Label>Password </Label>
            <Input
              className="mt-2"
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              value={input.password}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            {/* Role selection radio buttons */}
            <RadioGroup className="flex items-center gap-4 my-5">
              {/* Student role option */}
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="student">Student </Label>
              </div>
              {/* Recruiter role option */}
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>

            {/* Profile picture upload */}
            <div className="flex items-center gap-2 ">
              <Label>Profile</Label>
              <input
                type="file"
                accept="image/*"
                onChange={fileHandler}
                className="cursor-pointer border object-center p-2"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-center">
            <Button type="submit">Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;