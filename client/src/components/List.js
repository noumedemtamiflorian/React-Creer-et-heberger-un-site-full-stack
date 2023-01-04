import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import data from "./../data"
import { getPosts } from "../service"

export default function List() {

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div className="mt-5">
            {
                data.map(item => {
                    const title = item.title.split(" ").join("-")
                    const content = `${item.content.substring(0, 100)} ...`
                    return (
                        <div key={item._id}>
                            <h3>
                                <Link
                                    to={`/post/${title}`}
                                    state={{ id: item._id }}
                                >{item.title}</Link>
                            </h3>
                            <p>{content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}