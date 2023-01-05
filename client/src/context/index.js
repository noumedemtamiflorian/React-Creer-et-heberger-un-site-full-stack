import { createContext, useContext, useMemo, useState } from "react";
import { getPosts, insertPosts } from "../service";

const AppContext = createContext()
const { Provider } = AppContext

export const AppProvider = ({ children }) => {

    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        getPosts().then(setPosts)
    }

    const addPost = (body) => {
        insertPosts(body).then(setPosts)
    }

    const value = useMemo(() => {
        return {
            posts,
            fetchPosts,
            addPost
        }
    }, [posts])

    return <Provider value={value}>{children}</Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}