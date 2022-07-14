import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCart } from '@mui/icons-material'
import './widget.scss'

function Widget({ type }) {
  let data;

  const tempAmount = '100';
  const tempDiff = '25%';

  switch (type) {
    case "users":
      data = {
        isMoney: false,
        link: "View users",
        icon: <PersonOutline className="icon" />,
      }
      break;
    case "orders":
      data = {
        isMoney: false,
        link: "View orders",
        icon: <ShoppingCart className="icon" />,
      }
      break;
    case "earnings":
      data = {
        isMoney: false,
        link: "View earnings",
        icon: <MonetizationOnOutlined className="icon" />
      }
      break;
    case "balance":
      data = {
        isMoney: true,
        link: "View balance",
        icon: <AccountBalanceWalletOutlined className="icon" />
      }

    break

  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{type.toUpperCase()}</span>
        <span className="counter">{data.isMoney && '$'} {tempAmount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {tempDiff}
        </div>
        {data.icon}

      </div>
    </div>
  )
}

export default Widget