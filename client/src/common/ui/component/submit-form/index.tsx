"use client";
import type { FormEvent } from "react";

import { useMask } from "@react-input/mask";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import CtaButton from "~/common/ui/component/test/cta-button";

import style from "./style/style.module.scss";

const usePhoneMask = () => {
  const inputRef = useMask({
    mask: "+40 7xx xxx xxx",
    replacement: { x: /\d/ },
    showMask: true,
    separate: true
  });

  const maskString = "+40 7xx xxx xxx";
  const firstXIndex = maskString.indexOf("x");

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
  }, [inputRef, firstXIndex]);

  return inputRef;
};

const SubmitForm = () => {
  const phoneMask = usePhoneMask();

  const searchParams = useSearchParams();
  const flow_id = "stqnLCgJOKYUyAS";
  const geo = "ro";
  const sub1 = searchParams.get("sub1");
  const sub2 = searchParams.get("sub2");
  const sub3 = searchParams.get("sub3");
  const sub4 = searchParams.get("sub4");
  const sub5 = searchParams.get("sub5");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/metacpa", {
        method: "POST",
        body: formData
      });

      window.location.href = "/success";

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
    }
  };

  return (
    <form
      id="offer"
      onSubmit={handleSubmit}
      className={style.formWrapper}
    >
      <div className={style.form}>
        <div className={style.form__group}>
          <label className={style.form__label} htmlFor="name">
            Nume
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={style.form__input}
            placeholder="Apasă aici să scrii"
            required
          />
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
            required
            pattern="\+40 7\d{2} \d{3} \d{3}"
            title="Introduceți un număr de telefon valid (+40 7xx xxx xxx)"
            className={style.form__input}
          />
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
          title="🔥 Comandă cu reducere"
          className={style.footer__cta}
        />
        <span className={style.footer__subtitle}>Au mai rămas 7 pachete!</span>
      </div>
    </form>
  );
};

export default SubmitForm;