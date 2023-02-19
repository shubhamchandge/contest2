// import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./Post.css"

const Post = () => {
    const [post, setpost] = useState([]);
    const [likecount, setlikecount] = useState(0)

    let url = "https://jsonplaceholder.typicode.com/posts?_page=$%7Bpage%7D&_limit=20"

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url);
            const output = result.json();
            output
                .then((data) => {
                    console.log(data);
                    setpost(data)
                })
        }

        fetchData();
    }, [])

 
    return (
        
        <div className='box' >
              <div  className='container'>
            {post.map(item => {
                return (  
                <>
                   <div className='imgbox'>
                            <img src='https://picsum.photos/200?random=${post.id}' alt='img' />
                        </div>
                        <div className='texts'>
                            <ul>
                                <li className='userid'>UserID:{item.userId}</li>
                                <li>Title:{item.title}</li>
                                <li>Likes:{() => setlikecount(likecount + 1)}</li>
                            </ul>
                        </div>
                        <div className='Likes'>
                            <button className='like-btn'> Like Post</button>
                        </div>
                   
                </>
             
                )
            })}
        </div>
        </div>
    )
}

export default Post



