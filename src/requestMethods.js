import axios from 'axios'

// const path = require('path')
// const dotenv=require('dotenv').config()

// const baseUrl = process.env.REACT_APP_API_URL
const baseUrl = "https://idkitsjustaservice.onrender.com/api/"
// const otherUrl=process.env.REACT_APP_LOCAL_URL

const holdonasec = () => {
    const oldpeople = localStorage.getItem("persist:root")
    // console.log(baseUrl)
// console.log(oldpeople)
    if (!JSON.parse(oldpeople)) {
        return null
    }
    else {
        const youngpeople = JSON.parse(oldpeople).user

        const people = JSON.parse(youngpeople).currentUser
        if (people === null) {
            return people
        }
        else {
            const yolo = people.data
            const token = yolo.token
            const admin = yolo.isAdmin
            return token
        }
    }

}
const token = holdonasec()

/* const oldpeople =  localStorage.getItem("persist:root")
const people= JSON.parse(oldpeople).currentUser
    
    const yolo =  JSON.parse(people).data
    const token =  yolo.token
    const admin = yolo.isAdmin */

// console.log(token)



export const publicRequest = axios.create({ baseURL: baseUrl })
export const userRequest = axios.create({ baseURL: baseUrl, headers: { token: `Bearer ${token}` } })





//const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjY3Y2M1Y2IyMzIxODI5ZDk2ZDg0ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDI4NzI4OSwiZXhwIjoxNjM0NTQ2NDg5fQ.gBmmuChZ0wrDKjV6f9Bgq0pGmVQ84PkUuJkiVEYYiLc"
