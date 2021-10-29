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
                  <input type="text" placeholder="Mac Miller"/>
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Mac Miller"/>
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="Mac Miller@gmial.com"/>
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Password</label>
                  <input type="password" />
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder="0934634563"/>
              </div>
              <div className="filllingitems">
                  <label htmlFor="">Adress</label>
                  <input type="text" placeholder="Addis Ababa"/>
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
