import hobbies from "@/data/hobbies.json";
import Image from "next/image";

interface HobbyInterface {
  title: string;
  description: string;
  image: string;
}

const Hobby = ({ title, description, image }: HobbyInterface) => {
  return (
    <div className="flex flex-col ">
      <div className="relative mb-[26px] rounded-xl overflow-hidden w-full h-[160px]">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <p className="text-gray1 text-lg font-semibold mb-[10px]">{title}</p>
      <p className="text-gray3 mb-9">{description}</p>
    </div>
  );
};

export const Hobbies = () => {
  return (
    <div className="pt-[22px] px-[22px] mb-10 rounded-xl shadow">
      <p className="text-2xl mb-6">Hobbies</p>
      <div className="flex flex-col">
        {hobbies.map((hobby) => (
          <Hobby key={hobby.title} {...hobby} />
        ))}
      </div>
    </div>
  );
};
