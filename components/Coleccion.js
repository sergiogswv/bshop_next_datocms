import Item from "./Item";

const Coleccion = ({ items }) => {
  return (
    <div className="mb-5">
      <h1 className="text-6xl font-bold my-5 text-center text-[#43589F] pt-4 font-['Lato']">
        Nuestra Colección
      </h1>
      <div className="w-full md:grid md:grid-cols-3">
        {items.map((item) => (
          <Item key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Coleccion;
