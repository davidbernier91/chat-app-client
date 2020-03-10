import React from 'react'

export default function chat() {
    return (
            <section>
                <div className="chat">
                    <div id="sidebar" className="chat__sidebar">

                    </div>
                    <div className="chat__main">
                        <div id="messages" className="chat__messages"></div>

                        <div className="compose">
                            <form id="message-form">
                                <input name="message" placeholder="Message" required autocomplete="off"/>
                                <button>Send</button>
                            </form>
                            <button id="send-location">Send location</button>
                        </div>
                    </div>
                </div>

                <script id="message-template" type="text/html">
                    <div className="message">
                        <p>
                            <span className="message__name"></span>
                            <span className="message__meta"></span>
                        </p>
                        <p></p>
                    </div>
                </script>

                <script id="location-message-template" type="text/html">
                    <div className="message">
                        <p>
                            <span className="message__name"></span>
                            <span className="message__meta"></span>
                        </p>
                        <p><a href="{{url}}" target="_blank">My current location</a></p>
                    </div>
                </script>

                <script id="sidebar-template" type="text/html">
                    <h2 className="room-title"></h2>
                    <h3 className="list-title">Users</h3>
                    <ul className="users">
                            <li></li>
                    </ul>
                </script>
            </section>
    )
}
