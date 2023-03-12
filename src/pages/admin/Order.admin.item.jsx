/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/system'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import styledComponent from 'styled-components'

import { getAllOrders } from '../../store/order/order.thunks'

const OrderAdminItem = () => {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.orders.order)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    dispatch(getAllOrders())
  }, [])
  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, order.length - page * rowsPerPage)
  return (
    <ul>
      <PaperStyledContainer>
        <TableContainer>
          <TableStyled stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRowStyled>
                <TableCell>Name</TableCell>
                <TableCell align="center">Meals</TableCell>
                <TableCell align="right">Total Price</TableCell>
              </TableRowStyled>
            </TableHead>
            <TableBody>
              {order
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((orders) => (
                  <TableRowStyled key={orders._id}>
                    <TableCell component="th" scope="row">
                      <h3>{orders.user.name}</h3>
                    </TableCell>
                    <>
                      <TableCell>
                        <ul key={orders._id}>
                          {orders.items.map((item) => (
                            <MealsList key={item._id}>
                              <p>{item.title}</p>
                              <p>price: {item.price}</p>
                              <p>count: {item.amount}</p>
                            </MealsList>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell align="right">
                        <h4>{orders.totalPrice}</h4>
                      </TableCell>
                    </>
                  </TableRowStyled>
                ))}
              {emptyRows > 0 && (
                <TableRowStyled style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRowStyled>
              )}
            </TableBody>
          </TableStyled>
          <StyledPagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={order.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </PaperStyledContainer>
    </ul>
  )
}

export default OrderAdminItem
const TableStyled = styled(Table)`
  width: 80%;
  margin: 0 auto;
`
const PaperStyledContainer = styled(Paper)`
  width: 100%;
  background-color: #9e9999;
  padding: 20px;
`
const TableRowStyled = styled(TableRow)`
  background-color: #ffe9e9;
`

const TableContainer = styledComponent.div`
  margin-top: 5rem;
`
const StyledPagination = styled(TablePagination)`
  margin-right: 30rem;
  color: #000;
`
const MealsList = styledComponent.li`
list-style:none;
border:1px solid;
border-radius:10px;
display:flex;
justify-content:space-around;
margin-top: .5rem;
padding:.5rem;
`
