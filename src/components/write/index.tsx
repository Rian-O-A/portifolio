'use client';
import React from "react"; 
import Typewriter from 'typewriter-effect'; 

const PROFILE_MESSAGES = {
  msg0: "Fala, pessoal!",
  msg1: "Me chamo Rian Almeida e sou um Desenvolvedor Full Stack.",
  msg2: "Neste portfólio, compartilho alguns dos projetos nos quais tenho trabalhado e demonstro minhas habilidades técnicas.",
  msg3: "Se você estiver interessado em colaborar, tiver alguma pergunta ou simplesmente quiser trocar ideias, não hesite em entrar em contato comigo.",
  msg4: "Show?",

};


const TypingAnimation: React.FC= () => {
 

  return (
    <Typewriter 
		onInit={(typewriter) => { 

      typewriter.typeString(PROFILE_MESSAGES.msg0) 
        .pauseFor(2500) 
        .deleteAll().typeString(PROFILE_MESSAGES.msg1) .pauseFor(2500) .deleteAll().typeString(PROFILE_MESSAGES.msg2) .pauseFor(2500) .deleteAll().typeString(PROFILE_MESSAGES.msg3) .pauseFor(2500) .deleteAll().typeString(PROFILE_MESSAGES.msg4) .pauseFor(2500)  // Defina a velocidade de digitação
            .start();
       
    
		}} 
	/> 
  );
};

export default TypingAnimation;
