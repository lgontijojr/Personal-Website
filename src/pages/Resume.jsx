import Article from "../components/Article";

const content = [
  {
    bodyTitle: [
      {
        title: "Education",
      },
    ],
    subTitle: [
      {
        title: "General Assembly",
        description: "JavaScript 10 weeks course.",
      },
      {
        title: "Year Up",
        description:
          "Year Up's job training program is tuition free,and offers access to today's best companiesand a proven path to career success.",
      },
    ],
  },
  {
    bodyTitle: [
      {
        title: "Experience",
      },
    ],
    subTitle: [
      {
        title: "Airtable",
        description: "Senior Software Engineer - Frameworks",
      },
    ],
    list: [
      "Helped hire the automation and frameworks team. Interviewed over 8 candidates every week",
    ],
  },
  {
    subTitle: [
      {
        title: "Slack",
        description: "Senior Software Engineer - Frameworks",
      },
    ],
    list: [
      "Helped pioneer and implement Cypress testing framework across Slack. Also created a Slack integration to alert and report all test failures.",
      "Wrote multiple e2e test cases using JavaScript, Ruby and Python.",
      "Worked with Jenkins and Sauce Labs to run tests across multiple OS and browsers.",
      "Wrote dozens of React components as well as unit tests.",
    ],
  },
  {
    subTitle: [
      {
        description: "Quality Engineer - Web",
      },
    ],
    list: [
      "Lead the QA efforts for the calls feature. Which included testing audio, video and screen sharing features across multiple OS's and devices.",
      "Wrote automation and manual cases every week.",
      "Worked with Applause (testing company) to better improve the calls product.",
    ],
  },
  {
    subTitle: [
      {
        description: "Quality Engineer - iOS",
      },
    ],
    list: ["Ran weekly regressions on latest iOS application."],
  },
  {
    bodyTitle: [
      {
        title: "Language Skills",
      },
    ],
    subTitle: [
      {
        title: "Portuguese",
        description: "Native or bilingual proficiency",
      },
      {
        title: "English",
        description: "Native or bilingual proficiency",
      },
      {
        title: "Spanish",
        description: "Professional working proficiency",
      },
    ],
  },
];

const ResumePage = () => {
  return <Article headerTitle="Resume" content={content} />;
};

export default ResumePage;
