import Image from "next/image";
import { request } from "../lib/datocms";
import { CarritoProvider } from "../context/CarritoProvider";

import Coleccion from "../components/Coleccion";
import Banner from "../components/Banner";

export default function Home({ inicio }) {
  const { titulo, slogan, flyer } = inicio.index;

  const { item } = inicio.allItemscoleccions[0];

  return (
    <>
      <div className="relative">
        <div>
          <Image
            alt={`Imagen de ${titulo}`}
            src={flyer.url}
            height={30}
            width={50}
            layout="responsive"
          />
        </div>
        <div className="absolute top-[25%] right-1  text-cen ter">
          <h1 className="text-7xl ml-20 text-[#43589F] font-bold font-[Parisienne] text-center md:text-7xl lg:text-9xl lg:mr-28 xl:text-[15rem]">
            {titulo}
          </h1>
          <p className="text-[#43589F] font-[Parisienne] text-3xl w-3/4 ml-20 text-right md:text-5xl md:w-11/12 lg:m-0 lg:text-5xl lg:w-full xl:text-7xl ">
            {slogan}
          </p>
        </div>
      </div>

      <Coleccion items={item} />

      <Banner promo={inicio.promo} />
    </>
  );
}

export async function getStaticProps() {
  const inicio = await request({
    query: `query{
      index{
        titulo
        slogan
        flyer {
          id
          url
        }
      }
      allItemscoleccions{
        item{
          slug
          imagen{
            url
            responsiveImage{
              webpSrcSet
            }
          }
          titulo
        }
      }
      promo{
        flyer{
          url
        }
        slogan
      }
    }
    `,
  });

  return {
    props: {
      inicio,
    },
  };
}
