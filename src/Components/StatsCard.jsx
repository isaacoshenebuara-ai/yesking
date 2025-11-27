import React from "react";
import { allStyles } from "../styles/Styles";

function StatCard({
    icon,
    iconColor,
    iconBgColor,
    label,
    value,
    badge,
    variant = "secondary",
    small = false,
}) {
    return (
        <div
            style={{
                ...allStyles.statCard,
                ...(variant === "primary"
                    ? allStyles.statCardPrimary
                    : allStyles.statCardSecondary),
            }}
        >
            {}
            <div style={allStyles.statCardTop}>
                <div style={{ ...allStyles.iconBox, background: iconBgColor }}>
                    {React.cloneElement(icon, { size: 24, color: iconColor })}
                </div>

                {badge && <span style={allStyles.badge}>{badge}</span>}
            </div>

            {}
            <p
                style={{
                    ...allStyles.statLabel,
                    ...(variant === "primary"
                        ? allStyles.statLabelPrimary
                        : allStyles.statLabelSecondary),
                }}
            >
                {label}
            </p>

            {}
            <p
                style={{
                    ...allStyles.statValue,
                    ...(small && allStyles.statValueSmall),
                }}
            >
                {value}
            </p>
        </div>
    );
}

export default StatCard;
