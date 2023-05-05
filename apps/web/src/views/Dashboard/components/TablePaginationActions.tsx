import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, ArrowFirstIcon, ArrowBackIcon, ArrowForwardIcon, ArrowLastIcon, IconButton } from '@pancakeswap/uikit'

interface PaginationProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (e: any, page: number) => void
}

const Row = styled(Flex)`
  margin-left: 20px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`

const TablePaginationActions: React.FC<PaginationProps> = ({ count, page, rowsPerPage, onPageChange }) => {
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Flex justifyContent="center" alignItems="center" marginBottom="1rem">
      {page * rowsPerPage + 1} - {(page + 1) * rowsPerPage} of {count}
      <Row>
        <IconButton
          onClick={handleFirstPageButtonClick}
          scale="sm"
          variant={page !== 0 ? 'primary' : 'secondary'}
          disabled={page === 0}
          aria-label="first page"
        >
          <ArrowFirstIcon />
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          scale="sm"
          variant={page !== 0 ? 'primary' : 'secondary'}
          disabled={page === 0}
          aria-label="previous page"
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          scale="sm"
          variant={page >= Math.ceil(count / rowsPerPage) - 1 ? 'secondary' : 'primary'}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          <ArrowForwardIcon />
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          scale="sm"
          variant={page >= Math.ceil(count / rowsPerPage) - 1 ? 'secondary' : 'primary'}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          <ArrowLastIcon />
        </IconButton>
      </Row>
    </Flex>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

export default TablePaginationActions
