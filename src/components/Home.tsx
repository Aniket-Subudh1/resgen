import React from 'react';
import Hero from './home/Hero';
import AboutUniversity from './home/AboutUniversity';
import AboutConference from './home/AboutConference';
import ImportantDates from './home/ImportantDates';
import RegistrationInfo from './home/RegistrationInfo';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <AboutUniversity />
        <AboutConference />
        <ImportantDates />
        <RegistrationInfo />
      </div>
    </div>
  );
};

export default Home;