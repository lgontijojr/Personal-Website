import Article from "../components/Article";
import { contactText } from "../static/data/contact";

const ContactPage = () => {
  return <Article headerTitle="Contact" content={contactText} />;
};

export default ContactPage;
