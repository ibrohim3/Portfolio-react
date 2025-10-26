import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    { title: "Project 1", desc: "React e-commerce website" },
    { title: "Project 2", desc: "Portfolio site in HTML/CSS" },
    { title: "Project 3", desc: "CRM system dashboard" },
    { title: "Project 4", desc: "Blog website" },
    { title: "Project 5", desc: "Task manager app" },
  ];

  return (
    <section id="projects">
      <h2 style={{ marginBottom: "20px" }}>My Projects</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projectList.map((p, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default Projects;
