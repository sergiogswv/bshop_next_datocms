import Image from "next/image";
import Link from "next/link";

const Item = ({ item }) => {
  return (
    <div className="bg-white shadow-md my-4 grid w-10/12 mx-auto rounded-lg">
      <div className="py-5 mx-auto">
        <Image
          src={item.imagen.url}
          alt={`Imagen de item ${item.titulo}`}
          width={300}
          height={300}
        />
      </div>
      <h1 className="text-center text-3xl font-['Lato'] text-[#43589F]">
        {item.titulo}
      </h1>
      <Link href={"/coleccion"} passHref>
        <input
          type="button"
          value="Ver más"
          className="text-center uppercase border-2 border-[#43589F] rounded-md w-10/12 py-3 my-3 mx-auto hover:bg-[#43589F] hover:text-white transition-colors cursor-pointer font-bold text-[#43589F]"
        />
      </Link>
    </div>
  );
};

export default Item;
