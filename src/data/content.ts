import {
  BarChart3,
  Bot,
  Boxes,
  Briefcase,
  Building2,
  Code2,
  Factory,
  Gauge,
  Globe2,
  HardHat,
  LifeBuoy,
  Megaphone,
  Rocket,
  Search,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Timer,
  UtensilsCrossed,
  Wallet,
  Workflow,
} from "lucide-react";
import type {
  CaseStudy,
  ConsultTopic,
  FaqItem,
  Industry,
  NavLink,
  PricingTier,
  ProcessStep,
  Service,
  TrustStat,
} from "@/types";

export const SITE = {
  name: "Tatanala",
  tagline: "Menata Sistem, Menuntaskan Kendala.",
  /** International format without "+"  -  used for wa.me links. */
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  email: "halo@tatanala.id",
  address: "Indonesia",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Solusi", href: "#solusi" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Alur Kerja", href: "#alur-kerja" },
  { label: "FAQ", href: "#faq" },
];

export const MARQUEE_ITEMS: { label: string; icon: typeof Globe2 }[] = [
  { label: "Sistem Informasi Kustom", icon: Boxes },
  { label: "Website Company Profile", icon: Globe2 },
  { label: "Optimasi SEO Organik", icon: SearchCheck },
  { label: "Google & Meta Ads Terukur", icon: Megaphone },
  { label: "Integrasi AI & Otomasi Kerja", icon: Bot },
  { label: "Dashboard Realtime Multi-Cabang", icon: BarChart3 },
];

export const PROBLEMS: { title: string; detail: string }[] = [
  {
    title: "Pencatatan manual tercecer",
    detail: "Nota, buku besar, dan grup WhatsApp jadi “database” utama. Rekap bulanan makan waktu berhari-hari.",
  },
  {
    title: "Stok bocor tanpa jejak",
    detail: "Selisih gudang baru ketahuan saat stock opname. Tidak jelas siapa, kapan, dan di cabang mana.",
  },
  {
    title: "Website lama sepi pengunjung",
    detail: "Situs ada, tapi tidak muncul di Google dan tidak pernah menghasilkan satu pun prospek.",
  },
];

export const PILLARS: {
  pillar: "Hulu" | "Tengah" | "Hilir";
  title: string;
  detail: string;
  icon: typeof Globe2;
}[] = [
  {
    pillar: "Hulu",
    title: "Website Profil Berbobot",
    detail: "Kredibilitas instan, siap tender, impresi profesional sejak klik pertama.",
    icon: Building2,
  },
  {
    pillar: "Tengah",
    title: "Sistem Informasi Kustom",
    detail: "ERP mini, inventaris, POS, alur kerja tanpa kertas, rekap otomatis.",
    icon: Workflow,
  },
  {
    pillar: "Hilir",
    title: "Pertumbuhan Terarah",
    detail: "SEO halaman #1 dan iklan Google/Meta Ads yang terukur hingga rupiah.",
    icon: Rocket,
  },
];

