import i18n from "./i18n";

export async function asyncSetLocale() {
  return await (async () => {
    let lang = localStorage.getItem("lang");

    if (!lang) {
      localStorage.setItem("lang", "ru");
    } else {
      let res = await fetch(`http://127.0.0.1:3000/locale?lang=${lang}`);

      let locale = await res.json();

      i18n.setLocaleMessage("en", locale);
    }
  })();
}
