import Article from "../components/Article";

function ResumePage() {
  const content = [
    {
      subTitle: "Education",
      list: ["Year Up", "General Assembly"],
    },
    { subTitle: "Experience", paragraph: "Airtable" },
    {
      paragraph: "Senior Software Engineer - Frameworks",
      list: [
        "Helped hire the automation and frameworks team. Interviewed over 8 candidates every week",
      ],
    },
    {
      paragraph: "Slack - August 2018 -> May 2021",
    },
    {
      paragraph: "Senior Software Engineer - Frameworks",
      list: [
        "Wrote dozens of React components as well as unit tests.",
        "Worked with Jenkins and Sauce Labs to run tests across multiple OS and browsers.",
        "Wrote multiple e2e test cases using JavaScript, Ruby and Python.",
        "Helped pioneer and implement Cypress testing framework across Slack. Also created a Slack integration to alert and report all test failures.",
      ],
    },
    {
      paragraph: "Quality Engineer",
      list: [
        "Lead the QA efforts for the calls feature. Which included testing audio, video and screen sharing features across multiple OS's and devices.",
        "Worked with Applause & QA Source (testing companies) to better improve the calls product.",
        "Wrote dozens of test cases for mobile and Webapp using TestRail and Excel every week, creating documentation for other engineers to retest the same feature.",
        "• Ran a full regression every week on the mobile app, ensuring that the app was fully functional despite the changes made to the original code.",
      ],
    },
    {
      subTitle: "Technical Skills",
      list: ["Git", "React", "JavaScript", "Node.JS", "Automation"],
    },
    {
      subTitle: "Language Skills",
      paragraph: "Bilingual proficiency ",
      list: ["Portuguese", "English", "Spanish"],
    },
  ];
  return <Article title="Resume" content={content} />;
}

export default ResumePage;
