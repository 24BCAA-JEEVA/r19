import React from "react";

function About() {
  return (
    <div className="page about-page">
      <h1>About Me</h1>

      <section>
        <h2>Academic Background</h2>
        <p>
          I am pursuing a Bachelor of Computer Applications
          (BCA). I am interested in programming, web
          development, and database management.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Student Management System</li>
          <li>Personal Portfolio Website</li>
          <li>Online Shopping Cart Application</li>
        </ul>
      </section>

      <section>
        <h2>Family Background</h2>
        <p>
          I come from a supportive family that encourages
          my education and career goals.
        </p>
      </section>

      <section>
        <h2>Interests</h2>
        <ul>
          <li>Web Development</li>
          <li>Learning New Technologies</li>
          <li>Reading and Problem Solving</li>
          <li>Playing Outdoor Games</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
