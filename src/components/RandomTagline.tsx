import { useState } from 'react';

interface TaglineConfig {
  text: string;
  ctaText: string;
  ctaHref: string;
}

const taglines: TaglineConfig[] = [
  {
    text: 'AI systems that extend human capability.',
    ctaText: 'Our Approach',
    ctaHref: '/approach',
  },
  {
    text: 'You are more capable than you know.',
    ctaText: "Let's find out",
    ctaHref: '/contact',
  },
];

export function RandomTagline() {
  // Pick a random tagline on initial render
  const [current] = useState(
    () => taglines[Math.floor(Math.random() * taglines.length)]
  );

  return (
    <>
      <div className="max-w-4xl mt-8 lg:mt-12">
        <h1 className="text-4xl lg:text-6xl font-bold text-ink leading-tight">
          {current.text}
        </h1>
      </div>
      <div className="mt-6 lg:mt-8">
        <a
          href={current.ctaHref}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent-500 text-secondary-900 hover:bg-accent-600 h-12 px-10 no-underline"
        >
          {current.ctaText}
        </a>
      </div>
    </>
  );
}
