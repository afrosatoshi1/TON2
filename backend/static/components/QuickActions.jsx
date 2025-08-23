import React from 'react'

const actions = [
  { title: 'Airtime', id: 'airtime' },
  { title: 'Data', id: 'data' },
  { title: 'Bills', id: 'bills' },
  { title: 'P2P', id: 'p2p' },
  { title: 'Withdraw', id: 'withdraw' },
  { title: 'More', id: 'more' },
]

export default function QuickActions(){
  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      {actions.map(a => (
        <div key={a.id} className="bg-white rounded-lg p-3 text-center shadow-sm">
          <div className="h-12 w-12 mx-auto mb-2 rounded-full bg-blue-50 flex items-center justify-center text-primary">{a.title[0]}</div>
          <div className="text-sm">{a.title}</div>
        </div>
      ))}
    </div>
  )
}
