import "../css/components/_profile.css";

function Profile() {
  return (
    <aside className="profile">
      <h1>LUIZ GONTIJO JR</h1>
      <h3>LGONTIJOJR@GMAIL.COM</h3>
      <hr
        style={{
          height: "2px",
          borderWidth: 0,
          backgroundColor: "black",
          marginBottom: "2em",
        }}
      />
      <h4>ABOUT</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </aside>
  );
}

export default Profile;
