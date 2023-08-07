import { EXPERIENCE, EXPERTISE } from "../utils/globals/bio";

const Resume: React.FC = () => {
  const experience = EXPERIENCE;
  const skills = EXPERTISE;

  return (
    <section className="divider">
      <section className="divider__section py-12 p-6">
        <h1 className="heading heading-main">Experience</h1>
        <div className="pt-6">
          {experience.map(({ title, year, company }) => (
            <div className="py-4">
              <p>
                <strong>{title}</strong>, {year}
              </p>
              <p>{company}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="divider__section bg-shaded-white p-10">
        <h1 className="heading heading-main">Expertise</h1>
        <div className="pt-6">
          <ul className="list-disc py-5">
            {skills.map((skill) => (
              <li className="pb-6">{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Resume;
