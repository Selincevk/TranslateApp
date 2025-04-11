import React from "react";
import Select from "react-select";
import { FaExchangeAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSource, setTarget, swap } from "../redux/slices/translateSlice";
const LanguageSelect = () => {
  const dispatch = useDispatch();
  const { isLoading, languages, error } = useSelector(
    (store) => store.language
  );
  const { sourceLang, targetLang } = useSelector((store) => store.translate);
  // api'dan gelen dizinin formatını değiştir
  // language değerlerini value'a
  // name değerlerini label'a çevir
  const formatted =
    languages?.map((item) => ({
      value: item.language,
      label: item.name,
    })) || [];
  const detect = { value: undefined, label: "Dili algıla" };
  return (
    <div className="flex gap-2 text-black">
      <Select
        options={[detect, ...formatted]}
        isLoading={isLoading}
        isDisabled={isLoading}
        value={sourceLang}
        onChange={(lang) => {
          if (lang.value === targetLang.value) {
            dispatch(swap());
          }
          dispatch(setSource(lang));
        }}
        className="flex-1"
      />

      <button
        disabled={sourceLang.value === undefined}
        onClick={() => dispatch(swap())}
        className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white disabled:opacity-60"
      >
        <FaExchangeAlt />
      </button>

      <Select
        options={formatted}
        isLoading={isLoading}
        isDisabled={isLoading}
        value={targetLang}
        className="flex-1"
        onChange={(lang) => {
          if (lang.value === sourceLang.value) {
            dispatch(swap());
          }
          dispatch(setTarget(lang));
        }}
      />
    </div>
  );
};

export default LanguageSelect;
