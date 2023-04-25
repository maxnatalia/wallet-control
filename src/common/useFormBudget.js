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
        amount: '',
        date: '',
    });

    const { description, category, variant, amount, date } = fields;

    const formattedDate = new Date(date).toLocaleDateString('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const formattedAmount = Number(amount).toFixed(2);

    const validationAmount = (event) => {
        if (event.key === "-") {
            event.preventDefault();
        }
    };

    const addItem = () => {
        const newItem = { description: description, category: category, variant: variant, amount: formattedAmount, date: formattedDate, id: nanoid() };
        setListItems(prevItem => ([...prevItem, newItem]));
        console.log(description, category, variant, formattedAmount, formattedDate);
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
            variant: '',
            amount: '',
            date: '',
        });
    };

    return { handleSubmit, listItems, removeItem, fields, handleFieldChange, validationAmount }
};

