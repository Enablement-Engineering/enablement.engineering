import { useState, type FormEvent } from 'react';
import { AutogrowTextarea } from '@/components/ui/AutogrowTextarea';

const EMAIL = 'hello@enablement.engineering';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters)';
    }

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters)';
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Build mailto link
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const project = formData.get('project') as string;
    const message = formData.get('message') as string;

    const subject = `Contact from ${name}${company ? ` (${company})` : ''}`;

    const body = [
      `From: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      project && `Interest: ${project}`,
      '',
      'Message:',
      message,
    ].filter(Boolean).join('\n');

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="card-base p-8 off-kilter-0-5">
      <h2 className="text-2xl font-bold text-ink mb-2">Let's Talk</h2>
      <p className="text-neutral-600 mb-6">
        Fill out the form below and your email client will open with your message ready to send.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`input-base ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Your name"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`input-base ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="you@company.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-ink">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            className="input-base"
            placeholder="Your organization (optional)"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="project" className="text-sm font-medium text-ink">Project Type</label>
          <select id="project" name="project" className="input-base">
            <option value="">Select an area of interest</option>
            <option value="Agent Discovery Sprint">Agent Discovery Sprint</option>
            <option value="Custom Agent Build">Custom Agent Build</option>
            <option value="Agentic Infrastructure Partnership">Agentic Infrastructure Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
          <AutogrowTextarea
            id="message"
            name="message"
            required
            className={errors.message ? 'border-red-500 focus:ring-red-500' : ''}
            placeholder="Tell us about your goals, challenges, or what you're looking to enable..."
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 bg-primary-400 text-secondary-900 hover:bg-primary-300 h-12 px-8"
        >
          Open in Email Client
        </button>
      </form>

      <p className="text-sm text-neutral-500 mt-4 text-center">
        Or email directly at{' '}
        <a href={`mailto:${EMAIL}`} className="text-link-600 hover:text-link-700 underline">
          {EMAIL}
        </a>
      </p>
    </div>
  );
}
