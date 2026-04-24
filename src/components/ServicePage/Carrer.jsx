import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      level: "Senior",
      description:
        "We're looking for an experienced Frontend Developer to join our team. You'll be responsible for building beautiful, performant web applications using React, Tailwind CSS, and modern frontend technologies.",
      requirements: [
        "5+ years of experience with React and modern JavaScript",
        "Strong understanding of responsive design and Tailwind CSS",
        "Experience with state management (Redux, Zustand, or similar)",
        "Excellent problem-solving skills and attention to detail",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Remote-first culture",
        "Health, dental, and vision insurance",
        "Professional development budget",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      level: "Mid-level",
      description:
        "Join our design team to create exceptional user experiences. You'll work closely with product managers and developers to design intuitive interfaces that users love.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems and prototyping",
      ],
      benefits: [
        "Competitive salary",
        "Hybrid work model",
        "Creative work environment",
        "Learning stipend",
      ],
    },
    {
      id: 3,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      level: "Senior",
      description:
        "We need a talented Backend Engineer to build scalable APIs and microservices. You'll work with Node.js, Python, and cloud technologies to power our applications.",
      requirements: [
        "5+ years of backend development experience",
        "Strong experience with Node.js or Python",
        "Knowledge of databases (PostgreSQL, MongoDB)",
        "Experience with AWS or similar cloud platforms",
      ],
      benefits: [
        "Competitive salary and equity",
        "Fully remote position",
        "Home office stipend",
        "Annual retreats",
      ],
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Mid-level",
      description:
        "Lead product development from ideation to launch. You'll work with cross-functional teams to define product strategy and deliver features that solve real user problems.",
      requirements: [
        "4+ years of product management experience",
        "Experience with agile methodologies",
        "Strong analytical and communication skills",
        "Technical background or understanding",
      ],
      benefits: [
        "Competitive compensation",
        "Flexible work arrangements",
        "Wellness benefits",
        "Career growth opportunities",
      ],
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      level: "Senior",
      description:
        "Help us build and maintain our cloud infrastructure. You'll work on CI/CD pipelines, monitoring, and scaling our applications across multiple environments.",
      requirements: [
        "4+ years of DevOps experience",
        "Experience with Docker and Kubernetes",
        "Knowledge of AWS/GCP/Azure",
        "Experience with infrastructure as code (Terraform)",
      ],
      benefits: [
        "Competitive salary",
        "Remote-first culture",
        "Continuous learning opportunities",
        "Equipment stipend",
      ],
    },
  ];

  const filteredJobs = filter === "all" 
    ? jobs 
    : jobs.filter(job => job.department.toLowerCase() === filter.toLowerCase());

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

  const careerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Updated: bottom to top fade animation
  const jobCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.2 }
    },
  };

  const filterVariants = {
    inactive: { scale: 1, backgroundColor: "#ffffff", color: "#666666" },
    active: { scale: 1, backgroundColor: "#8ba888", color: "#ffffff" },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="bg-page">
      {/* Header Section */}
      <motion.div
        className="container mx-auto px-4 "
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.span
            className="badge text-accent mb-3 inline-block tracking-wide"
            variants={headerItemVariants}
          >
            Join Our Team
          </motion.span>
          <motion.h1
            className="section-heading text-high mb-6"
            variants={headerItemVariants}
          >
            Build the future with us
          </motion.h1>
          <motion.p
            className="subheading text-mid max-w-2xl mx-auto"
            variants={headerItemVariants}
          >
            We're looking for passionate individuals to join our mission of creating
            exceptional digital experiences. Let's build something great together.
          </motion.p>
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="container mx-auto px-4 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {["all", "engineering", "design", "product"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === category
                  ? "bg-accent text-white"
                  : "bg-surface text-mid hover:border-accent border border-accent-light"
              }`}
              variants={filterVariants}
              animate={filter === category ? "active" : "inactive"}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Job Listings - with bottom to top fade animation */}
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={careerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              className="mb-4 border border-accent-light rounded-2xl hover:border-accent transition-all duration-300"
              variants={jobCardVariants}
            >
              <div
                className="bg-surface rounded-2xl p-6 md:p-8 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="card-title text-high text-2xl md:text-3xl mb-2 transition-colors duration-300 hover:text-accent">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-sm text-accent font-medium">
                        {job.department}
                      </span>
                      <span className="text-sm text-mid">•</span>
                      <span className="text-sm text-mid">{job.location}</span>
                      <span className="text-sm text-mid">•</span>
                      <span className="text-sm text-mid">{job.type}</span>
                      <span className="text-sm text-mid">•</span>
                      <span className="text-sm text-mid">{job.level}</span>
                    </div>
                    <p className="text-body text-mid line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-body text-mid">No positions found in this category.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
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
            Don't see the perfect role? We're always looking for great talent.
          </motion.p>

          <a href="/contact" className="inline-block group">
            <div className="flex items-center space-x-4 bg-accent text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-300 shadow-xl">
              <span className="btn-text relative overflow-hidden h-6">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  Send Your Resume
                </span>
                <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:top-0">
                  Send Your Resume
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

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
            />
            <motion.div
              className="relative bg-surface rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="sticky top-0 bg-surface border-b border-accent-light p-6 flex justify-between items-start">
                <div>
                  <h2 className="card-title text-high text-2xl md:text-3xl">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-sm text-accent font-medium">
                      {selectedJob.department}
                    </span>
                    <span className="text-sm text-mid">•</span>
                    <span className="text-sm text-mid">{selectedJob.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-mid hover:text-high transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-high font-semibold mb-2 text-lg">About the Role</h3>
                  <p className="text-body text-mid">{selectedJob.description}</p>
                </div>
                <div>
                  <h3 className="text-high font-semibold mb-2 text-lg">Requirements</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="text-body text-mid">{req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-high font-semibold mb-2 text-lg">What We Offer</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedJob.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-body text-mid">{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <a href="/contact" className="inline-block w-full group">
                    <div className="flex items-center justify-center space-x-4 bg-accent text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-300 shadow-xl">
                      <span className="btn-text relative overflow-hidden h-6">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                          Apply Now
                        </span>
                        <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:top-0">
                          Apply Now
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
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;