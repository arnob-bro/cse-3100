import { useEffect, useState } from 'react';

export default function ContactUs() {
  const [cats, setCats] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <section className="mt-5 contact-us">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas luc
        </p>

        <form className="form">
          <label>Name:</label>
          <input type="text" name="name" id="contact-us-form" style={{ borderRadius: 10 }} />
          <label>Phone:</label>
          <input type="tel" name="number" id="contact-us-form" style={{ borderRadius: 10 }} />
          <label>Email:</label>
          <input type="email" name="email" id="contact-us-form" style={{ borderRadius: 10 }} />
          <button type="submit" style={{ borderRadius: 10 }}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
