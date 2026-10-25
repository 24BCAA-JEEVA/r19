import React from "react";

function Home() {
  return (
    <div className="page home-page">
      <h1>Home</h1>

      <img
        src={`${process.env.PUBLIC_URL}/student.jpg`}
        alt="Student profile"
        className="student-photo"
      />

      <h2>Arun Kumar</h2>

      <p>
        Hello! My name is AAA. I am a BCA student who enjoys learning programming,
        developing websites, and exploring new technologies.
      </p>

      <p>
        My goal is to become a skilled software developer
        and create useful applications.
      </p>
    </div>
  );
}

export default Home;
