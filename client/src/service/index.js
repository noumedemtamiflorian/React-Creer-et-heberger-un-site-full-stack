import axios from "axios"

export const getPosts = () => {
    return new Promise(resolve => {
        axios.get("/posts")
            .then(res => res.status === 200 && res.data)
            .then(resolve)
            .catch(console.error)
    })
}

export const insertPosts = (body) => {
    return new Promise(resolve => {
        axios.post("/posts/insert", body)
            .then(res => res.status === 200 && res.data)
            .then(resolve)
            .catch(console.error)
    })
}