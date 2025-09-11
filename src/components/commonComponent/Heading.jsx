const Heading = ({ title, description = true }) => {
  return (
    <div className="flex flex-col items-start gap-y-6">
      <div className="flex items-center gap-x-4">
        <span className="w-[20px] h-[40px] rounded bg-red-db4444 block"></span>
        <span className="font-poppins font-semibold text-md text-red-db4444 capitalize text-black">
          {title ? title : "Title"}
        </span>
      </div>
      <div>
        {description && (
          <h1 className="font-inter font-semibold text-[36px] text-text-black-000000 capitalize">
            {description ? description : "Description"}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Heading;
