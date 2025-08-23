import React from 'react'
import { Wallet } from 'lucide-react'
export default function BalanceCard(){
  const balance = '100.000 TON'
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-500">Total Balance</h3>
          <p className="text-2xl font-semibold mt-1">{balance}</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <Wallet className="text-primary" />
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-primary text-white py-2 rounded-lg">Send</button>
        <button className="flex-1 border border-gray-200 py-2 rounded-lg">Receive</button>
      </div>
    </div>
  )
}
