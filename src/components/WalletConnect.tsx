'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { MainButton } from './pages/(main)/_components/Button'

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
        </div>
        <MainButton
          onClick={() => disconnect()}
          variant="default"
          size="sm"
        >
          Disconnect
        </MainButton>
      </div>
    )
  }

  return (
    <MainButton
      onClick={() => connect({ connector: injected() })}
      variant="pink"
      size="sm"
    >
      Connect Wallet
    </MainButton>
  )
}