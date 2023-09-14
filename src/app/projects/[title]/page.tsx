import projects from "@/data/projects.json";
import { ProjectComp } from "@/app/_components/projects";
import Link from "next/link";
import { Footer } from "@/app/_components/footer";

export default function Project({ params }: { params: { title: string } }) {

  let { title } = params;
  title = title.replace(/%20/g, " ");

  const project = projects.filter((project) => project.title === title)[0];
  return (
    <>
      <div className="pt-[22px] px-[22px] pb-[10px] m-5 rounded-xl shadow">
        <Link href="/" title="go to home page" className="ml-8 text-xl">
          Home
        </Link>

        {project && <ProjectComp {...project} detailed />}
      </div>{" "}
      <Footer />
    </>
  );
}
