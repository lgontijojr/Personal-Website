import Article from "../components/Article";
import { resumeText } from "../static/data/resume";

const ResumePage = () => {
  return <Article headerTitle="Resume" content={resumeText} />;
};

export default ResumePage;
