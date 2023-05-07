import { useLocalStorage } from "../utils/useLocalStorage";

export const useAddCategory = () => {
    const [categories, setCategories] = useLocalStorage("myCategories", ["Jedzenie", "Mieszkanie", "Transport"]);

    const handleAddCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };

    return { handleAddCategory, categories }


};