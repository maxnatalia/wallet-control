import { useState, useEffect } from "react";
import { useFormFields } from "../utils/useFormFields";
import { nanoid } from "nanoid";
import { useLocalStorage } from "../utils/useLocalStorage";
import { currencyData } from "../utils/data";

export const useFormBudget = () => {
    const [currency, setCurrency] = useLocalStorage("currency", currencyData[0]);
    const [listItems, setListItems] = useLocalStorage("listItems", []);
    const [totalAmount, setTotalAmount] = useState(0);

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
        const newItem = {
            description: description,
            category: category,
            variant: variant,
            amount: formattedAmount,
            date: formattedDate,
            id: nanoid(),
        };
        console.log(newItem)
        setListItems(prevItem => ([...prevItem, newItem]));
    };

    const removeItem = (id) => {
        setListItems(listItems.filter((item) => item.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem();
        setFields({
            description: '',
            category: '',
            variant: '',
            amount: '',
            date: '',
        });
    };

    const handleCurrency = (newCurrency) => {
        setCurrency(newCurrency);
    };

    const calculateTotalAmount = (items) => {
        return items.reduce((accumulator, currentItem) => {
            if (currentItem.variant === "expense") {
                return accumulator - Number(currentItem.amount);
            } else {
                return accumulator + Number(currentItem.amount);
            }
        }, 0);
    };

    useEffect(() => {
        const total = calculateTotalAmount(listItems);
        setTotalAmount(total);
    }, [listItems]);

    return { handleSubmit, listItems, removeItem, fields, handleFieldChange, validationAmount, totalAmount, currency, handleCurrency }
};

