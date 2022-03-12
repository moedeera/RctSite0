import React, { useEffect } from "react";
import pic from "../../../blank-avatar.png";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { usePosts } from "../../../utils/PostAuth";

export const CreatePosts = () => {
  const { CreatePost } = usePosts();
  const [alert, setAlert] = useState(false);
  const [postBox, setPostBox] = useState({
    PstText: "",
    PstPicture: "",
    urlShow: false,
    mscShow: false,
  });
  const onPostBoxChange = (e) => {
    setPostBox({ ...postBox, PstText: e.target.value });
  };

  const onPostSubmission = (e) => {
    e.preventDefault();
    if (postBox.PstText !== "" || postBox.PstPicture !== "") {
      CreatePost(postBox);
      setPostBox({
        ...postBox,
        PstPicture: "",

        urlShow: false,
        mscShow: false,
      });
    } else {
      setAlert(true);
    }
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false

      setAlert(false);
    }, 3000);
  }, [alert]);
  return (
    <div className="MCreatePost">
      <img src={pic} alt="new" />
      <div className="MCpost">
        <div className="MCPostbox">
          <textarea
            type="textarea"
            className="textarea"
            placeholder="Share a Post"
            value={postBox.PstText}
            name="comment"
            onChange={(e) => {
              onPostBoxChange(e);
            }}
          />
        </div>
        {postBox.urlShow ? (
          <textarea
            className="urlTextArea"
            placeholder="Enter image URL"
            value={postBox.PstPicture}
            onChange={(e) =>
              setPostBox({ ...postBox, PstPicture: e.target.value })
            }
          />
        ) : (
          ""
        )}
        {alert ? <p style={{ color: "crimson" }}>Please Enter a Post</p> : ""}

        <div className="MCbuttons">
          <i
            class="fas fa-image"
            onClick={() => {
              setPostBox({ ...postBox, urlShow: !postBox.urlShow });
            }}
          ></i>

          <i class="fas fa-video"></i>

          <i class="fas fa-music fa"></i>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={(e) => {
              onPostSubmission(e);
            }}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};
