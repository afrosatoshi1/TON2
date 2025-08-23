import React from 'react'

const dummy = [
  { id: 1, title: 'Received from alice', amount: '+10 TON', status: 'Success' },
  { id: 2, title: 'Sent to bob', amount: '-5 TON', status: 'Pending' },
  { id: 3, title: 'Airtime purchase', amount: '-1 TON', status: 'Success' },
]

export default function TransactionList(){
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <h4 className="font-semibold mb-3">Recent Activity</h4>
      <ul className="space-y-3">
        {dummy.map(tx => (
          <li key={tx.id} className="flex justify-between items-center">
            <div>
              <div className="text-sm">{tx.title}</div>
              <div className="text-xs text-gray-400">{tx.status}</div>
            </div>
            <div className="text-sm font-medium">{tx.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
