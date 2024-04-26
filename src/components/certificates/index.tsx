// pages/certificates.js
import Image from 'next/image';
import React from 'react';

const CertificateCard = ({ title, issuer, date, imageUrl, url }: any) => {
  return (
    <button className="border rounded-lg mb:p-6 p-2 mb-4 flex items-center text-white bg-black bg-opacity-80 shadow-md" onClick={() => window.open(url)}>
      <div className="flex-shrink-0 mr-4">
        <Image src={imageUrl} alt={issuer} className="w-24 h-24  sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-36 xl:h-36 rounded-lg object-cover"  width={1000} height={0}/>
      </div>
      <div className='text-left text-xs sm:text-lg md:text-lg xl:text-lg'>
        <h2 className=" font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-2">{issuer}</p>
        <p className="text-gray-300">{date}</p>
      </div>
    </button>
  );
};


const certificates = [
    {
        title: "Python Essential 2",
        issuer: "Cisco",
        date: "Abril 2024",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/cisco_logo.jpeg`, // Substitua pelo caminho correto da imagem
        url: "https://www.credly.com/badges/bf8e6cab-337b-44bc-96a4-69daf51878e0/linked_in_profile", // Substitua pelo caminho correto da imagem
      },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "Otubro 2023",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/cisco_logo.jpeg`,
        url: "https://www.credly.com/badges/004a0c0f-d9fa-4dbe-ae89-7fec4f318ea0/linked_in_profile", // Substitua pelo caminho correto da imagem
      },
        {
        title: "JavaScript",
        issuer: "HackerRank",
        date: "Otubro 2023",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/HackerRank.png`,
        url:"https://www.hackerrank.com/certificates/fd06e10e3d86" // Substitua pelo caminho correto da imagem
        },
        {
        title: "Python",
        issuer: "HackerRank",
        date: "Otubro 2023",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/HackerRank.png`,
        url:"https://www.hackerrank.com/certificates/524a8e48fd7d" // Substitua pelo caminho correto da imagem
        },
        {
        title: "Cybersecurity Awareness",
        issuer: "IBSEC",
        date: "Agosto 2023",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/institutoibsec_logo.jpeg`,
        url:"https://certs.ibsec.com.br/?cert_hash=6712b96808b20305" // Substitua pelo caminho correto da imagem
        },
        {
        title: "Fundamentos em Cibersegurança",
        issuer: "IBSEC",
        date: "Maio 2023",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/institutoibsec_logo.jpeg`,
        url:"https://certs.ibsec.com.br/?cert_hash=be18ba1035575b54" // Substitua pelo caminho correto da imagem
        },
        {
        title: "Fundamentos em Redes",
        issuer: "IBSEC",
        date: "Maio 2023",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/institutoibsec_logo.jpeg`,
        url:"https://certs.ibsec.com.br/?cert_hash=9d6a05459c21e3f5" // Substitua pelo caminho correto da imagem
        },
        {
        title: "ISO/IEC 27001 Information Security Associate™",
        issuer: "Skill Front",
        date: "Maio 2023",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/skillfront_logo.jpeg`,
        url:"https://www.skillfront.com/Badges/55973835250524" // Substitua pelo caminho correto da imagem
        },
        {
        title: "FUNDAMENTOS BÁSICOS DO SAP S/4HANA™ (N: 30896-42793)",
        issuer: "Ka Solution",
        date: "Maio 2023",
        imageUrl: `https://rianalmeida-2025dev.web.app/image/certificate/ka_solution_logo.jpeg`,
        url:"https://www.kasolution.com.br/Certificado" // Substitua pelo caminho correto da imagem
        },
    
    // Adicione mais certificados conforme necessário
  ];
  

const CertificatesPage = () => {
  return (
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} {...certificate} />
        ))}
      </div>
  );
};

export default CertificatesPage;
