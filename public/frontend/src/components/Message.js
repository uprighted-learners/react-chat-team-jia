import React, { useState, useEffect } from "react";

export default function Messages() {
  // this will be used to store the messages and the name of the room
  const [messages, setMessages] = useState({ name: "", messages: [] });

  // this is the useEffect hook that will be used to fetch the messages from the api endpoint

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Fetch messages from the API endpoint and set the messages state with the response data
        const response = await fetch(
          "`http://localhost:8080/messages/rooms/${roomId}"
        );
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMessages();
  }, [roomId]);

  // see if this is what is needed for the fetch messages or the top parent, which one ?

  const fetchMessages = async () => {
    try {
      // Fetch messages from the API endpoint and set the messages state with the response data
      // GET request
      let response = await fetch(
        "`http://localhost:8080/messages/rooms/${roomId}"
      );
      let data = await response.json();
      console.log(data);

      // POST request
      response = await fetch(`http://localhost:8080/messages/rooms/${roomId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "New message" }),
      });
      data = await response.json();
      console.log(data);
      // PUT request
      response = await fetch(
        "`http://localhost:8080/messages/rooms/${roomId}",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "Updated message" }),
        }
      );
      data = await response.json();
      console.log(data);

      // DELETE request
      response = await fetch(`http://localhost:8080/messages/rooms/${roomId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Message deleted");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // this return will render the messages in the room
  return (
    <div>
      <h1>{messages.name}</h1>
      <>
        {messages.messages.map((message) => (
          <div key={message.id}>
            <h2>{message.user}</h2>
            <p>{message.body}</p>
          </div>
        ))}
      </>
    </div>
  );
}
