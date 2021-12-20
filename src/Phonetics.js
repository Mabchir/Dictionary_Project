import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div className="SubPhonetics">
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              Listen
            </a>
            <span className="phon-text">/{phonetic.text}/</span>
          </div>
        );
      })}
    </div>
  );
}
