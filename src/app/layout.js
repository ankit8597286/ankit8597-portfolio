import "./globals.css";

export const metadata = {

  title: "Ankit Kumar | Portfolio",

  description:
    "Modern portfolio website of Ankit Kumar built using Next.js, React and Tailwind CSS.",

  keywords: [
    "Ankit Kumar",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Web Developer",
    "Portfolio Website",
    "JavaScript Developer",
    "BCA Student",
    "Software Developer",
  ],

  authors: [
    {
      name: "Ankit Kumar",
    },
  ],

  creator: "Ankit Kumar",

  openGraph: {

    title: "Ankit Kumar | Frontend Developer",

    description:
      "Modern portfolio website built using Next.js and Tailwind CSS.",

    url: "https://yourwebsite.com",

    siteName: "Ankit Kumar Portfolio",

    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ankit Kumar Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {

    card: "summary_large_image",

    title: "Ankit Kumar | Frontend Developer",

    description:
      "Modern portfolio website built using Next.js and Tailwind CSS.",

    images: ["/preview.png"],
  },

  icons: {
    icon: "/favicon.png",
  },

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );

}