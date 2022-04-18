import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const router = useRouter();
  const { autenticado } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");

    router.reload(window.location.pathname);
  };

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
        <div className="flex items-center gap-2 mr-2 sm:gap-3 md:gap-5">
          <Image
            src={"/carrito.svg"}
            alt={`Imagen de `}
            layout="intrinsic"
            width={50}
            height={50}
          />
          {Object.keys(autenticado).length > 0 ? (
            <a className="hover:cursor-pointer">
              <Image
                onClick={handleLogout}
                src={"/logout.svg"}
                alt={`Imagen de `}
                layout="intrinsic"
                width={50}
                height={50}
              />
            </a>
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
