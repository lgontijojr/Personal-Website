import Article from "../components/Article";

const content = [
  {
    bodyTitle: [
      {
        title: "Email",
      },
    ],
    subTitle: [
      {
        description: "lgontijojr@gmail.com",
      },
    ],
  },
  {
    bodyTitle: [
      {
        title: "Phone Number",
      },
    ],
    subTitle: [
      {
        description: "(123)46-7890",
      },
    ],
  },
];

const ContactPage = () => {
  return <Article headerTitle="Contact" content={content} />;
};

export default ContactPage;
