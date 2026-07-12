import { useState } from "react";
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
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const ref = useInView();

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
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: contactInfo.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");
      setForm(initial);
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
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

            {status && (
              <p className={styles.status}>{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}