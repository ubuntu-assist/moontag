'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ChevronRight,
  ArrowDown,
  ArrowUp,
  ArrowLeftRight,
  Plus,
  Copy,
  Camera,
  ShoppingBag,
} from 'lucide-react'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import Skeleton from '@/components/ui/Skeleton'

interface Asset {
  id: string
  name: string
  symbol: string
  logo: string
  balance: number
  usdValue: number
  change24h: number
}

interface Transaction {
  id: string
  type: 'receive' | 'send' | 'swap' | 'purchase'
  asset: string
  amount: number
  timestamp: Date
  status: 'completed' | 'pending' | 'failed'
  from?: string
  to?: string
  txHash?: string
}

interface TransactionIconProps {
  type: string
  size?: number
}

const TransactionIcon: React.FC<TransactionIconProps> = ({
  type,
  size = 20,
}) => {
  switch (type) {
    case 'receive':
      return <ArrowDown size={size} className='text-green-500' />
    case 'send':
      return <ArrowUp size={size} className='text-red-500' />
    case 'swap':
      return <ArrowLeftRight size={size} className='text-blue-500' />
    case 'purchase':
      return <ShoppingBag size={size} className='text-purple-500' />
    default:
      return null
  }
}

const WalletPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [assets, setAssets] = useState<Asset[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [selectedTab, setSelectedTab] = useState<string>('assets')
  const [showReceiveModal, setShowReceiveModal] = useState<boolean>(false)
  const [showSendModal, setShowSendModal] = useState<boolean>(false)
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [recipientAddress, setRecipientAddress] = useState<string>('')
  const [sendAmount, setSendAmount] = useState<string>('')
  const [selectedNetwork, setSelectedNetwork] = useState<string>('stellar')

  useEffect(() => {
    const timer = setTimeout(() => {
      setAssets([
        {
          id: '1',
          name: 'Stellar',
          symbol: 'XLM',
          logo: '/images/crypto/xlm.png',
          balance: 250.75,
          usdValue: 250.75,
          change24h: 2.4,
        },
        {
          id: '2',
          name: 'Bitcoin',
          symbol: 'BTC',
          logo: '/images/crypto/btc.png',
          balance: 0.0035,
          usdValue: 112.0,
          change24h: -1.2,
        },
        {
          id: '3',
          name: 'Ethereum',
          symbol: 'ETH',
          logo: '/images/crypto/eth.png',
          balance: 0.25,
          usdValue: 500.0,
          change24h: 5.7,
        },
        {
          id: '4',
          name: 'USD Coin',
          symbol: 'USDC',
          logo: '/images/crypto/usdc.png',
          balance: 125.5,
          usdValue: 125.5,
          change24h: 0.1,
        },
      ])

      setTransactions([
        {
          id: 't1',
          type: 'receive',
          asset: 'XLM',
          amount: 100,
          timestamp: new Date(2025, 3, 12),
          status: 'completed',
          from: 'Portefeuille Externe',
          txHash: '0x123...abc',
        },
        {
          id: 't2',
          type: 'send',
          asset: 'XLM',
          amount: 50,
          timestamp: new Date(2025, 3, 10),
          status: 'completed',
          to: 'Ami',
          txHash: '0x456...def',
        },
        {
          id: 't3',
          type: 'swap',
          asset: 'BTC',
          amount: 0.001,
          timestamp: new Date(2025, 3, 8),
          status: 'completed',
          txHash: '0x789...ghi',
        },
        {
          id: 't4',
          type: 'purchase',
          asset: 'XLM',
          amount: 25,
          timestamp: new Date(2025, 3, 7),
          status: 'completed',
          to: 'Carte Cadeau Amazon',
          txHash: '0xabc...123',
        },
      ])

      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const totalBalance: string = assets
    .reduce((sum, asset) => sum + asset.usdValue, 0)
    .toFixed(2)

  const handleAssetClick = (asset: Asset): void => {
    setSelectedAsset(asset)
  }

  const handleReceive = (asset: Asset): void => {
    setSelectedAsset(asset)
    setShowReceiveModal(true)
  }

  const handleSend = (asset: Asset): void => {
    setSelectedAsset(asset)
    setShowSendModal(true)
  }

  const handleSendAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSendAmount(e.target.value)
  }

  const handleRecipientAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRecipientAddress(e.target.value)
  }

  const handleNetworkChange = (value: string): void => {
    setSelectedNetwork(value)
  }

  const handleMaxAmount = (): void => {
    if (selectedAsset) {
      setSendAmount(selectedAsset.balance.toString())
    }
  }

  const handleReviewTransaction = (): void => {
    // Here you would implement validation and prepare the transaction
    // For this example, we'll just close the modal
    setShowSendModal(false)
  }

  return (
    <DashboardLayout>
      <Head>
        <title>Portefeuille | Abokyh</title>
      </Head>

      <div className='py-6 px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>
              Portefeuille Crypto
            </h1>
            <p className='text-gray-600'>Gérez vos actifs en cryptomonnaie</p>
          </motion.div>
        </div>

        {/* Total Balance Card */}
        <Card className='mb-8 bg-[#FFF4E9] border-none'>
          <CardContent className='p-6'>
            <div className='mb-2'>
              <h2 className='text-lg font-medium text-gray-600'>Solde Total</h2>
              {isLoading ? (
                <Skeleton className='h-10 w-32 mt-2' />
              ) : (
                <p className='text-3xl font-bold'>{totalBalance} $</p>
              )}
            </div>
            <div className='flex space-x-3 mt-6'>
              <Button className='bg-black hover:bg-gray-800'>
                <Plus size={20} className='mr-2' />
                Ajouter des Fonds
              </Button>
              <Button variant='outline' className='border-gray-300'>
                <ArrowLeftRight size={20} className='mr-2' />
                Échanger
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <Tabs
          defaultValue='assets'
          value={selectedTab}
          onValueChange={setSelectedTab}
          className='mb-6'
        >
          <TabsList className='w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6'>
            <TabsTrigger
              value='assets'
              className='py-3 px-2 font-medium text-sm data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none'
            >
              Actifs
            </TabsTrigger>
            <TabsTrigger
              value='transactions'
              className='py-3 px-2 font-medium text-sm ml-8 data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none'
            >
              Transactions
            </TabsTrigger>
          </TabsList>

          {/* Assets Tab Panel */}
          <TabsContent value='assets' className='mt-0'>
            <div className='space-y-4'>
              {isLoading
                ? Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className='mb-4 p-4 border border-gray-200 rounded-lg flex items-center'
                      >
                        <Skeleton className='w-10 h-10 rounded-full mr-4' />
                        <div className='flex-1'>
                          <Skeleton className='h-5 w-24 mb-1' />
                          <Skeleton className='h-4 w-16' />
                        </div>
                        <div className='text-right'>
                          <Skeleton className='h-5 w-20 mb-1 ml-auto' />
                          <Skeleton className='h-4 w-12 ml-auto' />
                        </div>
                      </div>
                    ))
                : assets.map((asset) => (
                    <Card
                      key={asset.id}
                      className='p-4 border hover:border-black cursor-pointer transition-colors bg-white'
                      onClick={() => handleAssetClick(asset)}
                    >
                      <CardContent className='p-0 flex items-center'>
                        <div className='w-10 h-10 bg-gray-100 rounded-full mr-4 flex items-center justify-center'>
                          <span className='font-medium'>{asset.symbol[0]}</span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='font-medium'>{asset.name}</h3>
                          <p className='text-sm text-gray-500'>
                            {asset.symbol}
                          </p>
                        </div>
                        <div className='text-right'>
                          <p className='font-medium'>
                            {asset.balance} {asset.symbol}
                          </p>
                          <p className='text-sm text-gray-500'>
                            {asset.usdValue.toFixed(2)} $
                          </p>
                        </div>
                        <ChevronRight
                          size={20}
                          className='text-gray-400 ml-4'
                        />
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </TabsContent>

          {/* Transactions Tab Panel */}
          <TabsContent value='transactions' className='mt-0'>
            <div className='space-y-4'>
              {isLoading
                ? Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className='mb-4 p-4 border border-gray-200 rounded-lg flex items-center'
                      >
                        <Skeleton className='w-10 h-10 rounded-full mr-4' />
                        <div className='flex-1'>
                          <Skeleton className='h-5 w-24 mb-1' />
                          <Skeleton className='h-4 w-32' />
                        </div>
                        <div className='text-right'>
                          <Skeleton className='h-5 w-16 mb-1 ml-auto' />
                          <Skeleton className='h-4 w-20 ml-auto' />
                        </div>
                      </div>
                    ))
                : transactions.map((tx) => (
                    <Card
                      key={tx.id}
                      className='p-4 border hover:border-gray-300 cursor-pointer transition-colors bg-white'
                    >
                      <CardContent className='p-0 flex items-center'>
                        <div className='w-10 h-10 bg-gray-100 rounded-full mr-4 flex items-center justify-center'>
                          <TransactionIcon type={tx.type} />
                        </div>
                        <div className='flex-1'>
                          <h3 className='font-medium capitalize'>
                            {tx.type === 'receive'
                              ? 'Réception'
                              : tx.type === 'send'
                              ? 'Envoi'
                              : tx.type === 'swap'
                              ? 'Échange'
                              : 'Achat'}
                          </h3>
                          <p className='text-sm text-gray-500'>
                            {tx.type === 'receive'
                              ? `Depuis ${tx.from}`
                              : tx.type === 'send'
                              ? `Vers ${tx.to}`
                              : tx.type === 'purchase'
                              ? `Pour ${tx.to}`
                              : 'Échange de cryptomonnaie'}
                          </p>
                        </div>
                        <div className='text-right'>
                          <p
                            className={`font-medium ${
                              tx.type === 'receive' ? 'text-green-600' : ''
                            }`}
                          >
                            {tx.type === 'receive' ? '+' : '-'} {tx.amount}{' '}
                            {tx.asset}
                          </p>
                          <p className='text-sm text-gray-500'>
                            {tx.timestamp.toLocaleDateString('fr-FR', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                        <ChevronRight
                          size={20}
                          className='text-gray-400 ml-4'
                        />
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Detailed Asset View (conditionally rendered when an asset is selected) */}
        {selectedAsset && (
          <Card className='mt-8 mb-6'>
            <CardHeader className='p-6 border-b border-gray-200'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center'>
                  <span className='font-medium'>{selectedAsset.symbol[0]}</span>
                </div>
                <div>
                  <CardTitle className='text-xl font-bold'>
                    {selectedAsset.name}
                  </CardTitle>
                  <CardDescription className='text-gray-600'>
                    {selectedAsset.symbol}
                  </CardDescription>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-6 mt-6'>
                <div>
                  <p className='text-sm text-gray-500'>Solde</p>
                  <p className='text-xl font-medium'>
                    {selectedAsset.balance} {selectedAsset.symbol}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Valeur en USD</p>
                  <p className='text-xl font-medium'>
                    {selectedAsset.usdValue.toFixed(2)} $
                  </p>
                </div>
              </div>

              <div className='flex space-x-3 mt-6'>
                <Button
                  className='flex-1 bg-black hover:bg-gray-800'
                  onClick={() => handleReceive(selectedAsset)}
                >
                  <ArrowDown size={20} className='mr-2' />
                  Recevoir
                </Button>
                <Button
                  variant='outline'
                  className='flex-1 border-gray-300'
                  onClick={() => handleSend(selectedAsset)}
                >
                  <ArrowUp size={20} className='mr-2' />
                  Envoyer
                </Button>
              </div>
            </CardHeader>

            <CardContent className='p-6'>
              <h3 className='font-medium mb-4'>Transactions Récentes</h3>
              <div className='space-y-4'>
                {transactions
                  .filter((tx) => tx.asset === selectedAsset.symbol)
                  .slice(0, 3)
                  .map((tx) => (
                    <div
                      key={tx.id}
                      className='flex justify-between items-center py-2 border-b border-gray-100'
                    >
                      <div className='flex items-center'>
                        <div className='w-8 h-8 bg-gray-100 rounded-full mr-3 flex items-center justify-center'>
                          <TransactionIcon type={tx.type} size={16} />
                        </div>
                        <div>
                          <p className='font-medium capitalize'>
                            {tx.type === 'receive'
                              ? 'Réception'
                              : tx.type === 'send'
                              ? 'Envoi'
                              : tx.type === 'swap'
                              ? 'Échange'
                              : 'Achat'}
                          </p>
                          <p className='text-xs text-gray-500'>
                            {tx.timestamp.toLocaleDateString('fr-FR', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                      <div className='text-right'>
                        <p
                          className={`font-medium ${
                            tx.type === 'receive' ? 'text-green-600' : ''
                          }`}
                        >
                          {tx.type === 'receive' ? '+' : '-'} {tx.amount}{' '}
                          {tx.asset}
                        </p>
                        <Badge
                          variant={
                            tx.status === 'completed'
                              ? 'default'
                              : tx.status === 'pending'
                              ? 'secondary'
                              : 'destructive'
                          }
                          className='text-xs'
                        >
                          {tx.status === 'completed'
                            ? 'Terminé'
                            : tx.status === 'pending'
                            ? 'En attente'
                            : 'Échoué'}
                        </Badge>
                      </div>
                    </div>
                  ))}
              </div>
              <Button
                variant='link'
                className='w-full mt-4 text-center text-sm font-medium text-black p-0 h-auto'
              >
                Voir toutes les transactions
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Receive Modal */}
        <Dialog
          open={showReceiveModal && !!selectedAsset}
          onOpenChange={setShowReceiveModal}
        >
          <DialogContent className='max-w-md'>
            <DialogHeader>
              <DialogTitle className='text-xl font-bold'>
                Recevoir {selectedAsset?.symbol}
              </DialogTitle>
            </DialogHeader>

            <div className='flex flex-col items-center my-6'>
              <div className='border-4 border-gray-200 rounded-xl p-2 mb-4'>
                {/* Placeholder for QR code */}
                <div className='w-48 h-48 bg-gray-100 flex items-center justify-center'>
                  <span className='text-gray-400'>Code QR</span>
                </div>
              </div>

              <div className='w-full bg-gray-50 p-4 rounded-lg mb-4'>
                <p className='text-sm text-gray-500 mb-1'>
                  Votre Adresse {selectedAsset?.name}
                </p>
                <div className='flex items-center'>
                  <p className='text-sm font-medium truncate flex-1'>
                    styx7m2d3u4Fa5THb9ZnxF2YuZXv8iJ1B5N6f8sE
                  </p>
                  <Button variant='ghost' size='sm' className='ml-2 p-1 h-auto'>
                    <Copy size={18} />
                  </Button>
                </div>
              </div>

              <div className='w-full text-center'>
                <p className='text-sm text-gray-500 mb-2'>Réseau</p>
                <Badge
                  variant='outline'
                  className='bg-gray-100 px-4 py-2 rounded-full text-base font-medium'
                >
                  Réseau Stellar
                </Badge>
              </div>
            </div>

            <DialogDescription className='text-sm text-gray-500 mt-4'>
              Envoyez uniquement {selectedAsset?.symbol} à cette adresse.
              L’envoi d’un autre actif peut entraîner une perte définitive.
            </DialogDescription>

            <DialogFooter>
              <Button
                className='w-full bg-black hover:bg-gray-800 cursor-pointer'
                onClick={() => setShowReceiveModal(false)}
              >
                Terminé
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Send Modal */}
        <Dialog
          open={showSendModal && !!selectedAsset}
          onOpenChange={setShowSendModal}
        >
          <DialogContent className='max-w-md'>
            <DialogHeader>
              <DialogTitle className='text-xl font-bold'>
                Envoyer {selectedAsset?.symbol}
              </DialogTitle>
            </DialogHeader>

            <div className='space-y-4 py-4'>
              <div className='space-y-2'>
                <label
                  htmlFor='recipient-address'
                  className='text-sm font-medium text-gray-700'
                >
                  Adresse du Destinataire
                </label>
                <div className='relative'>
                  <Input
                    id='recipient-address'
                    placeholder='Entrez l’adresse ou scannez un code QR'
                    value={recipientAddress}
                    onChange={handleRecipientAddressChange}
                  />
                  <Button
                    variant='ghost'
                    size='sm'
                    className='absolute right-1 top-1 h-7 w-7 p-0'
                    aria-label='Scanner QR'
                  >
                    <Camera size={18} />
                  </Button>
                </div>
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='send-amount'
                  className='text-sm font-medium text-gray-700'
                >
                  Montant
                </label>
                <div className='flex space-x-2'>
                  <Input
                    id='send-amount'
                    placeholder='0,00'
                    value={sendAmount}
                    onChange={handleSendAmountChange}
                    className='flex-1'
                  />
                  <Button variant='outline' className='border-gray-300'>
                    {selectedAsset?.symbol}
                  </Button>
                </div>
                <div className='flex justify-between'>
                  <p className='text-xs text-gray-500'>
                    Disponible : {selectedAsset?.balance}{' '}
                    {selectedAsset?.symbol}
                  </p>
                  <Button
                    variant='link'
                    size='sm'
                    onClick={handleMaxAmount}
                    className='text-xs h-auto p-0'
                  >
                    MAX
                  </Button>
                </div>
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='network-select'
                  className='text-sm font-medium text-gray-700'
                >
                  Réseau
                </label>
                <Select
                  value={selectedNetwork}
                  onValueChange={handleNetworkChange}
                >
                  <SelectTrigger id='network-select'>
                    <SelectValue placeholder='Sélectionnez un réseau' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='stellar'>Réseau Stellar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter>
              <Button
                className='w-full bg-black hover:bg-gray-800'
                onClick={handleReviewTransaction}
              >
                Vérifier la Transaction
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}

export default WalletPage
