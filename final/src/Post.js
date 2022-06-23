import "./Post.css";
import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
function Post({ postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() => {
        let unsubscribe;
        // console.log(postId);
        if (postId) {
            // try {
            //     getDoc(doc(db, "posts", postId, "comments"))
            //         .onSnapshot((snapshot) => {
            //             setComments(snapshot.docs.map((doc) => doc.data()));
            //             // console.log(comments);
            //         })
            // } catch (e) {
            //     console.error("Error adding document: ", e);
            // }
            // console.log("1");
            // unsubscribe = db.collection("comments")
            unsubscribe = db.collection("posts")
                // .collection("posts")
                .doc(postId)
                .collection("comments")
                // .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                    // console.log(comments);
                })

        }
        return () => {
            unsubscribe();
        };
    }, [postId]);
    const postComment = (event) => {
        // console.log("1");
        // console.log(comment);
        // console.log(user.displayName);
        event.preventDefault();
        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            // timestamp: firebase.firestore.FieldValue
        });
        setComment('');
    }
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="=post__avatar"
                    alt="RafehQazi"
                    src='/static/imge/avatar/1.jpg'
                />
                <h3>&nbsp;</h3>
                <h3>{username}</h3>
            </div>
            <h4 className="post__text">{caption}</h4>
            <img className="post__image" src={imageUrl} alt="" />
            {/* <h4 className="post__text"><strong>{username}</strong> {caption}</h4> */}
            <div className="post__comments" style={{ marginLeft: '10px' }}>
                <p>
                    <strong>mai</strong>  good
                </p>
                {/* {console.log(comment)} */}
                {/* {comments.map(({ comment }) => (
                    <p>
                        <strong>{comment.username}</strong>{comment.text}
                    </p>
                ))} */}
            </div>

            <form className="post__commentBox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                    className="post__button"
                    disabled={!comment}
                    type="submit"
                    onClick={postComment}
                >
                    Post
                </button>
            </form>
        </div>
    )
}
export default Post
