import React, { useState ,useRef} from 'react';
import Editor from "../../../components/Editor/EditorWithUseQuill";


function CommentPage() {
    const [content, setContent] = useState("<p>New content here</p>");
    const editorRef = useRef()

    const setContents =()=>{
        console.log("getContent", editorRef.current.setContents(content));
    }
    const getContents =()=>{
        console.log("getContent", editorRef.current.getContents());
    }

  return (
    <div><Editor ref={editorRef} />
    <button onClick={setContents}>setContent</button>
    <button onClick={getContents}>getcontent</button> </div>
  )
}

export default CommentPage;