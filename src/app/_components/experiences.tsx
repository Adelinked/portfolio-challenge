import  experiences  from "@/data/experiences.json";
import Image from "next/image";

interface ExperienceInterface {
  periode: string;
  compagny: string;
  compangnyLogo: string;
  job: string;
  description: string;
}

const Experience = ({
  periode,
  compagny,
  compangnyLogo,
  job,
  description,
}: ExperienceInterface) => {
  return (
    <div className="flex mb-10">
      <div className="relative w-[84px] h-[84px] mr-4">
        <Image
          src={compangnyLogo}
          alt={compagny}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="">
        <p className="text-gray3 text-sm mb-2">{periode}</p>
        <p className="text-black font-semibold mb-6">{job}</p>
        <p className="text-gray3 w-[273px]">{description}</p>
      </div>
    </div>
  );
};

export const Experiences = () => {
  return (
    <div className="pt-[17px] pl-6 mb-0  rounded-xl">
      <p className="text-2xl mb-11">Experiences</p>
      <div className="flex flex-col">
        {experiences.map((experience) => (
            <Experience key={experience.periode} {...experience}/>
        ))}

      </div>
    </div>
  );
};
