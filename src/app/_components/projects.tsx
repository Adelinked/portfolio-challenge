"use client";
import { useRef } from "react";
import { projectType, useProjectsStore } from "@/store";
import Image from "next/image";
import { Pagination } from "./Pagination";
import { PROJECTS_PER_PAGE } from "@/data/variable";
import Link from "next/link";

const CodeDemo = () => {
  return (
    <div className="flex mb-6 w-full ">
      <button className="bg-white mr-3 text-blue1 px-8 py-2 md:px-10 md:py-3 rounded-xl md:text-lg border-blue1 border-[1px] hover:bg-blue1 hover:text-white">
        Demo
      </button>

      <a href="https://github.com/adelinked" target="_blank" rel="noreferrer">
        <button className="bg-white text-blue1 px-8 py-2 md:px-10 md:py-3 rounded-xl text-lg border-blue1 border-[1px] hover:bg-blue1 hover:text-white">
          Code
        </button>
      </a>
    </div>
  );
};
export const ProjectComp = ({
  title,
  description,
  tags,
  image,
  detailed = false,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  detailed?: boolean;
}) => {
  return (
    <div className="py-[18px] md:py-6 px-[18px] flex flex-col md:flex-row">
      <div className="flex flex-col">
        <Link href={`/projects/${title}`}>
          <div className="hover:scale-105 mb-6 md:mb-0 md:mr-[34px] relative w-[292px] h-[217px] md:w-[322px] md:h-[274px] rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        </Link>
        {detailed ? (
          <>
            <div className="mt-4 " />
            <CodeDemo />
          </>
        ) : null}
      </div>
      <div>
        <div className="mb-3 md:mb-4">
          {tags.map((t) => (
            <span key={t} className="mr-[9px]">
              #{t}
            </span>
          ))}
        </div>
        <p className="text-2xl text-gray1 mb-2">{title}</p>
        <p className="text-gray3 whitespace-break-spaces w-[290px] md:w-[400px] mb-[11px] md:mb-[21px]">
          {description}
        </p>
        {detailed ? (
          <p className="text-gray3 whitespace-break-spaces w-[290px] md:w-[400px] mb-[11px] md:mb-[21px]">
            {description + description + description}{" "}
          </p>
        ) : null}
        {!detailed ? <CodeDemo /> : null}
      </div>
    </div>
  );
};

export const Projects = () => {
  const projectsRef = useRef(null);

  const { projects, filterTags, toggleFilter, currentPage, setCurrentPage } =
    useProjectsStore((state) => state);
  const uniqueTags = [...new Set(projects.flatMap((project) => project.tags))];
  const filtredProjects =
    filterTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => filterTags.includes(tag))
        );

  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  // Slice the elements to display for the current page
  const displayedElements = filtredProjects.slice(startIndex, endIndex);
  return (
    <div className="px-2 ">
      <div className="p-6 mt-4">
        <p className="text-lg mb-4">Projects ({filtredProjects.length})</p>
        <div className="">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              className={`py-2 px-[22px] rounded-xl border-[1px] mr-4 mb-4 text-xs ${
                filterTags.includes(tag)
                  ? "bg-blue1 text-white border-blue1"
                  : "border-gray2"
              }`}
              onClick={() => toggleFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col" ref={projectsRef}>
        {displayedElements.map((project, index) => (
          <ProjectComp key={project.title} {...project} />
        ))}
      </div>
      <Pagination
        numberElements={filtredProjects.length}
        elementsPerPage={PROJECTS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        toViewRef={projectsRef}
      />
    </div>
  );
};
