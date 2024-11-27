import Section from "../components/Section";
import { contactText } from "../static/data/contact";

const ContactPage = () => {
  return <Section headerTitle="Contact" content={contactText} />;
};

export default ContactPage;
