export default function WhatWeDoBox({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}): JSX.Element {
  return (
    <div className="h-full rounded-xl p-5 bg-gradient-to-br to-red-900 via-gray-800 from-gray-600 mt-5 lg:mt-0 mx-4">
      <div className="bg-red-500 text-white rounded-xl relative lg:w-4/5 text-center mx-auto p-4 -top-9 text-sm">
        {title}
      </div>
      <div className="xl:flex h-full">
        <div className="relative ">
          <img
            src={image}
            className="object-contain xl:h-64 lg:h-64 md:h-64 h-40 mx-auto"
            alt=""
            // layout="fill"
            // objectFit="contain"
          />
        </div>
        <div className="xl:w-8/12 px-3 mt-10 xl:mt-0 mb-5 h-full saira">
          {description}
        </div>
      </div>
    </div>
  );
}
