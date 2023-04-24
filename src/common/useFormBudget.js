import { useState } from "react";
import { useFormFields } from "../utils/useFormFields";
import { nanoid } from "nanoid";

export const useFormBudget = () => {
    const [listItems, setListItems] = useState([]);
    // const [result, setResult] = useState(0);

    const { fields, setFields, handleFieldChange } = useFormFields({
        description: '',
        category: '',
        variant: '',
    });

    const { description, category, variant } = fields;

    const addItem = () => {
        const newItem = { description: description, category: category, variant: variant, id: nanoid() };
        setListItems(prevItem => ([...prevItem, newItem]));
        console.log(description, category, variant);
    };

    const removeItem = (id) => {
        setListItems(listItems.filter((item) => item.id !== id));
    };

    // const handleResult = () => {
    //     if (category === "expense") {
    //         setResult(prevResult => (prevResult - Number(amount)));
    //     } else {
    //         setResult(prevResult => (prevResult + Number(amount)));
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handleResult();
        addItem();
        setFields({
            description: '',
            category: '',
            variant: ''
        });
    };

    return { handleSubmit, listItems, removeItem, fields, handleFieldChange }
};

