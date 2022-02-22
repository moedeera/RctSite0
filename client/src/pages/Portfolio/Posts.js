import React from 'react'
import Searchbar from '../../components/Searchbar'
import { usePosts } from '../../utils/PostAuth'
import pic from "../../blank-avatar.png";
import { useContext} from "react";
import { UserContext } from "../../UserContext";


export const Posts = ( {Friend, SetFriend}) => {

    const { posts, likeCount, comments, } = usePosts();

    const { postPage } = useContext(UserContext);
console.log(comments)

  return (
     
    <div className="main-prof">
       
        <Searchbar  setAuth={SetFriend} />
         <div className="MainCard">
      <div className="Post-Feed">
     
          {posts.map((Post) =>Post.id===postPage.id?( <div className="Posts" id={Post.id}>
          <div className="Interactions">
                        <div>{Post.date}</div>
                        <div onClick={() => likeCount(Post.id)}>
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
                      <img src={Post.postPic} alt="" className="PostPic" />
                      <div className=" Poster">
                        {" "}
                        <div className="PosterInfo">
                          <img src={Post.PosterPic} alt="" />
                          {Post.PosterName}
                        </div>
                        {Post.text}
                      </div>
                    
                  
                      <div style={{fontWeight:'bold'}}>Comments</div>
{comments.map((comment) => comment.post === Post.id?( <><div className=" Poster">
                        {" "}
                        <div className="PosterInfo">
                          <img src={comment.picture} alt="" />
                          {comment.name}
                        </div>
                        {comment.text}
                      </div></>):'')}

                      
                    
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
          
      </div>
      
      </div>
        </div>
  )
}
