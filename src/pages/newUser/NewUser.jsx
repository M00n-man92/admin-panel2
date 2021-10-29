import './newUser.scss'

export default function NewUser() {
    return (
        <div className="newuser">
          <div className="userbrotitle">
              <span>New User</span>
          </div>
          <form className="formofdata">
              <div className="filllingitems">
                  <label htmlFor="">Username</label>
                  <input type="text" />
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Username</label>
                  <input type="text" />
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Username</label>
                  <input type="text" />
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Username</label>
                  <input type="text" />
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Username</label>
                  <input type="text" />
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Username</label>
                  <input type="text" />
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Gender</label>
                  <div className="genderfiller">
                      <input type="radio" name="gender" id="male" />
                        <label htmlFor="">Male</label>
                        <input type="radio" name="gender" id="female" />
                        <label htmlFor="">Female</label>
                        <input type="radio" name="gender" id="other" />
                        <label htmlFor="">Other</label>
                  </div>
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
          </form>
        </div>
    )
}
