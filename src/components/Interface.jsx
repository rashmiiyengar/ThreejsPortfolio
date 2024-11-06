import { skills } from "../constants/skills";

const Section = (props) => {
  const { children } = props;
  return (
    <section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto flex 
        flex-col items-start justify-center
    `}
    >
      {children}
    </section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi I'm
        <br />
        <span className="bg-white px-1 italic">Rashmi Soundar</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        A passionate Software Engineer based in Sunnyvale
      </p>
      <button
        className={`
        bg-indigo-500 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
      >
        Contact me
      </button>
    </Section>
  );
};

const SkillsSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Skills</h2>

        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
               <div className="h-8 w-full bg-gray-200 rounded-full  mt-2">
                <div className="h-full  bg-gradient-to-tr from-indigo-500 to-indigo-400  rounnded-full" > <p>{skill.area}</p></div>
                </div> 

            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const Interface = () => {
  return (
    <div className=" flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  );
};
