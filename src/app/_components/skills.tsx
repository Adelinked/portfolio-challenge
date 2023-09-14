import skills from "@/data/skills.json";

interface SkillInterface {
  name: string;
  progress: number;
}

const Skill = ({ name, progress }: SkillInterface) => {
    const progressBarWidth = `${progress * 100}%`;
  
    const progressBarClass = progress === 1 ? "bg-blue-500" : "bg-gray4";
  
    return (
      <div className="mb-4 flex items-center justify-between">
        <span className="mr-5 whitespace-nowrap ">{name}</span>
  
    
        <div className={`w-[160px] md:w-[236px] h-[10px] rounded-xl ${progressBarClass}`}>
          <div style={{ width: progressBarWidth }} className="h-full rounded-xl bg-blue1" />
        </div>
      </div>
    );
  };

export const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row shadow p-6 rounded-xl  ">
      {skills.map((skill) => (
        <div key={skill.set} className="md:mr-4">
          <h3 className="text-lg font-bold uppercase mb-5 whitespace-nowrap">{skill.set}</h3>
          <div className="flex flex-wrap flex-col ">
            {skill.skills.map((skill) => (
              <Skill key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
