import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Contactbg from "../src/assets/Contactbg.jpeg"

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmited, setIsFormSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (message.trim() === "" || !name || !email || !phone) {
      setIsError(true);
    } else if (phone.length < 10) {
      setIsError(true);
    } else if (!email.includes("@") || !email.includes(".com")) {
      setIsError(true);
    } else {
      setIsError(false);
      if (!isError) {
        setIsFormSubmitted(true);
      }
    }
  }

  return (
    (isLoading && <Loader />) || (
      <div className="contact" style={{backgroundImage: `url(${Contactbg})`}}>
        <div className="contactDiv">
          {(isFormSubmited && (
            <div className="form-submitted">
              <h3>Hello {name}</h3>
              <p>We have Got your Message. we'll get back to you soon...😎</p>
            </div>
          )) || (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h3>Contact</h3>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  boxShadow: `0 0 5px 1px ${
                    isError && !name ? "red" : "rgba(0, 0, 0, 0.5)"
                  }`
                }}
              />
              {isError && !name && (
                <small
                  style={{
                    width: "100%",
                    fontSize: "0.75rem",
                    margin: "0",
                    padding: "0",
                    textAlign: "right",
                    position: "relative",
                    top: "-7px",
                    right: "7px",
                    color: "red"
                  }}
                >
                  *Invalid name
                </small>
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  boxShadow: `0 0 5px 1px ${
                    isError &&
                    (!email || !email.includes("@") || !email.includes(".com"))
                      ? "red"
                      : "rgba(0, 0, 0, 0.5)"
                  }`
                }}
              />
              {isError &&
                (!email || !email.includes("@") || !email.includes(".com")) && (
                  <small
                    style={{
                      width: "100%",
                      fontSize: "0.75rem",
                      margin: "0",
                      padding: "0",
                      textAlign: "right",
                      position: "relative",
                      top: "-7px",
                      right: "7px",
                      color: "red"
                    }}
                  >
                    *Invalid email
                  </small>
                )}
              <input
                type="number"
                placeholder="Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{
                  boxShadow: `0 0 5px 1px ${
                    isError && phone.length < 10 ? "red" : "rgba(0, 0, 0, 0.5)"
                  }`
                }}
              />
              {isError && phone.length < 10 && (
                <small
                  style={{
                    width: "100%",
                    fontSize: "0.75rem",
                    margin: "0",
                    padding: "0",
                    textAlign: "right",
                    position: "relative",
                    top: "-7px",
                    right: "7px",
                    color: "red"
                  }}
                >
                  *Invalid number
                </small>
              )}
              <textarea
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{
                  boxShadow: `0 0 5px 1px ${
                    isError && !message ? "red" : "rgba(0, 0, 0, 0.5)"
                  }`
                }}
              />
              {isError && !message && (
                <small
                  style={{
                    width: "100%",
                    fontSize: "0.75rem",
                    margin: "0",
                    padding: "0",
                    textAlign: "right",
                    position: "relative",
                    top: "-7px",
                    right: "7px",
                    color: "red"
                  }}
                >
                  *required
                </small>
              )}
              <input
                type="submit"
                id="submit"
                value="Submit"
                onClick={(e) => handleSubmit(e)}
              />
            </form>
          )}
        </div>
        <div className="socialmedia">
          <p>Or Connect</p>
          <div>
            <Link to="https://github.com/JishnuJsm">
              <GitHubIcon className="icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/jishnu-senthilkumar/">
              <LinkedInIcon className="icon" />
            </Link>
            <Link to="mailto: jishnujsm003@gmail.com">
              <MailIcon className="icon" />
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
