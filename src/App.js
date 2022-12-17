//  "formatjs.io" for installation

import "./App.css";
import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  tr: {
    title: "Merhaba Dünya",
    description: "3 yeni mesajınız var.",
  },
  en: {
    title: "Hello World",
    description: "You have 3 new messages.",
  },
};
function App() {
  const isLocale = localStorage.getItem("locale");
  //  default browser language -- (tr)
  const defaultLocale = isLocale ? isLocale : navigator.language;

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        {" "}
        <FormattedMessage id="title" />
        <br />
        <br />
        <FormattedMessage id="description" />
        <br />
        <br />
        <button onClick={() => setLocale("tr")}>TR</button>
        <button onClick={() => setLocale("en")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
