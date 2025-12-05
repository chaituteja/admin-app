import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable() {
  const rows = [
    {
      id: 14343,
      product: "Fjallraven Backpack",
      amount: 109.95,
      customer: "John Smith",
      date: "1 March",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 23232,
      product: "Mens T-Shirts ",
      amount: 22.3,
      customer: "Spao Ngueny",
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      method: "Online Payment",
      status: "Approved",
      date: "1 March",
    },
    {
      id: 45323,
      product: "Mens Jacket",
      amount: 55.99,
      customer: "Isla Price",
      img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      method: "Online Payment",
      status: "Approved",
      date: "1 March",
    },
    {
      id: 48657,
      product: "Mens Slim Fit",
      amount: 15.99,
      customer: "Shane Bond",
      img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      method: "Online Payment",
      status: "Pending",
      date: "1 March",
    },
    {
      id: 59675,
      product: "Women's Legends Bracelet",
      amount: 695,
      customer: "Robert Patrick",
      img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
      method: "Cash on Delivery",
      status: "Approved",
      date: "1 March",
    },
    {
      id: 16796,
      product: "Gold Micropave ",
      amount: 168,
      customer: "James Evans",
      img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
      method: "Online Payment",
      status: "Approved",
      date: "21 April",
    },
    {
      id: 43437,
      product: "Gold Plated Princess",
      amount: 9.99,
      customer: "Chris Pratt",
      img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
      method: "Online Payment",
      status: "Pending",
      date: "13 June",
    },
    {
      id: 95738,
      product: "Stainless Steel Double",
      amount: 10.99,
      customer: "Allen Roy",
      img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
      method: "Online Payment",
      status: "Approved",
      date: "19 June",
    },
    {
      id: 56469,
      product: "WD 2TB Elements ",
      amount: 64,
      customer: "Peter Parker",
      img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
      method: "Online Payment",
      status: "Pending",
      date: "12 March",
    },
    {
      id: 88610,
      product: "SanDisk SSD PLUS 1TB ",
      amount: 109,
      customer: "Jane Smith",
      img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
      method: "Online Payment",
      status: "Approved",
      date: "1 March",
    },
  ];
  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
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
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
