interface NewsCarouselData {
  title: string;
  content: string;
  image: string;
  url: string;
}

const NewsCarousel: NewsCarouselData[] = [
  {
    url: 'https://cointelegraph.com/news/cross-chain-protocol-brings-together-liquidity-sources-from-multiple-networks',
    title:
      'Cross-chain protocol brings together liquidity sources from multiple networks',
    image: '/assets/images/3.png',
    content:
      'A cross-chain aggregation protocol enables multi-chain assets to be freely exchanged, and different blockchains to be accessed with ease.',
  },
  {
    url: 'https://cointelegraph.com/news/decentralized-exchange-aggregator-crosses-defi-blockchains-for-best-trades',
    title:
      'Decentralized exchange aggregator crosses DeFi blockchains for best trades',
    image: '/assets/images/1.jpeg',
    content:
      'A trading protocol says it can cross blockchains and hop decentralized exchanges for an advantageous swap.',
  },
  {
    url: 'https://cointelegraph.com/press-releases/learn-about-o3-swap-from-the-defi-cross-chain-market',
    title: 'Learn about O3 Swap from the DeFi cross-chain market',
    image: '/assets/images/10.jpeg',
    content:
      'O3 Swap is a cross-chain aggregation protocol that achieves cross-chain transactions of native assets by deploying aggregators on main decentralized exchanges of different chains and establishing the cross-chain pool with Poly Network. Ethereum, Binance Smart Chain, Huobi Eco Chain (HECO) and Neo are currently implemented in the cross-chain transaction. O3 Swap has accessed several DEX protocols across chains and aggregated their liquidity to realize multi-chain asset swaps. According to the project roadmap, it will expand to Polygon, Solana and other mainstream Ethereum layer-two ecology in the future.',
  },
];

export const CAROUSEL_DATA = [
  NewsCarousel[0],
  NewsCarousel[1],
  NewsCarousel[2],
  NewsCarousel[0],
]