export const SERVICES: Service[] = [
  {
    id: "company-profile",
    pillar: "Hulu",
    title: "Website Company Profile",
    tag: "Reputasi",
    shortDesc: "Membangun reputasi instan  -  cepat, responsif, dan siap tender.",
    longDesc:
      "Situs profil yang dirancang seperti proposal bisnis: menjawab keraguan calon klien, menampilkan legalitas & portofolio, dan memuat di bawah 2 detik di jaringan seluler.",
    icon: Globe2,
    deliverables: [
      "Desain UI eksklusif sesuai identitas brand",
      "Halaman portofolio, legalitas & sertifikasi siap tender",
      "CMS mudah  -  update konten tanpa developer",
      "Domain, SSL, dan hosting cepat (CDN) tahun pertama",
      "Formulir prospek terhubung ke WhatsApp & email",
    ],
    tech: ["Next.js", "Headless CMS", "Vercel Edge", "Core Web Vitals 90+"],
    metric: { value: "< 2 dtk", label: "Waktu muat halaman" },
  },
  {
    id: "information-system",
    pillar: "Tengah",
    title: "Rancang Bangun Sistem Informasi",
    tag: "Operasional",
    shortDesc: "Dashboard ERP, gudang, kasir, multi-cabang  -  berbasis web & realtime.",
    longDesc:
      "Kami petakan alur kerja Anda yang sebenarnya, lalu membangun sistem yang mengikuti cara bisnis Anda berjalan  -  bukan memaksa tim menyesuaikan diri dengan software generik.",
    icon: Boxes,
    deliverables: [
      "Analisis proses bisnis & blueprint alur data",
      "Modul inventaris, pembelian, penjualan & kasir (POS)",
      "Hak akses bertingkat & log aktivitas per pengguna",
      "Dashboard realtime multi-cabang + ekspor laporan",
      "Pelatihan tim & dokumentasi pengguna",
    ],
    tech: ["TypeScript", "PostgreSQL", "REST/GraphQL API", "Realtime Sync", "Cloud Backup"],
    metric: { value: "3x", label: "Lebih cepat rekap laporan" },
  },
  {
    id: "seo",
    pillar: "Hilir",
    title: "SEO Dominasi Pencarian",
    tag: "Organik",
    shortDesc: "Aset jangka panjang  -  menjaring klien potensial tanpa biaya per klik.",
    longDesc:
      "Strategi SEO berbasis niat pencarian: kami riset kata kunci yang benar-benar dicari pembeli, memperbaiki fondasi teknis, lalu membangun konten yang mendatangkan prospek setiap hari.",
    icon: Search,
    deliverables: [
      "Audit SEO teknis & perbaikan Core Web Vitals",
      "Riset kata kunci berbasis niat beli (commercial intent)",
      "Optimasi Google Business Profile & SEO lokal",
      "Produksi konten artikel & landing page bulanan",
      "Laporan peringkat & trafik transparan tiap bulan",
    ],
    tech: ["Google Search Console", "Schema Markup", "GA4", "Ahrefs / Semrush"],
    metric: { value: "+218%", label: "Rata-rata trafik organik" },
  },
  {
    id: "ads",
    pillar: "Hilir",
    title: "Iklan Digital Terukur",
    tag: "Performa",
    shortDesc: "Google & Meta Ads terhubung ke CRM/WhatsApp  -  pantau ROAS nyata.",
    longDesc:
      "Setiap rupiah iklan dilacak hingga menjadi chat, prospek, dan transaksi. Kampanye dioptimasi mingguan berdasarkan data penjualan nyata, bukan sekadar klik.",
    icon: Megaphone,
    deliverables: [
      "Setup Google Ads & Meta Ads (Search, PMax, Advantage+)",
      "Pelacakan konversi WhatsApp & form ke CRM",
      "Landing page khusus kampanye dengan A/B testing",
      "Optimasi mingguan & pengelolaan anggaran",
      "Dashboard ROAS & biaya per prospek realtime",
    ],
    tech: ["Google Ads", "Meta Ads", "Conversion API", "Looker Studio", "CRM Webhook"],
    metric: { value: "4.6x", label: "Rata-rata ROAS klien" },
  },
];

export const PRICING: PricingTier[] = [
  {
    id: "fondasi",
    name: "Paket Fondasi Profil",
    tagline: "Untuk usaha yang ingin tampil kredibel & siap tender.",
    price: "Rp 4,9 jt",
    priceSuffix: "sekali bayar",
    pillars: ["Hulu"],
    features: [
      "Website company profile hingga 7 halaman",
      "Desain eksklusif & responsif",
      "CMS untuk update konten mandiri",
      "Domain .com/.id + SSL + hosting 1 tahun",
      "SEO on-page dasar & Google Business Profile",
      "Garansi perbaikan 3 bulan",
    ],
    cta: "Mulai dari Fondasi",
  },
  {
    id: "operasional",
    name: "Paket Sistem Operasional",
    tagline: "Untuk bisnis yang ingin berhenti mengandalkan catatan manual.",
    price: "Rp 18 jt",
    priceSuffix: "mulai dari",
    pillars: ["Hulu", "Tengah"],
    features: [
      "Semua di Paket Fondasi Profil",
      "Sistem informasi kustom (3 modul inti)",
      "Inventaris, POS, atau alur approval",
      "Dashboard realtime & ekspor laporan",
      "Hak akses multi-pengguna & multi-cabang",
      "Pelatihan tim + pendampingan 6 bulan",
    ],
    recommended: true,
    cta: "Tata Operasional Saya",
  },
  {
    id: "ekosistem",
    name: "Paket Ekosistem Lengkap",
    tagline: "Hulu-ke-hilir: sistem rapi sekaligus mesin pertumbuhan.",
    price: "Rp 35 jt",
    priceSuffix: "mulai dari",
    pillars: ["Hulu", "Tengah", "Hilir"],
    features: [
      "Semua di Paket Sistem Operasional",
      "Modul tak terbatas sesuai blueprint",
      "SEO bulanan + konten (3 bulan pertama)",
      "Setup Google & Meta Ads + tracking CRM",
      "Integrasi AI & otomasi notifikasi WhatsApp",
      "Prioritas support & SLA 99.8% uptime",
    ],
    cta: "Bangun Ekosistem",
  },
];

