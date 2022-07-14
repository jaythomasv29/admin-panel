import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.scss'

function TransactionsTable() {
  const rows = [
    {
      id: 1131441,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71Tp0GOd33L._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 999,
      method: "Cash on Delivery",
      status: "Pending"
    },
    {
      id: 1131441,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71Tp0GOd33L._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 999,
      method: "Cash on Delivery",
      status: "Approved"
    },
    {
      id: 1131442,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71Tp0GOd33L._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 999,
      method: "Cash on Delivery",
      status: "Pending"
    },
    {
      id: 1131443,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71Tp0GOd33L._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 999,
      method: "Cash on Delivery",
      status: "Approved"
    },
    {
      id: 1131444,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71Tp0GOd33L._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 999,
      method: "Cash on Delivery",
      status: "Approved"
    }
  ];

  return (
    <div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <div className="cellWrapper">
                    <img src={row.img} alt={row.product} className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell><span className={`status ${row.status}`}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TransactionsTable