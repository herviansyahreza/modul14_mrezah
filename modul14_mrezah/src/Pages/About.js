import'./About.css';
import { useState } from "react";
import { ReactDOM } from "react";
import img3 from './bookstore.jpg';

function About() {
    const [me, setMe] = useState({
        name: "Muhammad Reza Herviansyah",
        nim: "320200401016",
        university: "Republic of Indonesia Defense University",
        hobbies: "Play Tennis",
        });
        
        return (
        <>
            <h1>About</h1>
            <div className="me">
                <h1>Hey, My name is {me.name}</h1>
                <h6>I am from {me.university} , with NIM {me.nim}.</h6>
                <h6>My Hobby is {me.hobbies}</h6>

            <div className="bookstore">
                <img src={img3} className="fotonetlab"></img>
            </div>

            <div className="text">
                <p>Netlab Bookstore is a website development that I created for a practical assignment.</p>
                <p>Netlab Bookstore is an online book purchase website.</p>
                <p>This website is made using react js.</p>
                </div>
            </div>
        </>
        )
    };

    export default About;