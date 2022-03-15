import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../redux/apiCall'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import './login.scss'
export default function Login() {
    const [hotline, setHotline] = useState(false)
    var youth = false
    const [success, setSuccess] = useState()
    const [status, setStatus] = useState()
    const [message, setMessage] = useState('')
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


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispch = useDispatch();

    const handler = async (e) => {
        e.preventDefault()
        const user = { email, password }
        try {
            const reply = await login(dispch, user)
            if (reply) {
                setSuccess(reply.success)
                setMessage(reply.msg)
                setStatus(reply.status)
            }
            else {

                setSuccess(false)
                setMessage("something went wrong with our server")

            }

        } catch (e) {
            console.log(e)
        }




    }



    return (
        <>
            <Router>
                <Switch>
                    {youth ? <Redirect to='/' /> : <div className="login">
                        <div className="badmanthing">
                            {success?  <span className="right">{message}</span>: <span className='wrong'>{message}</span>} 
                        </div>
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
