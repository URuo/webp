import React, { useEffect, useState } from 'react'
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home'
import LinkIcon from '@mui/icons-material/Link'

const divStyle = {
    // border: "1px solid black",
    height: "500px",
    width: "200px",
    margin: "20px auto"
}

function App() {
    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.github.com/users/cjwu");
            const newData = await response.json();
            setUser(newData);
        };

        fetchData();
    }, []);

    console.log(user)

    return (
        <div style={divStyle}>
            <center>
                <img src={user.avatar_url} width="150" height="150" alt="" />
            </center>
            <h3>{user.name}</h3>
            <p>{user.login}</p>
            <center>
                <button width="150">Edit profile</button>
            </center>
            <br />
            <div>
                <PeopleIcon />
                <span style={{ display: 'inline-block' }}>{user.followers}followers·{user.following}following</span>
            </div>
            <div>
                <LocationOnIcon />
                <span style={{ display: 'inline-block' }}>{user.location}</span>
            </div>
            <div>
                <EmailIcon />
                <span style={{ display: 'inline-block' }}>{user.email ? user.email : "無"}</span>
            </div>
            <div>
                <HomeIcon />
                <span style={{ display: 'inline-block' }}>{user.html_url}</span>
            </div>
            <div>
                <LinkIcon />
                <span style={{ display: 'inline-block' }}>{user.blog}</span>
            </div>
        </div>
    )
}
export default App
