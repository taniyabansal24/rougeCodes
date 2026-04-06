import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    acceptedTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        acceptedTerms: false,
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen section">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-20 pb-12 max-w-3xl">
        <div className="text-center">
          <span className="text-body-sm text-accent mb-3 inline-block tracking-wide uppercase font-medium">
            Contact Us
          </span>
          <h1 className="section-heading text-high mb-6">Get in Touch</h1>
          <p className="text-body text-mid max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Whether you're
            building a brand from scratch or looking to elevate your visuals,
            our team is ready to help.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 pb-28 max-w-5xl">
        <div className="rounded-3xl border border-border/50 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
              <div>
                <label className="text-body-sm text-high mb-2 block">
                  First Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-page border border-border/60 rounded-3xl focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/30 transition-all text-high text-body-sm"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="text-body-sm text-high mb-2 block">
                  Last Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-page border border-border/60 rounded-3xl focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/30 transition-all text-high text-body-sm"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
              <div>
                <label className="text-body-sm text-high mb-2 block">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-page border border-border/60 rounded-3xl focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/30 transition-all text-high text-body-sm"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label className="text-body-sm text-high mb-2 block">
                  Subject <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-page border border-border/60 rounded-3xl focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/30 transition-all text-high text-body-sm"
                  placeholder="Project Inquiry"
                />
              </div>
            </div>

            <div>
              <label className="text-body-sm text-high mb-2 block">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-page border border-border/60 rounded-3xl focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/30 transition-all text-high text-body-sm resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                required
                className="w-5 h-5 rounded border-border/60 bg-page text-accent focus:ring-1 focus:ring-accent/30 focus:ring-offset-0 cursor-pointer"
              />
              <label className="text-body-sm text-mid cursor-pointer">
                I accept the{" "}
                <a href="#" className="text-accent hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>

            {/* Styled Send Message Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full px-8 py-4 rounded-4xl btn-text transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-1 bg-accent text-white disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{ boxShadow: "0 10px 25px -5px rgba(139, 168, 136, 0.4)" }}
            >
              <span className="absolute inset-0 w-full h-full transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </>
                )}
              </span>
            </button>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl animate-fadeIn">
                <p className="text-body-sm text-green-700 text-center">
                  ✓ Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-fadeIn">
                <p className="text-body-sm text-red-700 text-center">
                  ✗ Something went wrong. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className=" p-8 rounded-2xl border border-border/40 text-center">
            <div className="">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent"
                >
                  <path
                    d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-2">
              <h3
                className="text-lg font-medium text-high"
                style={{ fontFamily: "'Phudu', sans-serif" }}
              >
                Email
              </h3>
            </div>
            <p className="text-sm text-mid leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to
              drop an email anytime.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-sm text-accent hover:underline transition-all"
              >
                contact@rougecodes.com
              </a>
            </div>
          </div>

          <div className=" p-8 rounded-2xl border border-border/40 text-center">
            <div className="">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent"
                >
                  <path
                    d="M17.707 12.293C17.6142 12.2 17.504 12.1263 17.3827 12.076C17.2614 12.0257 17.1313 11.9998 17 11.9998C16.8687 11.9998 16.7386 12.0257 16.6173 12.076C16.496 12.1263 16.3858 12.2 16.293 12.293L14.699 13.887C13.96 13.667 12.581 13.167 11.707 12.293C10.833 11.419 10.333 10.04 10.113 9.30096L11.707 7.70696C11.7999 7.61417 11.8737 7.50397 11.924 7.38265C11.9743 7.26134 12.0002 7.13129 12.0002 6.99996C12.0002 6.86862 11.9743 6.73858 11.924 6.61726C11.8737 6.49595 11.7999 6.38575 11.707 6.29296L7.707 2.29296C7.61421 2.20001 7.50401 2.12627 7.38269 2.07596C7.26138 2.02565 7.13133 1.99976 7 1.99976C6.86866 1.99976 6.73862 2.02565 6.6173 2.07596C6.49599 2.12627 6.38579 2.20001 6.293 2.29296L3.581 5.00496C3.201 5.38496 2.987 5.90696 2.995 6.43996C3.018 7.86396 3.395 12.81 7.293 16.708C11.191 20.606 16.137 20.982 17.562 21.006H17.59C18.118 21.006 18.617 20.798 18.995 20.42L21.707 17.708C21.7999 17.6152 21.8737 17.505 21.924 17.3837C21.9743 17.2623 22.0002 17.1323 22.0002 17.001C22.0002 16.8696 21.9743 16.7396 21.924 16.6183C21.8737 16.4969 21.7999 16.3867 21.707 16.294L17.707 12.293ZM17.58 19.005C16.332 18.984 12.062 18.649 8.707 15.293C5.341 11.927 5.015 7.64196 4.995 6.41896L7 4.41396L9.586 6.99996L8.293 8.29296C8.17546 8.41041 8.08904 8.55529 8.04155 8.71453C7.99406 8.87376 7.987 9.04231 8.021 9.20496C8.045 9.31996 8.632 12.047 10.292 13.707C11.952 15.367 14.679 15.954 14.794 15.978C14.9565 16.0129 15.1253 16.0064 15.2846 15.9591C15.444 15.9117 15.5889 15.825 15.706 15.707L17 14.414L19.586 17L17.58 19.005V19.005Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-2">
              <h3
                className="text-lg font-medium text-high"
                style={{ fontFamily: "'Phudu', sans-serif" }}
              >
                Phone
              </h3>
            </div>
            <p className="text-sm text-mid leading-relaxed">
              Prefer a quick conversation? Give us a call and we’ll be happy to
              assist you.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-sm text-accent hover:underline transition-all"
              >
                +91 9217327326
              </a>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border/40 text-center">
            <div className="">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent"
                >
                  <path
                    d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.42 21.814C11.5892 21.9349 11.792 21.9998 12 21.9998C12.208 21.9998 12.4107 21.9349 12.58 21.814C12.884 21.599 20.029 16.44 20 10C20 5.589 16.411 2 12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.116 21.599 11.42 21.814ZM12 4C15.309 4 18 6.691 18 10.005C18.021 14.443 13.612 18.428 12 19.735C10.389 18.427 5.979 14.441 6 10C6 6.691 8.691 4 12 4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-2">
              <h3
                className="text-lg font-medium text-high"
                style={{ fontFamily: "'Phudu', sans-serif" }}
              >
                Office
              </h3>
            </div>
            <p className="text-sm text-mid leading-relaxed">
              Visit our office for a detailed discussion. and a more personalized
              experience.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-sm text-accent hover:underline transition-all line-clamp-2"
              >
                C-5, Milap Nagar, Uttam Nagar,
                New Delhi - 110059
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
