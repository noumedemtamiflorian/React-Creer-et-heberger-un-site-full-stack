import React from "react"
import { useLocation } from "react-router-dom"
import data from "../data"

export default function Single() {
    const params = useLocation()
    const post = data.find(post => post._id === params?.state?.id)
    return (<>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
    </>)
}