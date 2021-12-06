import TeamBox from './TeamBox';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Team = (): JSX.Element => {
  const team = [
    {
      name: 'Mikhail Jon Peñalosa',
      position: 'Chairman/ CEO',
      img: '/assets/team/framed/mikhail_jon.png',
      linkedin: 'https://www.linkedin.com/in/mikhailjon',
      desc: 'A Growth and Digital Marketing Professional with over 13 years of experience working with ad agencies, ecommerce, large businesses, luxury global brands, and startups around the globe providing data driven growth strategies for various business objectives. Experienced in managing large scale global campaigns up to 8 figures in USD.',
    },
    {
      name: 'Michael John Peña',
      position: 'Chief Technology Officer',
      img: '/assets/team/framed/michael_john.png',
      linkedin: 'https://www.linkedin.com/in/michaeljohnpena',
      desc: 'Michael is an experienced technologist based in Sydney, Australia, a Microsoft MVP since 2015, and a certified professional with over 10 years of working experience ranging from Mobile, Cloud, Web and DevOps. He is also a technical advisor to some technology startups. His roles allow him to explore the cutting edge technologies of Artificial Intelligence, Blockchain, IoT, Edge Computing, and the Cloud.',
    },
    {
      name: 'Ben Banta',
      position: 'Head of Gaming Division',
      img: '/assets/team/framed/ben_banta.png',
      linkedin: 'https://www.linkedin.com/in/ben-joseph-banta-b8580333',
      desc: 'CEO and Studio Head of Ranida Games. Ben has been in the game industry since 2008 and has produced popular flash game franchises such as Sniper Assassin, Potty Racers, and Dragon Slayers. He also has a vast experience in creating mobile and PC games, advergames, and gamified applications.',
    },
    {
      name: 'Dexter Paglinawan',
      position: 'Chief Marketing Officer',
      img: '/assets/team/framed/dexter_paglinawan.png',
      linkedin: 'https://www.linkedin.com/in/dexterpaglinawan',
      desc: 'He’s the author of the marketing book “Auto-Smash Strategy,” and viral video “Saan Napunta ang Pera ni Juan.” Prior to the NFT Gaming boom of 2021, Dexter dabbled deeply into copywriting, online and email marketing - getting “Gold” (top 5%) Vendor and Affiliate status in one of the more popular platforms for buying and selling digital products (related to online business). Currently, Dexter owns a bakery brand with his wife, while running his NFT Gaming based YouTube channel “Dexter Plays PH” (a channel that blew up from 300+ subs to 50K+ in 28 days).',
    },
    {
      name: 'Jaime Busa',
      position: 'Head of Product',
      img: '/assets/team/framed/jaime_busa.png',
      linkedin: 'https://www.linkedin.com/in/jaime-busa-a80a95177',
      desc: 'The former COO of Studio Nine Lives, an anime studio based in the Philippines. Jimmi helped on a lot of outsourced works on notable Japanese anime shows made by top Japanese animation studios like One’s Work and Production IG, David Production, Nut Animation, TMS Entertainment, OLM Inc, Magicbus and D’Art Shtajio. He also helped handle production works for Noir Caesar Studio, Bleacher Report and most recently Powerhouse Animation’s Castlevania Season 4 for Netflix. As MetaDhana’s Head of Product, he is tasked on handling the creative side as well as develop future contents and IP partnerships.',
    },
    {
      name: 'Walter Manalo',
      position: 'Head of Business Development',
      img: '/assets/team/framed/walter_manalo.png',
      linkedin: 'https://www.linkedin.com/in/waltermanalo',
      desc: 'Co-founder & managing partner of Ranida Games. Handles business development, contract negotiations, fundraising, and sponsorships. Board member of Game Developers Association of the Philippines.',
    },
  ];

  return (
    <div className="mt-10 lg:w-4/5 mx-auto mb-20" id="meet-the-team">
      <p className="text-2xl text-center">MEET THE TEAM</p>

      <div className="hidden xl:block">
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {team.map((item, i) => {
            return (
              <div className="col" key={i}>
                <TeamBox
                  img={item.img}
                  key={i}
                  linkedin={item.linkedin}
                  name={item.name}
                  position={item.position}
                  desc={item.desc}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 hidden lg:block xl:hidden rounded-lg">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          // autoPlay = { true }
          centerMode={true}
          centerSlidePercentage={60}
          className="class-carousel"
        >
          {team.map((item, i) => {
            return (
              <div className="class-box mb-10 h-full mx-10" key={i}>
                <TeamBox
                  img={item.img}
                  key={i}
                  linkedin={item.linkedin}
                  name={item.name}
                  position={item.position}
                  desc={item.desc}
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="mt-10 hidden md:block lg:hidden rounded-lg">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          // autoPlay = { true }
          centerMode={true}
          centerSlidePercentage={70}
          className="class-carousel"
        >
          {team.map((item, i) => {
            return (
              <div className="class-box mb-10 h-full mx-10" key={i}>
                <TeamBox
                  img={item.img}
                  key={i}
                  linkedin={item.linkedin}
                  name={item.name}
                  position={item.position}
                  desc={item.desc}
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="mt-10 block md:hidden rounded-lg">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          // autoPlay = { true }
          centerMode={true}
          centerSlidePercentage={100}
          className="class-carousel"
        >
          {team.map((item, i) => {
            return (
              <div className="class-box mb-10 h-full" key={i}>
                <TeamBox
                  img={item.img}
                  key={i}
                  linkedin={item.linkedin}
                  name={item.name}
                  position={item.position}
                  desc={item.desc}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
