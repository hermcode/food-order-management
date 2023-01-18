import { useContext } from "react";
import FOMContext  from "../context/FOMProvider";

export default function useFOM() {
  return useContext(FOMContext)
} 