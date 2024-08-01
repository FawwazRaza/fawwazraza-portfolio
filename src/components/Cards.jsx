
// import React, { useState } from "react";
// import { ProjectsList } from "../data/ProjectsList";

// function Cards() {
//   const [showFullDescription, setShowFullDescription] = useState(null);
//   const projectsToDisplay = ProjectsList.projects.slice(0, 4);

//   const toggleDescription = (index) => {
//     console.log("clicking description", index);
//     setShowFullDescription(index === showFullDescription ? null : index);
//   };

//   return (
//     <>
//       {projectsToDisplay.map((project, index) => (
//         <div
//           key={index}
//           className="mb-8 h-auto rounded-lg bg-white p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col"        >
//           <h2 className="font-poppins mb-2 cursor-pointer text-base font-semibold lg:text-xl">
//             {project.name}
//           </h2>
//           <p className="font-poppins text-sm text-gray-900">
            
//             {showFullDescription === index
//               ? project.description
//               : project.description.substring(0, 120)}
//             <span
//               className="ml-[5px] cursor-pointer"
//               onClick={() => toggleDescription(index)}
//             >
//               <span className="text-blue-500 underline">more</span>
//             </span>
//           </p>
//           <div className="mt-3 flex flex-wrap lg:mt-6">
//             {project.technologies.map((tech, index) => (
//               <p
//                 key={index}
//                 className="mb-2 mr-2 inline-block rounded-full bg-transparent px-3 py-1 text-sm font-semibold text-gray-900 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
//               >
//                 {tech}
//               </p>
//             ))}
//           </div>
//           <div className="mt-auto pt-4 flex justify-center">
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
//             >
//               View GitHub
//             </a>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Cards;

import React, { useState } from "react";
import { ProjectsList } from "../data/ProjectsList";

// Array of vibrant colors
const colors = [
  'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500',
  'bg-orange-500', 'bg-cyan-500', 'bg-lime-500', 'bg-emerald-500'
];

function Cards() {
  const [showFullDescription, setShowFullDescription] = useState(null);
  const projectsToDisplay = ProjectsList.projects.slice(0, 4);

  const toggleDescription = (index) => {
    console.log("clicking description", index);
    setShowFullDescription(index === showFullDescription ? null : index);
  };

  return (
    <>
      {projectsToDisplay.map((project, index) => (
        <div
          key={index}
          className="mb-8 h-auto rounded-lg bg-white p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col"
        >
          <h2 className="font-poppins mb-2 cursor-pointer text-base font-semibold lg:text-xl">
            {project.name}
          </h2>
          <p className="font-poppins text-sm text-gray-900">
            {showFullDescription === index
              ? project.description
              : project.description.substring(0, 120)}
            <span
              className="ml-[5px] cursor-pointer"
              onClick={() => toggleDescription(index)}
            >
              <span className="text-blue-500 underline">more</span>
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
    </>
  );
}

export default Cards;