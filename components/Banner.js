const Banner = ({ promo }) => {
  return (
    <div className="relative mb-2">
      <div className="w-full object-cover ">
        <img
          src={promo.flyer.url}
          alt="Imagen banner"
          className="lg:w-full lg:h-[50rem] object-cover"
        />
      </div>
      <div className="absolute top-[40%] right-0 bg-white rounded-l-xl w-2/3 lg:w-10/12">
        <h1 className="text-2xl ml-2 font-['Parisienne'] text-[#43589F] md:text-5xl md:py-3 lg:text-8xl lg:ml-5 lg:rounded-l-3xl ">
          {promo.slogan}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
