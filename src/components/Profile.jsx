import "../css/components/_profile.css";

const Profile = () => {
  return (
    <aside className="profile">
      <h1 className="name">LUIZ GONTIJO</h1>
      <h3 className="email">LGONTIJOJR@GMAIL.COM</h3>
      <hr />
      <div className="description">
        <p>
          I was born and raised in Brazil and moved to California in 2012. Upon
          moving here, I taught myself English and Spanish. Currently working at
          Airtable as a Senior Software Developer.
        </p>
        <p>
          I joined YearUp in 2017 where I learned Quality Engineering. I had the
          opportunity to join Slack as an intern. After that I was offered to
          join full time as a Quality Engineer in the Calls team.
        </p>
        <p>
          More recently I joined Airtable to help build and scale their test
          automation frameworks.
        </p>
      </div>
    </aside>
  );
};

export default Profile;
