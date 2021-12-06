import WhatWeDoBox from './WhatWeDoBox';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const WhatWeDo = (): JSX.Element => {
  const boxes = [
    {
      title: 'NFT Gaming Metaverse',
      image: '/assets/nftgaming.png',
      mobileImage: '/assets/nftgaming.png',
      description:
        'Play to earn, invest, and grow your wealth. With AI, NFT, and DeFi, players can fast track the economic development of the metaverse',
    },
    {
      title: 'A.W.E Alternate world experience',
      image: '/assets/awe.png',
      mobileImage: '/assets/awe.png',
      description:
        'Powered by GPT-3, the most powerful AI technology, we’re developing next-generation simulation gaming or assistive AI that allows players to experience an authentic alternate reality immersion',
    },
    {
      title: 'Content X Sandbox',
      image: '/assets/contentxsandbox.png',
      mobileImage: '/assets/contentxsandbox.png',
      description:
        'A Content platform featuring original stories from our team and creative partners. The Sandbox is a collaborative platform to expand stories via crowdsourcing or AI assistance.',
    },
  ];

  return (
    <div id="what-we-do" className="mb-10">
      <div className="text-center text-2xl mb-10">What we do</div>

      <div className="hidden lg:block">
        <div className="grid grid-rows-1 grid-cols-12 gap-4 my-3">
          {boxes.map((item, i) => {
            return (
              <div className={'md:col-span-4 col-span-12 mb-10'} key={i}>
                <WhatWeDoBox
                  key={i}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block lg:hidden xl:hidden mt-10">
        <div className="mt-10 rounded-lg my-3">
          <Carousel
            showThumbs={false}
            centerMode={true}
            centerSlidePercentage={70}
            infiniteLoop={true}
            dynamicHeight={false}
            // autoPlay = { true }
            className="class-carousel"
          >
            {boxes.map((item, i) => {
              return (
                <div key={i} className="class-box h-full">
                  <WhatWeDoBox
                    key={i}
                    title={item.title}
                    description={item.description}
                    image={item.mobileImage}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="block md:hidden lg:hidden xl:hidden mt-10">
        <div className="mt-10 rounded-lg my-3">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            // autoPlay = { true }
            className="class-carousel"
          >
            {boxes.map((item, i) => {
              return (
                <div key={i} className="class-box h-full">
                  <WhatWeDoBox
                    key={i}
                    title={item.title}
                    description={item.description}
                    image={item.mobileImage}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
