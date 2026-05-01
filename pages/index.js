import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Roper&apos;s Concrete LLC</title>
          <meta property="og:title" content="Roper's Concrete LLC" />
        </Head>
        <Navigation></Navigation>
        <section id="home" className="hero-concrete">
          <div className="hero-concrete-bg">
            <video
              src="https://videos.pexels.com/video-files/4135408/4135408-hd_1920_1080_30fps.mp4"
              loop={true}
              muted={true}
              poster="https://images.pexels.com/videos/4135408/pictures/preview-0.jpg"
              autoPlay={true}
              playsInline={true}
              className="hero-concrete-video"
            ></video>
            <div className="hero-concrete-overlay"></div>
          </div>
          <div className="hero-concrete-content">
            <div className="hero-concrete-brand">
              <img
                src="/ropers-logo.png"
                alt="Roper&apos;s Concrete LLC logo"
                className="hero-concrete-logo"
              />
              <h1 className="hero-concrete-main-title hero-title">
                ROPER&apos;S CONCRETE, LLC
              </h1>
            </div>
            <p className="hero-concrete-sub hero-subtitle">
              BUILT TO LAST. POURED WITH PRECISION. 100% DEDICATED TO CONCRETE.
            </p>
            <div className="hero-concrete-actions">
              <a href="#contact">
                <div className="btn-xl hero-concrete-btn btn btn-accent">
                  <span>REQUEST AN ESTIMATE</span>
                </div>
              </a>
              <a href="#gallery">
                <div className="btn-xl btn-outline hero-concrete-btn btn">
                  <span>VIEW OUR WORK</span>
                </div>
              </a>
            </div>
            <a href="tel:9282414694" className="hero-concrete-phone-link">
              <div className="hero-concrete-phone">
                <span className="hero-concrete-phone-icon">
                  <svg
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="hero-concrete-phone-text">
                  CALL NOW: 928-241-4694
                </span>
              </div>
            </a>
          </div>
        </section>
        <section id="services" className="expertise-grid">
          <div className="expertise-container">
            <h2 className="expertise-heading section-title">OUR EXPERTISE</h2>
            <div className="expertise-layout">
              <div className="expertise-card">
                <div className="expertise-card-image">
                  <img
                    alt="Concrete Driveways"
                    src="https://images.pexels.com/photos/33405139/pexels-photo-33405139.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">CONCRETE DRIVEWAYS</h3>
                  <p className="section-content">
                    Durable, load-bearing residential and commercial driveways
                    poured to withstand heavy daily use.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-image">
                  <img
                    alt="Pathways &amp; Sidewalks"
                    src="https://images.pexels.com/photos/37121407/pexels-photo-37121407.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">PATHWAYS &amp; SIDEWALKS</h3>
                  <p className="section-content">
                    Precision-leveled walkways designed for safety, drainage,
                    and long-lasting curb appeal.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-image">
                  <img
                    alt="Custom Slabs &amp; Forming"
                    src="https://images.pexels.com/photos/37121398/pexels-photo-37121398.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">
                    CUSTOM SLABS &amp; FORMING
                  </h3>
                  <p className="section-content">
                    Foundations, retaining walls, and specialized commercial
                    pours tailored to exact engineering specs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery-preview">
          <div className="gallery-header">
            <h2 className="gallery-title section-title">PROJECT GALLERY</h2>
          </div>
          <div className="gallery-scroller">
            <div className="gallery-item">
              <img
                alt="Commercial Slab Pour"
                src="https://images.pexels.com/photos/37121405/pexels-photo-37121405.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-caption">
                  COMMERCIAL SLAB POUR
                </span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Residential Driveway"
                src="https://images.pexels.com/photos/37121400/pexels-photo-37121400.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-caption">
                  RESIDENTIAL DRIVEWAY
                </span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Precision Leveling"
                src="https://images.pexels.com/photos/37121406/pexels-photo-37121406.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-caption">PRECISION LEVELING</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Foundation Work"
                src="https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-caption">FOUNDATION WORK</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="quote-wizard">
          <div className="quote-wizard-container">
            <div className="quote-wizard-header">
              <h2 className="section-title">GET A QUOTE</h2>
              <p className="section-content">
                Arizona&apos;s premier concrete specialists. Tell us about your
                project — one step at a time.
              </p>
            </div>
            <div className="quote-progress">
              <div className="quote-progress-step is-active" data-step-indicator="1">
                <span className="quote-progress-num">1</span>
                <span className="quote-progress-label">SERVICE</span>
              </div>
              <div className="quote-progress-bar"></div>
              <div className="quote-progress-step" data-step-indicator="2">
                <span className="quote-progress-num">2</span>
                <span className="quote-progress-label">DETAILS</span>
              </div>
              <div className="quote-progress-bar"></div>
              <div className="quote-progress-step" data-step-indicator="3">
                <span className="quote-progress-num">3</span>
                <span className="quote-progress-label">TIMELINE</span>
              </div>
            </div>
            <form
              id="quoteForm"
              action="#"
              method="POST"
              className="quote-wizard-form"
              noValidate
            >
              <div className="quote-step is-active" data-step="1">
                <span className="quote-step-label">
                  STEP 1: WHAT DO YOU NEED POURED?
                </span>
                <p className="quote-step-hint">
                  Select the service that best matches your project.
                </p>
                <div className="quote-card-grid">
                  <label className="quote-service-card">
                    <input
                      type="radio"
                      name="service"
                      value="driveway"
                      required
                    />
                    <div className="quote-service-card-inner">
                      <span className="quote-service-icon">
                        <svg
                          width="32"
                          xmlns="http://www.w3.org/2000/svg"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
                        </svg>
                      </span>
                      <span className="quote-service-title">DRIVEWAYS</span>
                      <span className="quote-service-desc">
                        Residential & commercial driveway pours
                      </span>
                    </div>
                  </label>
                  <label className="quote-service-card">
                    <input type="radio" name="service" value="pathway" />
                    <div className="quote-service-card-inner">
                      <span className="quote-service-icon">
                        <svg
                          width="32"
                          xmlns="http://www.w3.org/2000/svg"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 20l8-16 8 16M8 20l4-8 4 8" />
                        </svg>
                      </span>
                      <span className="quote-service-title">PATHWAYS</span>
                      <span className="quote-service-desc">
                        Walkways, sidewalks & patio paths
                      </span>
                    </div>
                  </label>
                  <label className="quote-service-card">
                    <input type="radio" name="service" value="custom" />
                    <div className="quote-service-card-inner">
                      <span className="quote-service-icon">
                        <svg
                          width="32"
                          xmlns="http://www.w3.org/2000/svg"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                        </svg>
                      </span>
                      <span className="quote-service-title">CUSTOM WORK</span>
                      <span className="quote-service-desc">
                        Slabs, foundations & specialty pours
                      </span>
                    </div>
                  </label>
                </div>
                <div className="quote-step-actions">
                  <span className="quote-step-spacer"></span>
                  <button
                    type="button"
                    className="btn btn-accent quote-next-btn"
                    data-next="2"
                  >
                    NEXT &nbsp;→
                  </button>
                </div>
              </div>

              <div className="quote-step" data-step="2">
                <span className="quote-step-label">
                  STEP 2: PROJECT DETAILS
                </span>
                <p className="quote-step-hint">
                  Full name is required. Provide either an email or phone
                  number — both are welcome but only one is required. Project
                  notes are optional.
                </p>
                <div className="quote-fields">
                  <div className="quote-field">
                    <label className="quote-field-label">
                      FULL NAME <span className="quote-req">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      required
                      className="quote-input"
                    />
                  </div>
                  <div className="quote-field-row">
                    <div className="quote-field">
                      <label className="quote-field-label">
                        EMAIL <span className="quote-opt">(email or phone)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="quote-input"
                      />
                    </div>
                    <div className="quote-field">
                      <label className="quote-field-label">
                        PHONE <span className="quote-opt">(email or phone)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(928) 555-0123"
                        className="quote-input"
                      />
                    </div>
                  </div>
                  <div className="quote-field">
                    <label className="quote-field-label">
                      PROJECT NOTES <span className="quote-opt">(optional)</span>
                    </label>
                    <textarea
                      name="details"
                      placeholder="Tell us about your project — sq. ft., location, finish, anything else..."
                      className="quote-input quote-textarea"
                    ></textarea>
                  </div>
                  <p className="quote-error" data-error="contact">
                    Please provide at least an email address or a phone number.
                  </p>
                </div>
                <div className="quote-step-actions">
                  <button
                    type="button"
                    className="btn btn-outline quote-back-btn"
                    data-prev="1"
                  >
                    ← &nbsp;BACK
                  </button>
                  <button
                    type="button"
                    className="btn btn-accent quote-next-btn"
                    data-next="3"
                  >
                    NEXT &nbsp;→
                  </button>
                </div>
              </div>

              <div className="quote-step" data-step="3">
                <span className="quote-step-label">STEP 3: TIMELINE</span>
                <p className="quote-step-hint">
                  When are you looking to break ground?
                </p>
                <div className="quote-timeline-grid">
                  <label className="quote-timeline-card">
                    <input type="radio" name="timeline" value="asap" required />
                    <div className="quote-timeline-card-inner">
                      <span className="quote-timeline-tag">URGENT</span>
                      <span className="quote-timeline-title">ASAP</span>
                      <span className="quote-timeline-desc">
                        Ready to start this week
                      </span>
                    </div>
                  </label>
                  <label className="quote-timeline-card">
                    <input type="radio" name="timeline" value="2-4-weeks" />
                    <div className="quote-timeline-card-inner">
                      <span className="quote-timeline-tag">SOON</span>
                      <span className="quote-timeline-title">2 – 4 WEEKS</span>
                      <span className="quote-timeline-desc">
                        Planning to start within a month
                      </span>
                    </div>
                  </label>
                  <label className="quote-timeline-card">
                    <input type="radio" name="timeline" value="1-3-months" />
                    <div className="quote-timeline-card-inner">
                      <span className="quote-timeline-tag">PLANNING</span>
                      <span className="quote-timeline-title">1 – 3 MONTHS</span>
                      <span className="quote-timeline-desc">
                        Scheduling for the next quarter
                      </span>
                    </div>
                  </label>
                  <label className="quote-timeline-card">
                    <input type="radio" name="timeline" value="just-quote" />
                    <div className="quote-timeline-card-inner">
                      <span className="quote-timeline-tag">EXPLORING</span>
                      <span className="quote-timeline-title">JUST A QUOTE</span>
                      <span className="quote-timeline-desc">
                        Pricing only, no firm timeline
                      </span>
                    </div>
                  </label>
                </div>
                <div className="quote-step-actions">
                  <button
                    type="button"
                    className="btn btn-outline quote-back-btn"
                    data-prev="2"
                  >
                    ← &nbsp;BACK
                  </button>
                  <button
                    type="submit"
                    className="btn btn-accent quote-submit-btn"
                  >
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>

              <div className="quote-step quote-success" data-step="4">
                <div className="quote-success-inner">
                  <span className="quote-success-icon">
                    <svg
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  <h3 className="quote-success-title">REQUEST RECEIVED</h3>
                  <p className="quote-success-text">
                    Thank you. We&apos;ll be in touch within 24 hours to
                    confirm details and schedule a free on-site estimate.
                  </p>
                  <a href="tel:9282414694" className="quote-success-phone">
                    Or call us now: 928-241-4694
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="process-section">
          <div className="process-container">
            <h2 className="section-title process-heading">
              POURED WITH PRECISION
            </h2>
            <div className="process-stepper">
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path>
                      <path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">01. SITE PREP</h3>
                <p className="section-content">
                  Excavation and subgrade compaction to ensure a solid
                  foundation.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle r="2" cx="17" cy="18"></circle>
                      <circle r="2" cx="7" cy="18"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">02. FORMING &amp; REBAR</h3>
                <p className="section-content">
                  Structural reinforcement engineered for maximum load capacity.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">03. POUR &amp; FINISH</h3>
                <p className="section-content">
                  Expert troweling and curing for a rock-solid, professional
                  finish.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <span className="testimonials-eyebrow">CLIENT VOICES</span>
              <h2 className="testimonials-heading section-title">
                CONCRETE TESTIMONIALS
              </h2>
              <p className="testimonials-subtitle">
                Trusted by Arizona homeowners, builders, and commercial
                operators.
              </p>
            </div>
            <div className="testimonials-grid">
              <figure className="testimonial-card">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote className="testimonial-quote">
                  Roper&apos;s Concrete handled our commercial warehouse slab
                  perfectly. On time, on budget, and the finish is flawless.
                  These guys know their concrete.
                </blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-author">MARK R.</span>
                  <span className="testimonial-role">Commercial Client</span>
                </figcaption>
              </figure>
              <figure className="testimonial-card">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote className="testimonial-quote">
                  Best driveway pour in Northern Arizona. They didn&apos;t just pour
                  mud; they engineered a path that looks incredible and handles
                  the heat without cracking.
                </blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-author">SARAH L.</span>
                  <span className="testimonial-role">Residential Owner</span>
                </figcaption>
              </figure>
              <figure className="testimonial-card">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote className="testimonial-quote">
                  Rugged, reliable, and professional. The crew was efficient
                  and the custom forming work exceeded our engineering specs.
                </blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-author">DAVID K.</span>
                  <span className="testimonial-role">Site Manager</span>
                </figcaption>
              </figure>
              <figure className="testimonial-card">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote className="testimonial-quote">
                  We&apos;ve used Roper&apos;s for three different properties.
                  Their consistency and attention to structural integrity is
                  why we keep coming back.
                </blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-author">JASON M.</span>
                  <span className="testimonial-role">Property Developer</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="location-section">
          <div className="location-container">
            <div className="location-card">
              <div className="location-content">
                <span className="location-eyebrow">SERVICE AREA</span>
                <h2 className="section-title location-title">
                  SERVING NORTHERN ARIZONA
                </h2>
                <p className="location-description">
                  Arizona&apos;s premier concrete specialists. Based in the 928,
                  we cover Flagstaff, Sedona, Prescott, Williams, and surrounding
                  communities.
                </p>
                <a href="tel:9282414694" className="location-phone-link">
                  <span className="location-phone-icon">
                    <svg
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" />
                    </svg>
                  </span>
                  <span className="location-phone">928-241-4694</span>
                </a>
                <p className="location-status">
                  Licensed, Bonded &amp; Insured
                </p>
                <a href="#contact" className="location-cta-link">
                  <div className="btn-lg location-cta btn btn-accent">
                    <span>GET A FREE ESTIMATE</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
