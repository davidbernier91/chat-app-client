import React from 'react'

export default function NavBarTop() {
    return(
        <div className="centered-form">
            <div className="centered-form__box">
                <h1>Join</h1>
                <form action="/chat.html">
                    <label>Display name</label>
                    <input type="text" name="username" placeholder="Display name" required/>
                    <label>Room</label>
                    <input type="text" name="room" placeholder="Room" required/>
                    <button>Join</button>
                </form>
            </div>
        </div>
    )
}
