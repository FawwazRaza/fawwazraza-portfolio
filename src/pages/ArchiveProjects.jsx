import React, { useState } from "react";
import { ProjectsList } from "../data/ProjectsList";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

// Array of vibrant colors
const colors = [
  'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500',
  'bg-orange-500', 'bg-cyan-500', 'bg-lime-500', 'bg-emerald-500'
];

function ArchiveProjects() {
  const navigate = useNavigate();
  const AllProjects = ProjectsList.projects;
  const [showFullDescription, setShowFullDescription] = useState(null);

  const toggleDescription = (index) => {
    setShowFullDescription(index === showFullDescription ? null : index);
  };

  return (
    <div className="mb-24 h-auto w-full sm:mb-0 md:h-screen">
      <div
        onClick={() => navigate(-1)}
        className="font-poppins ml-[5%] hidden gap-2 pt-8 hover:text-white lg:flex lg:items-center"
      >
        <FaArrowLeft />
        <span className="cursor-pointer">Portfolio</span>
      </div>
      <div>
        <p className="font-poppins mx-auto w-[50%] pb-10 pt-8 text-center text-2xl font-semibold tracking-wider text-gray-900 lg:text-3xl">
          Projects I've Worked On
        </p>
      </div>
      <div className="mx-auto mb-2 grid w-[90%] grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
        {AllProjects.map((project, index) => (
          <div
            key={index}
            className="mb-8 h-auto rounded-lg bg-white p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col"
          >
            <h2 className="font-poppins mb-2 cursor-pointer text-base font-semibold text-gray-900 lg:text-xl">
              {project.name}
            </h2>
            <p className="font-poppins mb-4 text-sm text-gray-700">
              {showFullDescription === index
                ? project.description
                : project.description.substring(0, 120)}
              <span
                className="ml-[5px] cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                <span className="text-blue-500 underline">
                  {showFullDescription === index ? "less" : "more"}
                </span>
              </span>
            </p>
            <div className="mt-3 flex flex-wrap lg:mt-6">
              {project.technologies.map((tech, techIndex) => (
                <p
                  key={techIndex}
                  className={`mb-2 mr-2 inline-block rounded-full ${colors[techIndex % colors.length]} px-3 py-1 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg`}
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="mt-auto pt-4 flex justify-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto w-[90%]">
        <p className="flex cursor-pointer items-center gap-2 font-semibold leading-tight text-gray-900">
          <div
            className="font-poppins group relative"
            onClick={() => navigate(-1)}
          >
            <span>Back to Portfolio</span>
            <span className="absolute bottom-0 left-0 top-6 h-[2px] w-full bg-gray-900 opacity-0 transition-opacity group-hover:opacity-100"></span>
          </div>
          <FaLocationArrow />
        </p>
      </div>
    </div>
  );
}

export default ArchiveProjects;