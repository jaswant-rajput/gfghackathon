

import { useNavigate } from "react-router-dom"


const CreateForum = () => {

    const navigate = useNavigate() 

    const handleSubmit = async(event) => {
        event.preventDefault()

        const title = document.getElementById("title").value
        const question = document.getElementById("question").value
        
        const data = {"title":title,"question":question}
        const url = "http://localhost:8000/forum/createForum"
        const options = {
            method:"POST",
            headers: {
                'Content-Type':"application/json",
            },
            body:JSON.stringify(data)
        }
        try {
            const resposne = await fetch(url,options)
            const responseData = await resposne.json()
            
            if (responseData.status === "success") {
                navigate("/forum")
            }
        }
        catch(err){
            console.error(err)
        }
        
    }

    return (
        <>
            <label for="title">Title : </label>
            <input id="title" type="text" placeholder="Enter title" />
            <br/>

            <label for="question">Question : </label>
            <textarea id="question" type="text" placeholder="Enter question" />
            <br/>

            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default CreateForum