::selection {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="ropers-logic">
(function(){
  // Reveal-on-scroll for cards
  const observerOptions = { threshold: 0.1 }
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".expertise-card, .process-step, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.5s ease-out"
    revealOnScroll.observe(el)
  })

  // Multi-step Quote Wizard
  const form = document.getElementById("quoteForm")
  if (!form) return
  const steps = form.querySelectorAll(".quote-step")
  const indicators = document.querySelectorAll(".quote-progress-step")
  const bars = document.querySelectorAll(".quote-progress-bar")

  function showStep(stepNum) {
    steps.forEach((s) => s.classList.remove("is-active"))
    const target = form.querySelector('.quote-step[data-step="' + stepNum + '"]')
    if (target) target.classList.add("is-active")

    indicators.forEach((ind) => {
      const n = parseInt(ind.getAttribute("data-step-indicator"), 10)
      ind.classList.remove("is-active", "is-complete")
      if (n < stepNum) ind.classList.add("is-complete")
      if (n === stepNum) ind.classList.add("is-active")
    })
    bars.forEach((bar, idx) => {
      bar.classList.remove("is-filled")
      if (idx + 1 < stepNum) bar.classList.add("is-filled")
    })

    // scroll to top of wizard
    const wizard = document.querySelector(".quote-wizard-container")
    if (wizard) {
      const top = wizard.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({ top: top, behavior: "smooth" })
    }
  }

  function validateStep(stepNum) {
    if (stepNum === 1) {
      const service = form.querySelector('input[name="service"]:checked')
      if (!service) {
        flashError("Please select a service to continue.")
        return false
      }
      return true
    }
    if (stepNum === 2) {
      const name = form.querySelector('input[name="fullName"]')
      const email = form.querySelector('input[name="email"]')
      const phone = form.querySelector('input[name="phone"]')
      const errEl = form.querySelector('[data-error="contact"]')
      if (errEl) errEl.classList.remove("is-visible")
      ;[name, email, phone].forEach((el) => el && el.classList.remove("has-error"))

      let ok = true
      if (!name.value.trim()) {
        name.classList.add("has-error")
        ok = false
      }
      const hasEmail = email.value.trim().length > 0
      const hasPhone = phone.value.trim().length > 0
      if (!hasEmail && !hasPhone) {
        email.classList.add("has-error")
        phone.classList.add("has-error")
        if (errEl) errEl.classList.add("is-visible")
        ok = false
      }
      if (!ok) flashError("Please complete the required fields.")
      return ok
    }
    if (stepNum === 3) {
      const tl = form.querySelector('input[name="timeline"]:checked')
      if (!tl) {
        flashError("Please choose a timeline.")
        return false
      }
      return true
    }
    return true
  }

  function flashError(msg) {
    console.warn(msg)
  }

  form.querySelectorAll(".quote-next-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = parseInt(btn.getAttribute("data-next"), 10)
      const current = next - 1
      if (validateStep(current)) showStep(next)
    })
  })

  form.querySelectorAll(".quote-back-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prev = parseInt(btn.getAttribute("data-prev"), 10)
      showStep(prev)
    })
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (validateStep(3)) {
      showStep(4)
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
