const missionImage = '/assets/misionvision.png';

const MissionVision = (): JSX.Element => {
  return (
    <div className="md:w-4/5 lg:w-full xl:w-3/5 mx-auto mt-10 mb-20">
      <div className="text-center mb-7 text-2xl">Mission / Vision</div>

      <div className="col-span-4">
        <div className="rounded-xl p-5 bg-gradient-to-br to-red-900 via-gray-800 from-gray-600">
          <div className="lg:flex">
            <div className="h-80 md:h-96 lg:h-80 xl:h-96 lg:w-4/12 xl:w-4/12 xl:mx-auto relative rounded-lg">
              <img
                src={missionImage}
                className="rounded-xl"
                // layout="fill"
                // objectFit="contain"
                alt=""
              />
            </div>
            <div className="lg:w-8/12 px-3 mt-10 lg:mt-0">
              <div className="">
                <p className="text-3xl lg:text-6xl text-orange">The Future</p>
              </div>
              <p className="text-base lg:text-xl leading-7 lg:leading-8 mt-5 saira">
                MetaDhana aims to push the boundaries of innovation by expanding
                the concept metaverse. We believe the future of the Metaverse is
                the singularity of man and AI. one that has its own economy,
                utility, story, culture, and natives all governed by an ever
                evolving AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
