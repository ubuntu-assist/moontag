'use client'

import { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { format, subDays, isAfter, isBefore } from 'date-fns'
import {
  Search,
  Filter,
  Download,
  ArrowDown,
  ArrowUp,
  ArrowLeftRight,
  ShoppingBag,
  Zap,
  MoreHorizontal,
  Calendar,
  ChevronsUpDown,
  Copy,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import { DateRange as DayPickerDateRange } from 'react-day-picker'

interface DateRange {
  from: Date | undefined
  to: Date | undefined
}

interface Transaction {
  id: string
  type: 'purchase' | 'send' | 'receive' | 'swap' | 'topup' | 'utility'
  crypto: {
    currency: string
    amount: number
  }
  fiat?: {
    currency: string
    amount: number
  }
  description: string
  recipient?: string
  sender?: string
  date: Date
  status: 'completed' | 'pending' | 'failed'
  hash?: string
  fee?: number
}

const TransactionsPage = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [currencyFilter, setCurrencyFilter] = useState('all')
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('all')
  const [showTransactionDetails, setShowTransactionDetails] = useState(false)
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null)
  const [sortConfig, setSortConfig] = useState<{
    key: string
    direction: 'asc' | 'desc'
  }>({
    key: 'date',
    direction: 'desc',
  })

  // Fetch transactions (mock data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setTransactions([
        {
          id: 'tx-1',
          type: 'purchase',
          crypto: {
            currency: 'XLM',
            amount: 25,
          },
          fiat: {
            currency: 'USD',
            amount: 25,
          },
          description: 'Carte Cadeau Amazon',
          date: new Date(2025, 3, 12, 14, 30),
          status: 'completed',
          hash: '0x123...abc',
          fee: 0.1,
        },
        {
          id: 'tx-2',
          type: 'send',
          crypto: {
            currency: 'XLM',
            amount: 50,
          },
          description: 'Transfert vers portefeuille externe',
          recipient: 'GDNE...4UB2',
          date: new Date(2025, 3, 10, 9, 15),
          status: 'completed',
          hash: '0x456...def',
          fee: 0.1,
        },
        {
          id: 'tx-3',
          type: 'receive',
          crypto: {
            currency: 'XLM',
            amount: 100,
          },
          description: 'Depuis portefeuille externe',
          sender: 'GAKY...ZX12',
          date: new Date(2025, 3, 5, 18, 20),
          status: 'completed',
          hash: '0x789...ghi',
        },
        {
          id: 'tx-4',
          type: 'swap',
          crypto: {
            currency: 'BTC',
            amount: 0.001,
          },
          fiat: {
            currency: 'XLM',
            amount: 32,
          },
          description: 'Conversion BTC vers XLM',
          date: new Date(2025, 3, 2, 11, 45),
          status: 'completed',
          hash: '0xabc...123',
          fee: 0.0005,
        },
        {
          id: 'tx-5',
          type: 'topup',
          crypto: {
            currency: 'XLM',
            amount: 20,
          },
          fiat: {
            currency: 'USD',
            amount: 20,
          },
          description: 'Recharge mobile pour +123456789',
          date: new Date(2025, 2, 28, 16, 10),
          status: 'completed',
          hash: '0xdef...456',
          fee: 0.1,
        },
        {
          id: 'tx-6',
          type: 'utility',
          crypto: {
            currency: 'XLM',
            amount: 35,
          },
          fiat: {
            currency: 'USD',
            amount: 35,
          },
          description: 'Paiement de facture d’électricité',
          date: new Date(2025, 2, 20, 10, 5),
          status: 'pending',
          hash: '0xghi...789',
          fee: 0.1,
        },
        {
          id: 'tx-7',
          type: 'purchase',
          crypto: {
            currency: 'ETH',
            amount: 0.05,
          },
          fiat: {
            currency: 'USD',
            amount: 100,
          },
          description: 'Carte Cadeau Steam',
          date: new Date(2025, 2, 15, 20, 30),
          status: 'failed',
          hash: '0xjkl...012',
          fee: 0.001,
        },
      ])
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Apply time period filter based on selection
  useEffect(() => {
    if (selectedTimePeriod !== 'custom') {
      let fromDate: Date | undefined = undefined

      switch (selectedTimePeriod) {
        case 'today':
          fromDate = new Date()
          fromDate.setHours(0, 0, 0, 0)
          break
        case 'week':
          fromDate = subDays(new Date(), 7)
          break
        case 'month':
          fromDate = subDays(new Date(), 30)
          break
        case 'year':
          fromDate = subDays(new Date(), 365)
          break
        default:
          fromDate = undefined
          break
      }

      setDateRange({ from: fromDate, to: undefined })
    }
  }, [selectedTimePeriod])

  // Get transaction icon based on type
  const getTransactionIcon = (type: string, size = 18) => {
    switch (type) {
      case 'purchase':
        return <ShoppingBag size={size} className='text-purple-500' />
      case 'send':
        return <ArrowUp size={size} className='text-red-500' />
      case 'receive':
        return <ArrowDown size={size} className='text-green-500' />
      case 'swap':
        return <ArrowLeftRight size={size} className='text-blue-500' />
      case 'topup':
        return <Zap size={size} className='text-yellow-500' />
      case 'utility':
        return <Zap size={size} className='text-teal-500' />
      default:
        return null
    }
  }

  // Get transaction status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
            Terminé
          </Badge>
        )
      case 'pending':
        return (
          <Badge className='bg-yellow-100 text-yellow-800 hover:bg-yellow-100'>
            En attente
          </Badge>
        )
      case 'failed':
        return (
          <Badge className='bg-red-100 text-red-800 hover:bg-red-100'>
            Échoué
          </Badge>
        )
      default:
        return null
    }
  }

  // Format date and time
  const formatDateTime = (date: Date) => {
    return format(date, 'd MMM yyyy • H:mm')
  }

  // Format amount with appropriate sign
  const formatAmount = (type: string, amount: number, currency: string) => {
    if (type === 'receive') {
      return `+${amount} ${currency}`
    } else if (type === 'swap') {
      return `${amount} ${currency}`
    } else {
      return `-${amount} ${currency}`
    }
  }

  // Handle sort
  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'

    if (sortConfig.key === key) {
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc'
    } else {
      direction = 'asc'
    }

    setSortConfig({ key, direction })
  }

  // Handle transaction row click
  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction)
    setShowTransactionDetails(true)
  }

  // Filter and sort transactions
  const filteredSortedTransactions = useMemo(() => {
    let filtered = [...transactions]

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter((tx) => tx.status === statusFilter)
    }

    // Apply type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter((tx) => tx.type === typeFilter)
    }

    // Apply currency filter
    if (currencyFilter !== 'all') {
      filtered = filtered.filter((tx) => tx.crypto.currency === currencyFilter)
    }

    // Apply date range filter
    if (dateRange.from) {
      filtered = filtered.filter((tx) =>
        isAfter(tx.date, dateRange.from as Date)
      )
    }

    if (dateRange.to) {
      filtered = filtered.filter((tx) =>
        isBefore(tx.date, dateRange.to as Date)
      )
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (tx) =>
          tx.description.toLowerCase().includes(query) ||
          tx.recipient?.toLowerCase().includes(query) ||
          tx.sender?.toLowerCase().includes(query) ||
          (tx.hash && tx.hash.toLowerCase().includes(query))
      )
    }

    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue, bValue

        // Handle nested properties
        if (sortConfig.key === 'crypto.amount') {
          aValue = a.crypto.amount
          bValue = b.crypto.amount
        } else if (sortConfig.key === 'crypto.currency') {
          aValue = a.crypto.currency
          bValue = b.crypto.currency
        } else {
          // @ts-expect-error Type 'string | number | symbol' cannot be used to index type 'A'.
          aValue = a[sortConfig.key]

          // @ts-expect-error Type 'string | number | symbol' cannot be used to index type 'B'.
          bValue = b[sortConfig.key]
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }

    return filtered
  }, [
    transactions,
    statusFilter,
    typeFilter,
    currencyFilter,
    dateRange,
    searchQuery,
    sortConfig,
  ])

  // Get unique currencies for filter dropdown
  const uniqueCurrencies = useMemo(() => {
    const currencies = transactions.map((tx) => tx.crypto.currency)
    return Array.from(new Set(currencies))
  }, [transactions])

  // Get transaction statistics
  const stats = useMemo(() => {
    const totalTransactions = filteredSortedTransactions.length
    const completed = filteredSortedTransactions.filter(
      (tx) => tx.status === 'completed'
    ).length
    const pending = filteredSortedTransactions.filter(
      (tx) => tx.status === 'pending'
    ).length
    const failed = filteredSortedTransactions.filter(
      (tx) => tx.status === 'failed'
    ).length

    return { totalTransactions, completed, pending, failed }
  }, [filteredSortedTransactions])

  return (
    <DashboardLayout>
      <Head>
        <title>Transactions | Abokyh</title>
      </Head>

      <div className='py-6 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-2xl font-bold text-gray-900'>Transactions</h1>
            <p className='text-gray-700'>
              Consultez et gérez votre historique de transactions
            </p>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between p-4'>
              <CardTitle className='text-base font-medium'>
                Total des Transactions
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4 pt-0'>
              {isLoading ? (
                <div className='h-8 bg-gray-200 rounded animate-pulse w-16'></div>
              ) : (
                <p className='text-2xl font-bold'>{stats.totalTransactions}</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between p-4'>
              <CardTitle className='text-base font-medium'>Terminées</CardTitle>
              <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
                Succès
              </Badge>
            </CardHeader>
            <CardContent className='p-4 pt-0'>
              {isLoading ? (
                <div className='h-8 bg-gray-200 rounded animate-pulse w-16'></div>
              ) : (
                <p className='text-2xl font-bold'>{stats.completed}</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between p-4'>
              <CardTitle className='text-base font-medium'>
                En attente
              </CardTitle>
              <Badge className='bg-yellow-100 text-yellow-800 hover:bg-yellow-100'>
                En cours
              </Badge>
            </CardHeader>
            <CardContent className='p-4 pt-0'>
              {isLoading ? (
                <div className='h-8 bg-gray-200 rounded animate-pulse w-16'></div>
              ) : (
                <p className='text-2xl font-bold'>{stats.pending}</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between p-4'>
              <CardTitle className='text-base font-medium'>Échouées</CardTitle>
              <Badge className='bg-red-100 text-red-800 hover:bg-red-100'>
                Erreur
              </Badge>
            </CardHeader>
            <CardContent className='p-4 pt-0'>
              {isLoading ? (
                <div className='h-8 bg-gray-200 rounded animate-pulse w-16'></div>
              ) : (
                <p className='text-2xl font-bold'>{stats.failed}</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Filters Row */}
        <div className='flex flex-col sm:flex-row gap-4 mb-6'>
          <div className='relative flex-1'>
            <Input
              placeholder='Rechercher des transactions...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-10 border-gray-300 focus:ring-black focus:border-black'
            />
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
          </div>

          <div className='flex flex-wrap gap-3'>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black w-36'>
                <div className='flex items-center gap-2'>
                  <Filter className='h-4 w-4' />
                  <SelectValue placeholder='Tous les Types' />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>Tous les Types</SelectItem>
                <SelectItem value='purchase'>Achats</SelectItem>
                <SelectItem value='send'>Envoyées</SelectItem>
                <SelectItem value='receive'>Reçues</SelectItem>
                <SelectItem value='swap'>Échanges</SelectItem>
                <SelectItem value='topup'>Recharges</SelectItem>
                <SelectItem value='utility'>Factures</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black w-36'>
                <SelectValue placeholder='Tous les Statuts' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>Tous les Statuts</SelectItem>
                <SelectItem value='completed'>Terminé</SelectItem>
                <SelectItem value='pending'>En attente</SelectItem>
                <SelectItem value='failed'>Échoué</SelectItem>
              </SelectContent>
            </Select>

            <Select value={currencyFilter} onValueChange={setCurrencyFilter}>
              <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black w-36'>
                <SelectValue placeholder='Toutes les Devises' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>Toutes les Devises</SelectItem>
                {uniqueCurrencies.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant='outline' className='border-gray-300 w-40'>
                  <Calendar className='h-4 w-4 mr-2' />
                  {selectedTimePeriod === 'custom' && dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, 'dd MMM')} -{' '}
                        {format(dateRange.to, 'dd MMM')}
                      </>
                    ) : (
                      format(dateRange.from, 'dd MMM yyyy')
                    )
                  ) : (
                    <>
                      {selectedTimePeriod === 'all'
                        ? 'Tout le Temps'
                        : selectedTimePeriod === 'today'
                        ? "Aujourd'hui"
                        : selectedTimePeriod === 'week'
                        ? '7 Derniers Jours'
                        : selectedTimePeriod === 'month'
                        ? '30 Derniers Jours'
                        : '365 Derniers Jours'}
                    </>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <div className='p-3 border-b'>
                  <div className='flex justify-between items-center'>
                    <h3 className='font-medium text-sm'>Filtrer par date</h3>
                  </div>
                  <div className='flex items-center gap-2 mt-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      className={`text-xs ${
                        selectedTimePeriod === 'all' ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => setSelectedTimePeriod('all')}
                    >
                      Tout
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      className={`text-xs ${
                        selectedTimePeriod === 'today' ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => setSelectedTimePeriod('today')}
                    >
                      Aujourd&apos;hui
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      className={`text-xs ${
                        selectedTimePeriod === 'week' ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => setSelectedTimePeriod('week')}
                    >
                      Semaine
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      className={`text-xs ${
                        selectedTimePeriod === 'month' ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => setSelectedTimePeriod('month')}
                    >
                      Mois
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      className={`text-xs ${
                        selectedTimePeriod === 'custom' ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => setSelectedTimePeriod('custom')}
                    >
                      Personnalisé
                    </Button>
                  </div>
                </div>
                {selectedTimePeriod === 'custom' && (
                  <CalendarComponent
                    mode='range'
                    selected={{
                      from: dateRange.from,
                      to: dateRange.to,
                    }}
                    onSelect={(
                      selectedRange: DayPickerDateRange | undefined
                    ) => {
                      if (selectedRange) {
                        setDateRange({
                          from:
                            selectedRange.from instanceof Date
                              ? selectedRange.from
                              : undefined,
                          to:
                            selectedRange.to instanceof Date
                              ? selectedRange.to
                              : undefined,
                        })
                      } else {
                        setDateRange({ from: undefined, to: undefined })
                      }
                    }}
                    numberOfMonths={2}
                  />
                )}
              </PopoverContent>
            </Popover>

            <Button variant='outline' className='border-gray-300'>
              <Download className='h-4 w-4 mr-2' />
              Exporter
            </Button>
          </div>
        </div>

        {/* Transactions Table */}
        <Card className='mb-8'>
          <CardContent className='p-0'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[200px]'>
                    <div
                      className='flex items-center cursor-pointer'
                      onClick={() => handleSort('description')}
                    >
                      Description
                      <ChevronsUpDown className='ml-1 h-3 w-3' />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div
                      className='flex items-center cursor-pointer'
                      onClick={() => handleSort('type')}
                    >
                      Type
                      <ChevronsUpDown className='ml-1 h-3 w-3' />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div
                      className='flex items-center cursor-pointer'
                      onClick={() => handleSort('crypto.amount')}
                    >
                      Montant
                      <ChevronsUpDown className='ml-1 h-3 w-3' />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div
                      className='flex items-center cursor-pointer'
                      onClick={() => handleSort('crypto.currency')}
                    >
                      Devise
                      <ChevronsUpDown className='ml-1 h-3 w-3' />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div
                      className='flex items-center cursor-pointer'
                      onClick={() => handleSort('date')}
                    >
                      Date et Heure
                      <ChevronsUpDown className='ml-1 h-3 w-3' />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div
                      className='flex items-center cursor-pointer'
                      onClick={() => handleSort('status')}
                    >
                      Statut
                      <ChevronsUpDown className='ml-1 h-3 w-3' />
                    </div>
                  </TableHead>
                  <TableHead className='w-[50px]'></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  // Loading skeleton
                  Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <TableRow key={i}>
                        {Array(7)
                          .fill(0)
                          .map((_, j) => (
                            <TableCell key={j}>
                              <div className='h-4 bg-gray-200 rounded animate-pulse w-16'></div>
                            </TableCell>
                          ))}
                      </TableRow>
                    ))
                ) : filteredSortedTransactions.length > 0 ? (
                  filteredSortedTransactions.map((transaction) => (
                    <TableRow
                      key={transaction.id}
                      className='cursor-pointer hover:bg-gray-50'
                      onClick={() => handleTransactionClick(transaction)}
                    >
                      <TableCell className='font-medium'>
                        <div className='flex items-center'>
                          <div className='mr-2'>
                            {getTransactionIcon(transaction.type)}
                          </div>
                          <span>{transaction.description}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className='capitalize'>
                          {transaction.type === 'purchase'
                            ? 'Achat'
                            : transaction.type === 'send'
                            ? 'Envoi'
                            : transaction.type === 'receive'
                            ? 'Réception'
                            : transaction.type === 'swap'
                            ? 'Échange'
                            : transaction.type === 'topup'
                            ? 'Recharge'
                            : 'Facture'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`font-medium ${
                            transaction.type === 'receive'
                              ? 'text-green-600'
                              : ''
                          }`}
                        >
                          {formatAmount(
                            transaction.type,
                            transaction.crypto.amount,
                            transaction.crypto.currency
                          )}
                        </span>
                      </TableCell>
                      <TableCell>{transaction.crypto.currency}</TableCell>
                      <TableCell>{formatDateTime(transaction.date)}</TableCell>
                      <TableCell>
                        {getStatusBadge(transaction.status)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant='ghost'
                              size='icon'
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreHorizontal className='h-4 w-4' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation()
                                handleTransactionClick(transaction)
                              }}
                            >
                              Voir les Détails
                            </DropdownMenuItem>
                            {transaction.hash && (
                              <DropdownMenuItem
                                onClick={(e) => {
                                  e.stopPropagation()
                                  navigator.clipboard.writeText(
                                    transaction.hash || ''
                                  )
                                }}
                              >
                                Copier le Hash de la Transaction
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation()
                                // Implement download receipt functionality
                              }}
                            >
                              Télécharger le Reçu
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className='text-center py-10'>
                      <div className='flex flex-col items-center'>
                        <Search className='h-10 w-10 text-gray-400 mb-4' />
                        <h3 className='text-lg font-bold text-gray-900 mb-1'>
                          Aucune transaction trouvée
                        </h3>
                        <p className='text-gray-600 mb-4'>
                          {searchQuery ||
                          statusFilter !== 'all' ||
                          typeFilter !== 'all' ||
                          currencyFilter !== 'all' ||
                          dateRange.from
                            ? 'Essayez d’ajuster vos filtres pour voir plus de résultats'
                            : 'Vous n’avez pas encore effectué de transactions'}
                        </p>
                        {searchQuery ||
                        statusFilter !== 'all' ||
                        typeFilter !== 'all' ||
                        currencyFilter !== 'all' ||
                        dateRange.from ? (
                          <Button
                            variant='outline'
                            onClick={() => {
                              setSearchQuery('')
                              setStatusFilter('all')
                              setTypeFilter('all')
                              setCurrencyFilter('all')
                              setDateRange({ from: undefined, to: undefined })
                              setSelectedTimePeriod('all')
                            }}
                          >
                            Effacer les Filtres
                          </Button>
                        ) : null}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Details Dialog */}
      {selectedTransaction && (
        <Dialog
          open={showTransactionDetails}
          onOpenChange={setShowTransactionDetails}
        >
          <DialogContent className='max-w-md'>
            <DialogHeader>
              <DialogTitle className='text-xl font-bold'>
                Détails de la Transaction
              </DialogTitle>
            </DialogHeader>

            <div className='space-y-6 py-4'>
              {/* Transaction Header */}
              <div className='flex items-center'>
                <div className='mr-3'>
                  {getTransactionIcon(selectedTransaction.type, 24)}
                </div>
                <div>
                  <h3 className='font-bold text-gray-900'>
                    {selectedTransaction.description}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    {formatDateTime(selectedTransaction.date)}
                  </p>
                </div>
                <div className='ml-auto'>
                  {getStatusBadge(selectedTransaction.status)}
                </div>
              </div>

              {/* Transaction Details */}
              <div className='bg-[#FFF4E9] p-4 rounded-lg'>
                <div className='flex justify-between mb-2'>
                  <span className='text-gray-700'>Montant</span>
                  <span
                    className={`font-medium ${
                      selectedTransaction.type === 'receive'
                        ? 'text-green-600'
                        : ''
                    }`}
                  >
                    {formatAmount(
                      selectedTransaction.type,
                      selectedTransaction.crypto.amount,
                      selectedTransaction.crypto.currency
                    )}
                  </span>
                </div>

                {selectedTransaction.fiat && (
                  <div className='flex justify-between mb-2'>
                    <span className='text-gray-700'>Valeur</span>
                    <span className='font-medium text-gray-900'>
                      {selectedTransaction.fiat.amount} ${' '}
                      {selectedTransaction.fiat.currency}
                    </span>
                  </div>
                )}

                {selectedTransaction.fee && (
                  <div className='flex justify-between mb-2'>
                    <span className='text-gray-700'>Frais de Réseau</span>
                    <span className='font-medium text-gray-900'>
                      {selectedTransaction.fee}{' '}
                      {selectedTransaction.crypto.currency}
                    </span>
                  </div>
                )}

                <div className='border-t border-gray-200 my-2 pt-2'>
                  <div className='flex justify-between'>
                    <span className='text-gray-700 font-medium'>Total</span>
                    <span className='font-bold text-gray-900'>
                      {selectedTransaction.type === 'receive'
                        ? `+${selectedTransaction.crypto.amount} ${selectedTransaction.crypto.currency}`
                        : `-${
                            selectedTransaction.crypto.amount +
                            (selectedTransaction.fee || 0)
                          } ${selectedTransaction.crypto.currency}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                {selectedTransaction.recipient && (
                  <div className='flex flex-col mb-3'>
                    <span className='text-sm text-gray-700'>Destinataire</span>
                    <span className='font-mono text-sm truncate'>
                      {selectedTransaction.recipient}
                    </span>
                  </div>
                )}

                {selectedTransaction.sender && (
                  <div className='flex flex-col mb-3'>
                    <span className='text-sm text-gray-700'>Expéditeur</span>
                    <span className='font-mono text-sm truncate'>
                      {selectedTransaction.sender}
                    </span>
                  </div>
                )}

                {selectedTransaction.hash && (
                  <div className='flex flex-col mb-3'>
                    <span className='text-sm text-gray-700'>
                      Hash de la Transaction
                    </span>
                    <div className='flex items-center'>
                      <span className='font-mono text-sm truncate'>
                        {selectedTransaction.hash}
                      </span>
                      <Button
                        variant='ghost'
                        size='sm'
                        className='ml-2 p-1 h-auto'
                        onClick={() =>
                          navigator.clipboard.writeText(
                            selectedTransaction.hash || ''
                          )
                        }
                      >
                        <Copy size={12} />
                      </Button>
                    </div>
                  </div>
                )}

                {selectedTransaction.status === 'pending' && (
                  <div className='mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800'>
                    Cette transaction est encore en attente. Elle prend
                    généralement quelques minutes à se finaliser.
                  </div>
                )}

                {selectedTransaction.status === 'failed' && (
                  <div className='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800'>
                    Cette transaction a échoué. Veuillez vérifier les détails ou
                    contacter le support si vous avez besoin d’aide.
                  </div>
                )}
              </div>
            </div>

            <DialogFooter className='flex flex-col sm:flex-row gap-3'>
              <Button
                variant='outline'
                className='sm:flex-1 border-gray-300'
                onClick={() => setShowTransactionDetails(false)}
              >
                Fermer
              </Button>

              <Button
                className='sm:flex-1 bg-black hover:bg-gray-800'
                onClick={() => {
                  // Implement download receipt functionality
                  setShowTransactionDetails(false)
                }}
              >
                <Download size={16} className='mr-2' />
                Télécharger le Reçu
              </Button>

              {selectedTransaction.status === 'failed' && (
                <Button
                  variant='outline'
                  className='sm:flex-1 border-gray-300'
                  onClick={() => {
                    // Implement contact support functionality
                    setShowTransactionDetails(false)
                  }}
                >
                  Contacter le Support
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </DashboardLayout>
  )
}

export default TransactionsPage
