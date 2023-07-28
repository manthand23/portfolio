import React from "react";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";
import { RiRadioButtonFill } from "react-icons/ri";

const projects = [
  {
    name: "Anesthesia App",
    description:
      "A mobile application that assists medical students understand key Anesthesia concepts broken down with visuals and quizzes to test their knowledge along with having the most common calculations needed for the job.",
    github: "https://github.com/manthand23/anesthesia-app",
    technologies: ["React", "JavaScript", "Node.js","CSS"],
  },
  {
    name: "Workout AI",
    description: "An AI workout trainer in the form of a React web application that detects good and bad exercise form using image classification with a convolutional neural network and provides feedback in real time with OpenCV's open souce computer vision library that is connected to the backend server.",
    github: "https://github.com/manthand23/Workout-AI",
    technologies: ["Python", "React", "Javascript", "TensorFlow"],
  },
  {
    name: "NBA Player Odds Extension",
    description:
      "This is a chrome extension that allows users to see betting odds on various NBA players in real from a variety of sports betting services.",
    github: "https://github.com/manthand23/NBA-Odds-Chrome-Extension",
    technologies: ["Chrome Extension API", "NBA Live Player Odds API", "HTML", "CSS", "JavaScript"],
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Technologies</h2>
                    <ul className="text-xl text-neutral-600 dark:text-neutral-400">
                      {project.technologies.map((tech, techIdx) => (
                        <li key={techIdx} className="mb-2">
                          <RiRadioButtonFill
                            className="inline-block mr-2"
                            size={12}
                          />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
