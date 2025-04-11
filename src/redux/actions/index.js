import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    const res = await api.get("/languages");

    return res.data.languages;
  }
);
export const translateText = createAsyncThunk(
  "translate/translateText",
  async (_, { getState }) => {
    // aksiyon içerisinde store'daki verilere erişmemizi sağlayan fonksiyon
    const { translate } = getState();

    // api isteği at
    const res = await api.post("", {
      q: translate.textToTranslate,
      source: translate.sourceLang.value,
      target: translate.targetLang.value,
    });

    // payload'ı return et
    return res.data.data.translations.translatedText[0];
  }
);
