import axios from "axios"

export const getPosts = () => {
    return new Promise(resolve => {
        axios.get("http://localhost:4000/")
            .then()
            .catch()
    })
}