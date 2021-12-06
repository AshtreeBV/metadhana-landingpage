import Image from 'next/image';

const ProjectBox = ({ img }: { img: string }): JSX.Element => {
  return (
    <div className="class-box lg:mx-auto mb-10">
      <div className="rounded-3xl p-2">
        <div className="img-center">
          <div>
            <img src={img} className="w-12 align-middle" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
