import { siteConfig } from '@/config/site';

export function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: siteConfig.calendlyUrl });
  }
}

export function initCalendlyTracking() {
  window.addEventListener('message', (e) => {
    if (e.data && e.data.event === 'calendly.event_scheduled') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'calendly_event_scheduled' });
    }
  });
}
