"use client"

import { useState } from "react"
import { Mail, MapPin, Clock, CheckCircle, Sparkles } from "lucide-react"

type FormState = "default" | "loading" | "success" | "error"

export function Contact() {
  const [formState, setFormState] = useState<FormState>("default")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  })
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset any previous error
    setErrorMessage("")

    // Client-side validation
    if (!formData.fullName.trim()) {
      setFormState("error")
      setErrorMessage("Please enter your full name.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormState("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    if (!formData.businessType) {
      setFormState("error")
      setErrorMessage("Please select your business type.")
      return
    }

    if (!formData.message.trim()) {
      setFormState("error")
      setErrorMessage("Please enter a message.")
      return
    }

    setFormState("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setFormState("error")
        setErrorMessage(data.error || "Something went wrong. Please try again.")
        return
      }

      setFormState("success")

    } catch (err) {
      console.error(err)
      setFormState("error")
      setErrorMessage(
        "Unable to send your message. Please check your connection or email us directly."
      )
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            Contact
          </span>
          <h2 className="mb-4 text-[28px] font-semibold leading-tight tracking-tight text-slate-900 md:text-[36px]">
            Let&apos;s talk
          </h2>
          <p className="mx-auto max-w-md text-base leading-relaxed text-slate-500">
            Tell us about your business and we&apos;ll get back to you within 24 hours
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">

          {/* Left column — Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-8">

            {/* Success state */}
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-teal-600" />
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  Message sent!
                </h3>
                <p className="text-slate-500">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Error banner */}
                {formState === "error" && errorMessage && (
                  <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3">
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  </div>
                )}

                {/* Full name */}
                <div>
                  <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-slate-700">
                    Full name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition-colors focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                    Email address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition-colors focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition-colors focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                    placeholder="0412 345 678"
                  />
                </div>

                {/* Business type */}
                <div>
                  <label htmlFor="businessType" className="mb-1 block text-sm font-medium text-slate-700">
                    Business type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition-colors focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    <option value="cleaning">Cleaning business</option>
                    <option value="trade">Trade</option>
                    <option value="professional">Professional services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition-colors focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                    placeholder="Tell us a bit about your business and what you need..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="mt-2 w-full rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? "Sending..." : "Send message"}
                </button>

              </form>
            )}
          </div>

          {/* Right column — Contact details */}
          <div className="flex flex-col justify-start">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-600" />
                <span className="text-sm text-slate-700">team@ajaxwebstudio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-teal-600" />
                <span className="text-sm text-slate-700">Campbelltown, NSW</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-600" />
                <span className="text-sm text-slate-700">Response within 24 hours</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              Prefer to call? Leave your number and we&apos;ll call you.
            </p>

            <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-6">
              <Sparkles className="mb-3 h-5 w-5 text-teal-600" />
              <p className="text-sm leading-relaxed text-slate-600">
                We&apos;re a local Campbelltown studio. When you reach out,
                you&apos;re talking to Alfy directly — no account managers, no outsourcing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}