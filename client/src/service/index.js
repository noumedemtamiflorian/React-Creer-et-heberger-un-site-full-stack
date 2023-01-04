import axios from "axios"

export const getPosts = () => {
    return new Promise(resolve => {
        axios.get("http://localhost:4000/")
            .then(res => res.status === 200 && res.data)
            .then(resolve)
            .catch(console.error)
    })
}