import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'
import Card from '../components/ui/Card'

// Données simulées du menu
const menuData = {
  pizzas: [
    {
      id: 1,
      name: 'Margherita',
      description: 'Tomate, mozzarella, basilic',
      price: 8.50,
      image: '🍕',
    },
    {
      id: 2,
      name: 'Reine',
      description: 'Tomate, mozzarella, jambon, champignons',
      price: 10.50,
      image: '🍕',
    },
    {
      id: 3,
      name: '4 Fromages',
      description: 'Mozzarella, chèvre, emmental, roquefort',
      price: 11.50,
      image: '🍕',
    },
    {
      id: 4,
      name: 'Chorizo',
      description: 'Tomate, mozzarella, chorizo, poivrons',
      price: 11.00,
      image: '🍕',
    },
    {
      id: 5,
      name: 'Végétarienne',
      description: 'Tomate, mozzarella, légumes grillés',
      price: 10.00,
      image: '🍕',
    },
    {
      id: 6,
      name: 'Hawaienne',
      description: 'Tomate, mozzarella, jambon, ananas',
      price: 10.50,
      image: '🍕',
    },
  ],
  snacks: [
    {
      id: 1,
      name: 'Burger Classic',
      description: 'Steak haché, salade, tomate, oignons, sauce',
      price: 7.50,
      image: '🍔',
    },
    {
      id: 2,
      name: 'Burger Cheese',
      description: 'Steak haché, fromage, salade, tomate, sauce',
      price: 8.50,
      image: '🍔',
    },
    {
      id: 3,
      name: 'Kebab',
      description: 'Viande, salade, tomate, oignons, sauce blanche',
      price: 7.00,
      image: '🌯',
    },
    {
      id: 4,
      name: 'Frites',
      description: 'Portion de frites maison',
      price: 3.50,
      image: '🍟',
    },
    {
      id: 5,
      name: 'Nuggets',
      description: '6 pièces de nuggets croustillants',
      price: 5.50,
      image: '🍗',
    },
  ],
  boissons: [
    { id: 1, name: 'Coca-Cola', price: 2.50, image: '🥤' },
    { id: 2, name: 'Sprite', price: 2.50, image: '🥤' },
    { id: 3, name: 'Eau minérale', price: 2.00, image: '💧' },
    { id: 4, name: 'Jus de fruits', price: 3.00, image: '🧃' },
    { id: 5, name: 'Café', price: 1.50, image: '☕' },
  ],
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')

  const categories = [
    { id: 'pizzas', label: 'Pizzas', emoji: '🍕' },
    { id: 'snacks', label: 'Snacks', emoji: '🍔' },
    { id: 'boissons', label: 'Boissons', emoji: '🥤' },
  ]

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
      items = items.filter(item => item.price < 8)
    } else if (priceFilter === 'medium') {
      items = items.filter(item => item.price >= 8 && item.price < 10)
    } else if (priceFilter === 'high') {
      items = items.filter(item => item.price >= 10)
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            Notre Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80"
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
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-black glow-green-strong scale-105'
                  : 'glass border border-white/10 text-white/80 hover:border-primary/50 hover:text-primary hover:bg-white/5'
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
              className="w-full pl-12 pr-4 py-3 rounded-full glass border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="pl-12 pr-8 py-3 rounded-full glass border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none cursor-pointer transition-all"
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
        {filteredItems.length > 0 ? (
          <motion.div
            key={`${activeCategory}-${searchQuery}-${priceFilter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="text-6xl mb-4 text-center">{item.image}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                  {item.description && (
                    <p className="text-white/70 mb-4 text-sm">{item.description}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient">
                      {item.price.toFixed(2)} €
                    </span>
                  </div>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-white/70">Aucun résultat trouvé</p>
            <p className="text-white/50 mt-2">Essayez de modifier vos critères de recherche</p>
          </motion.div>
        )}
      </section>
    </div>
  )
}

export default Menu

