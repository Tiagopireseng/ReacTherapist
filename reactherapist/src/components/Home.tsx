// src/components/Home.tsx
import React from 'react';
import { useEffect } from 'react';
import '../styles/Home.css';
import { observer } from 'mobx-react-lite';



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
        <h2>Welcome to Our Therapist Landing Page</h2>
        <p>Professional support for your mental well-being.</p>
        {/* Add hero section content as needed */}
      </section>

      <section className="section">
        <h2>About the Therapist</h2>
        <p>Brief description of the therapist and their approach.</p>
        {/* Add about section content as needed */}
      </section>

      <section className="section">
        <h2>Services Offered</h2>
        <ul>
          <li>Individual Counseling</li>
          <li>Couples Therapy</li>
          <li>Group Workshops</li>
          {/* Add more services as needed */}
        </ul>
      </section>

      <section className="section">
        <h2>Client Testimonials</h2>
        <div className="testimonial">
          <p>"I found the support I needed. Highly recommended!"</p>
          <p>- Client Name</p>
        </div>
        {/* Add more testimonials as needed */}
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Get in touch to schedule an appointment or ask questions.</p>
        {/* Add contact form or contact information */}
      </section>
    </div>
  );
}

export default Home;
