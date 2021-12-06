export default function RoleCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}): JSX.Element {
  return (
    <div className="h-full">
      <div className="text-white grid grid-cols-3 h-full p-2">
        <div className="relative col-span-3 w-24 h-24 mt-2 lg:mt-0 mb-4 float-left">
          <img
            src={image}
            className="h-full w-24 rounded-lg"
            alt=""
            // layout="fill"
            // objectFit="contain"
          />
        </div>
        <div className="col-span-3 h-full">
          <h3 className="mb-3 text-left text-xl">{title}</h3>
          <p className="text-sm font-light text-left saira">{description}</p>
        </div>
      </div>
    </div>
  );
}
