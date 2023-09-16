import projects from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";
const RelatedProject = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="">
      <Link
        href={`/projects/${title}`}
        className="flex flex-col items-center hover:scale-105 "
      >
        <div className="relative w-32 h-32 rounded-md overflow-hidden mb-2">
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p>{title}</p>
      </Link>
    </div>
  );
};

export const RelatedProjects = ({
  tags,
  excludedTitle,
}: {
  tags: string[];
  excludedTitle: string;
}) => {
  const relatedProjects = projects.filter(
    (project) =>
      project.tags.some((tag: string) => tags.includes(tag)) &&
      project.title !== excludedTitle
  );
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-6">Related Projects</h2>
      <div className="flex flex-wrap gap-4 w-full  justify-around">
        {relatedProjects.map((project) => (
          <RelatedProject
            key={project.title}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};
