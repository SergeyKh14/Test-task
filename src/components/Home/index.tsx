import MediaItem from "./MediaItem";
import { mediaItems } from "./data";
import { MenuItem } from "./interfaces";

const Home = () => {
  return (
    <main
      className={`flex py-[108px] font-poppins flex-col justify-center items-center min-h-screen bg-gray`}
    >
      <h1 className="font-bold text-center text-blue-dark text-xl leading-[55px] tracking-[-0.56px]">
        We make creative media
        <br />
        that <span className="text-blue">adds value</span>
      </h1>
      <div className="xl:w-[1374px] md:w-[906px] w-[438px] my-[80px] grid grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[40px]">
        {mediaItems.map((item) => (
          <MediaItem key={item.title} {...item} />
        ))}
      </div>
      <button className="w-[315px] h-[60px] rounded-[12px] bg-blue-dark flex justify-center items-center text-white font-bold-sm tracking-[3.4px] uppercase">
        Get Started
      </button>
    </main>
  );
};

export default Home;
