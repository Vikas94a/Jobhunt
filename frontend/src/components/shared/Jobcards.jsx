import React from "react";
import { Badge } from "../ui/badge.jsx";

function Jobcards({
  id,
  title,
  company,
  logo,
  location,
  type,
  position,
  salary,
}) {
  return (
    <div className="grid grid-rows-1 md:grid-rows-3 gap-4 p-4 w-70  bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
      {/* Logo + Company */}
      <div className="flex flex-col items-center gap-3">
        <img
          src={logo}
          alt={title}
          className="w-14 h-14 object-contain rounded-full border border-gray-100 p-1 bg-gray-50"
        />
        <p className="text-sm font-semibold text-gray-800 text-center">
          {company}
        </p>
      </div>

      {/* Location + Title */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
        <p className="text-gray-500 text-sm">{location}</p>
        <strong className="text-xl font-bold text-gray-900">{title}</strong>
      </div>

      {/* Badges */}
      <div className="space-x-2">
        <Badge
          variant="outline"
          className="text-xs  text-blue-600 border-blue-600"
        >
          {position}
        </Badge>
        <Badge
          variant="Outline"
          className="text-xs  text-green-600 border-green-600"
        >
          {type}
        </Badge>
        <Badge
          variant="outline"
          className="text-xs text-purple-600 border-purple-600"
        >
          {salary}
        </Badge>
      </div>
    </div>
  );
}

export default Jobcards;
