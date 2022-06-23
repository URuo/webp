import React, { useState } from "react";
import Button from '@mui/material/Button';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
function ImageUpload(username) {
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const db = firebase.firestore();
    const storage = firebase.storage();
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const handleUpload = () => {
        console.log(image.name);
        console.log(image);
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);

            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        });
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }

        )
    }

    return (
        <div className="upload">
            <progress value={progress} max="100" />
            <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event)} />
            <input type="file" accept="image/*" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}
export default ImageUpload