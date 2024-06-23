import CountUp from "react-countup";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
  const [direction, setDirection] = useState("ltr"); // State to toggle the direction of the Slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: direction === "rtl", // Dynamic rtl property based on the direction state
  };

  // Function to handle beforeChange event of the Slider
  const handleBeforeChange = (oldIndex, newIndex) => {
    // Toggle direction when reaching the last slide
    if (newIndex === 4) {
      setDirection("rtl");
    } else if (newIndex === 0) {
      // Toggle direction when reaching the first slide
      setDirection("ltr");
    }
  };

  return (
    <div className="home-body">
    <div className="home-container">
      <div className="content-container">
        <div className="text-content">
          <header>
            <h1 className="align-center">Welcome to</h1>
            <h2>NextSkills360</h2>
          </header>
          <section className="content fs-6 text-align-center">
            <p>
              Next Skills 360 is dedicated to revolutionizing education through
              innovative, accessible products aimed at teaching technology to
              students globally. Led by Suraj V Meiyur and Sowjanya Suraj, the
              organization offers the ProGame kit, a pioneering DIY toy that
              teaches programming without a computer, alongside other tools to
              enhance problem-solving skills, including a kit for visually
              impaired students. Their mission is ambitious: to impact 1 million
              students by 2026, including 50,000 visually challenged
              individuals, through partnerships with NGOs, government bodies,
              schools, and professionals. They seek to expand their online
              presence to effectively showcase their products, adapt content
              based on user profiles, manage queries efficiently, and convert
              interactions into leads seamlessly.
            </p>
          </section>
        </div>
        <div className="image-content">
          <img
            src="https://www.nextskills360.in/wp-content/uploads/2021/02/ProGame-Home-Page-Mobile.jpg"
            alt="NextSkillsApp"
          />
        </div>
      </div>
      <div className="carousel-container">
        <Slider {...settings} beforeChange={handleBeforeChange}>
          <div>
            <img
              src="https://www.nextskills360.in/wp-content/uploads/2021/02/Sana-image-2.png"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEo1BUVE5_4hEWzDCfml8nxXzuA723_OBqIVOBfTZcXVouNI2tsyH71U5pD6CWgYcuD0c&usqp=CAU"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yhhC89n0HYhFcngyHOGaSMgHAHi4xMlTZLqEy88rI1KBTp_4lOSn3pvIdGIoZPOasiI&usqp=CAU"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NlWAkmu9Qn9sp6kah3jkf0yvzMoGIOJOYIcG5Sx2oJU4GX4A3Cd3-fDGZmJJOJQ69Y0&usqp=CAU"
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZ84P5XV98J8DRB-PNDS2hqhaO7MIw_C4wdxZ3V6qp5vWRCtzCCML1Wd1kVZYlQQ547I&usqp=CAU"
              alt="Slide 5"
            />
          </div>
        </Slider>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card cc card1 h-100">
              <div className="card-body">
                <h5 className="card-title oo bg-dark fs-3 text-white rounded-2">
                  Mission
                </h5>
                <p className="card-text text-dark overflow-auto">
                  Our mission is to provide innovative, affordable, and
                  user-friendly educational tools that empower children to learn
                  technology and problem-solving skills. We aim to reach 1
                  million students, including 50,000 visually challenged
                  students, by 2026, fostering a diverse and inclusive learning
                  environment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card cc bg-gradient bg-secondary-subtle h-100">
              <div className="card-body">
                <h5 className="card-title oo bg-dark fs-3 text-white rounded-2">
                  Vision
                </h5>

                <p className="card-text text-dark">
                  We envision a world where every child has access to quality
                  technology education, regardless of their background or
                  abilities. By continuously innovating and expanding our
                  product offerings, we strive to create a global impact,
                  inspiring the next generation of tech-savvy problem solvers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card cc card1 h-100">
              <div className="card-body">
                <h5 className="card-title bg-dark text-white fs-3 oo rounded-2">
                  Quality Policy
                </h5>
                <p className="card-text text-dark justify-content-center">
                  We are committed to delivering excellence in every aspect of
                  our products and services. Our quality policy ensures
                  reliability, accuracy, and security in technology education.
                  We prioritize customer satisfaction and provide prompt
                  support, continuously improving to exceed user expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="container">
        <div className="circles">
          <div className="circle">
            <CountUp
              start={0}
              end={100000}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            >
              {({ countUpRef }) => (
                <div className="counter">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
            <span className="circle-name">Students impacted</span>
          </div>

          <div className="line" />
          <div className="circle">
            <CountUp
              start={0}
              end={50000}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            >
              {({ countUpRef }) => (
                <div className="counter">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
            <span className="circle-name">Visually challenged supported</span>
          </div>
          <div className="line" />
          <div className="circle">
            <CountUp
              start={0}
              end={25}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            >
              {({ countUpRef }) => (
                <div className="counter">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
            <span className="circle-name">Awards received</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;