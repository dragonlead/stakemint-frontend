import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Stakemint',
  defaultTitle: 'Stakemint',
  description: 'Cheaper and faster than Uniswap? Discover Stakemint, the leading DEX with the best farms in DeFi.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@Stakemint',
    site: '@Stakemint',
  },
  openGraph: {
    title: '🥞 Stakemint - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM by user count! Earn reward through yield farming, then stake it in Staking Pools to earn more tokens!',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/hero.jpg' }],
  },
}
