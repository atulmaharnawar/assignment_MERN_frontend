import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    let history = useNavigate();

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        (async function () {
            if (localStorage.getItem("token")) {
                const response = await fetch("https://assignment-mern.onrender.com/api/auth/getuser", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem("token"),
                    },
                });
                const json = await response.json();
                setUserData(json);
            } else {
                history("/login");
            }
        })();
    });

    return (
        <>
            <div className="container">
                <div className="card-body py-3 text-bg-secondary my-3 px-2 d-flex flex-row justify-content-around">
                    <h1 className="card-title">Welcome {userData.name}!</h1>
                </div>
            </div>
        </>
    );
};

export default Profile;
