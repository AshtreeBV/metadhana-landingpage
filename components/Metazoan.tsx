import Image from 'next/image';
import Link from 'next/link';
const metazoanLogo = '/assets/metazoan-logo.png';

const Metazoan = (): JSX.Element => {
  return (
    <div className="mt-10 mb-20" id="metazoan-chronicles">
      <div className="text-center text-2xl">Upcoming Projects</div>

      <div className="flex justify-center mt-10 mb-20">
        <div
          className="bg-local lg:p-16 p-12 bg-no-repeat rounded-2xl bg-auto bg-center"
          style={{
            backgroundImage: "url('/assets/placeholder-without-video.png')",
          }}
        >
          <div className="md:w-2/6 mx-auto">
            <img src={metazoanLogo} alt="" className="mx-auto" />
          </div>
          <div className="my-10 lg:px-32 text-center">
            The 9,999 NFT beings are embedded with unique personality traits
            that you can activate in the future. Experience the meta-universe of
            Feral Syndicators and Omni Alliance, where you can participate in
            writing it’s history. Become a warrior, lord, or legend. Create your
            destiny.
          </div>

          <p className="rounded-full py-3 px-10 bg-white w-full md:w-3/5 lg:w-2/5 mx-auto text-black">
            <Link href="https://www.metazoan.io/">
              <a className="align-middle p-1 flex justify-center items-center">
                <span>Learn More</span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Metazoan;
