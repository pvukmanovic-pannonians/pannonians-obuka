import axios from "axios"
import { useEffect, useState } from "react"
import { POSTS_URL } from "../http/client"

const endpoints = {
    BLOG_INDEX: `${POSTS_URL}/posts`,
    SHOW: (id) => `${POSTS_URL}/posts/${id}`
}


export default function useHttp (postId = null) {
    const [posts, setPosts] = useState()
    const [post, setPost] = useState()
    useEffect(() => {
        axios.get(endpoints.BLOG_INDEX).then(({data}) => {
            setPosts(data.slice(0, 10))
        });
    }, [])

    useEffect(() => {
        if (postId) {
            fetchPostDetail()
        }
    }, [postId])

    const fetchPostDetail = async () => {
        const {data} = await axios.get(endpoints.SHOW(postId))
        setPost(data)
    }

    return {
        posts,
        post
    }
}