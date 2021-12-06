import Link from 'next/link';

const TeamBox = ({
  img,
  linkedin,
  name,
  position,
  desc,
}: {
  img: string;
  linkedin: string;
  name: string;
  position: string;
  desc: string;
}): JSX.Element => {
  return (
    <div>
      <div className="mx-auto relative rounded-lg h-40 w-40 md:h-52 md:w-52">
        <img
          src={img}
          className="rounded-xl"
          alt=""
          // layout="fill"
          // objectFit="contain"
        />
      </div>
      <div className="w-4/5 mx-auto">
        <div className="h-16 xl:h-10">
          <p className="text-center mt-5 text-lg">{name}</p>
          <p className="text-center text-xs">{position}</p>
        </div>

        <div className="flex-1 h-64 md:h-56 mt-5">
          <p className="text-center text-xs text-white saira mt-3">{desc}</p>
        </div>

        <Link href={linkedin}>
          <a
            className="block p-2 w-full border-gradient-team mt-8 text-center"
            rel="noreferrer"
            target="_blank"
            style={{
              appearance: 'button',
            }}
          >
            View Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TeamBox;
