import Projects from './Projects';

const AllStar = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center mt-2">
          <p className="w-full text-xl">
            A Team of Experienced Industry Experts Assembled
          </p>
          <p className="w-full mt-4 text-sm">
            Our team has over 50+ years of combined experience working on AAA
            projects in their respective industries
          </p>
        </div>
      </div>

      <div className="lg:mt-10 mx-auto lg:w-4/5">
        <Projects />
      </div>

      <div className="flex justify-center">
        <div className="p-10 text-center my-5 lg:w-3/5 gradient-box border-2 border-solid gradient-box rounded-xl">
          <div className="">
            <p className="w-full">
              Behind the stories we tell is a creative genius that only humans
              possess. But what if there’s something else untapped that can
              enhance the way we create stories — stories that tell of our
              collective interests, desires, and hopes?
            </p>
            <p className="w-full mt-4">
              Enter Metadhana. We leverage the advances of artificial
              intelligence (AI) to enrich our story-telling, to provide an
              Alternate World Experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllStar;
