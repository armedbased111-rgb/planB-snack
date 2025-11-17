
# ✅ 1. **Code couleur extrait du menu**

À partir des visuels fournis, voici la palette couleur cohérente :

### 🎨 **Palette principale**

|Couleur|Usage|Code approximatif|
|---|---|---|
|**Rouge foncé**|Titres, prix, accents|`#A41712`|
|**Jaune / Or vieilli**|Sous-titres, éléments décoratifs, arrière-plan parchemin|`#D1A84A`|
|**Beige parchemin**|Bannières, encarts|`#E8D7A8`|
|**Marron bois foncé**|Fond général|`#2E1F1A`|
|**Noir / Gris anthracite**|Texte|`#1A1A1A`|

### 🎨 Couleurs secondaires

|Couleur|Code|
|---|---|
|Vert basilic|`#4A7A3C`|
|Orange cheddar|`#CE7A32`|
|Blanc (textes contrastés)|`#FFFFFF`|

**Conclusion visuelle : ambiance bois foncé + parchemin + accents rouge/or.**

---

# ✅ 2. **Identité visuelle existante (à respecter dans le site)**

### 🪵 **Style global**

- Univers **“snack premium rustique”**
    
- Texture **bois foncé** en arrière-plan
    
- Bannières façon **papier brûlé / parchemin**
    
- Images rondes ou encadrées en bois
    

### 🔤 **Typographie dominante (recommandée)**

Pour coller le plus possible à l’identité visuelle :

- **Titres** : Slab Serif forte / Western style
    
    - Ex : _"Bebas Neue", "Rockwell", "Playfair Black", “ChunkFive”_
        
- **Sous-titres** : Serif / Bold
    
- **Texte courant** : Sans-serif lisible
    
    - Ex : _"Montserrat", "Open Sans"_
        

### 🧩 **Iconographie**

- Pictogrammes simples mais texturés (feuilles, flammes, planches)
    
- Images de nourriture avec **angles arrondis** ou **bordure bois**
    

---

# ✅ 3. **Recommandations UI/UX pour un site optimal**

### 🧭 Navigation

- Header fixe
    
- Menu divisé en catégories (Pizza / Burgers / Tacos / Sandwich / Shawarma)
    
- CTA “Commander maintenant” bien visible en rouge foncé
    

### 💻 Visuels

- Garder **le fond bois foncé** comme toile de fond
    
- Les sections posées sur des **feuilles type parchemin** pour maximiser cohérence
    

### 📱 Mobile first

- Sections verticales simples
    
- Boutons larges rouge foncé
    
- Menu en accordéon par catégorie
    

### 🧱 Structure de page recommandée

1. **Hero banner** avec image grande pizza + bouton “Commander”
    
2. **Catégories avec visuels ronds**
    
3. **Menu complet**
    
4. **Promotions / Formules**
    
5. **Avis clients**
    
6. **Localisation + horaires**
    
7. **Footer complet**
    

---

# ✅ 4. **Structure du dossier final que tu vas présenter au snack**

Voici comment organiser ton dossier :

### 📂 Dossier final

`/01-identite-visuelle    - palette-couleurs.png   - typographies.pdf   - styleguide.pdf  /02-mockups   - homepage-mobile.png   - homepage-desktop.png   - menu-page.png  /03-menu-webapp   - menu.json   - menu-texte.pdf  /04-proposition-commerciale   - pitch.pdf   - fonctionnalités.pdf   - planning-etapes.pdf   - tarif-site.pdf  /05-elements-fourni-par-client   - photos-salle   - photos-produits   - logo-snack`

---

# ✅ 5. **Menu complet (version structurée prête pour WebApp)**

## 📦 **Version JSON (propre & exploitable)**

_(Remarque : je peux aussi te faire un JSON encore plus précis si tu veux un schéma pour base de données)_

