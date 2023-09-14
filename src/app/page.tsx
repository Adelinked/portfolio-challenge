import { Blogs } from "./_components/blogs";
import { Details } from "./_components/details";
import { Experiences } from "./_components/experiences";
import { Hobbies } from "./_components/hobbies";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { Certifications } from "./_components/certifications";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <main className="pt-12 md:pt-20 px-2 md:pl-12 w-full min-h-screen ">
      <div className="flex flex-col md:flex-row ">
        <div>
          <Details />
          <Experiences />
          <Certifications />
          <div className="hidden md:block">
            <Hobbies />
          </div>
        </div>

        <div className="p-2 md:p-6 mt-8 md:mt-0">
          <Skills />
          <Projects />
          <div className="md:hidden">
            <Hobbies />
          </div>
          <Blogs />
        </div>
      </div>
      <Footer />
    </main>
  );
}
