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
    };

    return (
        <div></div>
    )
}
export default AddnewHolding;