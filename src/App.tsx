import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CallForPapers from './components/CallForPapers';
import Guidelines from './components/Guidelines';
import Attend from './components/Attend';
import Committees from './components/Committees';
import SightSeeing from './components/SightSeeing';
import Footer from './components/Footer';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  return (
    <ScrollProvider>
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <Navbar />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="call-for-papers" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <CallForPapers />
          </section>
          <section id="guidelines" className="py-16 px-4 md:px-8 lg:px-16">
            <Guidelines />
          </section>
          <section id="attend" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <Attend />
          </section>
          <section id="committees" className="py-16 px-4 md:px-8 lg:px-16">
            <Committees />
          </section>
          <section id="sight-seeing" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <SightSeeing />
          </section>
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App;