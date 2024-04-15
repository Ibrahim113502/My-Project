import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExampleApi() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get('https://api.rexcoders.in/api/training/getall')
            .then((response:any) => {
                setPostList(response.data.rows);
                console.log(response.data.rows) // Use response.data to set the list of posts
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Make the API call once when the component mounts

    return (
        <>
            <h1>This is an API Example</h1>
            <p>I am gett</p>
            <div className='grid grid-cols-3'>
            {
                postList.map((post:any) => {
                    return (
                        <div key={post.trainingId}> {/* Use a unique key for each rendered element */}
                            <h2><b>Course Name:</b>{post.trainingName}</h2> {/* Access specific properties of the post */}
                            <p><b>Couser duration:</b>{post.duration}</p>
                            <p><b>Amount:</b>{post.amount}</p>
                            <p><b>Discount Amount:</b>{post.discountAmount}</p>
                            {post.imageUrl}
                            <img src={'https://api.rexcoders.in'+post.imageUrl} alt="" />
                            
                        </div>
                    );
                })
            }
            </div>
        </>
    );
}

export default ExampleApi;
