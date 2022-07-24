import React from 'react';
import "./style.css";

function PostNotExist(props) {
    const {navigate} = props
  return (
    <div className="post__notfound">
            <div className="post__notfound-container">
                <h3 className="post__notfound-opps">Oops! Post do not exists</h3>
                <h1 className="post__notfound-icon">
                    <i class="fa-solid fa-paste"></i>
                </h1>
                <h3 className="post__notfound-sorry">
                    we are sorry, but post you requested was not found
                </h3>
                {/* <div className="notfound__backhome">
                    <button onClick={()=>navigate(`/`)} className="notfound__backhome-button">
                        BACK HOME
                    </button>
                </div> */}
            </div>
        </div>
  )
}

export default PostNotExist