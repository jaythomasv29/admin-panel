import { DriveFolderUpload } from '@mui/icons-material'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'

function New() {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h3 className="title">Add new User</h3>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="img-placeholder" />
          </div>
          <div className="right">
            <form>

              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="my_username" />
              </div>
              <div className="formInput">
                <label>First name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label>Last name</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="john_doe@email.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="tel" placeholder="+1 123 456 7890" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="formInput">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" />
              </div>
              <div className="formInput">
                <label>Street</label>
                <input type="text" placeholder="123 Elton St. Apt #2 New York" />
              </div>
              <div className="formInput">
                <label>City </label>
                <input type="text" placeholder="Broadway" />
              </div>
              <div className="formInput">
                <label>Zip</label>
                <input type="text" placeholder="47654" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>
              <div className="formInput" style={{width: "100%"}}>
                <label className="fileUpload" htmlFor="file">Upload Image: <DriveFolderUpload /></label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="buttonInput">
              <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
        test
      </div>
    </div>
  )
}

export default New