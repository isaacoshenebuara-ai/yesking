import { allStyles } from "../styles/Styles";
import {
    DollarSign,
    Wallet,
    TrendingUp,
    PlusCircle,
} from "lucide-react";
import StatsCard from "./StatsCard";
import { holdings } from "../data/cryptoData"; 
import { useState } from "react";

function MainContent({ onNavigate }) {
    const totalValue = holdings.reduce(
        (sum, h) => sum + h.amount * h.currentPrice,
        0
    );

    const totalInvested = holdings.reduce(
        (sum, h) => sum + h.amount * h.purchasePrice,
        0 // <-- FIXED
    );

    const totalProfit = totalValue - totalInvested;

    const profitPercent =
        totalInvested > 0
            ? ((totalProfit / totalInvested) * 100).toFixed(2)
            : 0;

    const bestPerformer =
        holdings.length > 0
            ? holdings.reduce((best, current) => {
                  const currentGain =
                      ((current.currentPrice - current.purchasePrice) /
                          current.purchasePrice) *
                      100;

                  const bestGain =
                      ((best.currentPrice - best.purchasePrice) /
                          best.purchasePrice) *
                      100;

                  return currentGain > bestGain ? current : best;
              })
            : null;

    return (
        <>
            <div style={allStyles.welcome}>
                <h1 style={allStyles.title}>Welcome Back!</h1>
                <p style={allStyles.subtitle}>
                    Track and manage your cryptocurrency portfolio
                </p>
            </div>

            <div style={allStyles.statsGrid}>
                <StatsCard
                    icon={<DollarSign />}
                    iconColor="white"
                    iconBgColor="blue"
                    label="My Total Portfolio Value"
                    value={`$ ${totalValue.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}`}
                    badge={`${profitPercent >= 0 ? "+" : ""} ${profitPercent}%`}
                    variant="primary"
                />

                <StatsCard
                    icon={<Wallet />}
                    iconColor="#c084fc"
                    iconBgColor="rgba(147, 51, 234, 0.2)"
                    label="Total Holdings"
                    value={holdings.length}
                    variant="secondary"
                />

                <StatsCard
                    icon={<TrendingUp />}
                    iconColor="#4ade80"
                    iconBgColor="rgba(34, 197, 94, 0.2)"
                    label="Best Performer"
                    value={bestPerformer ? bestPerformer.symbol : "-"}
                    variant="secondary"
                    small={true}
                />
            </div>

            <div style={allStyles.card}>
                <h2 style={allStyles.cardTitle}>Quick Actions</h2>
                <div style={allStyles.actionsGrid}>
                    <button
                        onClick={() => onNavigate("portfolio")}
                        style={{
                            ...allStyles.actionButton,
                            ...allStyles.actionButtonPrimary,
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = "#7e22ce";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = "#9333ea";
                        }}
                    >
                        <PlusCircle size={20} />
                        <span>Add New Holding</span>
                    </button>

                    <button
                        onClick={() => onNavigate("portfolio")}
                        style={{
                            ...allStyles.actionButton,
                            ...allStyles.actionButtonSecondary,
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = "#475569";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = "#334155";
                        }}
                    >
                        <Wallet size={20} />
                        <span>View All Holdings</span>
                    </button>
                </div>
            </div>

            <div style={allStyles.guideCard}>
                <h3 style={allStyles.guideTitle}>Getting Started</h3>
                <ul style={allStyles.guideList}>
                    <li style={allStyles.guideItem}>
                        <span style={allStyles.guideNumber}>1.</span>
                        <span>
                            Click "Add New Holding" to add your first cryptocurrency
                        </span>
                    </li>

                    <li style={allStyles.guideItem}>
                        <span style={allStyles.guideNumber}>2.</span>
                        <span>Enter the coin name, amount, and purchase price</span>
                    </li>

                    <li style={allStyles.guideItem}>
                        <span style={allStyles.guideNumber}>3.</span>
                        <span>Track your portfolio performance in real-time</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MainContent;
