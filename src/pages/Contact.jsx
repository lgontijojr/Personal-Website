import Article from "../components/Article";

const ContactPage = () => {
  const content = [
    {
      subTitle: "Email",
      paragraph: "lgontijojr@gmail.com",
    },
    {
      subTitle: "Phone Number",
      paragraph: "(123)456-7890",
    },
  ];
  return <Article title="Contact" content={content} />;
};

export default ContactPage;