`{   "pizzas": {     "margherita": {       "ingredients": ["sauce tomate", "mozzarella", "basilic"],       "prix": {"S": 5.5, "M": 7.5, "L": 11.5}     },     "calzone": {       "ingredients": ["sauce au choix", "mozzarella", "jambon", "champignons", "œuf"],       "prix": {"M": 10.0, "L": 13.5, "S": 7.5}     },     "tomato_base": [       {         "nom": "RUSTIQUE",         "ingredients": ["sauce tomate", "mozzarella", "chorizo", "poivrons"]       },       {         "nom": "BOLOGNAISE",         "ingredients": ["sauce tomate", "viande hachée", "mozzarella", "poivrons", "basilic"]       },       {         "nom": "VEGETARIENNE",         "ingredients": ["sauce tomate", "champignon", "oignon rouge", "tomate", "olive", "basilic"]       },       {         "nom": "KEBAB",         "ingredients": ["sauce tomate", "mozzarella", "kebab", "oignon rouge", "huile d'olive"]       },       {         "nom": "FRUTTI DI MARE",         "ingredients": ["sauce tomate", "mozzarella", "fruits de mer", "persil"]       }       // etc. Je peux compléter tout le menu en JSON si tu veux.     ]   },    "shawarma": [     {       "nom": "Classic",       "prix": 6.5,       "ingredients": ["pita", "kebab", "salade", "tomate", "oignon", "chou rouge", "cornichon", "sauce blanche"]     },     {       "nom": "Pizz'Wich",       "prix": 9.0,       "ingredients": ["base crème/tomate", "viande au choix", "mozza", "crudités", "sauce au choix"]     }   ],    "burgers": [     {       "nom": "Chèvre Miel",       "prix": {"seul": 7.5, "menu": 9.5},       "ingredients": ["pain maison", "poulet pané", "chèvre", "salade", "tomate", "oignon rouge", "miel"]     }   ] }`

➡️ Je peux **compléter l’intégralité du menu en JSON**, pour toutes les pizzas, tacos, burgers, sandwichs.

---

# ✅ 6. **Étapes pour créer un dossier final optimal**

### **Étape 1 – Analyse visuelle**

- Extraire couleurs
    
- Identifier style graphique
    
- Identifier les éléments répétitifs
    

### **Étape 2 – Création de la charte graphique web**

- Palette hexadécimale
    
- Typographies recommandées
    
- Déclinaisons web (boutons, backgrounds, icônes)
    

### **Étape 3 – Structure du site (UX)**

- Arborescence
    
- Maquettes fil de fer (wireframes)
    
- Parcours client (Accueil → Menu → Commande)
    

### **Étape 4 – Maquettes UI**

- Version mobile obligatoire
    
- Version desktop
    
- Respect strict de l’identité visuelle
    

### **Étape 5 – Préparation du menu**

- Version texte
    
- Version JSON
    
- Normalisation des catégories
    
- Vérification ingrédients / prix
    

### **Étape 6 – Proposition commerciale**

- Avantages du site
    
- Objectifs (augmentation commandes, visibilité, fidélisation)
    
- Fonctionnalités (paiement en ligne, click & collect, etc.)
    
- Planning + devis
    

### **Étape 7 – Assembly du dossier final**

- Table des matières
    
- Annexes (menu, inspirations, couleurs)
    
- Mockups intégrés dans le PDF
    

---

# ✅ 7. **Éléments essentiels que tu pourrais oublier (et que j’ajoute)**

### ✔️ Besoin de photos professionnelles

→ Très important pour un site attractif.

### ✔️ Logo vectorisé

→ Si inexistant, proposer une refonte légère cohérente avec le style.

### ✔️ Présence réseaux sociaux

→ Style des posts, bannière FB/Instagram.

### ✔️ Formats responsives

→ Tu dois fournir les mockups en **mobile**, pas seulement desktop.

### ✔️ Proposition de fonctionnalités web modernes

- Compte client
    
- Suivi commande en temps réel
    
- Système de fidélité
    
- Panier persistant
    
- Interface admin simple (modification prix/menu)
    

---

# 🎁 Conclusion

Je peux maintenant :  
✅ Te faire le dossier complet prêt à être remis au client  
✅ Te générer toutes les maquettes (si tu veux, via DALLE)  
✅ Te rédiger la proposition commerciale propre  
✅ Te préparer un PDF final clé-en-main  
✅ Te compléter tout le menu en JSON