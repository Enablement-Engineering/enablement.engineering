import { useState, type FormEvent } from 'react';
import { AutogrowTextarea } from '@/components/ui/AutogrowTextarea';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xovqvzpq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or email us directly.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="card-base p-8 off-kilter-0-5">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-ink">Message Sent!</h2>
          <p className="text-neutral-600">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-accent-600 hover:text-accent-700 font-medium underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-base p-8 off-kilter-0-5">
      <h2 className="text-2xl font-bold text-ink mb-6">Let's Talk</h2>

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-red-800 font-medium">Unable to send message</p>
              <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
              <p className="text-red-600 text-sm mt-2">
                You can also email us directly at{' '}
                <a href="mailto:hello@enablement.engineering" className="underline">
                  hello@enablement.engineering
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

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
            <option value="technology-solutions">Technology Solutions</option>
            <option value="process-optimization">Process Optimization</option>
            <option value="knowledge-systems">Knowledge Systems</option>
            <option value="full-enablement">Comprehensive Enablement</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
          <AutogrowTextarea
            id="message"
            name="message"
            required
            className={errors.message ? 'border-red-500 focus:ring-red-500' : ''}
            placeholder="Tell us about your goals, challenges, or what you're looking to enable in your organization..."
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-400 text-secondary-900 hover:bg-primary-300 h-12 px-8"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