export const TRUST_STATS: TrustStat[] = [
  {
    value: 99.8,
    decimals: 1,
    suffix: "%",
    label: "Uptime Sistem",
    description: "Infrastruktur cloud terpantau 24/7",
    icon: ShieldCheck,
  },
  {
    value: 3,
    suffix: "x",
    label: "Efisiensi Waktu Kerja",
    description: "Rekap & laporan otomatis tanpa input ulang",
    icon: Timer,
  },
  {
    value: 0,
    prefix: "Rp ",
    suffix: "",
    label: "Biaya Maintenance Tersembunyi",
    description: "Semua biaya transparan di awal kontrak",
    icon: Wallet,
  },
];

export const INDUSTRIES: Industry[] = [
  { label: "Kontraktor", icon: HardHat },
  { label: "Manufaktur", icon: Factory },
  { label: "Ritel", icon: ShoppingBag },
  { label: "F&B", icon: UtensilsCrossed },
  { label: "Jasa", icon: Briefcase },
  { label: "Klinik", icon: Stethoscope },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "distributor",
    client: "CV Sumber Pangan Lestari",
    industry: "Distributor Sembako • 4 Cabang",
    title: "ERP mini gudang & penjualan multi-cabang",
    summary: "Mengganti 12 file Excel dan buku nota dengan satu dashboard realtime untuk owner, admin gudang, dan sales.",
    mockup: "dashboard",
    before: [
      "12 file Excel terpisah per cabang",
      "Selisih stok rata-rata 7% per bulan",
      "Rekap omzet butuh 3 hari kerja",
    ],
    after: [
      "Satu dashboard stok & omzet realtime",
      "Mutasi stok tercatat per pengguna",
      "Laporan harian otomatis ke WhatsApp owner",
    ],
    metrics: [
      { value: "-92%", label: "Selisih stok" },
      { value: "3 hr → 5 mnt", label: "Waktu rekap" },
    ],
  },
  {
    id: "kontraktor",
    client: "PT Arunika Bangun Persada",
    industry: "Kontraktor Sipil",
    title: "Company profile siap tender & portal proyek",
    summary: "Website lama tanpa portofolio diganti situs profil yang memuat legalitas, sertifikasi, dan galeri proyek terverifikasi.",
    mockup: "website",
    before: [
      "Website template 2016, tidak responsif",
      "Tidak ada halaman legalitas & SBU",
      "Klien tender meragukan kredibilitas",
    ],
    after: [
      "Profil premium memuat < 1,8 detik",
      "Portofolio proyek dengan filter & peta",
      "Lolos prakualifikasi 3 tender BUMN",
    ],
    metrics: [
      { value: "3", label: "Tender lolos" },
      { value: "97", label: "Skor Lighthouse" },
    ],
  },
  {
    id: "klinik",
    client: "Klinik Gigi Senyum Sehat",
    industry: "Kesehatan • SEO & Ads",
    title: "Mesin prospek dari Google & Meta",
    summary: "SEO lokal + kampanye iklan terhubung ke WhatsApp booking, dengan pelacakan biaya per pasien baru.",
    mockup: "growth",
    before: [
      "Tidak muncul di pencarian “dokter gigi terdekat”",
      "Iklan boost post tanpa data konversi",
      "Booking pasien via telepon tercecer",
    ],
    after: [
      "Peringkat #1 untuk 14 kata kunci lokal",
      "Setiap chat WhatsApp terlacak ke iklan",
      "Biaya per pasien baru turun drastis",
    ],
    metrics: [
      { value: "+312%", label: "Booking online" },
      { value: "5.1x", label: "ROAS" },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Diagnosa Masalah",
    duration: "Minggu 1",
    description: "Sesi gratis memetakan kendala operasional, alur data, dan target bisnis Anda  -  bukan langsung jualan fitur.",
    icon: SearchCheck,
  },
  {
    title: "Blueprint & Prototipe",
    duration: "Minggu 2-3",
    description: "Rancangan alur kerja dan prototipe interaktif yang bisa Anda klik sebelum satu baris kode ditulis.",
    icon: Workflow,
  },
  {
    title: "Pengembangan Bertahap",
    duration: "Sprint 2 mingguan",
    description: "Fitur dirilis bertahap dengan demo rutin, sehingga Anda selalu tahu progres dan bisa memberi masukan.",
    icon: Code2,
  },
  {
    title: "Uji, Migrasi & Pelatihan",
    duration: "1-2 minggu",
    description: "Migrasi data lama, uji beban, dan pelatihan tim hingga sistem benar-benar dipakai sehari-hari.",
    icon: Gauge,
  },
  {
    title: "Pendampingan & Pertumbuhan",
    duration: "Berkelanjutan",
    description: "Monitoring 24/7, pembaruan keamanan, lalu kami nyalakan mesin pertumbuhan lewat SEO & Ads.",
    icon: LifeBuoy,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Apakah status kepemilikan source code dan basis data mutlak menjadi hak milik perusahaan kami?",
    answer:
      "Mutlak 100% milik Anda. Setelah fase serah terima dan pelunasan selesai, seluruh akses repositori Git, skema database, kredensial server cloud, dan dokumentasi arsitektur diserahkan sepenuhnya ke entitas hukum bisnis Anda. Tidak ada klausul sewa lisensi tahunan tersembunyi (vendor lock-in). Anda bebas mengelola atau memodifikasi sistem ini secara mandiri di kemudian hari.",
  },
  {
    question: "Bagaimana Tatanala menjamin kerahasiaan data omzet dan strategi bisnis kami?",
    answer:
      "Setiap perikatan kerja dilindungi secara hukum oleh Perjanjian Kerahasiaan Informasi (Non-Disclosure Agreement / NDA) resmi bermaterai sebelum sesi diagnosa mendalam atau penulisan kode dimulai. Data transaksi, rahasia dagang, daftar vendor, dan margin keuntungan klien dienkripsi dengan standar AES-256 dan dilindungi dari kebocoran ke pihak mana pun.",
  },
  {
    question: "Mengapa kami harus membangun sistem kustom, bukan memakai aplikasi SaaS berlangganan bulanan?",
    answer:
      "Aplikasi berlangganan generik memaksa alur kerja unik Anda beradaptasi pada batasan fitur mereka, memungut biaya per pengguna yang kian membengkak saat cabang bertambah, dan data Anda tersandera di server pihak ketiga. Bersama Tatanala, sistem direkayasa presisi mengikuti SOP internal Anda, tanpa batas jumlah kasir atau cabang, dan efisiensi operasional tercapai permanen.",
  },
  {
    question: "Apakah sistem profil yang dibangun Tatanala memenuhi syarat verifikasi tender BUMN dan LPSE?",
    answer:
      "Tentu. Kami menerapkan standar kepatuhan format profil tender korporasi: mencakup struktur tata kelola direksi, kejelasan legalitas (K3, SBU, ISO), katalog portofolio terverifikasi, hingga kecepatan akses di bawah 1.8 detik yang memuaskan kriteria evaluasi verifikator tender.",
  },
  {
    question: "Bagaimana jika staf kasir atau operator gudang kami kesulitan menggunakan sistem?",
    answer:
      "Kami menyelenggarakan pelatihan langsung (onsite/daring) berstruktur SOP tertulis dan video panduan operasional. Kami mendampingi tim lapangan Anda selama 6 bulan penuh hingga sistem benar-benar dioperasikan secara disiplin tanpa kesalahan input nota.",
  },
  {
    question: "Bagaimana jaminan garansi jika terjadi kendala teknis atau bug pada sistem?",
    answer:
      "Seluruh paket dilengkapi klausul Garansi Teknis Resmi dan komitmen SLA (Service Level Agreement). Setiap kendala kritis yang mengganggu jalannya transaksi kasir atau mutasi inventaris ditangani oleh tim insinyur siaga dengan waktu respon maksimal 1-2 jam kerja.",
  },
];

export const CONSULT_TOPICS: ConsultTopic[] = [
  { id: "profil", label: "Website Profil", message: "membuat website company profile yang kredibel & siap tender" },
  { id: "sistem", label: "Sistem Informasi", message: "menata operasional dengan sistem informasi kustom (stok/kasir/laporan)" },
  { id: "seo", label: "SEO", message: "meningkatkan peringkat website di Google lewat SEO" },
  { id: "ads", label: "Google/Meta Ads", message: "menjalankan iklan Google/Meta Ads yang terukur" },
  { id: "otomasi", label: "AI & Otomasi", message: "mengotomasi pekerjaan rutin dengan integrasi AI" },
  { id: "bingung", label: "Belum tahu", message: "mendiagnosa masalah bisnis saya, karena saya belum yakin solusi yang tepat" },
];
