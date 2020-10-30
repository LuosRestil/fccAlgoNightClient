import React, { useState } from "react";

function ParticipantHome() {
  const apiURL = 'http://localhost:5000/api/join'

  const [name, setname] = useState("");
  const [level, setlevel] = useState("");
  const [xp, setxp] = useState("");
  const [lang1, setlang1] = useState("")
  const [lang2, setlang2] = useState("");
  const [lang3, setlang3] = useState("");
  const [langOther, setlangOther] = useState("");

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    // send data to api, update UI to thank you page
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        level: level,
        xp: xp,
        lang1: lang1,
        lang2: lang2,
        lang3: lang3,
        langOther: langOther
      }),
    };
    fetch(apiURL, options)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
    let body = JSON.stringify({
      name: name,
      level: level,
      xp: xp,
      lang1: lang1,
      lang2: lang2,
      lang3: lang3,
      langOther: langOther
    })
    console.log(body);
  }

  const handleChange = (event: any): void => {
    let name = event.target.name;
    let value = event.target.value;
    switch(name) {
      case "name":
        setname(value);
        break;
      case "level":
        setlevel(value);
        break;
      case "xp":
        setxp(value);
        break;
      case "lang1":
        setlang1(value);
        break;
      case "lang2":
        setlang2(value);
        break;
      case "lang3":
        setlang3(value);
        break;
      case "langOther":
        setlangOther(value);
        break;
      default:
        console.log();
    }
    
  }

  return (
    <div>
      <h1>Participant Home</h1>
      <h3>Help us organize the groups.</h3>
      <p>We will try to keep group sizes to 2 or 3.</p>
      <form onSubmit={handleSubmit} id="user-info-form">
        <div>
          <legend>Please type your Zoom name.</legend>
          <input type="text" id="name" name="name" placeholder="e.g. Uncle Bob" onChange={handleChange} required/>
        </div>
        <div onChange={handleChange}>
          <legend>What level would you consider yourself?</legend>
            <div>
              <label htmlFor="beginner">Beginner</label>
              <input type="radio" id="beginner" value="beginner" name="level" required/>
            </div>
            <div>
              <label htmlFor="nonbeginner">Non-beginner</label>
              <input type="radio" id="nonbeginner" value="nonbeginner" name="level" required/>
            </div>
        </div>
        <div onChange={handleChange}>
          <legend>How many coding algorithms have you solved?</legend>
          <div>
            <label htmlFor="0-10">0 - 10</label>
            <input type="radio" id="0-10" name="xp" value="0-10" required/>
          </div>
          <div>
            <label htmlFor="11-50">11 - 50</label>
            <input type="radio" id="11-50" name="xp" value="11-50" required/>
          </div>
          <div>
            <label htmlFor="50+">50+</label>
            <input type="radio" id="50+" name="xp" value="50+" required/>
          </div>
        </div>
        <div>
          <legend>What language would you like to code with?</legend>
          <div onChange={handleChange}>
            <legend>First Preference</legend>
            <div>
              <label htmlFor="javascript1">JavaScript</label>
              <input type="radio" id="javascript1" name="lang1" value="javascript" required/>
            </div>
            <div>
              <label htmlFor="python1">Python</label>
              <input type="radio" id="python1" name="lang1" value="python" required/>
            </div>
            <div>
              <label htmlFor="c#1">C#</label>
              <input type="radio" id="c#1" name="lang1" value="c#" required/>
            </div>
            <div>
              <label htmlFor="other1">Other</label>
              <input type="radio" id="other1" name="lang1" value="other" required/>
            </div>
          </div>
          <div onChange={handleChange}>
            <legend>Second Preference</legend>
            <div>
              <label htmlFor="javascript2">JavaScript</label>
              <input type="radio" id="javascript2" name="lang2" value="javascript" required/>
            </div>
            <div>
              <label htmlFor="python2">Python</label>
              <input type="radio" id="python2" name="lang2" value="python" required/>
            </div>
            <div>
              <label htmlFor="c#2">C#</label>
              <input type="radio" id="c#2" name="lang2" value="c#" required/>
            </div>
            <div>
              <label htmlFor="other2">Other</label>
              <input type="radio" id="other2" name="lang2" value="other" required/>
            </div>
          </div>
          <div onChange={handleChange}>
            <legend>Third Preference</legend>
            <div>
              <label htmlFor="javascript3">JavaScript</label>
              <input type="radio" id="javascript3" name="lang3" value="javascript" required/>
            </div>
            <div>
              <label htmlFor="python3">Python</label>
              <input type="radio" id="python3" name="lang3" value="python" required/>
            </div>
            <div>
              <label htmlFor="c#3">C#</label>
              <input type="radio" id="c#3" name="lang3" value="c#" required/>
            </div>
            <div>
              <label htmlFor="other3">Other</label>
              <input type="radio" id="other3" name="lang3" value="other" required/>
            </div>
          </div>
          <div onChange={handleChange}>
            <label htmlFor="langOther">Preferred other language</label>
            <input type="text" id="langOther" name="langOther"/>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ParticipantHome;