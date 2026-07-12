import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";

import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import SocialLinks from "../SocialLinks/SocialLinks";
import { contactInfo } from "../../utils/data";
import useInView from "../../utils/useInView";
import styles from "./Contact.module.css";

const initial = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const ref = useInView();

  useEffect(() => {
    if (!toast) return undefined;

    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const showToast = (type, title, detail) => {
    setToast({ type, title, detail });
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showToast(
        "error",
        "Almost there",
        "Please fill in every field before sending."
      );
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      showToast(
        "success",
        "Message sent",
        "Thanks for reaching out — I’ll get back to you soon."
      );
      setForm(initial);
    } catch (error) {
      console.error(error);
      showToast(
        "error",
        "Couldn’t send",
        "Something went wrong. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something exceptional."
          description="Open to thoughtful collaborations, backend systems, and full-stack product work."
        />

        <div ref={ref} className={`reveal ${styles.layout}`}>
          <div className={styles.info}>
            <h3>Direct channels</h3>

            <a href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>

            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              {contactInfo.phone}
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/balsangram
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>

            <SocialLinks className={styles.social} />
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@email.com"
              />
            </label>

            <label>
              Message
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project..."
              />
            </label>

            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      {toast &&
        createPortal(
          <div
            className={`${styles.toast} ${
              toast.type === "success" ? styles.toastSuccess : styles.toastError
            }`}
            role="status"
            aria-live="polite"
          >
            <span className={styles.toastMark} aria-hidden="true">
              {toast.type === "success" ? "✓" : "!"}
            </span>
            <div className={styles.toastCopy}>
              <strong>{toast.title}</strong>
              <p>{toast.detail}</p>
            </div>
            <button
              type="button"
              className={styles.toastClose}
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}
