import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'
import Card from '../components/ui/Card'

// Données réelles du menu Plan B
const menuData = {
  pizzas: [
    {
      id: 1,
      name: 'Margherita',
      description: 'Sauce tomate, mozzarella, basilic',
      price: { s: 5.50, m: 7.50, l: 11.50 },
      image: '🍕',
      sizes: true,
    },
    {
      id: 2,
      name: 'Calzone',
      description: 'Sauce au choix, mozzarella, jambon, champignons, œuf',
      price: 10.50,
      image: '🍕',
    },
    // Base Sauce Tomate
    {
      id: 3,
      name: 'Rustique',
      description: 'Sauce tomate, mozzarella, chorizo, poivrons',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 4,
      name: 'Bolognaise',
      description: 'Sauce tomate, viande hachée, mozzarella, poivrons, basilic',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 5,
      name: 'Végétarienne',
      description: 'Sauce tomate, mozzarella, champignons, oignon rouge, tomate, olive, basilic',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 6,
      name: 'Kebab',
      description: 'Sauce tomate, mozzarella, kebab, oignon rouge, huile d\'olive',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 7,
      name: 'Frutti di Mare',
      description: 'Sauce tomate, mozzarella, fruits de mer, persil',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 8,
      name: 'Thon',
      description: 'Sauce tomate, mozzarella, thon, olives, persil',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 9,
      name: 'Fromagère',
      description: 'Sauce tomate, mozzarella, chèvre, gorgonzola, parmesan, basilic',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 10,
      name: 'Orientale',
      description: 'Sauce tomate, mozzarella, merguez, oignon rouge, œuf',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 11,
      name: 'Anchois',
      description: 'Base tomate, mozzarella, anchois, huile d\'olive, basilic',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 12,
      name: 'Buffala',
      description: 'Base tomate, mozzarella, viande hachée, boursin, oignon rouge',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 13,
      name: 'Parmegiano',
      description: 'Base tomate, mozzarella, viande hachée, aubergine, parmigiano reggiano',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 14,
      name: 'Zucchini',
      description: 'Base tomate, mozzarella, tomates cerises, saumon, tagliatelles de courgettes',
      price: { s: 8.50, m: 11.00, l: 14.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
      supplement: '+1.00€',
    },
    {
      id: 15,
      name: '3 Viandes',
      description: 'Base tomate, mozzarella, viande hachée, poulet, merguez',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 16,
      name: 'Pizza Bella',
      description: 'Sauce tomate, emmental, tomates fraîches, jambon cru, parmesan, pesto, mozzarella',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 17,
      name: 'L\'Extra',
      description: 'Sauce tomate, jambon, lardons, chorizo, champignons frais, poivrons, œuf, chèvre, mozzarella, emmental, olives',
      price: { s: 10.00, m: 12.50, l: 16.00 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
      supplement: '+2.50€',
    },
    {
      id: 18,
      name: 'Burger\'s',
      description: 'Sauce tomate, viande hachée, cheddar, emmental, sauce burger, olives',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    {
      id: 19,
      name: 'Américaine',
      description: 'Sauce tomate, viande hachée, cheddar, emmental, frites, sauce burger, olives',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Sauce Tomate',
    },
    // Base Crème Fraîche
    {
      id: 20,
      name: 'Boisée',
      description: 'Sauce blanche, mozzarella, poulet, poivrons, sauce, gruyère, olives',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
    {
      id: 21,
      name: 'Chèvre Miel',
      description: 'Sauce blanche, mozzarella, chèvre, miel',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
    {
      id: 22,
      name: 'Rosée',
      description: 'Sauce blanche, mozzarella, saumon, roquette',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
    {
      id: 23,
      name: 'Charcutière',
      description: 'Sauce blanche, mozzarella, jambon, pomme de terre',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
    {
      id: 24,
      name: 'Forestière',
      description: 'Sauce au choix, mozzarella, champignons, basilic, olives',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
    {
      id: 25,
      name: 'Boursin',
      description: 'Crème fraîche, mozzarella, pomme de terre, poulet, boursin',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
    {
      id: 26,
      name: 'Savoyarde',
      description: 'Crème fraîche, mozzarella, reblochon, lardon, pomme de terre',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
    {
      id: 27,
      name: '4 Fromages Miel',
      description: 'Crème fraîche, mozzarella, chèvre, emmental, parmigiano reggiano, miel',
      price: { s: 8.50, m: 11.00, l: 14.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
      supplement: '+1.00€',
    },
    {
      id: 28,
      name: 'Noisettes',
      description: 'Crème fraîche, mozzarella, gorgonzola, pousses d\'épinards, noisettes, huile de noisette',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
    {
      id: 29,
      name: 'Tartiflette',
      description: 'Crème fraîche, lardons, pomme de terre, oignons, reblochon, emmental, olives',
      price: { s: 8.50, m: 11.00, l: 14.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
      supplement: '+1.00€',
    },
    {
      id: 30,
      name: 'Hawaïen',
      description: 'Crème fraîche, jambon, ananas, emmental, tomate, olives',
      price: { s: 7.50, m: 10.00, l: 13.50 },
      image: '🍕',
      sizes: true,
      category: 'Base Crème Fraîche',
    },
  ],
  shawarma: [
    {
      id: 1,
      name: 'Classic',
      description: 'Pain pita, kebab, salade, tomate, oignon, chou rouge, cornichon, sauce blanche',
      price: 6.50,
      image: '🥙',
    },
    {
      id: 2,
      name: 'Pizz\'Wich',
      description: 'Base crème ou tomate, viande au choix, mozzarella, crudités, 1 sauce au choix',
      price: 9.00,
      image: '🥙',
    },
    {
      id: 3,
      name: 'Burger Bombs',
      description: 'Pain maison, viande au choix, fromage au choix, sauce au choix, crudités',
      price: 9.00,
      image: '🥙',
    },
  ],
  burgers: [
    {
      id: 1,
      name: 'Chèvre Miel',
      description: 'Poulet pané, chèvre, salade, tomate, oignon rouge, miel',
      price: { seul: 7.50, menu: 9.50 },
      image: '🍔',
      hasMenu: true,
    },
    {
      id: 2,
      name: 'Le Mixte',
      description: 'Cheddar, steak, poulet pané, cornichon, oignons caramélisés, sauce au choix',
      price: { seul: 8.50, menu: 11.00 },
      image: '🍔',
      hasMenu: true,
    },
    {
      id: 3,
      name: 'Tenders',
      description: 'Double tenders, cheddar, salade, tomate, oignons rouges, sauce au choix',
      price: { seul: 8.00, menu: 10.50 },
      image: '🍔',
      hasMenu: true,
    },
    {
      id: 4,
      name: 'Burger Classique',
      description: 'Steak 90g, cheddar, jambon, œuf, crudités, oignons caramélisés, sauce au choix',
      price: { seul: 8.50, menu: 11.00 },
      image: '🍔',
      hasMenu: true,
    },
    {
      id: 5,
      name: 'Kebab Burger',
      description: 'Pain maison, kebab, cheddar, salade, tomate, poivrons sautés, sauce au choix',
      price: { seul: 7.50, menu: 9.00 },
      image: '🍔',
      hasMenu: true,
    },
    {
      id: 6,
      name: 'Chef',
      description: 'Pain maison, Cheddar, 2 steak, poulet pané, chèvre, bacon, oignons caramélisés, sauce au choix',
      price: { seul: 10.00, menu: 12.50 },
      image: '🍔',
      hasMenu: true,
    },
  ],
  tacos: [
    {
      id: 1,
      name: 'Mexicain',
      description: 'Poulet mariné sauce thaï, poivrons grillés, cheddar, frites, sauce fromagère',
      price: 7.50,
      image: '🌮',
    },
    {
      id: 2,
      name: 'Crispy Boursin',
      description: 'Tenders, fromage boursin, bacon, frites, sauce fromagère',
      price: 9.50,
      image: '🌮',
    },
    {
      id: 3,
      name: 'L\'Original',
      description: 'Steak, poulet, œuf, cheddar, frites, sauce fromagère',
      price: 9.50,
      image: '🌮',
    },
    {
      id: 4,
      name: 'Chèvre Miel',
      description: 'Poulet, fromage de chèvre, miel, noix, frites, sauce fromagère, gratiné',
      price: 10.00,
      image: '🌮',
    },
    {
      id: 5,
      name: 'Savoyarde',
      description: 'Cordon bleu, fromage fondu, bacon, galette de pommes de terre, oignons frits, sauce fromagère, gratiné',
      price: 10.00,
      image: '🌮',
    },
    {
      id: 6,
      name: 'Turkish',
      description: 'Kebab, merguez, onion rings, cheddar, frites, sauce fromagère, gratiné au four',
      price: 10.50,
      image: '🌮',
    },
    {
      id: 7,
      name: 'Vegetarian',
      description: 'Galette de pomme de terre, salade, tomate, oignons caramélisés, champignons, gratinage emmental, poivrons, olives',
      price: 9.00,
      image: '🌮',
    },
  ],
  sandwiches: [
    {
      id: 1,
      name: '3 Fromages',
      description: 'Poulet mariné, poivrons grillés, emmental, cheddar, Boursin, sauce fromagère',
      price: 8.50,
      image: '🥪',
    },
    {
      id: 2,
      name: 'Tenders',
      description: 'Tenders, fromage ail & fines herbes, bacon, oignons caramélisés, sauce fromagère',
      price: 8.00,
      image: '🥪',
    },
    {
      id: 3,
      name: 'Radical',
      description: 'Steak, cordon bleu, œuf, cheddar, oignons caramélisés, sauce',
      price: 9.50,
      image: '🥪',
    },
    {
      id: 4,
      name: 'Américain',
      description: '2 steaks, 2 cheddar, salade, frites, oignons caramélisés',
      price: 9.50,
      image: '🥪',
    },
    {
      id: 5,
      name: 'Plan B',
      description: 'Cheddar, steak 90g, oeuf, galette de pomme de terre, oignons caramélisés, crudités',
      price: 8.50,
      image: '🥪',
    },
    {
      id: 6,
      name: 'Le Complet',
      description: 'Frites, omelette, viande hachee, la vache qui rit, mayo, harissa',
      price: 7.50,
      image: '🥪',
    },
  ],
  composeTacos: {
    tailles: [
      { name: 'Normal', price: 7.00 },
      { name: 'Gourmand', price: 9.50 },
      { name: 'Maxi', price: 11.00 },
      { name: 'Triple', price: 13.50 },
    ],
    menu: '+ 2,50€ : Frites + Boisson',
  },
  pasticcio: [
    {
      id: 1,
      name: 'Pasticcio',
      description: 'Cheddar fondu ou Fromagère, frites, oignons frits, viande au choix',
      price: 8.50,
      image: '🍝',
    },
  ],
  salades: [
    {
      id: 1,
      name: 'César',
      description: 'Escalope, laitue, croûtons, parmesan, tomate cerise, maïs, concombre, huile d\'olive',
      price: 10.00,
      image: '🥗',
    },
    {
      id: 2,
      name: 'Norvégienne',
      description: 'Saumon, roquette, tomate cerise, avocat, feta, concombre, huile d\'olive',
      price: 10.00,
      image: '🥗',
    },
    {
      id: 3,
      name: 'Salade Simple',
      description: 'Viande au choix, frites, crudités, pain maison',
      price: 10.00,
      image: '🥗',
    },
    {
      id: 4,
      name: 'Salade Mixte',
      description: '2 viandes au choix, frites, crudités, pain maison',
      price: 12.00,
      image: '🥗',
    },
  ],
  texMex: [
    { id: 1, name: 'Nuggets', price: { '5': 7.50, '10': 9.50 }, image: '🍗' },
    { id: 2, name: 'Mozza Sticks', price: { '5': 6.00, '10': 8.00 }, image: '🧀' },
    { id: 3, name: 'Tenders', price: { '5': 7.50, '10': 9.50 }, image: '🍗' },
    { id: 4, name: 'Wings', price: { '5': 8.00, '10': 10.00 }, image: '🍗' },
    { id: 5, name: 'Jalapenos', price: { '5': 10.00, '10': 12.00 }, image: '🌶️' },
    { id: 6, name: 'Calamars', price: { '5': 5.50, '10': 10.00 }, image: '🦑' },
    { id: 7, name: 'Onion Rings', price: { '5': 5.50, '10': 10.00 }, image: '🧅' },
    { id: 8, name: 'Camembert', price: { '5': 7.00, '10': 10.50 }, image: '🧀' },
  ],
  frites: [
    { id: 1, name: 'Frites', price: 2.50, image: '🍟' },
    { id: 2, name: 'Frites Fromagère', price: 3.00, image: '🍟' },
    { id: 3, name: 'Frites Cheddar Fondu et Oignon Crispy', price: 4.00, image: '🍟' },
  ],
  panini: [
    {
      id: 1,
      name: 'Panini',
      description: 'Viande au choix ou Chèvre miel ou Nutella ou 3 fromages',
      price: 5.50,
      image: '🥪',
    },
  ],
  menus: [
    {
      id: 1,
      name: 'Menu Étudiant',
      description: 'Tacos, frites, boisson',
      price: 6.50,
      image: '🎓',
    },
    {
      id: 2,
      name: 'Menu Kids',
      description: 'Cheese Burger ou Mini Tacos ou 5 Nuggets ou Egg Toast, frites, boisson',
      price: 6.50,
      image: '👶',
    },
  ],
  msemen: [
    { id: 1, name: 'Nutella', price: 3.00, image: '🥞' },
    { id: 2, name: 'Nutella / Banane', price: 3.50, image: '🥞' },
    { id: 3, name: 'Chocolat Blanc / Banane', price: 4.00, image: '🥞' },
    {
      id: 4,
      name: 'Version salée',
      description: 'Viande au choix, carotte, olives, oignons caramélisés, sauce au choix',
      price: 7.00,
      image: '🥞',
    },
  ],
  desserts: [
    { id: 1, name: 'Tiramisu', price: 3.00, image: '🍰' },
    { id: 2, name: 'Tarte Daim', price: 3.00, image: '🍰' },
    { id: 3, name: 'Tarte Citron', price: 3.00, image: '🍰' },
    { id: 4, name: 'Donut', price: 3.00, image: '🍩' },
  ],
  boissons: [
    {
      id: 1,
      name: 'Canettes 33cl',
      description: 'Fanta, Coca, Sprite, Pepsi, Oasis Framboise, Oasis pomme, Coca Cherry…',
      price: 1.50,
      image: '🥤',
    },
    {
      id: 2,
      name: 'Grandes bouteilles 1,5L',
      price: 3.50,
      image: '🥤',
    },
    { id: 3, name: 'Ayran', price: 1.50, image: '🥤' },
    { id: 4, name: 'Café', price: 1.50, image: '☕' },
    { id: 5, name: 'RedBull', price: 3.00, image: '🥤' },
  ],
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')

  const categories = [
    { id: 'pizzas', label: 'Pizzas', emoji: '🍕' },
    { id: 'shawarma', label: 'Shawarma', emoji: '🥙' },
    { id: 'burgers', label: 'Burgers', emoji: '🍔' },
    { id: 'tacos', label: 'Tacos', emoji: '🌮' },
    { id: 'composeTacos', label: 'Compose ton Tacos', emoji: '📌' },
    { id: 'sandwiches', label: 'Sandwiches', emoji: '🥪' },
    { id: 'salades', label: 'Salades', emoji: '🥗' },
    { id: 'texMex', label: 'Tex Mex', emoji: '🍗' },
    { id: 'frites', label: 'Frites', emoji: '🍟' },
    { id: 'pasticcio', label: 'Pasticcio', emoji: '🍝' },
    { id: 'panini', label: 'Panini', emoji: '🥪' },
    { id: 'menus', label: 'Menus', emoji: '🍽️' },
    { id: 'msemen', label: 'Msemen/Crêpes', emoji: '🥞' },
    { id: 'desserts', label: 'Desserts', emoji: '🍰' },
    { id: 'boissons', label: 'Boissons', emoji: '🥤' },
  ]

  // Fonction pour obtenir le prix minimum d'un item
  const getMinPrice = (item) => {
    if (typeof item.price === 'object') {
      if (item.price.s) return item.price.s
      if (item.price.seul) return item.price.seul
      if (item.price['5']) return item.price['5']
      return Math.min(...Object.values(item.price))
    }
    return item.price
  }

  // Filtrer les items selon la recherche et le prix
  const filteredItems = useMemo(() => {
    let items = menuData[activeCategory] || []
    
    // Filtre par recherche
    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    
    // Filtre par prix
    if (priceFilter === 'low') {
      items = items.filter(item => getMinPrice(item) < 8)
    } else if (priceFilter === 'medium') {
      items = items.filter(item => {
        const minPrice = getMinPrice(item)
        return minPrice >= 8 && minPrice < 10
      })
    } else if (priceFilter === 'high') {
      items = items.filter(item => getMinPrice(item) >= 10)
    }
    
    return items
  }, [activeCategory, searchQuery, priceFilter])

  // Réinitialiser les filtres quand on change de catégorie
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setSearchQuery('')
    setPriceFilter('all')
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-dark/20 via-gold/10 to-red-dark/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(164,23,18,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            Notre Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 font-body"
          >
            Découvrez nos spécialités
          </motion.p>
        </div>
      </section>

      {/* Category Tabs & Filters */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-display font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-red-dark text-white glow-red-strong scale-105'
                  : 'glass border border-gold/20 text-white/80 hover:border-gold/50 hover:text-red-dark hover:bg-parchment/10'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Search and Price Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
            <input
              type="text"
              placeholder="Rechercher un plat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full glass border border-gold/20 text-white placeholder-white/50 focus:ring-2 focus:ring-red-dark focus:border-red-dark outline-none transition-all font-body"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="pl-12 pr-8 py-3 rounded-full glass border border-gold/20 text-white focus:ring-2 focus:ring-red-dark focus:border-red-dark outline-none appearance-none cursor-pointer transition-all font-body"
            >
              <option value="all">Tous les prix</option>
              <option value="low">Moins de 8€</option>
              <option value="medium">8€ - 10€</option>
              <option value="high">Plus de 10€</option>
            </select>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <section className="container mx-auto px-4 pb-20">
        {/* Section spéciale pour Compose ton Tacos */}
        {activeCategory === 'composeTacos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Card className="p-8">
              <h2 className="text-3xl font-display font-bold mb-6 text-white text-center">
                📌 Compose ton Tacos
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-gold">
                    ÉTAPE 1 — Taille du Tacos (Fromagère Maison incluse)
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {menuData.composeTacos.tailles.map((taille, idx) => (
                      <div key={idx} className="text-center p-4 glass rounded-lg border border-gold/20">
                        <p className="font-display font-semibold text-white mb-2">{taille.name}</p>
                        <p className="text-2xl font-display font-bold text-red-dark">
                          {taille.price.toFixed(2)} €
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center mt-4 text-white/80 font-body">
                    👉 {menuData.composeTacos.menu}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {filteredItems.length > 0 ? (
          <motion.div
            key={`${activeCategory}-${searchQuery}-${priceFilter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => {
                // Grouper les pizzas par catégorie
                const showCategory = item.category && (
                  index === 0 || 
                  (index > 0 && filteredItems[index - 1].category !== item.category)
                )
                
                return (
                  <div key={item.id}>
                    {showCategory && item.category && (
                      <div className="col-span-full mb-4 mt-8">
                        <h3 className="text-2xl font-display font-bold text-gold border-b border-gold/30 pb-2">
                          {item.category}
                        </h3>
                      </div>
                    )}
                    <Card className="p-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <div className="text-6xl mb-4 text-center">{item.image}</div>
                        <h3 className="text-xl font-display font-bold mb-2 text-white">{item.name}</h3>
                        {item.description && (
                          <p className="text-white/70 mb-4 text-sm font-body">{item.description}</p>
                        )}
                        {item.supplement && (
                          <p className="text-gold text-sm font-body mb-2">{item.supplement}</p>
                        )}
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          {typeof item.price === 'object' ? (
                            <div className="w-full">
                              {item.sizes ? (
                                <div className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-white/70">S (26cm):</span>
                                    <span className="text-red-dark font-bold">{item.price.s?.toFixed(2)} €</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-white/70">M (33cm):</span>
                                    <span className="text-red-dark font-bold">{item.price.m?.toFixed(2)} €</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-white/70">L (40cm):</span>
                                    <span className="text-red-dark font-bold">{item.price.l?.toFixed(2)} €</span>
                                  </div>
                                </div>
                              ) : item.hasMenu ? (
                                <div className="space-y-1">
                                  <div className="flex justify-between">
                                    <span className="text-white/70">Seul:</span>
                                    <span className="text-red-dark font-bold text-lg">{item.price.seul?.toFixed(2)} €</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-white/70">Menu:</span>
                                    <span className="text-red-dark font-bold text-lg">{item.price.menu?.toFixed(2)} €</span>
                                  </div>
                                </div>
                              ) : item.price['5'] ? (
                                <div className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-white/70">5 pièces:</span>
                                    <span className="text-red-dark font-bold">{item.price['5']?.toFixed(2)} €</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-white/70">10 pièces:</span>
                                    <span className="text-red-dark font-bold">{item.price['10']?.toFixed(2)} €</span>
                                  </div>
                                </div>
                              ) : (
                                <span className="text-2xl font-display font-bold text-red-dark">
                                  À partir de {getMinPrice(item).toFixed(2)} €
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-2xl font-display font-bold text-red-dark">
                              {item.price.toFixed(2)} €
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ) : activeCategory !== 'composeTacos' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-white/70">Aucun résultat trouvé</p>
            <p className="text-white/50 mt-2">Essayez de modifier vos critères de recherche</p>
          </motion.div>
        ) : null}
      </section>
    </div>
  )
}

export default Menu

