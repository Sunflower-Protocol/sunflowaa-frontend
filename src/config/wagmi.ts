import { createConfig, http } from 'wagmi'
import { injected, metaMask } from 'wagmi/connectors'
import { defineChain } from 'viem'

export const storyProtocolTestnet = defineChain({
  id: 1513,
  name: 'Story Protocol Aeneid Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'IP',
    symbol: 'IP',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.ankr.com/story_aeneid_testnet'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Story Explorer',
      url: 'https://explorer.aeneid.storyprotocol.org',
    },
  },
  testnet: true,
})

export const config = createConfig({
  chains: [storyProtocolTestnet],
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [storyProtocolTestnet.id]: http('https://rpc.ankr.com/story_aeneid_testnet'),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}