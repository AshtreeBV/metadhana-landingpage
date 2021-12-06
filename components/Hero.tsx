import Link from 'next/link';
const hero1 = '/assets/hero/Kinju-sama.png';
const hero2 = '/assets/hero/Kuronin.png';
const hero3 = '/assets/hero/Nikin.png';

const Hero = (): JSX.Element => {
  return (
    <div className="xl:flex xl:justify-between mt-10 xl:mt-20 xl:gap-4">
      <div className="xl:flex-grow xl:w-6/12">
        <p className="xl:text-5xl text-4xl xl:text-left text-center">
          Build A Self-Evolving Metaverse
        </p>
        <p className="mt-10 text-lg xl:text-left text-center">
          The MetaDhana Organization democratizes Artificial Intelligence,
          Blockchain, Game Development, and Creative Development for creators
          and various crypto ecosystems through its consortium with proven track
          record, expertise, people and performance in their respective
          industries. A next generation media and technology organization.
        </p>
        <p className="xl:text-3xl text-xl mt-10 text-center xl:text-left">
          Go Beyond Alternate Reality.
        </p>

        <div className="mx-auto xl:mx-0 flex xl:block justify-center">
          <Link href="https://whitepaper.metadhana.io/">
            <a
              rel="noreferrer"
              className="mt-10 mx-auto text-center xl:text-4xl text-xl py-4 px-20 rounded-xl bg-gradient-to-t from-hero-btn-from to-hero-btn-to"
              target="_blank"
              style={{
                appearance: 'button',
              }}
            >
              Whitepaper
            </a>
          </Link>
        </div>
      </div>
      <div className="image-stack xl:w-6/12">
        <div className="image-stack__item image-stack__item--top">
          <img src={hero2} alt="" />
        </div>
        <div className="image-stack__item image-stack__item--bottom">
          <img src={hero1} alt="" />
        </div>
        <div className="image-stack__item image-stack__item--right">
          <img src={hero3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
