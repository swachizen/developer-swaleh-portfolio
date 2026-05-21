"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  SendHorizonal,
  CheckCircle2,
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

  /* ========================================
     SUCCESS MESSAGE AUTO REMOVE
  ======================================== */

  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  /* ========================================
     VALIDATIONS
  ======================================== */

  const nameError = useMemo(() => {
    const trimmed = formData.fullName.trim();

    if (!trimmed) return "";

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
    if (!formData.email) return "";

    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(formData.email)
      ? ""
      : "Please enter a valid email address.";
  }, [formData.email]);

  const phoneError = useMemo(() => {
    if (!formData.phone) return "";

    const regex =
      /^\+(254|255|256|250)\d{9}$/;

    return regex.test(formData.phone)
      ? ""
      : "Phone number must contain a valid East African country code.";
  }, [formData.phone]);

  const messageError = useMemo(() => {
    if (!formData.message) return "";

    const words =
      formData.message.trim().split(/\s+/);

    return words.length >= 5
      ? ""
      : "Message must contain at least 5 words.";
  }, [formData.message]);

  /* ========================================
     COUNTRY DETECTION
  ======================================== */

  const matchedCountry = useMemo(() => {
    return eastAfricanCountries.find((country) =>
      formData.phone.startsWith(country.code)
    );
  }, [formData.phone]);

  /* ========================================
     FORM VALIDITY
  ======================================== */

  const isValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.country &&
    formData.county &&
    formData.message &&
    !nameError &&
    !emailError &&
    !phoneError &&
    !messageError;

  /* ========================================
     INPUT HANDLER
  ======================================== */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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

  /* ========================================
     SUBMIT HANDLER
  ======================================== */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!isValid) return;

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
      toast.error(
        "Failed to submit message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
          Contact Me
        </h3>

        <p className="mt-3 text-zinc-400">
          Send a message and I&apos;ll respond as
          soon as possible.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Full Names */}
        <div className="space-y-2">
          <input
            type="text"
            name="fullName"
            placeholder="Full Names"
            value={formData.fullName}
            onChange={handleChange}
          />

          {nameError && (
            <div className="flex items-center gap-2 text-sm font-medium text-red-500">
              <CheckCircle2 className="h-4 w-4" />
              <span>{nameError}</span>
            </div>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          {emailError && (
            <div className="flex items-center gap-2 text-sm font-medium text-red-500">
              <CheckCircle2 className="h-4 w-4" />
              <span>{emailError}</span>
            </div>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <input
            type="tel"
            name="phone"
            placeholder="+254794828482"
            value={formData.phone}
            onChange={handleChange}
          />

          {phoneError && (
            <div className="flex items-center gap-2 text-sm font-medium text-red-500">
              <CheckCircle2 className="h-4 w-4" />
              <span>{phoneError}</span>
            </div>
          )}
        </div>

        {/* Country */}
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={matchedCountry?.country || ""}
            readOnly
            className="cursor-not-allowed opacity-80"
          />
        </div>

        {/* County */}
        <div>
          <select
            name="county"
            value={formData.county}
            onChange={handleChange}
            disabled={!matchedCountry}
            className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-4 text-sm text-white outline-none transition-all duration-300 focus:border-blue-500/40 disabled:cursor-not-allowed disabled:opacity-50"
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
          <textarea
            name="message"
            rows={6}
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          />

          {messageError && (
            <div className="flex items-center gap-2 text-sm font-medium text-red-500">
              <CheckCircle2 className="h-4 w-4" />
              <span>{messageError}</span>
            </div>
          )}
        </div>

        {/* Submit */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          disabled={!isValid || loading}
          className={`flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-300 ${
            isValid
              ? "bg-blue-500 text-white hover:bg-blue-400"
              : "cursor-not-allowed bg-white/[0.04] text-zinc-500"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <SendHorizonal className="h-5 w-5" />
              Submit Message
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
                duration: 0.3,
              }}
              className="flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4"
            >
              <div className="mt-0.5 rounded-full bg-emerald-500/20 p-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-emerald-300">
                  Message Sent Successfully
                </p>

                <p className="mt-1 text-sm leading-6 text-emerald-200/80">
                  I&apos;ve received your message and
                  I&apos;ll respond within 24
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
