import projects from "@/data/projects.json";
import { ProjectComp } from "@/app/_components/projects";
import Link from "next/link";
import { Footer } from "@/app/_components/footer";
import { RelatedProjects } from "@/app/_components/relatedProjects";
import { Suspense } from "react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    title: project.title,
  }));
}

export default function Project({ params }: { params: { title: string } }) {
  let { title } = params;
  title = title.replace(/%20/g, " ");
  const project = projects.filter((project) => project.title === title)[0];
  return (
    <>
      <div className="pt-[22px] px-[22px] pb-8 m-5 rounded-xl shadow">
        <>{project && <ProjectComp {...project} detailed />}</>
        <Suspense fallback={<div>Loading...</div>}>
          <RelatedProjects tags={project?.tags} excludedTitle={title} />
        </Suspense>
        <div className="pt-8 text-xl">
          <Link href="/" title="go to home page">
            Home Page
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
