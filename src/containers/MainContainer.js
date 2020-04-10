import React from "react";
import { Link } from "react-router-dom";
import "../styles/containers.css";

export default function MainContainer() {
    return (
        <div className='main-container'>
            <section className='hero is-light is-fullheight'>
                <div className="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Welcome to Pathos
                        </h1>
                        <h2 class="subtitle">
                            <Link to='/login'>Click here to sign up or login. </Link>
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

