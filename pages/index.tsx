import Head from 'next/head';
import React from 'react';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import AllStar from '../components/AllStar';
import Metazoan from '../components/Metazoan';
import WhatWeDo from '../components/WhatWeDo';
import MissionVision from '../components/MissionVision';

const backgroundImage = '/assets/bg-main-mt-solid.jpg';

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>METAZOAN CHRONICLES</title>
        <link rel="icon" href="/assets/favicon.ico" />
        <meta
          property="og:title"
          content="MetaDhana | Blockchain and AI Ecosystem"
        />
        <meta
          property="og:description"
          content="The MetaDhana Organization democratizes Artificial Intelligence, Blockchain, Game Development, and Creative Development for creators and various crypto ecosystems through its consortium with proven track record, expertise, people and performance in their respective industries. A next generation media and technology organization."
        />
        <meta property="og:image" content="/assets/metadhana-banner.jpg" />
      </Head>

      <div className="homepage-bg">
        <div className="md:container">
          <Menu />
        </div>

        <div className="container">
          <div className="md:container w-full">
            <Hero />
            <WhoWeAre />
            <AllStar />
            <Metazoan />
            <WhatWeDo />
            <MissionVision />
            <Team />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
