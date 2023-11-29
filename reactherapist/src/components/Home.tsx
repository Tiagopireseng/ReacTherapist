// src/components/Home.tsx
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';




const Home: React.FC = () => {
  return (
    <div className="home-feed">
      
      <section className="section">
        <h2>Autoconhecimento</h2>
        <p>Conhecer a si mesmo é o primeiro passo para a mudança.</p>
        <section className="sub-section">
          <div className='paragraph'>
            <p>Nossa mente e subjetividade é algo profundo e complexo que nos <strong>define</strong> como indivíduos.
            Por um lado somos objetivos e racionais, lutando para sobreviver e prosperar. Fazendo escolhas e tomando decisões,
            pensando no que seria melhor para conseguirmos nossos objetivos.</p>
          </div>
          <img src="home_brain_640x440.jpg" alt="Brain" className="brain-art-image" />
          <p className='paragraph'><span style={{color:'green'}}>Por outro lado somos subjetivos e emocionais, reagindo a estímulos externos e internos, </span><span style={{color:'#db7f34'}}>que nos fazem sentir
          de uma determinada forma, que nos fazem agir de uma determinada forma.</span><span style={{color:'blue'}}>A composição dessas partes nos fazem ser
          quem somos. Para nos conhecermos melhor,</span><span style={{color:'purple'}}> precisamos nos permitir sentir e pensar sobre nós mesmos.</span></p>
          
        </section>
      </section> 
      <section className="section">
        <h2>Bem-vindo à Clínica Lousir Psi</h2>
        <section className="sub-section">
            <img src="hero.png" className="hero-image" alt="Caricatura da Psicóloga"/>
          <div className="hero-text">
            <p>A Clínica Lousir Psi, liderada pela renomada psicóloga Luisianna Silva, oferece um ambiente acolhedor e profissional para seu desenvolvimento e bem-estar emocional.</p>
            <p>Com uma abordagem personalizada, a clínica se dedica a entender e atender às suas necessidades únicas, ajudando você a alcançar equilíbrio e satisfação pessoal. Aqui, cada jornada é valorizada e cada passo é importante.</p>
          </div>
        </section>
        <Link to="/appointments">
          <button className="hero-btn">
            Agende uma consulta
          </button>     
        </Link>   
      </section>
    </div>
  );
}

export default Home;
