import  certifications  from "@/data/cerifications.json";
import Image from "next/image";

interface CertificationInterface {
  issued: string;
  compagny: string;
  compangnyLogo: string;
  title: string;
  
}

const Certification = ({
  issued,
  compagny,
  compangnyLogo,
  title,
  
}: CertificationInterface) => {
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
        <p className="text-black font-semibold mb-2">{title}</p>
        <p className="text-black text-sm font-semibold mb-2">{compagny}</p>
        <p className="text-gray3 text-sm mb-2">Issued {issued}</p>
      </div>
    </div>
  );
};

export const Certifications = () => {
  return (
    <div className="pt-[17px] pl-6 mb-0  rounded-xl">
      <p className="text-2xl mb-11">Certifications</p>
      <div className="flex flex-col">
        {certifications.map((cerification) => (
            <Certification key={cerification.title} {...cerification}/>
        ))}

      </div>
    </div>
  );
};
