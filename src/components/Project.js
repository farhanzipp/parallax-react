import React, { useContext, useState, useEffect } from "react";
import { Link } from 'gatsby'
import "../styles/project.css";
import "nes.css/css/nes.min.css";
import {
  ButtonBack,
  ButtonNext,
  CarouselContext,
  CarouselProvider,
  Dot,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import projectArr from "./projectsArray";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ProjectCarousel = () => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  const listProjects = projectArr.map((project, index) => (
    <Slide index={index} key={index}>
      
      <div className="project-carousel" >
        <img src={project.src} alt={project.alt} />
      </div>
    </Slide>
  ));

  const listDot = projectArr.map((item,index) => (
    <Dot key={index} slide={item.id} className="dot"></Dot>
  ));
  
  const listTag = projectArr[currentSlide].tag.map((tags, index) => (
    <div key={index} className="nes-badge">
      <span className="is-dark">{tags}</span>
    </div>
  ));

  return (
    <>
      <h1 className="section-title">PROJECTS</h1>
      <h3 className="sub-section-title">Some Stuff I've Built</h3>
      <div className="item-md">
          <div className=" project-card nes-container is-rounded">
            <div className="project-title nes-container">
                <h3>{projectArr[currentSlide].title}</h3>
            </div>
            {/* Muncul ketika md */}
            <ButtonBack className="btn-slide-md">
              <AiFillLeftCircle/>
            </ButtonBack>
            {/* Muncul ketika md */}
            <ButtonNext className="btn-slide-md slide-right">
              <AiFillRightCircle/>
            </ButtonNext>

            <Slider className="project-slider nes-container is-dark">
              {listProjects}
            </Slider>
            <div className="dot-wrapper">{listDot}</div>
            <div className="slide-wrapper">
              <ButtonBack className="btn-slide">
                <AiFillLeftCircle/>
              </ButtonBack>
                <a href={projectArr[currentSlide].link} target="_blank"  rel="noreferrer" className="btn-visit nes-btn" title="visit my project">
                  <p className="p-md">Visit</p>
                  <BiLinkExternal />
                </a>
              <a href="#myProfile" className="btn-visit nes-btn">
                <p className="p-md">Github</p>
                <FiGithub />
              </a>
              <ButtonNext className="btn-slide">
                <AiFillRightCircle/>
              </ButtonNext>
            </div>
              <div className="project-description nes-container is-dark ">
                <p>{projectArr[currentSlide].info}</p>
                <div className="tag-wrapper">
                  {listTag}
                </div>
              </div>
          </div>

          {/* muncul ketika md */}
          <div className="wrapper-md">
            <div className="desc-md nes-container is-rounded">
              <h2>#DESCRIPTION</h2>
              <p>{projectArr[currentSlide].info}</p>
            </div>
            <div className="tag-wrapper-md nes-container is-rounded">
              <h2>#TAGS</h2>
              {listTag}
            </div>
            <Link to='/projects' className="more-projects nes-btn is-primary">See More Projects</Link>
          </div>
        </div>
      </>
  );
};

const Project = () => {
  return (
    <CarouselProvider
      id="myProject"
      className="project-container"
      naturalSlideWidth={100}
      naturalSlideHeight={90}
      totalSlides={projectArr.length}
      infinite={true}
      isPlaying={true}
    >
      <ProjectCarousel />
    </CarouselProvider>
  );
};

export default Project;
