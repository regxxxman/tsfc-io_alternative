import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Button } from "@common/Button/Button";
import { Input } from "@common/Input/Input";
import { SvgIcon } from "@common/SvgIcon/SvgIcon";
import { Textarea } from "@common/Textarea/Textarea";

import styles from "./form.module.scss";
import { getLinkToDocument } from "@/helpers/getLinkToDocument";
import { schemaClientForm } from "@/helpers/validation";
import { useInView } from "react-intersection-observer";

const baseURL = import.meta.env.VITE_BASE_URL;
const token = import.meta.env.VITE_TOKEN;

interface FormDataInterface {
  email: string;
  name: string;
  phone_number: string;
  text: string;
}

interface ResponseBodyInterface {
  statusCode: number;
  message: string[];
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaClientForm),
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const { t } = useTranslation();

  const observerOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: policyRef, inView } = useInView(observerOptions);
  const { ref: buttonRef } = useInView(observerOptions);

  const handleErrorResponse = (responseBody: ResponseBodyInterface) => {
    if (
      responseBody &&
      responseBody.statusCode === 400 &&
      responseBody.message
    ) {
      const invalidEmail = responseBody.message.find(
        (error: string | string[]) => error.includes("email")
      );
      const invalidPhoneNumber = responseBody.message.find(
        (error: string | string[]) => error.includes("phone_number")
      );

      if (invalidEmail) {
        setError("email", {
          type: "manual",
          message: "invalid",
        });
      }

      if (invalidPhoneNumber) {
        setError("phone_number", {
          type: "manual",
          message: "invalid",
        });
      }
    }
  };

  const onSubmit = async (data: FormDataInterface) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("phone_number", data.phone_number);
    formData.append("text", data.text);

    try {
      const response = await fetch(baseURL + "/email/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Accept: "application/json",
          token: token,
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setLoading(false);
        setIsSend(true);
        setIsDisabled(false);
        setErrorOccurred(false);
        reset();
      } else {
        setLoading(false);
        setErrorOccurred(true);
        setIsDisabled(false);
        const responseBody = await response.json();
        handleErrorResponse(responseBody);
      }
    } catch (error) {
      setLoading(false);
      setErrorOccurred(true);
      setIsDisabled(false);
    }
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles["formInputs"]}>
        <Input
          label={t("contactUsBlock.enterYourName")}
          name="name"
          register={register}
          error={errors.name?.message}
        />
        <Input
          label={t("contactUsBlock.enterYourEmail")}
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label={t("contactUsBlock.enterYourPhone")}
          name="phone_number"
          register={register}
          error={errors.phone_number?.message}
        />
        <Textarea
          label={t("contactUsBlock.detailYourRequest")}
          name="text"
          register={register}
          error={errors.text?.message}
        />
      </div>
      <p
        ref={policyRef}
        className={`${styles["formPolicy"]} ${
          inView ? styles["formPolicy--show"] : ""
        }`}
      >
        {t("contactUsBlock.byClickingYouAgreeThePrivacy1")}
        <Link
          className={styles["formLink"]}
          to={getLinkToDocument("privacy-policy")}
          target="_blank"
        >
          {" "}
          {t("contactUsBlock.byClickingYouAgreeThePrivacy2")}
        </Link>
      </p>

      {isSend ? (
        <div className={styles.formSendMessageWrapper}>
          <div className={styles["formMessage"]}>
            <SvgIcon src="requestSuccessIcon.svg"></SvgIcon>
            <p className={styles["formMessageText"]}>
              {t("contactUsBlock.requestSuccessMessage")}
            </p>
          </div>
        </div>
      ) : errorOccurred ? (
        <div className={styles.formSendMessageWrapper}>
          <div className={styles["formMessage"]}>
            <SvgIcon src="error.svg"></SvgIcon>
            <p className={styles["formMessageText"]}>
              {t("contactUsBlock.requestErrorMessage")}
              <span
                className={styles["formRestart"]}
                onClick={() => setErrorOccurred(false)}
              >
                {t("contactUsBlock.requestRepeatMessage")}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div
          ref={buttonRef}
          className={`${styles["button"]} ${
            inView ? styles["button--show"] : ""
          }`}
        >
          <Button disabled={isDisabled} type="submit">
            {loading ? t("contactUsBlock.sending") : t("contactUsBlock.send")}
          </Button>
        </div>
      )}
    </form>
  );
};

export default Form;
