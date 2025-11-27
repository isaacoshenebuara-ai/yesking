import React from "react";
import { Wallet } from "lucide-react";
import { allStyles } from "../styles/Styles";

function NavigationBar({ currentPage, onPageChange }) {
    return (
        <nav style={allStyles.nav}>
            <div style={allStyles.navInner}>

                {/* Logo */}
                <div style={allStyles.logo} onClick={() => onPageChange("dashboard")}>
                    <Wallet size={32} color="white" />
                    <span style={allStyles.logotext}>ISAAACCC MONEY</span>
                </div>

                {/* Buttons */}
                <div style={allStyles.navButtons}>

                    <button
                        onClick={() => onPageChange("dashboard")}
                        style={{
                            ...allStyles.navButton,
                            ...(currentPage === "dashboard"
                                ? allStyles.navButtonActive
                                : allStyles.navButtonInactive),
                        }}
                    >
                        Dashboard
                    </button>

                    <button
                        onClick={() => onPageChange("portfolio")}
                        style={{
                            ...allStyles.navButton,
                            ...(currentPage === "portfolio"
                                ? allStyles.navButtonActive
                                : allStyles.navButtonInactive),
                        }}
                    >
                        Portfolio
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;
