import React, { useState } from "react";
import {
    PlusCircle,
    Edit2,
    Trash2,
    TrendingUp,
    TrendingDown,
    Search,
} from "lucide-react";
import { allStyles } from "../styles/Styles";

export default function PortfolioComponent({ holdings, onDelete, onEdit }) {
    const [searchTerm, setSearchTerm] = useState("");

    const calculateProfit = (amount, purchasePrice, currentPrice) => {
        const invested = amount * purchasePrice;
        const current = amount * currentPrice;
        return current - invested;
    };

    const calculateProfitPercent = (purchasePrice, currentPrice) => {
        return (((currentPrice - purchasePrice) / purchasePrice) * 100).toFixed(2);
    };

    const filteredHoldings = holdings.filter(
        (holding) =>
            holding.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            holding.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Header */}
            <div style={allStyles.header}>
                <div style={allStyles.headerLeft}>
                    <h1 style={allStyles.title}>My Portfolio</h1>
                    <p style={allStyles.subtitle}>Manage your cryptocurrency holdings</p>
                </div>
                <button
                    style={allStyles.addButton}
                    onMouseEnter={(e) => (e.target.style.background = "#7e22ce")}
                    onMouseLeave={(e) => (e.target.style.background = "#9333ea")}
                    onClick={() =>
                        alert("Add New Holding form will be in the next component!")
                    }
                >
                    <PlusCircle size={20} />
                    <span>Add Holding</span>
                </button>
            </div>

            {/* Search Bar */}
            <div style={allStyles.searchBar}>
                <Search size={20} color="#94a3b8" style={allStyles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search by name or symbol..."
                    style={allStyles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "#9333ea")}
                    onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(168, 85, 247, 0.2)")
                    }
                />
            </div>

            {/* Portfolio Table */}
            <div style={allStyles.tableCard}>
                {filteredHoldings.length === 0 ? (
                    <div style={allStyles.emptyState}>
                        <div style={allStyles.emptyIcon}>
                            <PlusCircle size={32} color="#9333ea" />
                        </div>
                        <h3 style={allStyles.emptyTitle}>
                            {searchTerm ? "No holdings found" : "No Holdings Yet"}
                        </h3>
                        <p style={allStyles.emptyText}>
                            {searchTerm
                                ? "Try adjusting your search terms"
                                : "Start building your portfolio by adding your first cryptocurrency"}
                        </p>
                        {!searchTerm && (
                            <button
                                style={allStyles.addButton}
                                onMouseEnter={(e) => (e.target.style.background = "#7e22ce")}
                                onMouseLeave={(e) => (e.target.style.background = "#9333ea")}
                                onClick={() =>
                                    alert("Add New Holding form coming next!")
                                }
                            >
                                <PlusCircle size={20} />
                                <span>Add Your First Holding</span>
                            </button>
                        )}
                    </div>
                ) : (
                    <div style={allStyles.tableWrapper}>
                        <table style={allStyles.table}>
                            <thead style={allStyles.thead}>
                                <tr>
                                    <th style={allStyles.th}>Asset</th>
                                    <th style={allStyles.th}>Amount</th>
                                    <th style={allStyles.th}>Purchase Price</th>
                                    <th style={allStyles.th}>Current Price</th>
                                    <th style={allStyles.th}>Total Value</th>
                                    <th style={allStyles.th}>Profit/Loss</th>
                                    <th style={allStyles.th}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredHoldings.map((holding) => {
                                    const profit = calculateProfit(
                                        holding.amount,
                                        holding.purchasePrice,
                                        holding.currentPrice
                                    );
                                    const profitPercent = calculateProfitPercent(
                                        holding.purchasePrice,
                                        holding.currentPrice
                                    );
                                    const isPositive = profit >= 0;

                                    return (
                                        <tr key={holding.id}>
                                            <td style={allStyles.td}>
                                                <div style={allStyles.coinInfo}>
                                                    <div
                                                        style={{
                                                            ...allStyles.coinIcon,
                                                            background: holding.color,
                                                        }}
                                                    >
                                                        {holding.symbol.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div style={allStyles.coinName}>
                                                            {holding.name}
                                                        </div>
                                                        <div style={allStyles.coinSymbol}>
                                                            {holding.symbol}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={allStyles.td}>{holding.amount}</td>
                                            <td style={allStyles.td}>
                                                ${holding.purchasePrice.toLocaleString()}
                                            </td>
                                            <td style={allStyles.td}>
                                                ${holding.currentPrice.toLocaleString()}
                                            </td>
                                            <td style={allStyles.td}>
                                                $
                                                {(holding.amount * holding.currentPrice).toLocaleString(
                                                    undefined,
                                                    {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2,
                                                    }
                                                )}
                                            </td>
                                            <td style={allStyles.td}>
                                                <div
                                                    style={
                                                        isPositive
                                                            ? allStyles.pricePositive
                                                            : allStyles.priceNegative
                                                    }
                                                >
                                                    {isPositive ? (
                                                        <TrendingUp size={16} />
                                                    ) : (
                                                        <TrendingDown size={16} />
                                                    )}
                                                    <span>
                                                        $
                                                        {Math.abs(profit).toLocaleString(undefined, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2,
                                                        })}
                                                        ({profitPercent}%)
                                                    </span>
                                                </div>
                                            </td>
                                            <td style={allStyles.td}>
                                                <div style={allStyles.actionButtons}>
                                                    <button
                                                        style={{
                                                            ...allStyles.iconButton,
                                                            ...allStyles.editButton,
                                                        }}
                                                        onClick={() => onEdit(holding.id)}
                                                    >
                                                        <Edit2 size={16} />
                                                    </button>
                                                    <button
                                                        style={{
                                                            ...allStyles.iconButton,
                                                            ...allStyles.deleteButton,
                                                        }}
                                                        onClick={() => onDelete(holding.id)}
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}
