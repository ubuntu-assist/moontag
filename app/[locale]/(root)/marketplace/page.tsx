'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  ArrowUpDown,
  Grid3x3,
  List,
  ShoppingBag,
  Tag,
} from 'lucide-react'
import { IconDeviceMobile, IconCreditCard, IconGift } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Link } from '@/i18n/navigation'

interface GiftCard {
  id: string
  name: string
  merchant: string
  logo: string
  bgColor: string
  category: string
  region: string
  discount?: number
  minAmount: number
  maxAmount: number
  isPopular: boolean
  isNew: boolean
}

interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ size?: number | string; className?: string }>
  count: number
}

const Marketplace = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [giftCards, setGiftCards] = useState<GiftCard[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [regionFilter, setRegionFilter] = useState('all')
  const [sortOption, setSortOption] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    const timer = setTimeout(() => {
      setCategories([
        {
          id: 'mobile-recharge',
          name: 'Rechargement Mobile',
          icon: IconDeviceMobile,
          count: 3,
        },
        {
          id: 'bill-payment',
          name: 'Paiement de factures',
          icon: IconCreditCard,
          count: 0,
        },
        {
          id: 'gift-card',
          name: 'Envoyer des Gifts Cards',
          icon: IconGift,
          count: 2,
        },
      ])

      setGiftCards([
        {
          id: 'orange-01',
          name: 'Carte de Rechargement Orange',
          merchant: 'Orange',
          logo: '/images/crypto-boutique-card.png',
          bgColor: '#FF6200',
          category: 'mobile-recharge',
          region: 'africa',
          discount: 2,
          minAmount: 5,
          maxAmount: 100,
          isPopular: true,
          isNew: false,
        },
        {
          id: 'mtn-01',
          name: 'Carte de Rechargement MTN',
          merchant: 'MTN',
          logo: '/images/crypto-boutique-card.png',
          bgColor: '#FFC107',
          category: 'mobile-recharge',
          region: 'africa',
          minAmount: 5,
          maxAmount: 100,
          isPopular: true,
          isNew: false,
        },
        {
          id: 'moov-01',
          name: 'Carte de Rechargement Moov',
          merchant: 'Moov',
          logo: '/images/crypto-boutique-card.png',
          bgColor: '#00A1D6',
          category: 'mobile-recharge',
          region: 'africa',
          minAmount: 5,
          maxAmount: 100,
          isPopular: false,
          isNew: true,
        },
        {
          id: 'abokyh-gift-01',
          name: 'Carte Cadeau Abokyh',
          merchant: 'Abokyh',
          logo: '/images/crypto-boutique-card.png',
          bgColor: '#28A745',
          category: 'gift-card',
          region: 'global',
          discount: 5,
          minAmount: 10,
          maxAmount: 200,
          isPopular: true,
          isNew: true,
        },
        {
          id: 'abokyh-gift-02',
          name: 'Carte Cadeau Abokyh Premium',
          merchant: 'Abokyh',
          logo: '/images/crypto-boutique-card.png',
          bgColor: '#28A745',
          category: 'gift-card',
          region: 'global',
          minAmount: 20,
          maxAmount: 500,
          isPopular: false,
          isNew: false,
        },
      ])

      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const filteredGiftCards = giftCards.filter((card) => {
    const matchesSearch =
      card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.merchant.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      categoryFilter === 'all' || card.category === categoryFilter
    const matchesRegion = regionFilter === 'all' || card.region === regionFilter
    return matchesSearch && matchesCategory && matchesRegion
  })

  const sortedGiftCards = [...filteredGiftCards].sort((a, b) => {
    switch (sortOption) {
      case 'popular':
        return a.isPopular === b.isPopular ? 0 : a.isPopular ? -1 : 1
      case 'newest':
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
      case 'discount':
        const discountA = a.discount || 0
        const discountB = b.discount || 0
        return discountB - discountA
      case 'name-asc':
        return a.name.localeCompare(b.name)
      case 'name-desc':
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  const regions = [...new Set(giftCards.map((card) => card.region))]

  return (
    <div className='min-h-screen bg-[#FFF4E9]'>
      <section className='bg-[#FFE9D1] pt-24 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                Marché des Cartes Cadeaux
              </h1>
              <p className='text-lg text-gray-700 max-w-3xl mx-auto'>
                Parcourez notre collection de cartes cadeaux pour le
                rechargement mobile, le paiement de factures et l&apos;envoi de
                cadeaux, toutes disponibles avec des cryptomonnaies. Rapide,
                sécurisé et abordable.
              </p>
            </motion.div>
          </div>

          <div className='relative max-w-2xl mx-auto'>
            <Input
              placeholder='Recherchez des cartes cadeaux par nom ou marque...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-10 pr-10 h-12 bg-white border-gray-300 focus:ring-black focus:border-black rounded-full'
            />
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500' />
            <Button className='absolute right-1 top-1/2 transform -translate-y-1/2 h-10 rounded-full bg-black hover:bg-gray-800'>
              Rechercher
            </Button>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='lg:w-1/4'>
              <div className='bg-gray-50 rounded-xl p-6 sticky top-24'>
                <h2 className='text-xl font-bold text-gray-900 mb-4'>
                  Filtrer les Cartes Cadeaux
                </h2>

                <div className='space-y-6'>
                  <div>
                    <h3 className='font-medium text-gray-900 mb-3'>
                      Catégories
                    </h3>
                    <div className='space-y-2'>
                      <div
                        className={`flex items-center justify-between cursor-pointer rounded-lg p-2 ${
                          categoryFilter === 'all'
                            ? 'bg-[#FFE9D1]'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setCategoryFilter('all')}
                      >
                        <div className='flex items-center'>
                          <ShoppingBag className='mr-2 h-5 w-5' />
                          <span>Toutes les Catégories</span>
                        </div>
                        <span className='text-sm text-gray-500'>
                          {giftCards.length}
                        </span>
                      </div>

                      {categories.map((category) => {
                        const Icon = category.icon
                        return (
                          <div
                            key={category.id}
                            className={`flex items-center justify-between cursor-pointer rounded-lg p-2 ${
                              categoryFilter === category.id
                                ? 'bg-[#FFE9D1]'
                                : 'hover:bg-gray-100'
                            }`}
                            onClick={() => setCategoryFilter(category.id)}
                          >
                            <div className='flex items-center'>
                              <Icon className='mr-2 h-5 w-5' />
                              <span>{category.name}</span>
                            </div>
                            <span className='text-sm text-gray-500'>
                              {category.count}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className='font-medium text-gray-900 mb-3'>Région</h3>
                    <Select
                      value={regionFilter}
                      onValueChange={setRegionFilter}
                    >
                      <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black'>
                        <SelectValue placeholder='Toutes les Régions' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='all'>Toutes les Régions</SelectItem>
                        {regions.map((region) => (
                          <SelectItem
                            key={region}
                            value={region}
                            className='capitalize'
                          >
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h3 className='font-medium text-gray-900 mb-3'>
                      Offres Spéciales
                    </h3>
                    <div className='space-y-2'>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='discounted'
                          className='h-4 w-4 text-black rounded border-gray-300 focus:ring-black'
                        />
                        <label
                          htmlFor='discounted'
                          className='ml-2 text-gray-700'
                        >
                          Cartes à Prix Réduit
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='new-arrivals'
                          className='h-4 w-4 text-black rounded border-gray-300 focus:ring-black'
                        />
                        <label
                          htmlFor='new-arrivals'
                          className='ml-2 text-gray-700'
                        >
                          Nouvelles Arrivées
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='font-medium text-gray-900 mb-3'>
                      Plage de Prix
                    </h3>
                    <div className='space-y-2'>
                      <div className='grid grid-cols-2 gap-2'>
                        <Button variant='outline' className='border-gray-300'>
                          0 € - 25 €
                        </Button>
                        <Button variant='outline' className='border-gray-300'>
                          25 € - 50 €
                        </Button>
                        <Button variant='outline' className='border-gray-300'>
                          50 € - 100 €
                        </Button>
                        <Button variant='outline' className='border-gray-300'>
                          100 €+
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant='outline'
                    className='w-full border-gray-300'
                    onClick={() => {
                      setSearchQuery('')
                      setCategoryFilter('all')
                      setRegionFilter('all')
                    }}
                  >
                    Réinitialiser les Filtres
                  </Button>
                </div>
              </div>
            </div>

            <div className='lg:w-3/4'>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6'>
                <div>
                  <h2 className='text-xl font-bold text-gray-900'>
                    {filteredGiftCards.length} Cartes Cadeaux
                  </h2>
                  {(searchQuery ||
                    categoryFilter !== 'all' ||
                    regionFilter !== 'all') && (
                    <p className='text-sm text-gray-600'>
                      Résultats filtrés
                      {categoryFilter !== 'all' &&
                        ` pour ${
                          categories.find((c) => c.id === categoryFilter)?.name
                        }`}
                      {regionFilter !== 'all' && ` dans ${regionFilter}`}
                      {searchQuery && ` correspondant à "${searchQuery}"`}
                    </p>
                  )}
                </div>

                <div className='flex mt-3 sm:mt-0 space-x-2'>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-40 border-gray-300 focus:ring-black focus:border-black'>
                      <div className='flex items-center'>
                        <ArrowUpDown className='h-4 w-4 mr-2' />
                        <SelectValue placeholder='Trier par' />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='popular'>Plus Populaires</SelectItem>
                      <SelectItem value='newest'>Plus Récentes</SelectItem>
                      <SelectItem value='discount'>Meilleure Remise</SelectItem>
                      <SelectItem value='name-asc'>Nom (A-Z)</SelectItem>
                      <SelectItem value='name-desc'>Nom (Z-A)</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className='flex border border-gray-300 rounded-md'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className={`px-2 ${
                        viewMode === 'grid' ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3x3 size={18} />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className={`px-2 ${
                        viewMode === 'list' ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => setViewMode('list')}
                    >
                      <List size={18} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className='mb-6'>
                <Tabs defaultValue='all'>
                  <TabsList className='w-full bg-gray-50 p-1 rounded-lg border border-gray-200'>
                    <TabsTrigger
                      value='all'
                      className='data-[state=active]:bg-black data-[state=active]:text-white'
                    >
                      Toutes
                    </TabsTrigger>
                    <TabsTrigger
                      value='popular'
                      className='data-[state=active]:bg-black data-[state=active]:text-white'
                    >
                      Populaires
                    </TabsTrigger>
                    <TabsTrigger
                      value='discounted'
                      className='data-[state=active]:bg-black data-[state=active]:text-white'
                    >
                      À Prix Réduit
                    </TabsTrigger>
                    <TabsTrigger
                      value='new'
                      className='data-[state=active]:bg-black data-[state=active]:text-white'
                    >
                      Nouvelles Arrivées
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {isLoading ? (
                viewMode === 'grid' ? (
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {Array(9)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className='animate-pulse'>
                          <div className='bg-gray-200 rounded-t-xl h-48 w-full'></div>
                          <div className='p-4 bg-white rounded-b-xl'>
                            <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>
                            <div className='h-4 bg-gray-200 rounded w-1/2 mb-4'></div>
                            <div className='h-8 bg-gray-200 rounded w-full'></div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className='space-y-4'>
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className='animate-pulse flex bg-white rounded-xl p-4'
                        >
                          <div className='h-20 w-20 bg-gray-200 rounded-lg mr-4'></div>
                          <div className='flex-1'>
                            <div className='h-4 bg-gray-200 rounded w-1/3 mb-2'></div>
                            <div className='h-4 bg-gray-200 rounded w-1/4 mb-4'></div>
                            <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                          </div>
                          <div className='h-10 w-20 bg-gray-200 rounded'></div>
                        </div>
                      ))}
                  </div>
                )
              ) : sortedGiftCards.length > 0 ? (
                viewMode === 'grid' ? (
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {sortedGiftCards.map((card) => (
                      <Card
                        key={card.id}
                        className='overflow-hidden hover:shadow-lg transition-shadow'
                      >
                        <CardContent className='p-0'>
                          <div
                            className='h-48 flex items-center justify-center relative'
                            style={{ backgroundColor: card.bgColor }}
                          >
                            <img
                              src={card.logo}
                              alt={`Logo ${card.name}`}
                              className='w-[366px] h-[520px] object-contain'
                              style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />

                            <div className='absolute top-3 right-3 flex flex-col space-y-2'>
                              {card.discount && (
                                <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
                                  {card.discount}% de Réduction
                                </Badge>
                              )}
                              {card.isNew && (
                                <Badge className='bg-blue-100 text-blue-800 hover:bg-blue-100'>
                                  Nouveau
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className='p-4'>
                            <h3 className='font-bold text-gray-900'>
                              {card.name}
                            </h3>
                            <p className='text-sm text-gray-600 mb-4'>
                              {card.merchant}
                            </p>

                            <div className='flex justify-between items-center'>
                              <span className='text-sm text-gray-700'>
                                {card.minAmount} € - {card.maxAmount} €
                              </span>
                              <Button
                                className='bg-black hover:bg-gray-800 text-white rounded-full'
                                size='sm'
                                asChild
                              >
                                <Link href={`/gift-cards/${card.id}`}>
                                  Acheter Maintenant
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className='space-y-4'>
                    {sortedGiftCards.map((card) => (
                      <Card
                        key={card.id}
                        className='overflow-hidden hover:shadow-lg transition-shadow'
                      >
                        <CardContent className='p-4 flex'>
                          <div
                            className='w-24 h-24 rounded-lg flex items-center justify-center mr-4'
                            style={{ backgroundColor: card.bgColor }}
                          >
                            <img
                              src={card.logo}
                              alt={`Logo ${card.name}`}
                              className='w-[366px] h-[520px] object-contain'
                              style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                          </div>

                          <div className='flex-1'>
                            <div className='flex justify-between items-start'>
                              <div>
                                <h3 className='font-bold text-gray-900'>
                                  {card.name}
                                </h3>
                                <p className='text-sm text-gray-600'>
                                  {card.merchant}
                                </p>

                                <div className='mt-2 flex items-center text-sm text-gray-700'>
                                  <span className='mr-4'>
                                    {card.minAmount} € - {card.maxAmount} €
                                  </span>
                                  <div className='flex items-center space-x-2'>
                                    {card.discount && (
                                      <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
                                        {card.discount}% de Réduction
                                      </Badge>
                                    )}
                                    {card.isNew && (
                                      <Badge className='bg-blue-100 text-blue-800 hover:bg-blue-100'>
                                        Nouveau
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <Button
                                className='bg-black hover:bg-gray-800 text-white rounded-full'
                                size='sm'
                                asChild
                              >
                                <Link href={`/gift-cards/${card.id}`}>
                                  Acheter Maintenant
                                </Link>
                              </Button>
                            </div>

                            <div className='mt-3 flex text-xs text-gray-500'>
                              <div className='flex items-center mr-4 capitalize'>
                                <Tag size={12} className='mr-1' />
                                {card.category}
                              </div>
                              <div className='flex items-center capitalize'>
                                <ShoppingBag size={12} className='mr-1' />
                                {card.region}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )
              ) : (
                <div className='text-center py-12 bg-gray-50 rounded-lg'>
                  <Search className='mx-auto h-12 w-12 text-gray-400 mb-4' />
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    Aucune carte cadeau trouvée
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    {searchQuery ||
                    categoryFilter !== 'all' ||
                    regionFilter !== 'all'
                      ? 'Essayez d’ajuster vos filtres pour voir plus de résultats'
                      : 'Nous n’avons pas trouvé de cartes cadeaux correspondant à vos critères'}
                  </p>
                  {searchQuery ||
                  categoryFilter !== 'all' ||
                  regionFilter !== 'all' ? (
                    <Button
                      variant='outline'
                      className='border-gray-300'
                      onClick={() => {
                        setSearchQuery('')
                        setCategoryFilter('all')
                        setRegionFilter('all')
                      }}
                    >
                      Effacer les Filtres
                    </Button>
                  ) : null}
                </div>
              )}

              {sortedGiftCards.length > 0 && (
                <div className='mt-8 flex justify-center'>
                  <div className='flex space-x-2'>
                    <Button variant='outline' className='border-gray-300'>
                      Précédent
                    </Button>
                    <Button
                      variant='outline'
                      className='border-gray-300 bg-gray-50'
                    >
                      1
                    </Button>
                    <Button variant='outline' className='border-gray-300'>
                      2
                    </Button>
                    <Button variant='outline' className='border-gray-300'>
                      3
                    </Button>
                    <Button variant='outline' className='border-gray-300'>
                      Suivant
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Marketplace
