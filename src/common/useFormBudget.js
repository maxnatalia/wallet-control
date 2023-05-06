import { useState, useEffect } from "react";
import { useFormFields } from "../utils/useFormFields";
import { nanoid } from "nanoid";
import { useLocalStorage } from "../utils/useLocalStorage";
import { currencyData } from "../utils/data";

export const useFormBudget = () => {
    const [currency, setCurrency] = useLocalStorage("currency", currencyData[0]);
    const [listItems, setListItems] = useLocalStorage("listItems", []);
    const [totalAmount, setTotalAmount] = useState(0);
    const [editableId, setEditableId] = useState(null);

    const { fields, setFields, handleFieldChange } = useFormFields({
        description: '',
        category: '',
        variant: '',
        amount: '',
        date: '',
        search: ''
    });

    const { description, category, variant, amount, date, search } = fields;

    // const formattedDate = new Date(date).toLocaleDateString('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const formattedAmount = Number(amount).toFixed(2);

    const validationAmount = (event) => {
        if (event.key === "-") {
            event.preventDefault();
        }
    };

    const searchData = (listItems, search, variant) => {
        if ((!search || search === "") && (!variant || variant === "")) {
            return listItems;
        } else {
            return listItems.filter(({ description, variant: itemVariant }) => {
                const includesDescription = description && description.toUpperCase().includes(search.trim().toUpperCase());
                const matchesVariant = !variant || (itemVariant && variant === itemVariant);
                return includesDescription && matchesVariant;
            });
        }
    };

    const displayDataItems = searchData(listItems, search, variant);

    const addItem = () => {
        const newItem = {
            description: description,
            category: category,
            variant: variant,
            amount: formattedAmount,
            date: date,
            search: search,
            id: nanoid(),
        };
        setListItems(prevItem => ([...prevItem, newItem]));
    };

    const removeItem = (id) => {
        setListItems(listItems.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const editableData = listItems.find((editableData) => editableData.id === id);
        setFields({ ...editableData });
        setEditableId(id);
    };

    const updateItem = () => {
        const updatedData = listItems.map((item) =>
            item.id === editableId ? { id: editableId, ...fields } : item
        );
        setListItems(updatedData);
        setEditableId(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editableId === null) {
            addItem();
        } else {
            updateItem();
        }
        setFields({
            description: '',
            category: '',
            variant: '',
            amount: '',
            date: '',
            search: ''
        });
    };

    const handleClearAll = () => {
        setListItems([])
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

    return {
        handleSubmit,
        listItems,
        removeItem,
        fields,
        handleFieldChange,
        validationAmount,
        totalAmount,
        currency,
        handleCurrency,
        editItem,
        editableId,
        setFields,
        // handleSearch,
        displayDataItems,
        // handleShowIncome,
        // handleShowExpense,
        // handleShowAll,
        handleClearAll
    }
};

