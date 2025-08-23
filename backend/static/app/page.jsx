import BalanceCard from '@/components/BalanceCard'
import QuickActions from '@/components/QuickActions'
import TransactionList from '@/components/TransactionList'

export default function Page() {
  return (
    <main className="max-w-lg mx-auto p-4">
      <BalanceCard />
      <QuickActions />
      <TransactionList />
    </main>
  )
}
