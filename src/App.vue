<template>
  <div id="app">
    <p>{{ $t("result") }}</p>
    <p>{{ $t("test", ["Vasya", "kek"]) }}</p>
    <select v-model="lang" @change="changeLocale">
      <option value="ru">ru</option>
      <option value="en">en</option>
    </select>
  </div>
</template>

<script>
import { asyncSetLocale } from "./utils";

export default {
  name: "App",
  data() {
    return {
      lang: localStorage.getItem("lang"),
    };
  },
  methods: {
    changeLocale() {
      localStorage.setItem("lang", this.lang);

      asyncSetLocale();
    },
  },
};
</script>
