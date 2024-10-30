import Image from "next/image";

const IconBar = () => {
  return (
    <div className="d-flex align-items-center justify-content-center p-3 bg-light border-bottom bg-blue">
      <Image src="/emblema.svg" alt="" width={50} height={50} />
    </div>
  );
};

export default IconBar;