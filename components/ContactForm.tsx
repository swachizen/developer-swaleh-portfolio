"use client";

import { useEffect, useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Loader2,
  SendHorizontal,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import toast from "react-hot-toast";

import { supabase } from "@/lib/supabaseClient";
import { eastAfricanCountries } from "@/lib/Countries";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    county: "",
    message: "",
  });

  /* ======================================================
     SUCCESS MESSAGE AUTO REMOVE
  ====================================================== */

  useEffect(() => {
    if (!successMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  /* ======================================================
     VALIDATIONS
  ====================================================== */

  const nameError = useMemo(() => {
    const trimmed = formData.fullName.trim();

    if (!trimmed) {
      return "";
    }

    const words = trimmed.split(/\s+/);

    if (words.length < 2) {
      return "Minimum of 2 names required.";
    }

    if (words.length > 3) {
      return "Maximum of 3 names allowed.";
    }

    const nameRegex = /^[A-Z][a-zA-Z]+$/;

    for (const word of words) {
      if (!nameRegex.test(word)) {
        return "Each name must start with a capital letter and contain no punctuation.";
      }
    }

    return "";
  }, [formData.fullName]);

  const emailError = useMemo(() => {
    if (!formData.email) {
      return "";
    }

    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(formData.email)
      ? ""
      : "Please enter a valid email address.";
  }, [formData.email]);

  const phoneError = useMemo(() => {
    if (!formData.phone) {
      return "";
    }

    const regex =
      /^\+(254|255|256|250)\d{9}$/;

    return regex.test(formData.phone)
      ? ""
      : "Phone number must contain a valid East African country code.";
  }, [formData.phone]);

  const messageError = useMemo(() => {
    if (!formData.message) {
      return "";
    }

    const words =
      formData.message.trim().split(/\s+/);

    return words.length >= 5
      ? ""
      : "Message must contain at least 5 words.";
  }, [formData.message]);

  /* ======================================================
     COUNTRY DETECTION
  ====================================================== */

  const matchedCountry = useMemo(() => {
    return eastAfricanCountries.find((country) =>
      formData.phone.startsWith(country.code)
    );
  }, [formData.phone]);

  /* ======================================================
     FORM VALIDITY
  ====================================================== */

  const isValid =
    Boolean(formData.fullName) &&
    Boolean(formData.email) &&
    Boolean(formData.phone) &&
    Boolean(formData.country) &&
    Boolean(formData.county) &&
    Boolean(formData.message) &&
    !nameError &&
    !emailError &&
    !phoneError &&
    !messageError;

  /* ======================================================
     INPUT HANDLER
  ====================================================== */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    if (name === "phone") {
      const detectedCountry =
        eastAfricanCountries.find((country) =>
          value.startsWith(country.code)
        );

      updatedData.country =
        detectedCountry?.country || "";

      updatedData.county = "";
    }

    setFormData(updatedData);
  };

  /* ======================================================
     SUBMIT HANDLER
  ====================================================== */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!isValid || loading) {
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("contacts")
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            county: formData.county,
            message: formData.message,
          },
        ]);

      if (error) {
        throw error;
      }

      toast.success(
        "Message submitted successfully."
      );

      setSuccessMessage(
        "Your message has been submitted successfully. I&apos;ll respond within 24 hours."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        county: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to submit message."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ======================================================
     SHARED INPUT STYLES
  ====================================================== */

  const inputClassName =
    `
      w-full
      rounded-2xl
      border
      border-white/10
      bg-[#0a0a0a]
      px-4
      py-4
      text-sm
      text-white
      outline-none
      transition-colors
      duration-200
      placeholder:text-zinc-500
      focus:border-blue-500/40
      focus:bg-[#0d0d0d]
      disabled:cursor-not-allowed
      disabled:opacity-50
    `;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">
          Contact Me
        </h2>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          Send a message and I&apos;ll respond as
          soon as possible.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-zinc-300"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            name="fullName"
            autoComplete="name"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            aria-invalid={Boolean(nameError)}
            aria-describedby={
              nameError
                ? "fullName-error"
                : undefined
            }
            className={inputClassName}
          />

          {nameError && (
            <div
              id="fullName-error"
              className="flex items-center gap-2 text-sm text-red-400"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />

              <span>{nameError}</span>
            </div>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-300"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(emailError)}
            aria-describedby={
              emailError
                ? "email-error"
                : undefined
            }
            className={inputClassName}
          />

          {emailError && (
            <div
              id="email-error"
              className="flex items-center gap-2 text-sm text-red-400"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />

              <span>{emailError}</span>
            </div>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-zinc-300"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+254712345678"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={Boolean(phoneError)}
            aria-describedby={
              phoneError
                ? "phone-error"
                : undefined
            }
            className={inputClassName}
          />

          {phoneError && (
            <div
              id="phone-error"
              className="flex items-center gap-2 text-sm text-red-400"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />

              <span>{phoneError}</span>
            </div>
          )}
        </div>

        {/* Country */}
        <div className="space-y-2">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-300"
          >
            Country
          </label>

          <input
            id="country"
            type="text"
            name="country"
            autoComplete="country-name"
            placeholder="Detected automatically"
            value={matchedCountry?.country || ""}
            readOnly
            className={`${inputClassName} cursor-not-allowed opacity-80`}
          />
        </div>

        {/* County / Region */}
        <div className="space-y-2">
          <label
            htmlFor="county"
            className="text-sm font-medium text-zinc-300"
          >
            County / Region
          </label>

          <select
            id="county"
            name="county"
            value={formData.county}
            onChange={handleChange}
            disabled={!matchedCountry}
            autoComplete="address-level1"
            className={inputClassName}
          >
            <option value="">
              Select County / Region
            </option>

            {matchedCountry?.counties.map(
              (county) => (
                <option
                  key={county}
                  value={county}
                >
                  {county}
                </option>
              )
            )}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-zinc-300"
          >
            Project Details
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            autoComplete="off"
            placeholder="Tell me about your project, goals, or requirements..."
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(messageError)}
            aria-describedby={
              messageError
                ? "message-error"
                : undefined
            }
            className={`${inputClassName} resize-none`}
          />

          {messageError && (
            <div
              id="message-error"
              className="flex items-center gap-2 text-sm text-red-400"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />

              <span>{messageError}</span>
            </div>
          )}
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          disabled={!isValid || loading}
          aria-disabled={!isValid || loading}
          className={`
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            px-5
            py-4
            text-sm
            font-medium
            transition-colors
            duration-200
            ${
              isValid
                ? "bg-blue-500 text-white hover:bg-blue-400"
                : "cursor-not-allowed bg-white/[0.04] text-zinc-500"
            }
          `}
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />

              <span>Submitting...</span>
            </>
          ) : (
            <>
              <SendHorizontal className="h-5 w-5" />

              <span>Submit Message</span>
            </>
          )}
        </motion.button>

        {/* Success Message */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-emerald-500/20
                bg-emerald-500/10
                p-4
              "
            >
              <div className="mt-0.5 rounded-full bg-emerald-500/20 p-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-emerald-300">
                  Message Sent Successfully
                </p>

                <p className="mt-1 text-sm leading-6 text-emerald-200/80">
                  I&apos;ve received your message
                  and I&apos;ll respond within 24
                  hours.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
