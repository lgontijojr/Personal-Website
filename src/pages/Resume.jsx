import Article from "../components/Article";

function ResumePage() {
  const content = [
    {
      subTitle: "Education",
      list: ["Year Up", "General Assembly"],
    },
    {
      subTitle: "Experience",
      paragraph: "Airtable",
      list: ["Item 1", "Item 2", "Item 3", "Item 4"],
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
