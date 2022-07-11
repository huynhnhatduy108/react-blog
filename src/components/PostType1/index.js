import React from 'react'
import "./style.css";

function PostType1() {
  return (
    <div className='ingle-blog-area'>
        <div className='row'>
            <div className="cloum1 col-5">
                <div className='single-blog-thumbnail'>
                    <img className='thumbnail' src='https://technext.github.io/original/img/blog-img/3.jpg' alt=''/>
                    <div className='post-date'>
                        <p className='text-strong m-0'>12</p>
                        <p className=' m-0'>March</p>
                    </div>
                </div>
            </div>
            <div className="cloum col-5">
                <div className='line'></div>
                <div className='post-category text-upper'>life Style</div>
                <h4 className='m-0'>
                    <a className='post-headline'>We love colors in 2018</a>
                </h4>
                <p className='post-content text-center'>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                <div className='post-meta d-fex'>
                    <p className='post-meta-author'>BY <a className='text-strong cursor none-decoration color-black' href='#'>JAMES SMITH</a></p>
                    <p className='text-upper post-meta-comment'>3 comments</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostType1