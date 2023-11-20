


import React from "react";
import { useParams } from "react-router-dom";

const IndividualForum = ({match})=>{
    
    const [forumData,setForumData] = React.useState({})
    const {id} = useParams()
    
    React.useState(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch(`http://localhost:8000/forum/${id}`);
                if(!response.ok){
                    throw new Error(`Http error! Status: ${response.status}`)
                  }
                const data = await response.json()
                setForumData(data)
                console.log(data)
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    },[])

    return(
        <>
        <h1>Title : {forumData.title}</h1>
        <h1>Username : {forumData.username}</h1>
        <h1>Views : {forumData.views}</h1>
        <h1>comments : {forumData.comments}</h1>
        </>
    )
}

export default IndividualForum