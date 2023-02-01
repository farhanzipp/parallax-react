import React, { useRef, useEffect } from "react";

const ParallaxSection = () => {
  const sectionRef = useRef(null);
  const handleScroll = () => {
    const { top } = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const percentScrolled = (window.pageYOffset - top) / (windowHeight + top);
    sectionRef.current.style.backgroundPositionY = `${percentScrolled * 100}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="parallax-section"
      style={{ backgroundImage: "url(bg-image.jpg)" }}
    >
      <h2>Parallax Section</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante a tortor commodo viverra a euismod justo. Nam facilisis elementum augue, sit amet tincidunt purus laoreet a. Sed vel vestibulum velit. Nam placerat nunc id purus commodo tempor. Sed sed consectetur sem. Maecenas gravida, metus sit amet placerat suscipit, lectus dolor bibendum mi, ac sollicitudin libero magna et lectus.</p>
    </section>
  );
};

export default ParallaxSection;
