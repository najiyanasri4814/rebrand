'use client';

import { FormEvent, useState } from 'react';

export function Newsletter() {
  const [status, setStatus] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); const email = String(data.get('email') ?? ''); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus('Please enter a valid email address.'); return; } setStatus('Thank you — you’re on the list.'); event.currentTarget.reset(); }
  return <section className="newsletter" aria-labelledby="newsletter-title"><div className="newsletter-copy"><span className="eyebrow">A NOTE FROM US</span><h2 id="newsletter-title">SUBSCRIBE THE<br/>KALYAN NEWSLETTER</h2><p>New collections, thoughtful stories and a little sparkle, delivered to your inbox.</p></div><form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="country">Country</label><select id="country" name="country" defaultValue="India"><option>India</option><option>UAE</option><option>Qatar</option><option>Oman</option><option>Kuwait</option></select><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" name="email" placeholder="Your email address" required/><button className="button button-gold" type="submit">SUBSCRIBE <span>↗</span></button><p className="form-status" aria-live="polite">{status}</p></form></section>;
}

export function FeedbackForm() {
  const [status, setStatus] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setStatus('Thank you. Your feedback has been received.'); event.currentTarget.reset(); }
  return <form className="feedback-form" onSubmit={submit}><label>Your enquiry<select required defaultValue=""><option value="" disabled>Select a feedback type</option><option>Store Related Complaints</option><option>Product Related Complaints</option><option>General Queries</option><option>Other Enquiries</option></select></label><label>Your name<input required name="name" placeholder="Full name"/></label><label>Email address<input required name="email" type="email" placeholder="you@example.com"/></label><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us a little more"/></label><button className="button button-wine">SEND FEEDBACK <span>↗</span></button><p aria-live="polite" className="form-status">{status}</p></form>;
}
