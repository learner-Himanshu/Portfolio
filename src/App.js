
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import TechStack from "./pages/techStack/TechStack";
import Workexp from "./pages/Workexp/Workexp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/Themecontext";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';


function App() {
  const [theme] = useTheme()
  useEffect(() => {
    AOS.init()
}, []);
  return (
    <>
      <div className={theme}>
      <ToastContainer />
        <MobileNav />
        <Layout />
        <About />

        {/* <div className="container"> */}
        <Education />
        {/* </div> */}
        <TechStack />
        <Project />
        <Workexp />
        <Contact />
        {/* <footer className="my-5"><p>Made with ❤️ by ~himanshu © 2024</p></footer> */}
        <footer className="py-5 text-center">
          <p>@Thank you for exploring my work. Created with dedication & ❤️ by ~himanshu © 2024.</p>
        </footer>


      </div>
      <ScrollToTop smooth
        color="#f29f67"
        style={{ borderRadius: "50%", backgroundColor: "black" }}
      />
    </>
  );
}

export default App;
