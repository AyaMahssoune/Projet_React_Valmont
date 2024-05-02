const {
  listeProduits,
  unProduit,
  ajouterUnProduit,
  supprimerProduit,
  modifierProduit,
} = require("../controllers/produits.controller");
const Produit = require("../database/models/produits.model");

const router = require("express").Router();

router.get("/", listeProduits);
router.get("/:produitId", unProduit);
router.post("/", ajouterUnProduit);
router.delete("/:produitId", supprimerProduit);
router.patch("/:produitId", modifierProduit);

module.exports = router;
