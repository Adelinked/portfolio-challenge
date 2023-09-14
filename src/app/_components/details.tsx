import Image from "next/image";
import details from "@/data/details.json";
import {IoMail} from "react-icons/io5";
import {MdPhone} from "react-icons/md";

interface DetailsProps {
  photo: string;
  name: string;
  job: string;
  email: string;
  phone: string;
  presentation: string;
}

export const Details = () => {
  return (
    <div className="flex flex-col rounded-xl p-4 md:p-6 md:mr-7 shadow mb-11">
      <div className="mb-2 relative rounded-2xl w-[340px] h-[340px] md:w-[365px] md:h-[365px] overflow-hidden">
        <Image
          src={details.photo}
          alt={`${details.name} photo`}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <span className=" font-semibold text-2xl mt-4 mb-1">{details.name}</span>
      <span className=" text-lg text-gray3 mb-8">{details.job}</span>
      <div className="mb-2 flex items-center">
        <IoMail  className="text-2xl mr-2"/>
        <span className="text-lg ">{details.email}</span>
      </div>
      <div className="mb-9 flex items-center">
        <MdPhone  className="text-2xl mr-2"/>
        <span className="text-lg">{details.phone}</span>
      </div>
      <span className="text-lg text-gray3 w-[290px] md:w-[340px]">{details.presentation}</span>
    </div>
  );
};
