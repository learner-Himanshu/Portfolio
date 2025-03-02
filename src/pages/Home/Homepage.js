import React from "react";
import { useTheme } from "../../context/Themecontext";
import Resume from "../../assets/docs/MY-Resume.pdf";
import Typewriter from "typewriter-effect";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import "./Homepage.css";

const Homepage = () => {
  const [theme, setTheme] = useTheme("light");

  const handleTheme = () => {
    setTheme((prevState) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btnn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsMoonStarsFill size={30} />
          ) : (
            <BsSun size={30} />
          )}
        </div>
        <div className="container home-content">
          <div data-aos="fade-left" data-aos-duration="1000">
            <h2>Hi, I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer !",
                    "MERN Developer !",
                    "Learning React-Native,",
                    "MYSQL Database"
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
          </div>
          <div
            className="home-buttons ms-2"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=8191800859"
              rel="noreferrer"
              target="_blank"

            >Hire me</a>
            {/* <button className="btn btn-hire">Hire me </button> */}
            <a className="btn btn-cv" href={Resume} download="My-resume.pdf">
              {" "}
              My Resume{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
