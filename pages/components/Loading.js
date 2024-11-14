import Image from "next/image";
import load from '../images/car.gif'
const Loading = () => {
  return <div className="text-center py-4">
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-100">
      <div className="spinner w-20 h-20">
        <Image
          className="lg:w-36 w-20"
          src={load}
          alt="Long Drive Cars"
          width={500}
          height={500}
        // placeholder="blur"
        />
      </div>
    </div>
  </div>
};

export default Loading;




