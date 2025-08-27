"use client";

import type { FormEvent } from "react";
import { useRef, useState, useEffect } from "react";

import { useMask } from "@react-input/mask";

import { useSearchParams } from "next/navigation";

import CtaButton from "~/common/ui/component/test/cta-button";

import style from "./style/style.module.scss";

const usePhoneMask = () => {
  const inputRef = useMask({
    mask: "+40 7xx xxx xxx",
    replacement: { x: /\d/ },
    showMask: true,
    separate: true
  });

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleFocus = () => {
      requestAnimationFrame(() => {
        const value = input.value;
        const nextFreeIndex = value.indexOf("x");
        const pos = nextFreeIndex !== -1 ? nextFreeIndex : value.length;
        input.setSelectionRange(pos, pos);
      });
    };

    input.addEventListener("focus", handleFocus);
    return () => input.removeEventListener("focus", handleFocus);
  }, [inputRef]);

  return inputRef;
};

type Errors = {
  name?: string;
  phone?: string;
};

const SubmitForm = () => {
  const phoneMask = usePhoneMask();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const searchParams = useSearchParams();
  const flow_id = "stqnLCgJOKYUyAS";
  const geo = "ro";
  const sub1 = searchParams.get("sub1");
  const sub2 = searchParams.get("sub2");
  const sub3 = searchParams.get("sub3");
  const sub4 = searchParams.get("sub4");
  const sub5 = searchParams.get("sub5");

  const validate = (form: HTMLFormElement): Errors => {
    const formData = new FormData(form);
    const name = (formData.get("name") as string | null)?.trim() || "";
    const phone = (formData.get("phone") as string | null)?.trim() || "";

    const newErrors: Errors = {};

    const nameOk = name.length >= 2 && /[\p{L}]/u.test(name) && /^[\p{L}\p{M}\s.'-]+$/u.test(name);

    if (!nameOk) {
      newErrors.name = "Introduceți un nume valid (minim 2 caractere).";
    }

    const phoneOk = /^\+40 7\d{2} \d{3} \d{3}$/.test(phone) && !phone.includes("x");

    if (!phoneOk) {
      newErrors.phone = "Introduceți un număr de telefon valid (+40 7xx xxx xxx).";
    }

    return newErrors;
  };

  const focusFirstError = (errs: Errors) => {
    if (errs.name && nameRef.current) {
      nameRef.current.focus();
      return;
    }
    if (errs.phone && phoneMask.current) {
      phoneMask.current.focus();
      return;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const v = validate(form);
    setErrors(v);

    if (Object.keys(v).length > 0) {
      focusFirstError(v);
      return;
    }

    setSubmitting(true);
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/metacpa", {
        method: "POST",
        body: formData
      });

      window.location.href = "/success";

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const clearFieldError = (field: keyof Errors) =>
    setErrors(prev => (prev[field] ? { ...prev, [field]: undefined } : prev));

  return (
    <form id="offer" onSubmit={handleSubmit} noValidate className={style.formWrapper}>
      <div className={style.form}>
        <div className={style.form__group}>
          <label className={style.form__label} htmlFor="name">
            Nume
          </label>
          <input
            id="name"
            name="name"
            type="text"
            ref={nameRef}
            className={`${style.form__input} ${errors.name ? style.inputError : ""}`}
            placeholder="Apasă aici să scrii"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onInput={() => clearFieldError("name")}
          />
          {errors.name && (
            <span id="name-error" role="alert" className={style.form__error} aria-live="polite">
              {errors.name}
            </span>
          )}
        </div>

        <div className={style.form__group}>
          <label className={style.form__label} htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            ref={phoneMask}
            type="tel"
            className={`${style.form__input} ${errors.phone ? style.inputError : ""}`}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onInput={() => clearFieldError("phone")}
          />
          {errors.phone && (
            <span id="phone-error" role="alert" className={style.form__error} aria-live="polite">
              {errors.phone}
            </span>
          )}
        </div>

        <input type="hidden" name="flow_id" value={flow_id || ""} />
        <input type="hidden" name="geo" value={geo || ""} />
        {sub1 && <input type="hidden" name="sub1" value={sub1} />}
        {sub2 && <input type="hidden" name="sub2" value={sub2} />}
        {sub3 && <input type="hidden" name="sub3" value={sub3} />}
        {sub4 && <input type="hidden" name="sub4" value={sub4} />}
        {sub5 && <input type="hidden" name="sub5" value={sub5} />}
      </div>

      <div className={style.footer}>
        <CtaButton
          type="submit"
          title={submitting ? "Se procesează..." : "🔥 Comandă cu reducere"}
          className={style.footer__cta}
          disabled={submitting}
        />
        <span className={style.footer__subtitle}>Au mai rămas 7 pachete!</span>
      </div>
    </form>
  );
};

export default SubmitForm;
