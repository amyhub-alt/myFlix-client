import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export const formStyle = { margin: "10px", border: "2px solid #d5d5d5", borderRadius: "10px", padding: "20px", boxShadow: "2px 2px #000000"};

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    console.log("Login data sent to server:", data);

    fetch("https://movie-api-amy-d13640458d52.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        console.log(data);
        if (data.user) {
         
          onLoggedIn(data.user, data.token);
          localStorage.setItem("user", JSON.stringify(data.user))
          localStorage.setItem("token", data.token)
          navigate("/");

        } else {
            console.log("Login failed: ", data);
            alert("No such user or invalid credentials");
          }
      })
      .catch((e) => {
        console.error("Error during fetch: ", e);
    alert("Something went wrong: " + e.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit} style={{...formStyle}}>
    <Form.Group controlId="formUsername">
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3" 
      />
    </Form.Group>

    <Form.Group controlId="formPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);
};

