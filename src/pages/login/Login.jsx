import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../redux/apiCall'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import './login.scss'
export default function Login() {
    const [hotline, setHotline] = useState(false)
    var youth = false
    const [issue, setIssue] = useState(false)
    const oldpeople = localStorage.getItem("persist:root")
    const { isFetching, error, currentUser } = useSelector(state => state.user)
    if (!oldpeople) {

    }

    else {
        if (!currentUser) {

        }
        else {
            if (isFetching === false && error === false && currentUser.success) {
                youth = true
                console.log("Pio")

            }
        }
    }


    // setIssue(sompeople)





    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispch = useDispatch();

    const handler = (e) => {
        e.preventDefault()
        const user = { email, password }
        login(dispch, user)




    }



    return (
        <>
            <Router>
                <Switch>
                    {youth ? <Redirect to='/' /> : <div className="login">

                        <form action="" className="agressivegansta">
                            <div className="lol">
                                <label htmlFor="">Email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="lol">
                                <label htmlFor="">password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="but">
                                <button className="kolllo" onClick={(e) => handler(e)} disabled={isFetching}>Login</button>

                            </div>

                        </form>

                    </div>
                    }
                </Switch>
            </Router>

        </>




    )
}
