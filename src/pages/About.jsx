import Section from "../components/Section";
import { aboutText } from "../static/data/about";

const AboutPage = () => {
  return <Section headerTitle="My Life Story" content={aboutText} />;
};

export default AboutPage;
