import RoleCard from './RoleCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const WhoWeAre = (): JSX.Element => {
  const roles = [
    {
      title: 'Artists',
      description:
        'Skilled Comic Artists, 2D/3D Animators that brought popular stories to life from print to Netflix',
      image: '/assets/artist.svg',
      color: 'from-artist-box-from to-artist-box-to',
    },
    {
      title: 'Storytellers',
      description:
        'Established writers of fantasy novels, comics, film  and TV series.',
      image: '/assets/storytellers.svg',
      color: 'from-storyteller-box-from to-storyteller-box-to',
    },
    {
      title: 'Engineers',
      description:
        'Recognised Industry leaders with track-records of success in AI, Blockchain, and game development.',
      image: '/assets/engineers.svg',
      color: 'from-engineers-box-to to-engineers-box-from',
    },
    {
      title: 'Marketers',
      description:
        'Drivers of Growth with proven success in generating awareness and profit for global brands.',
      image: '/assets/marketers.svg',
      color: 'from-marketers-box-from to-marketers-box-to',
    },
  ];

  return (
    <div className="mt-10 mb-10" id="who-we-are">
      <div className="text-center text-2xl">Who we are</div>

      <div className="hidden md:hidden lg:block xl:block">
        <div className="container mx-auto p-6 grid grid-cols-12 gap-8">
          {roles.map((item, i) => {
            return (
              <div
                className={`lg:col-span-6 xl:col-span-3 flex flex-col rounded-lg p-3 lg:p-8 pb-6 bg-gradient-to-br ${item.color}`}
                key={i}
              >
                <RoleCard
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
        <div className="mx-auto">
          <div className="mx-auto">
            <Carousel
              showThumbs={false}
              centerMode={true}
              centerSlidePercentage={70}
              infiniteLoop={true}
              className="class-carousel"
            >
              {roles.map((item, i) => {
                return (
                  <div
                    className={`mx-4 rounded-lg p-3 lg:p-8 pb-6 mb-10 bg-gradient-to-br h-full class-box ${item.color}`}
                    key={i}
                  >
                    <RoleCard
                      key={i}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="block md:hidden lg:hidden xl:hidden mt-10">
        <div className="mx-auto mb-10">
          <div className="mx-auto">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              // centerMode= { true}
              // centerSlidePercentage = { 70 }
              className="class-carousel"
            >
              {roles.map((item, i) => {
                return (
                  <div
                    className={`class-box rounded-lg p-3 lg:p-8 pb-6 mb-10 h-full bg-gradient-to-br ${item.color}`}
                    key={i}
                  >
                    <RoleCard
                      key={i}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
