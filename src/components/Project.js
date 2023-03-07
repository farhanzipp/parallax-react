import React, { useContext, useState, useEffect } from "react";
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
import "../styles/project.css";
import projectArr from "./projectsArray";
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
      <div className="project-card" >
        <img key={project.id} src={project.src} alt={project.alt} />
      </div>
    </Slide>
  ));

  const listDot = projectArr.map((item,index) => (
    <Dot slide={item.id} key={index} className="dot"></Dot>
  ));
  
  const listTag = projectArr[currentSlide].tag.map((tags, index) => (
    <div key={index} className="tag-item">{tags}</div>
  ));

  return (
    <div className="project-container">
      <h1 className="project-header">PROJECTS</h1>
      <h3>Some Stuff I've Built</h3>
      <div className="project-title">
          <p>{projectArr[currentSlide].title}</p>
      </div>

      <Slider>{listProjects}</Slider>

      <div className="dot-wrapper">{listDot}</div>

      <div className="slide-wrapper">
        <ButtonBack className="btn-slide left"></ButtonBack>
        <a href={projectArr[currentSlide].link} target="_blank"  rel="noreferrer" className="btn-visit" title="visit my project">
          <BiLinkExternal />
        </a>
        <a href="#myProfile" className="btn-visit">
          <FiGithub />
        </a>
        <ButtonNext className="btn-slide right"></ButtonNext>
      </div>
        <div className="project-description">
          <p id="slide-index">{projectArr[currentSlide].info}</p>
          <div className="tag-wrapper">
            {listTag}
          </div>
        </div>
      </div>
  );
};

const Project = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={90}
      totalSlides={projectArr.length}
      infinite={true}
    >
      <ProjectCarousel />
    </CarouselProvider>
  );
};

export default Project;
