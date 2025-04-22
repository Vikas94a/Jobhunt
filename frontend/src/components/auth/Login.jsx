import React from "react";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.jsx";
import { Button } from "../ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/context/authSlice";
import { Cog, Contact } from "lucide-react";

function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respond = await axios.post(
        `http://localhost:8000/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const { user } = respond.data;

      dispatch(login(user));
      console.log(user);

      if (respond.status === 200 || respond.status === 201) {
        toast.success("Login sucessfully");

        dispatch(login(respond.data.users));
        localStorage.setItem("data", userData);

        setUser({
          email: "",
          password: "",
          role: "",
        });

        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Signup failed");
      } else {
        toast.error("Network error or server is down");
      }
    }
  };

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto h-screen">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-xl mb-5">Login</h1>
        <div className="my-2 ">
          <Label> Email </Label>
          <Input
            className="mt-2"
            type="email"
            name="email"
            placeholder="David@gmail.com"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="my-2 ">
          <Label>Password </Label>
          <Input
            className="mt-2"
            type="password"
            name="password"
            placeholder="Xyz@gmail.com"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <RadioGroup className="flex items-center gap-4 my-5">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="student"
                name="role"
                checked={user.role === "student"}
                onChange={handleChange}
              />
              <Label htmlFor="option-one">Student </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="recruiter"
                name="role"
                checked={user.role === "recruiter"}
                onChange={handleChange}
              />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
