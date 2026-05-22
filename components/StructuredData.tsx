export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Aurora Dental",
    description:
      "Стоматологическая клиника премиум-класса в Алматы. Имплантация, виниры, Invisalign, детская стоматология.",
    url: "https://aurora-dental.kz",
    telephone: "+7-727-258-30-00",
    priceRange: "₸₸₸",
    image: "https://aurora-dental.kz/og.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Розыбакиева 247А, БЦ «Алтын-Орда», 3 этаж",
      addressLocality: "Алматы",
      addressRegion: "Бостандыкский район",
      postalCode: "050060",
      addressCountry: "KZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.213,
      longitude: 76.913,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.98",
      reviewCount: "1240",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
