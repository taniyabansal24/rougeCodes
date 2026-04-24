import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const buttonRef = useRef(null);

  const faqs = [
    {
      question: "What services does Lumenis offer?",
      answer:
        "Lumenis provides a comprehensive range of digital solutions including web development, mobile applications, UI/UX design, and cloud consulting. Our team specializes in creating scalable, high-performance products tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex mobile app could take 3-6 months. We'll work with you to establish clear milestones and delivery dates during the discovery phase.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Absolutely! We offer maintenance and support packages to ensure your product runs smoothly. This includes bug fixes, security updates, performance monitoring, and feature enhancements as your business grows.",
    },
    {
      question: "What is your design and development process?",
      answer:
        "Our process follows four key phases: Discovery (understanding your goals), Design (creating wireframes and prototypes), Development (building and testing), and Deployment (launch and support). We prioritize regular communication and feedback loops at every stage.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const faqContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        opacity: { duration: 0.3 },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        opacity: { duration: 0.2 },
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="bg-page">
      {/* Header Section with Animation */}
      <motion.div
        className="container mx-auto px-4"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.span
            className="badge text-accent mb-3 inline-block tracking-wide"
            variants={headerItemVariants}
          >
            What We Do
          </motion.span>
          <motion.h1
            className="section-heading text-high mb-6"
            variants={headerItemVariants}
          >
            Frequently asked questions
          </motion.h1>
          <motion.p
            className="subheading text-mid max-w-2xl mx-auto"
            variants={headerItemVariants}
          >
            Working with the most talented team in the world here at Lumenis for
            over 10 years now, I couldn't be more grateful.
          </motion.p>
        </div>
      </motion.div>

      {/* FAQ Accordion Section with Stagger Animation */}
      <div className="container mx-auto px-4 ">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={faqContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-accent-light last:border-b-0"
              variants={faqItemVariants}
              layout
            >
              <motion.button
                className="w-full py-5 md:py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                animate={openIndex === index ? "open" : "closed"}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <motion.span
                  className="card-title text-high text-xl md:text-2xl font-medium pr-4 transition-colors duration-300 group-hover:text-accent"
                  animate={{
                    color: openIndex === index ? "#8ba888" : "#1a1a1a",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {faq.question}
                </motion.span>
                <motion.div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-surface border flex items-center justify-center transition-colors duration-300 ${
                    openIndex === index
                      ? "bg-accent border-accent"
                      : "border-accent-light group-hover:border-accent"
                  }`}
                  transition={{ duration: 0.2 }}
                >
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    variants={iconVariants}
                    animate={openIndex === index ? "open" : "closed"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                      stroke: openIndex === index ? "#ffffff" : "#8ba888",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="pb-5 md:pb-6 pr-8">
                      <motion.p
                        className="text-body text-mid"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA with EXACT hover animation from your example */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            className="text-body text-mid mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Still have questions? We're here to help.
          </motion.p>

          {/* Button with exact original hover animation */}
          <a ref={buttonRef} href="/contact" className="inline-block group">
            <div className="flex items-center space-x-4 bg-accent text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-300 shadow-xl">
              <span className="btn-text relative overflow-hidden h-6">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  Get in Touch
                </span>
                <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:top-0">
                  Get in Touch
                </span>
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <div className="relative w-5 h-5">
                  <svg
                    className="absolute top-0 left-0 transition-transform duration-300 group-hover:-translate-x-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <svg
                    className="absolute top-0 left-full transition-transform duration-300 group-hover:left-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;



