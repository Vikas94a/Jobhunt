import React, { useReducer } from "react";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.jsx";
import { Button } from "../ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../../context/AuthSlice.js";
import { Loader2 } from "lucide-react";

function LogIn() {
  const [users, setUsers] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector((store) => store.auth);

  console.log(loading);

  // const { isLoggedIn } = useDispatch((state) => state.auth);

  // console.log(isLoggedIn)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUsers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const respond = await axios.post(
        `http://localhost:8000/api/v1/user/login`,
        users,
        {
          withCredentials: true,
        }
      );
      const userData = respond.data.user;
      console.log(userData);

      dispatch(setUser(userData));
      console.log(respond.data.user);
      if (respond.status === 200 || respond.status === 201) {
        toast.success("Login sucessfully");

        setUsers({
          email: "",
          password: "",
          role: "",
        });

        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Signup failed");
        console.log("error");
      } else {
        toast.error("Network error or server is down");
      }
    } finally {
      dispatch(setLoading(false));
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
            value={users.email}
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
            value={users.password}
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
                checked={users.role === "student"}
                onChange={handleChange}
              />
              <Label htmlFor="option-one">Student </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="recruiter"
                name="role"
                checked={users.role === "recruiter"}
                onChange={handleChange}
              />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center justify-center">
          {loading ? (
            <Button
              disabled
              className="w-full my-4 flex items-center justify-center text-white"
            >
              <Loader2 className="mr-2 h-4 w-4  animate-spin">
                Please Wait
              </Loader2>
            </Button>
          ) : (
            <Button className="w-full my-4" type="submit">
              Login
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default LogIn;
