import { InputProps } from "../types";

import { useTranslation } from "react-i18next";

import "./input.scss";
import { useInView } from "react-intersection-observer";

export const Input = ({
  value,
  label,
  name,
  register,
  error,
  onChange,
}: InputProps) => {
  const { t } = useTranslation();

  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: inputRef, inView: inputInView } = useInView(inViewOptions);

  return (
    <div className="input__wrapper" ref={inputRef}>
      <input
        className={`input ${inputInView ? "input--show" : ""} ${
          error ? "input__error" : ""
        }`}
        {...register(name)}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      <span className={`input__message ${error ? "input__message-error" : ""}`}>
        {error === "invalid"
          ? t("validationErrors.fieldIncorrect")
          : t("validationErrors.fieldRequired")}
      </span>
    </div>
  );
};
