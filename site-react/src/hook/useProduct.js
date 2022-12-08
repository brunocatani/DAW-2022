import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function useProduct() {
    const context = useContext(ProductContext);
    return context;
}