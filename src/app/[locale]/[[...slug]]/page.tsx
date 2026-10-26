import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "@/app/page";
import LayananPage from "@/app/layanan/page";
import PortofolioPage from "@/app/portofolio/page";
import TentangKamiPage from "@/app/tentang-kami/page";
import KontakPage from "@/app/kontak/page";

const pages = {
  "": {
    component: Home,
    idPath: "/",
    title: "Custom Software & IT Solutions in Indonesia | Vieria Techno",
    description:
      "Build better business operations with Vieria Techno. Custom software development, business systems, cloud infrastructure, and managed IT solutions from Indonesia.",
    keywords: ["custom software development", "IT solutions Indonesia", "business software", "managed IT services", "cloud infrastructure"],
  },
  services: {
    component: LayananPage,
    idPath: "/layanan",
    title: "Custom Software Development & IT Services | Vieria Techno",
    description:
      "Explore custom business software, operational systems, professional websites, SEO, and measurable digital growth services by Vieria Techno Indonesia.",
    keywords: ["custom software development", "business systems", "software development services", "IT consulting Indonesia", "business process automation"],
  },
  portfolio: {
    component: PortofolioPage,
    idPath: "/portofolio",
    title: "Software Development Portfolio & IT Case Studies | Vieria Techno",
    description:
      "See how Vieria Techno delivers business software, ERP, healthcare systems, public service platforms, and digital solutions for organizations in Indonesia.",
    keywords: ["software development portfolio", "IT case studies", "ERP implementation", "business software projects Indonesia"],
  },
  about: {
    component: TentangKamiPage,
    idPath: "/tentang-kami",
    title: "About Vieria Techno | Software Engineering Company in Indonesia",
    description:
      "Meet Vieria Techno, a software engineering partner building secure, reliable custom systems and digital solutions for businesses and organizations.",
    keywords: ["software engineering company Indonesia", "custom software partner", "IT solutions provider", "software development company"],
  },
  contact: {
    component: KontakPage,
    idPath: "/kontak",
    title: "Contact Vieria Techno | IT & Software Consultation",
    description:
      "Talk to Vieria Techno about custom software, business systems, cloud infrastructure, or your next digital project. Request an initial consultation.",
    keywords: ["software consultation", "IT consultation Indonesia", "custom software quote", "business systems consultation"],
  },
} as const;

type PageSlug = keyof typeof pages;

function getPageSlug(slug?: string[]): PageSlug | null {
  const value = slug?.join("/") ?? "";
  return value in pages ? (value as PageSlug) : null;
}

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({
    locale: "en",
    slug: slug ? slug.split("/") : [],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const pageSlug = getPageSlug(slug);
  if (locale !== "en" || pageSlug === null) return {};

  const page = pages[pageSlug];
  const englishPath = pageSlug === "" ? "/en" : `/en/${pageSlug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [...page.keywords],
    alternates: {
      canonical: englishPath,
      languages: {
        "id-ID": page.idPath,
        "en-US": englishPath,
        "x-default": page.idPath,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      locale: "en_US",
      alternateLocale: ["id_ID"],
      type: "website",
      siteName: "Vieria Techno IT Solutions",
    },
  };
}

export default async function EnglishPage({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;
  const pageSlug = getPageSlug(slug);
  if (locale !== "en" || pageSlug === null) notFound();

  const Page = pages[pageSlug].component;
  return <Page />;
}
