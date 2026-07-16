'use client';

import React, { useState } from 'react';
import Heading from './ui/Heading';
import Card from './ui/Card';
import Button from './ui/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolio';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const contactDetails = [
    {
      icon: <Mail className="w-4 h-4 text-blue-500" />,
      label: 'Email Me',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-4 h-4 text-amber-500" />,
      label: 'Phone Number',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: <MapPin className="w-4 h-4 text-cyan-500" />,
      label: 'Location',
      value: personalInfo.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.address)}`,
    },
  ];

  // Validate form inputs
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (formData.phone.trim() && !/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Invalid phone number format';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSubmitError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        // Send email using EmailJS API
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.phone,
            subject: formData.subject || 'Portfolio Inquiry',
            message: formData.message,
          },
          publicKey
        );
      } else {
        // Simulate sending for review/preview
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form submission simulated:', formData);
      }

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#a855f7', '#06b6d4'],
      });
    } catch (err) {
      const error = err as { text?: string };
      setSubmitError(error?.text || 'Something went wrong. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 py-12 md:py-24 w-full scroll-mt-24">
      <Card className="w-full max-w-6xl min-h-[480px] p-8 md:p-12 text-center bg-card-bg/25 dark:bg-card-bg/15 flex flex-col justify-center items-center gap-8" animateHover={false}>
        <Heading
          title="Get In Touch"
          subtitle="Contact"
          description="Have a question or looking to build something together? Send me a message, and I'll get back to you shortly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left Side: Contact Information Cards (centered vertically and horizontally in frame) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center text-center space-y-5 w-full h-full my-auto">
            <h3 className="text-lg font-extrabold text-foreground tracking-wide">
              Contact Information
            </h3>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs text-center">
              Feel free to contact me via email or phone. I am generally responsive to queries within 24 hours.
            </p>

            <div className="flex flex-col gap-3.5 w-full max-w-sm mx-auto">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.label === 'Location' ? '_blank' : undefined}
                  rel={detail.label === 'Location' ? 'noopener noreferrer' : undefined}
                  className="block hover:scale-[1.01] transition-transform duration-200 w-full"
                >
                  <Card className="flex flex-col items-center justify-center text-center p-4 bg-slate-200/20 dark:bg-slate-800/10 w-full" animateHover={false}>
                    <div className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 flex-shrink-0 mb-2 flex items-center justify-center w-8 h-8">
                      {detail.icon}
                    </div>
                    <div className="w-full text-center">
                      <span className="text-[8px] uppercase font-extrabold tracking-widest text-amber-500 dark:text-[#FBBF24] block mb-1">
                        {detail.label}
                      </span>
                      <span className="text-[11px] font-bold text-foreground break-words leading-normal block">
                        {detail.value}
                      </span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Validated Contact Form (centered in frame) */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <Card className="w-full max-w-[600px] p-6 md:p-8 text-center bg-slate-950/40 dark:bg-slate-950/50 border border-card-border/80 shadow-2xl rounded-2xl mx-auto" animateHover={false}>
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                  <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-sm text-text-muted max-w-sm">
                    Thank you for reaching out, Udayagiri Rupesh will get back to you as soon as possible.
                  </p>
                  <Button variant="secondary" size="md" onClick={() => setSuccess(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 w-full">
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-card-border focus:ring-[#FBBF24]'
                        } bg-background/50 text-sm text-foreground focus:outline-none focus:ring-2`}
                      />
                      {errors.name && <p className="text-[10px] font-bold text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-card-border focus:ring-[#FBBF24]'
                        } bg-background/50 text-sm text-foreground focus:outline-none focus:ring-2`}
                      />
                      {errors.email && <p className="text-[10px] font-bold text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXXXXXXX"
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-card-border focus:ring-[#FBBF24]'
                        } bg-background/50 text-sm text-foreground focus:outline-none focus:ring-2`}
                      />
                      {errors.phone && <p className="text-[10px] font-bold text-red-500">{errors.phone}</p>}
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border focus:ring-[#FBBF24] bg-background/50 text-sm text-foreground focus:outline-none focus:ring-2"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1 text-left w-full">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                      Message Body *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-card-border focus:ring-[#FBBF24]'
                      } bg-background/50 text-sm text-foreground focus:outline-none focus:ring-2 resize-none`}
                    />
                    {errors.message && <p className="text-[10px] font-bold text-red-500">{errors.message}</p>}
                  </div>

                  {/* Submit button */}
                  <div className="w-full flex justify-center pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="submit-btn gap-2.5 flex items-center justify-center text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30"
                    >
                      {loading ? (
                        <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Card>
    </section>
  );
}
