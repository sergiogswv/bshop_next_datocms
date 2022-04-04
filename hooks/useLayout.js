import { useContext } from "react";
import LayoutContext from "../context/LayoutProvider";

const useLayout = () => {
  return useContext(LayoutContext);
};

export default useLayout;
