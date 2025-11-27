import React, {useState, useEffect, use} from "react";
import { X, save, Plus} from 'lucide-react'
import { holdingStyles } from "../styles/add holdings";
import { holdings } from "../Data/cryptodata";

const colorOptions = [
    '#f7931a',
    '#627eea',
    '#0033ad',
    '#ff4f4f',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#ff00ff',
];    

function AddnewHolding({onSubmit, onCancel}) {
    const [formData, setFormData] = useState({
        name: '',
        symbol: '',
        amount: '',
        purchasePrice: '',
        currentPrice: '',
        color: colorOptions[0],
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})

    const isEditMode = !!holdings;

    useEffect(() => {
        if (holdings) {
            setFormData({
                name: holdings.name,
                symbol: holdings.symbol,
                amount: holdings.amount,
                purchasePrice: holdings.purchasePrice,
                currentPrice: holdings.currentPrice,
                color: holdings.color,
            });
        }
    }, [holdings]);

    // This function is going to be responsible for managing the form as the user starts //
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData (prev => ({
            ...prev,
            [name]: value,
        }));
        //logic to clear the tuping will be here //
    };
    // Function for handling the blur effect on the form will appear here //

    //function for color selection will be here //
    const handleColorSelect = (color) => {
        setFormData (prev => ({
            ...prev,
            color: color,
        }));
    }


    // this function will handle the form submission //
    const handleSubmitForm = (e) => {
        e.preventDefault();
        // form validation logic will be here //

        //data submission preparation //
        const submissionData = {
            name: formData.name.trim(),
            symbol: formData.symbol.trim().toUpperCase(),
            amount: parseFloat(formData.amount),
            purchasePrice: parseFloat (formData.purchasePrice),
            currentPrice: parseFloat (formData.currentPrice),
            color: formData.color,
        }
    };
    return (
        <div></div>
    )
}
export default AddnewHolding;