import { InputProps } from "../types";

import { useTranslation } from "react-i18next";

import "./textarea.scss";
import { useInView } from "react-intersection-observer";

export const Textarea = ({
  value,
  label,
  name,
  onChange,
  register,
  error,
}: InputProps) => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <textarea
        className={`textarea ${error ? "textarea__error" : ""} ${
          inView ? "textarea--show" : ""
        }`}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        {...register(name)}
      />
      <span
        className={`textarea__message ${
          error ? "textarea__message-error" : ""
        }`}
      >
        {t("validationErrors.fieldRequired")}
      </span>
    </div>
  );
};
