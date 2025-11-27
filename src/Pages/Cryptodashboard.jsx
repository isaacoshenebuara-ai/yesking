import React, { useState } from 'react'
import NavigationBar from "../Components/NavigationBar"
import { allStyles } from '../styles/Styles';
import MainContent from "../Components/MainCards"
import { holdings } from '../Data/cryptodata';
import PortfolioComponent from '../Components/Portfolio';

function Cryptodashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [myHoldings, setMyHoldings] = useState(holdings);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this holding?")) {
      setMyHoldings(myHoldings.filter(h => h.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit functionality will be implemented in the next component, Editing ID: ${id}`);
  };

  return (
    <div style={allStyles.container}>
        <NavigationBar currentPage={currentPage} onPageChange={setCurrentPage}/>
       
        <main style={allStyles.main}>
          {currentPage === "dashboard" && (
            <MainContent onNavigate={setCurrentPage}/>
          )}

          {currentPage === "portfolio" && (
            <PortfolioComponent
              holdings={myHoldings}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </main>
    </div>
  );
}

export default Cryptodashboard;
