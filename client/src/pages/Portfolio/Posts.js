import React from 'react'
import Searchbar from '../../components/Searchbar'
import { usePosts } from '../../utils/PostAuth'
import pic from "../../blank-avatar.png";


export const Posts = ( Friend, SetFriend, post) => {

    const { posts, likeCount } = usePosts();

console.log(post)

  return (
     
    <div className="main-prof">
       
        <Searchbar  setAuth={SetFriend} />
         <div className="MainCard">
      <div className="Post-Feed">
     
          {posts.map((Post) =>Post.id===1?( <div className="Posts">
                      <img src={Post.postPic} alt="" className="PostPic" />
                      <div className=" Poster">
                        {" "}
                        <div className="PosterInfo">
                          <img src={Post.PosterPic} alt="" />
                          {Post.PosterName}
                        </div>
                        {Post.text}
                      </div>
                      <div className="Interactions">
                        <div>{Post.date}</div>
                        <div onClick={() => likeCount(post.id)}>
                          {Post.likes}{" "}
                          <i
                            className="fas fa-heart"
                            style={{ color: "red" }}
                          ></i>
                        </div>

                        <div>
                          {" "}
                          {Post.comments.length}
                          <i
                            className="fas fa-comment"
                            style={{ color: "grey" }}
                          ></i>
                        </div>
                      </div>
                      <div className="Create-Post">
                        {" "}
                        <img src={pic} alt="" />
                        <input
                          type="textarea"
                          name="textValue"
                          placeholder="Comment"
                        />
                      </div>
                    </div>
):'')}
          
      </div></div>
        </div>
  )
}
