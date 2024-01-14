import React from "react";
import logo from '../assets/logo.webp'

const HomePage = () => {
    return (
        <main className="home">
            <div className="home__title">
                <div className="home__title-title">
                    <h1>Welcome to the Pied Piper!</h1>
                </div>
                <div className="home__title-logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="home__subtitle">
                <p>Pied Piper is an OpenSource web application under the <strong>Vladik license</strong> where you can encode and decode between different format systems. This happens fully in your browser using JavaScript, no content will be sent to any kind of server. Please note that the encryption methods offered below are very basic and therefore not considered as secure.</p>
            </div>

            <footer className="home__footer">
                <p>Made by Vladyslav Pryimak (c) 2023</p>
            </footer>
        </main>
    );
};

export default HomePage;
