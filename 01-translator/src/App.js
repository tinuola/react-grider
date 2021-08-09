import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <main>
      <Field label="Enter English" onChange={setText} value={text} />
      <hr />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </main>
  );
}

export default App;
