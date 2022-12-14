import "./Contact.scss";

import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { Marker, TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import Loader from "react-loaders";

const Contact: React.FC = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = React.useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm(
        "service_4vvds9f",
        "template_t9fh5yh",
        form.current,
        "KH5wGwsTYwTkAY5vt"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload();
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in Junior Frontend Dev positions, however you can
            contact me for any other reasons as well using below form.
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Jana Kaluzova
          <br />
          Holubice, 683 51
          <br />
          Czech Republic
          <span>jani.kaluzova@gmail.com</span>
        </div>
        <div id="map" className="map-wrap">
          <MapContainer center={[49.177301, 16.81495]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[49.177301, 16.81495]}></Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" active />
    </>
  );
};

export default Contact;
