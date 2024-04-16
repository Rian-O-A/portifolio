"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import api from "@/services";
import Image from "next/image";
import TypingAnimation from "@/components/write";
// Importe os ícones e os estilos necessários
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import CertificatesPage from "@/components/certificates";

// Componente do cabeçalho (header)

type Repository = {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
};

const PortfolioPage = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await api.get("/repos");
        setRepositories(response.data);
      } catch (error) {
        console.error("Erro ao obter repositórios:", error);
      }
    };

    fetchRepositories();
  }, []);
  return (
    <div className="flex flex-col min-h-screen  text-gray-900 p-4 ">
      <header className="bg-black bg-opacity-80 text-white p-4 fixed top-0 w-full ">
    
        <div className=" flex">
          
            <a
              href="https://github.com/Rian-O-A"
              target="_blank"
              className="text-white hover:text-gray-400 mr-4 "
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6"/>
            </a>
            <a
              href="https://www.linkedin.com/in/rian-almeida/"
              target="_blank"
              className="text-white hover:text-gray-400 mr-4"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6"/>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5527997362853"
              target="_blank"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6"/>
            </a>
          
        </div>
      </header>

      <main className="container mx-auto py-8 flex-grow">
        

        <div className="mb-10 mt-20">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
            <div className="relative z-10   flex justify-end items-end mb-5 h-40">
              <div className="font-mono border rounded text-white p-3 text-2xl mr-10 bg-black bg-opacity-80 shadow-md inline-block max-w-full">
                <TypingAnimation />
              </div>
            </div>

            <Image
              src="/image/profile.png"
              alt="profile"
              className=" rounded-full h-80 w-80 border-2 z-10 ml-5"
              width={1000}
              height={0}
            />
          </div>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="rounded-lg p-6 mb-10 md:w-2/3 lg:w-2/3">
            <p className=" text-gray-200 leading-relaxed text-lg font-semibold">
              Com quase 4 anos de experiência, atuei no desenvolvimento de
              produtos de software escaláveis, desde a concepção até a entrega.
              Possuo habilidades para trabalhar em todas as camadas de uma
              aplicação como Desenvolvedor Fullstack. Além disso, tenho uma
              perspectiva sólida sobre marketing, produto, UX e visão holística,
              agregando valor a cada projeto que assumo.
            </p>
          </div>
        </div>
        <div className="text-white w-full text-center mb-5">
          <h1 className="text-5xl font-semibold ">CERTIFICADOS</h1>
        </div>
        <CertificatesPage />

        <div className="text-white w-full text-center mb-10 mt-10">
          <h1 className="text-5xl font-semibold">PROJETOS</h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {repositories.map((project) => (
            <button
              key={project.name}
              className="text-white text-sm rounded shadow-md overflow-hidden border  hover:bg-white hover:text-black focus:bg-white focus:text-black text-left bg-black bg-opacity-50"
              onClick={() => window.open(project.html_url, "_blank")}
            >
              <div className="p-2">
                <h2 className="text-base font-bold ">{project.name}</h2>
                <p className="flex ">
                  Liguagem: {project.language} /
                  <FontAwesomeIcon
                    icon={faStar}
                    className="ml-1  h-4 w-4"
                  />{" "}
                  Stars: {project.stargazers_count}
                </p>
              </div>
            </button>
          ))}
        </section>
      </main>

      <footer className="bg-transparent text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Rian Almeida. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
