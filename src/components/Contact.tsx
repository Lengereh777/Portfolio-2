import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        {/* Section Header */}
        <div className="section-header fade-in-up">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together to make it a reality
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info fade-in-left">
            <div className="contact-intro">
              <h2>Let's Connect</h2>
              <p>
                I'm always interested in new opportunities and exciting projects. Whether you have a
                question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-item-content">
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${CONTACT_INFO.email}`}>
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-item-content">
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-content">
                  <h3>Location</h3>
                  <p>{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a
                href={CONTACT_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container fade-in-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitSuccess ? (
                <div className="form-success">
                  <CheckCircle size={48} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for your message. I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <div className="form-error">
                        <AlertCircle size={16} />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <div className="form-error">
                        <AlertCircle size={16} />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Project Inquiry"
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <div className="form-error">
                        <AlertCircle size={16} />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Tell me about your project..."
                      rows={4}
                      disabled={isSubmitting}
                    ></textarea>
                    {errors.message && (
                      <div className="form-error">
                        <AlertCircle size={16} />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };