import React from "react"
import { useLocation } from "react-router-dom"
import { useAppContext } from "../context"

export default function Single() {
    const { posts } = useAppContext()
    const params = useLocation()
    const post = posts.find(post => post._id === params?.state?.id)
    return (<>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
    </>)
}