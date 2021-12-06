import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const metaLogo = '/assets/metadhana-logo.png';
const discordIcon = '/assets/discord-icon.png';
const twitterIcon = '/assets/twitter-icon.png';
const fbIcon = '/assets/fb-icon.png';
const ytIcon = '/assets/yt-icon.png';

const Menu = (): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
            <Link href="/">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                <div className="w-3/5 lg:w-full">
                  <img
                    className="flex-none"
                    src={metaLogo}
                    alt="metadhana-logo"
                  />
                </div>
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="block relative w-10 h-1 lg:h-2 rounded-sm bg-white"></span>
              <span className="block relative w-8 mx-auto  h-1 lg:h-2 rounded-sm bg-white mt-2"></span>
              <span className="block relative w-10  h-1 lg:h-2 rounded-sm bg-white mt-2"></span>
            </button>
          </div>
          <div
            className={
              'xl:flex-row xl:flex-grow items-center' +
              (navbarOpen ? ' xl:flex' : ' xl:flex hidden')
            }
          >
            <ul className="flex flex-col xl:flex-row xl:flex-grow-0 list-none ml-auto xl:ml-5 xl:gap-4">
              <li className="nav-item">
                <Link href="#who-we-are">
                  <a className="px-3 py-2 flex items-center text-base xl:text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                    Who We Are
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#what-we-do">
                  <a className="px-3 py-2 flex items-center text-base xl:text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                    What We Do
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#metazoan-chronicles">
                  <a className="px-3 py-2 flex items-center text-base xl:text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                    Metazoan Chronicles
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#meet-the-team">
                  <a className="px-3 py-2 flex items-center text-base xl:text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                    The Team
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://whitepaper.metadhana.io/">
                  <a
                    className="px-3 py-2 flex items-center text-base xl:text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    target="_blank"
                  >
                    Whitepaper
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://qc6kqnws0ib.typeform.com/to/Rh3NvroF">
                  <a
                    className="px-3 py-2 flex items-center text-base xl:text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex list-none ml-auto">
              <li className="nav-item">
                <Link href="https://www.facebook.com/metadhanastudio/">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-8">
                      <img className="flex-none" src={fbIcon} alt="" />
                    </div>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="https://twitter.com/MetaDhana/">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-8">
                      <img className="flex-none" src={twitterIcon} alt="" />
                    </div>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="https://discord.com/invite/metadhana">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-8">
                      <img className="flex-none" src={discordIcon} alt="" />
                    </div>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="https://www.youtube.com/c/metadhana">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-8">
                      <img className="flex-none" src={ytIcon} alt="" />
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
