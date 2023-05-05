import { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Table, TextField, Card, Th, Td, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import TablePaginationActions from './components/TablePaginationActions'

const Container = styled(Box)`
  margin: 1rem;
`

const StyledValue = styled.div<{ isBull: boolean }>`
  color: ${({ theme, isBull }) => (isBull ? theme.colors.primary : theme.colors.failure)};
`

const Dashboard: React.FC = () => {
  const { t } = useTranslation()
  const [coins, setCoins] = useState<any>([])
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(0)
  // const [rowsPerPage, setRowsPerPage] = useState<number>(5)
  const rowsPerPage = 5

  const handleChange = (input: string) => {
    setSearch(input)
  }

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const fetchCoinMarkets = () => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .then((response) => {
        setCoins(response.data)
      })
      .catch((error) => console.warn(error))
  }

  useEffect(() => {
    fetchCoinMarkets()
  }, [])

  return (
    <Container>
      <Card style={{ marginBottom: '1rem' }}>
        <div style={{ width: '400px', margin: '1.25rem' }}>
          <Flex alignItems="center">
            <h1>{t('Top 250 Cryptocurrencies')}</h1>
            <TextField value={search} placeholder="Search a cryptocurrency" label="" onUserInput={handleChange} />
          </Flex>
        </div>
      </Card>
      <Card>
        <Table>
          <thead>
            <tr>
              <Th textAlign="left">{t('Image')}</Th>
              <Th textAlign="left">{t('Name')}</Th>
              <Th textAlign="left">{t('Symbol')}</Th>
              <Th textAlign="left">{t('Price')}</Th>
              <Th textAlign="left">{t('24H')}</Th>
              <Th textAlign="left">{t('Volume')}</Th>
              <Th textAlign="left">{t('Market cap')}</Th>
            </tr>
          </thead>
          <tbody>
            {(rowsPerPage > 0
              ? filteredCoins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : filteredCoins
            ).map((coin: any) => (
              <tr key={coin.id}>
                <Td>
                  <img src={coin.image} alt="" style={{ height: '30px', width: '30px' }} />
                </Td>
                <Td>{coin.name}</Td>
                <Td>{coin.symbol}</Td>
                <Td>${coin.current_price.toFixed(2)}</Td>
                <Td>
                  <StyledValue isBull={coin.price_change_percentage_24h > 0}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </StyledValue>
                </Td>
                <Td>${coin.total_volume.toLocaleString()}</Td>
                <Td>${coin.market_cap.toLocaleString()}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <TablePaginationActions
          count={coins.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Card>
    </Container>
  )
}

export default Dashboard
