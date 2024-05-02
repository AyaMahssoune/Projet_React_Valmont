import React, { useContext, useEffect, useState } from "react";
import styles from "./App.module.scss";
import ProduitFavorisContext from "./contexts/produitFavorisContext";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
//import Admin from "./pages/Admin/Admin";
import { Outlet } from "react-router-dom";

const App = () => {
  // Déclare un état pour stocker les produits favoris
  const [produitsFavoris, setProduitsFavoris] = useState([]);
  const [page, setPage] = useState("home");

  // Si l'item est dans la liste on l'enlève
  // Sinon on l'ajoute

  // Fonction pour ajuster les produits favoris en fonction de l'action sur un item
  const handleAjusterProduitFavoris = (item) => {
    // Vérifie si l'item est déjà dans la liste des produits favoris
    let result = produitsFavoris.filter((t) => t._id === item._id);
    // Si l'item est présent, le retire de la liste des favoris
    if (result.length > 0)
      setProduitsFavoris(produitsFavoris.filter((t) => t._id !== item._id));
    // Sinon, ajoute l'item à la liste des favoris
    else setProduitsFavoris([...produitsFavoris, item]);
  };

  return (
    // Conteneur principal de l'application avec des styles CSS et des classes flexbox
    <div className={`${styles.app_container} d-flex flex-column`}>
      {/* Fournit le contexte des produits favoris aux composants enfants */}
      <ProduitFavorisContext.Provider
        value={{ data: produitsFavoris, setData: handleAjusterProduitFavoris }}
      >
        {/* Affiche le composant Header et lui passe la fonction de modification des favoris et page */}

        <Header setProduitsFavoris={setProduitsFavoris} setPage={setPage} />

        {/* Affiche un composant Banner */}
        <Banner />

        {/* Affiche les composants enfants du routeur */}
        <Outlet />
      </ProduitFavorisContext.Provider>

      <Footer />
    </div>
  );
};

export default App;
