import Article from "../components/Article";
import { aboutText } from "../static/data/about";

const AboutPage = () => {
  return <Article headerTitle="About" content={aboutText} />;
};

export default AboutPage;
