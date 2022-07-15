import { DriveFolderUpload } from '@mui/icons-material'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { userInputs, addressInputs} from '../../formSource'
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
            <div style={{width:"100%"}}>
            <h3>User:</h3>

            </div>
            {
              userInputs.map(input => (
                <div key={input.id} className="formInput">
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))
            }
            <div style={{width:"100%"}}>
            <h3>Address:</h3>

            </div>
            {
              addressInputs.map(input => (
                <div key={input.id} className="formInput">
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))
            }
          
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