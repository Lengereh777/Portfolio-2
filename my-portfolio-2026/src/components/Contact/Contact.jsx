import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        alert('Thank you for your message! I will get back to you soon.');
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Contact Me</h2>
                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.infoTitle}>Get In Touch</h3>
                        <p className={styles.infoText}>
                            I'm always open to new opportunities and exciting projects.
                            Feel free to reach out if you have any questions or just want to say hello!
                        </p>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>📧</div>
                                <div className={styles.contactItemContent}>
                                    <span className={styles.contactLabel}>Email</span>
                                    <a href="mailto:your@email.com" className={styles.contactValue}>
                                        your@email.com
                                    </a>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>🐙</div>
                                <div className={styles.contactItemContent}>
                                    <span className={styles.contactLabel}>GitHub</span>
                                    <a href="https://github.com/yourusername" className={styles.contactValue}>
                                        github.com/yourusername
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.formInput}
                                required
                                placeholder="Your name"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.formInput}
                                required
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.formLabel}>
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={styles.formInput}
                                required
                                placeholder="Subject of your message"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.formTextarea}
                                required
                                rows={6}
                                placeholder="Your message..."
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
