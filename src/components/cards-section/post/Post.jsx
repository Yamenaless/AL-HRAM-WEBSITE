import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    let { id } = useParams()
    return (
        <div className='w-screen h-[400px] bg-black text-white flex items-center justify-center text-right'>
            <h1 className='text-5xl text-right '>{id}</h1>
        </div>
    )
}

export default Post
