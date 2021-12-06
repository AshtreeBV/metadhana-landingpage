import Link from 'next/link';

const metaLogo = '/assets/metadhana-logo.png';

const Footer = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(12, 10, 47, 0.5)',
      }}
      className="py-10 border-t-2 border-footer-border mt-10"
    >
      <div>
        <Link href="/">
          <a className="img-center">
            <img src={metaLogo} alt="" className="w-60 mx-auto" />
          </a>
        </Link>
      </div>

      <p className="text-center mt-4 text-lime-green">
        Made with passion in the Philippines
      </p>
      <p className="text-center mt-2">All Rights Reserved | Philippines 2021</p>
    </div>
  );
};

export default Footer;
