
export const allStyles = {
    container: {
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)",
    },
    nav: {
        background: "rgba(30, 41, 59, 0.5)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
    },
    navInner: {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    logoText: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "white",
    },
    navButtons: {
        display: "flex",
        gap: "1rem",
    },
    navButton: {
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "all 0.3s",
        fontFamily: "inherit",
    },
    navButtonActive: {
        background: "#9333ea",
        color: "white",
    },
    navButtonInactive: {
        background: "transparent",
        color: "#d1d5db",
    },
    main: {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem 1rem",
    },
    welcome: {
        marginBottom: "2rem",
    },
    title: {
        fontSize: "2.25rem",
        fontWeight: "bold",
        color: "white",
        marginBottom: "0.5rem",
    },
    subtitle: {
        color: "#9ca3af",
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        marginBottom: "2rem",
    },
    statCard: {
        borderRadius: "0.75rem",
        padding: "1.5rem",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
    },
    statCardPrimary: {
        background: "linear-gradient(to bottom right, #9333ea, #7e22ce)",
    },
    statCardSecondary: {
        background: "#1e293b",
        border: "1px solid rgba(168, 85, 247, 0.2)",
    },
    statCardTop: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
    },
    iconBox: {
        padding: "0.75rem",
        borderRadius: "0.5rem",
    },
    iconBoxPrimary: {
        background: "rgba(255, 255, 255, 0.2)",
    },
    iconBoxSecondary: {
        background: "rgba(147, 51, 234, 0.2)",
    },
    iconBoxGreen: {
        background: "rgba(34, 197, 94, 0.2)",
    },
    badge: {
        fontSize: "0.875rem",
        fontWeight: "600",
        color: "#86efac",
    },
    statLabel: {
        fontSize: "0.875rem",
        marginBottom: "0.25rem",
    },
    statLabelPrimary: {
        color: "#e9d5ff",
    },
    statLabelSecondary: {
        color: "#9ca3af",
    },
    statValue: {
        fontSize: "1.875rem",
        fontWeight: "bold",
        color: "white",
    },
    statValueSmall: {
        fontSize: "1.25rem",
    },
    card: {
        background: "#1e293b",
        borderRadius: "0.75rem",
        padding: "1.5rem",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(168, 85, 247, 0.2)",
    },
    cardTitle: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "white",
        marginBottom: "1rem",
    },
    actionsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
    },
    actionButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "1rem 1.5rem",
        borderRadius: "0.5rem",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "600",
        transition: "all 0.3s",
        fontFamily: "inherit",
    },
    actionButtonPrimary: {
        background: "#9333ea",
        color: "white",
        boxShadow: "0 10px 15px -3px rgba(147, 51, 234, 0.4)",
    },
    actionButtonSecondary: {
        background: "#334155",
        color: "white",
    },
    guideCard: {
        marginTop: "2rem",
        background:
            "linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(37, 99, 235, 0.1))",
        borderRadius: "0.75rem",
        padding: "1.5rem",
        border: "1px solid rgba(168, 85, 247, 0.2)",
    },
    guideTitle: {
        fontSize: "1.125rem",
        fontWeight: "bold",
        color: "white",
        marginBottom: "0.75rem",
    },
    guideList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    guideItem: {
        display: "flex",
        alignItems: "flex-start",
        color: "#d1d5db",
        marginBottom: "0.5rem",
    },
    guideNumber: {
        color: "#c084fc",
        marginRight: "0.5rem",
    },
    header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  headerLeft: {
    flex: '1',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#9ca3af',
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    background: '#9333ea',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontFamily: 'inherit',
  },
  searchBar: {
    marginBottom: '1.5rem',
    position: 'relative',
  },
  searchInput: {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 3rem',
    background: '#1e293b',
    border: '1px solid rgba(168, 85, 247, 0.2)',
    borderRadius: '0.5rem',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
  },
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  tableCard: {
    background: '#1e293b',
    borderRadius: '0.75rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(168, 85, 247, 0.2)',
    overflow: 'hidden',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  thead: {
    background: 'rgba(147, 51, 234, 0.1)',
  },
  th: {
    padding: '1rem',
    textAlign: 'left',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#c084fc',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  td: {
    padding: '1rem',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
    color: '#e2e8f0',
  },
  coinInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  coinIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.125rem',
  },
  coinName: {
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.25rem',
  },
  coinSymbol: {
    fontSize: '0.875rem',
    color: '#94a3b8',
  },
  pricePositive: {
    color: '#4ade80',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  priceNegative: {
    color: '#f87171',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  actionButtons: {
    display: 'flex',
    gap: '0.5rem',
  },
  iconButton: {
    padding: '0.5rem',
    background: 'transparent',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    color: '#60a5fa',
  },
  deleteButton: {
    color: '#f87171',
  },
  emptyState: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  emptyIcon: {
    margin: '0 auto 1rem',
    width: '64px',
    height: '64px',
    background: 'rgba(147, 51, 234, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
  },
  emptyText: {
    color: '#94a3b8',
    marginBottom: '1.5rem',
  },
};


