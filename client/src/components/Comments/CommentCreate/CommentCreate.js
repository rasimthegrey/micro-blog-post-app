import { useState } from "react"
import axios from "axios"

const CommentCreate = ({ postID }) => {

    const [content,setContent] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()

        await axios.post(`http://localhost:4001/posts/${postID}/comments`, {
            content
        })

        setContent('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>New Comment</label>
                <input
                    className='form-control'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </div>
            <button className='btn btn-primary' type='submit' >Submit</button>
        </form>
    )
}

export default CommentCreate
