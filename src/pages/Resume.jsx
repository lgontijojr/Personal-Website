import Section from "../components/Section";
import { resumeText } from "../static/data/resume";

const ResumePage = () => {
  return <Section headerTitle="Resume" content={resumeText} />;
};

export default ResumePage;
