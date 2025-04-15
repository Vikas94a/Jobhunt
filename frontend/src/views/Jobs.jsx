import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import Jobcards from "../components/shared/Jobcards";
import { HardDrive } from "lucide-react";

const jobData = [
  {
    id: 1,
    title: "Frontend-Developer",
    company: "TechNova",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Dummy logo image
    location: "Stavanger",
    type: "Full-time",
    positions: 2,
    salary: "NOK 650,000/year",
  },
  {
    id: 2,
    title: "Backend-developer",
    company: "CodeSprinters",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Bergen",
    type: "Part-time",
    positions: 1,
    salary: "NOK 200/hour",
  },
  {
    id: 3,
    title: "fullstack-developer",
    company: "Nordic IT Hub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Stavanger",
    type: "Full-time",
    positions: 3,
    salary: "NOK 550,000/year",
  },
  {
    id: 4,
    title: "Frontend-Developer",
    company: "ScandiTech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Lillehammer",
    type: "Full-time",
    positions: 1,
    salary: "NOK 720,000/year",
  },
  {
    id: 5,
    title: "Backend-Developerr",
    company: "InnovateX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Oslo",
    type: "Part-time",
    positions: 2,
    salary: "NOK 250/hour",
  },
  {
    id: 6,
    title: "Frontend-Developer",
    company: "TechNova",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Dummy logo image
    location: "Oslo",
    type: "Full-time",
    positions: 2,
    salary: "NOK 650,000/year",
  },
  {
    id: 7,
    title: "Backend-Developer",
    company: "CodeSprinters",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Bergen",
    type: "Part-time",
    positions: 1,
    salary: "NOK 200/hour",
  },
  {
    id: 8,
    title: "fullstack-Developer",
    company: "Nordic IT Hub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Trondheim",
    type: "Full-time",
    positions: 3,
    salary: "NOK 550,000/year",
  },
  {
    id: 9,
    title: "Backend-Developer",
    company: "ScandiTech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Trondheim",
    type: "Full-time",
    positions: 1,
    salary: "NOK 720,000/year",
  },
  {
    id: 10,
    title: "Frontend-Developer",
    company: "InnovateX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Trondheim",
    type: "Part-time",
    positions: 2,
    salary: "NOK 250/hour",
  },
];

function Jobs() {
  const filterByLocation = [
    "Stavanger",
    "Bergen",
    "Oslo",
    "Trondheim",
    "Lillehammer",
  ];
  const filterByIndustry = [
    "Frontend-Developer",
    "Backend-Developer",
    "Fullstack-Developer",
  ];
  const filterByJobType = ["Full-time", "Part-time"];

  const [filters, setFilters] = useState({
    locations: [],
    industries: [],
    jobTypes: [],
  });

  const [jobs, setJobs] = useState(jobData);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    let category;

    if (filterByLocation.includes(value)) category = "locations";
    else if (filterByIndustry.includes(value)) category = "industries";
    else if (filterByJobType.includes(value)) category = "jobTypes";

    setFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  useEffect(() => {
    let filteredJobs = jobData;

    if (filters.locations.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        filters.locations.includes(job.location)
      );
    }

    if (filters.industries.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        filters.industries.some((industry) => job.title === industry)
      );
    }

    if (filters.jobTypes.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        filters.jobTypes.includes(job.type)
      );
    }

    setJobs(filteredJobs);
  }, [filters]);

  return (
    <div className="flex flex-row p-12">
      <div className="w-64 mr-8">
        <h4 className="font-extrabold border-b p-3">Filter Jobs</h4>

        <div className="mt-6">
          <h3 className="font-bold mb-3">Location</h3>
          {filterByLocation.map((place) => (
            <div key={place} className="flex items-center justify-between py-1">
              <label className="text-sm text-gray-600">{place}</label>
              <input
                type="checkbox"
                name="location"
                value={place}
                checked={filters.locations.includes(place)}
                onChange={handleFilterChange}
                className="h-4 w-4"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-bold mb-3">Industry</h3>
          {filterByIndustry.map((industry) => (
            <div
              key={industry}
              className="flex items-center justify-between py-1"
            >
              <label className="text-sm text-gray-600">{industry}</label>
              <input
                type="checkbox"
                name="industry"
                value={industry}
                checked={filters.industries.includes(industry)}
                onChange={handleFilterChange}
                className="h-4 w-4"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-bold mb-3">Job Type</h3>
          {filterByJobType.map((type) => (
            <div key={type} className="flex items-center justify-between py-1">
              <label className="text-sm text-gray-600">{type}</label>
              <input
                type="checkbox"
                name="jobType"
                value={type}
                checked={filters.jobTypes.includes(type)}
                onChange={handleFilterChange}
                className="h-4 w-4"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        {jobs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No jobs match your filter criteria</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {jobs.map((job) => (
              <Jobcards
                key={job.id}
                id={job.id}
                logo={job.logo}
                company={job.company}
                location={job.location}
                title={job.title}
                position={job.positions}
                type={job.type}
                salary={job.salary}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
