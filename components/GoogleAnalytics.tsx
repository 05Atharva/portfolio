export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
  if (!measurementId) return null
  if (!/^G-[A-Z0-9]+$/.test(measurementId)) {
    throw new Error('NEXT_PUBLIC_GA_MEASUREMENT_ID must be a GA4 measurement ID starting with G-.')
  }

  const init = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${measurementId}');

    document.addEventListener('click', function (event) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[data-analytics-event]');
      if (!link) return;

      gtag('event', link.dataset.analyticsEvent);
    });
  `

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: init }} />
      <script async src={'https://www.googletagmanager.com/gtag/js?id=' + measurementId} />
    </>
  )
}
