import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ClientLogos from './components/ClientLogos.jsx';
import Features from './components/Features.jsx';
import LaunchPad from './components/LaunchPad.jsx';
import FloatingServices from './components/FloatingServices.jsx';
import FloatingTestimonials from './components/FloatingTestimonials.jsx';
import Awards from './components/Awards.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="clients">
          <ClientLogos />
        </section>

        <section id="services">
          <Features />
        </section>

        <section id="solutions">
          <LaunchPad />
        </section>

        <section id="our-services">
          <FloatingServices />
        </section>

        <section id="testimonials">
          <FloatingTestimonials />
        </section>

        <section id="portfolio">
          <Awards />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="cta">
          <CTA />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
