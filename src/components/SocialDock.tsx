import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

// Authentic SVG brand icons for Facebook, LinkedIn, Telegram, WhatsApp, and Calendly
export const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const TelegramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.932z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const CalendlyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/>
  </svg>
);

interface SocialDockProps {
  variant?: 'hero' | 'contact' | 'footer' | 'navbar';
  showLabels?: boolean;
}

export const SocialDock: React.FC<SocialDockProps> = ({ variant = 'contact' }) => {
  const channels = [
    {
      name: 'WhatsApp',
      title: 'Chat on WhatsApp',
      href: PERSONAL_INFO.whatsappLink,
      icon: <WhatsAppIcon className="w-5 h-5" />,
      colorClass: 'text-emerald-400 border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/15 hover:shadow-emerald-500/25',
    },
    {
      name: 'LinkedIn',
      title: 'Connect on LinkedIn',
      href: PERSONAL_INFO.linkedinLink,
      icon: <LinkedInIcon className="w-5 h-5" />,
      colorClass: 'text-[#0A66C2] border-[#0A66C2]/30 hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 hover:shadow-[#0A66C2]/25',
    },
    {
      name: 'Facebook',
      title: 'Follow on Facebook',
      href: PERSONAL_INFO.facebookLink,
      icon: <FacebookIcon className="w-5 h-5" />,
      colorClass: 'text-[#1877F2] border-[#1877F2]/30 hover:border-[#1877F2] hover:bg-[#1877F2]/15 hover:shadow-[#1877F2]/25',
    },
    {
      name: 'Telegram',
      title: 'Message on Telegram',
      href: PERSONAL_INFO.telegramLink,
      icon: <TelegramIcon className="w-5 h-5" />,
      colorClass: 'text-[#229ED9] border-[#229ED9]/30 hover:border-[#229ED9] hover:bg-[#229ED9]/15 hover:shadow-[#229ED9]/25',
    },
    {
      name: 'Calendly',
      title: 'Book 30-Min Strategy Call on Calendly',
      href: PERSONAL_INFO.calendlyLink,
      icon: <CalendlyIcon className="w-5 h-5" />,
      colorClass: 'text-cyan-400 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/15 hover:shadow-cyan-500/25',
    },
  ];

  if (variant === 'hero') {
    return (
      <div className="flex items-center gap-2.5 pt-2">
        {channels.map((ch) => (
          <a
            key={ch.name}
            href={ch.href}
            target="_blank"
            rel="noreferrer"
            aria-label={ch.title}
            title={ch.title}
            className={`group relative p-2.5 rounded-xl bg-slate-900/90 border transition-all duration-300 hover:scale-115 active:scale-95 hover:shadow-lg ${ch.colorClass}`}
          >
            {ch.icon}
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-3">
        {channels.map((ch) => (
          <a
            key={ch.name}
            href={ch.href}
            target="_blank"
            rel="noreferrer"
            aria-label={ch.title}
            title={ch.title}
            className={`group p-2 rounded-lg bg-slate-900 border transition-all duration-300 hover:scale-115 active:scale-95 hover:shadow-md ${ch.colorClass}`}
          >
            {ch.icon}
          </a>
        ))}
      </div>
    );
  }

  // Default variant for Contact Section: Interactive animated grid with click action and zero visible usernames
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {channels.map((ch) => (
        <a
          key={ch.name}
          href={ch.href}
          target="_blank"
          rel="noreferrer"
          aria-label={ch.title}
          title={ch.title}
          className={`flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg group ${ch.colorClass}`}
        >
          <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
            {ch.icon}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
              {ch.name}
            </span>
            <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors truncate">
              Direct Link
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};
