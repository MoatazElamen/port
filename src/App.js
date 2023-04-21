import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Nav } from "./components/Layout";
import Section from "./components/styled/Section";
import Hero from "./components/Hero";
import CallToAction from "./components/styled/CallToAction";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <div className="loading">loading...</div>;
  }
  return (
    <div className="container">
      <Nav />
      <div className="sections">
        <Hero />
        <Section className="section" id="about">
          <h3 className="section-title">About Me</h3>
          <div className="section-body">
            <div className="description">
              <p>
                Hi, I'm Moataz Elamen, a full stack web developer . With 5 years
                of experience in the field, I am passionate about creating
                innovative and dynamic web applications that meet business needs
                and exceed user expectations.
              </p>
              <p>
                I specialize in both front-end and back-end development, which
                allows me to create seamless and efficient user experiences. My
                technical skills include proficiency in languages such as HTML,
                CSS, JavaScript,Node, and PHP, as well as frameworks like React,
                and Laravel.
              </p>
              <p>
                Throughout my career, I have worked with a diverse range of
                clients across various industries, including e-commerce,
                healthcare, and finance. I have a proven track record of
                delivering high-quality web solutions that are both scalable and
                user-friendly.
              </p>
              <p>
                In addition to my technical skills, I am a team player who
                enjoys collaborating with others to achieve a common goal. I am
                also passionate about staying up-to-date with the latest
                technology trends and am always eager to learn and implement new
                technologies. When I'm not coding, you can find me exploring the
                outdoors or enjoying a good cup of coffee. If you're looking for
                a full stack web developer who can help you bring your vision to
                life, let's connect!
              </p>
            </div>
            <div className="image"></div>
          </div>
          <CallToAction href="#hire">Hire Me Now!</CallToAction>
        </Section>
        <Section className="section" id="experience">
          <h3 className="section-title">Experience</h3>
          <div className="section-body">
            <div className="description">
              Vhubs logo Senior Software EngineerSenior Software Engineer Vhubs
              · Full-timeVhubs · Full-time Dec 2021 - Present · 1 yr 5 mosDec
              2021 - Present · 1 yr 5 mos Cairo, EgyptCairo, Egypt Fiverr logo
              Freelance Web DeveloperFreelance Web Developer Fiverr ·
              FreelanceFiverr · Freelance Jan 2021 - Dec 2021 · 1 yrJan 2021 -
              Dec 2021 · 1 yr Al Jizah, EgyptAl Jizah, Egypt A Freelance
              Front-End Web Developer that : 👉🏻 Hunting bids and selling gigs 👉🏻
              helping others to get their job done 👉🏻 building websitesA
              Freelance Front-End Web Developer that : 👉🏻 Hunting bids and
              selling gigs 👉🏻 helping others to get their job done 👉🏻 building
              websites WokBee logo Full Stack Web DeveloperFull Stack Web
              Developer WokBee · Full-timeWokBee · Full-time Mar 2021 - Oct 2021
              · 8 mosMar 2021 - Oct 2021 · 8 mos Cairo, EgyptCairo, Egypt Used
              to work as a Full-Stack Web Developer on online recruitment web
              application: 👉🏻 handle front-end & backend tasks 👉🏻 adding
              automated tests and writing optimized code 👉🏻 fixing bugs and
              making sure that the project working as expected for all users 👉🏻
              translating user stories into well-optimized code that built to
              scale
            </div>
            <div className="image"></div>
          </div>
        </Section>
        <Section className="section" id="contact">
          <h3 className="section-title">Contact Me</h3>
          <div className="section-body">
            <div className="description"></div>
            <div className="image"></div>
          </div>
        </Section>
        <Section className="section" id="projects">
          <h3 className="section-title">My Projects</h3>
          <div className="section-body">
            <div className="description"></div>
            <div className="image"></div>
          </div>
        </Section>
        <Section className="section" id="hire">
          <h3 className="section-title">Hire Me</h3>
          <div className="section-body">
            <div className="description"></div>
            <div className="image"></div>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
