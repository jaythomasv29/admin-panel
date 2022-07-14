import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TransactionsTable from '../../components/table/TransactionsTable'
import './single.scss'

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className='editButton'>Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img className="itemImg" src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile" />
              <div className="details">
                <h3 className='itemTitle'>Jane Doe</h3>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 (123)234-2345</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">12323 Eden St New York, NY 93031</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart height={250} />
          </div>
        </div>
        <div className="bottom">
          <h3 className="title">
            Last Transactions
          </h3>
          <TransactionsTable />
        </div>
      </div>
    </div>
  )
}

export default Single