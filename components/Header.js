import Image from "next/image";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { autenticado } = useAuth();

  return (
    <header>
      <nav className="flex justify-between bg-white ">
        <div>
          <Link href={"/"} passHref>
            <a className="cursor-pointer">
              <Image
                src={"/logo.png"}
                alt={`Imagen del Logo`}
                layout="intrinsic"
                width={250}
                height={100}
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-2 mr-2 sm:gap-3 md:gap-4">
          <Image
            src={"/carrito.svg"}
            alt={`Imagen de `}
            layout="intrinsic"
            width={50}
            height={50}
          />

          {autenticado ? (
            <Image
              src={"/logout.svg"}
              alt={`Imagen de `}
              layout="intrinsic"
              width={50}
              height={50}
            />
          ) : (
            <Link href={"/login"}>
              <a>
                <Image
                  src={"/login.svg"}
                  alt={`Imagen de `}
                  layout="intrinsic"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
