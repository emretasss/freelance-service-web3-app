import { Chain } from 'wagmi';

const liver:Chain = {
  id: 31337,
  name: 'Liver Web3',
  network: 'liver',
  nativeCurrency: {
    decimals: 18,
    name: 'liver',
    symbol: 'LVR',
  },
  rpcUrls: {
    public: { http: ['http://localhost:8545/'] },
    default: { http: ['http://localhost:8545/'] },
  }
} as const satisfies Chain
export default liver;

