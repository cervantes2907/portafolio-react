import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Déjame decirte algo sobre mi</h3>
        <p>
          Soy desarrollador front-end y amo mi profesion, me gusta aprender cada dia 
          mas quiero ir creciendo cada dia mas soy una person a alegre 
          me gusta pasr en mi tiempo libre con mi familia amigos y creando 
          proyectos personales tambien me gusta leer y aprender nuevas tecnologias ...
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;