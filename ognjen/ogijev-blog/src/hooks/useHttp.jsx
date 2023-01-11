import axios from "axios"
import { useEffect, useState } from "react"
import { POSTS_URL } from "../http/client"

const endpoints = {
    BLOG_INDEX: `${POSTS_URL}/posts`,
    SHOW: (id) => `${POSTS_URL}/posts/${id}`,
    COMMENTS: `${POSTS_URL}/comments`
}


export default function useHttp (postId = null) {
    const [posts, setPosts] = useState()
    const [post, setPost] = useState()
    const [comments, setComments] = useState()

    useEffect(() => {
        axios.get(endpoints.BLOG_INDEX).then(({data}) => {
            setPosts(data)
        });
    }, [])

    useEffect(() => {
        if (postId) {
            fetchPostDetail()
        }
    }, [postId])

    useEffect(() => {
        axios.get(endpoints.COMMENTS).then(({data}) => {
            setComments(data)
        })
    }, [])

    const fetchPostDetail = async () => {
        const {data} = await axios.get(endpoints.SHOW(postId))
        setPost(data)
    }

    return {
        posts,
        post,
        comments
    }
}