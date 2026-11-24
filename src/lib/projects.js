export const projects = [
  {
    slug: "hayat-agi",
    index: "01",
    title: "Hayat Ağı",
    subtitle: "Deprem Yönetim & Koordinasyon Uygulaması",
    category: "Afet Teknolojileri",
    badge: "HSD Code4Future Ideathon 3.lüğü",
    year: "2026",
    role: "Ürün Fikri, Sistem Mimarisi & Sunum",
    summary:
      "Afet yönetimi süreçlerini dijitalleştiren, enkaz ve yardım koordinasyonunu gerçek zamanlı veri akışıyla hızlandıran çözüm projesi.",
    details:
      "Schrödinger'in Pisileri takımıyla geliştirdiğimiz Hayat Ağı, afet anında iletişim kesintilerini minimize etmeyi, gönüllü ekipler ile ihtiyaç noktalarını hızlıca eşleştirmeyi ve saha verilerini tek bir merkezde toplamayı hedefler.",
    highlights: [
      "HSD Code4Future Ideathon yarışmasında jüri değerlendirmesi sonucu 3.lük ödülü.",
      "Offline-first iletişim ve konum önceliklendirme senaryoları.",
      "Acil durum ekipleri için sade ve yüksek kontrastlı saha arayüzü konsepti.",
    ],
    stack: ["Sistem Tasarımı", "UI/UX Konsept", "Afet Koordinasyonu"],
    image: "/images/projects/hayat-agi.jpg",
    accentTone: "from-lime-400/20 via-emerald-500/10 to-transparent",
  },
  {
    slug: "kampus-sesi",
    index: "02",
    title: "Kampüs Sesi",
    subtitle: "Öğrenci Yorumlarıyla Üniversite Rehberi",
    category: "Full-Stack Web",
    badge: "Aktif Geliştirme",
    year: "2026",
    role: "Full-Stack Geliştirici",
    summary:
      "Öğrencilerin üniversiteler ve bölümler hakkında doğrulanmış yorumlar paylaşabildiği, veri tabanı entegrasyonlu web platformu.",
    details:
      "Tercih dönemindeki adayların gerçek öğrenci deneyimlerine ulaşabilmesi için Node.js ve Firebase altyapısı üzerine inşa edilen uçtan uca bir web uygulaması. Dinamik filtreleme, güvenli kimlik doğrulama ve gerçek zamanlı yorum akışı içerir.",
    highlights: [
      "Node.js ve Firebase Realtime/Firestore ile ölçeklenebilir veri mimarisi.",
      "Bölüm, kampüs olanakları ve akademik kadro bazlı çoklu değerlendirme sistemi.",
      "Hızlı arama ve duyarlı (responsive) modern arayüz.",
    ],
    stack: ["Node.js", "Firebase", "JavaScript", "HTML / CSS"],
    image: "/images/projects/kampus-sesi.png",
    gallery: [
      "/images/projects/kampus-sesi.png",
      "/images/projects/kampus-sesi-2.jpg",
      "/images/projects/kampus-sesi-3.png",
      "/images/projects/kampus-sesi-4.jpg",
      "/images/projects/kampus-sesi-5.png",
    ],
    accentTone: "from-cyan-400/20 via-sky-500/10 to-transparent",
  },
  {
    slug: "yoldaki-arkadasim",
    index: "03",
    title: "Yoldaki Arkadaşım",
    subtitle: "Yolculuk Paylaşım Platformu",
    category: "Full-Stack Web",
    badge: "Okul Projesi",
    role: "6 Kişilik Ekip Çalışması",
    summary:
      "Aynı güzergâha giden sürücü ile yolcuları buluşturan web tabanlı yolculuk paylaşım (carpooling) platformu.",
    details:
      "Sürücülerin boş koltukları için ilan açabildiği, yolcuların seferlere katılım isteği gönderip mesajlaşabildiği ve yolculuk sonunda karşılıklı puanlama yapabildiği uçtan uca bir yolculuk paylaşım platformu. PDO tabanlı PHP REST API ve 10 tablolu ilişkisel MySQL/MariaDB veritabanı (Foreign Key & Trigger) mimarisi üzerine kuruldu.",
    highlights: [
      "E-posta doğrulamalı giriş/kayıt, profil ve araç yönetimi.",
      "Yolculuk ilanı oluşturma, arama/filtreleme ve rezervasyon onay/red sistemi.",
      "Sürücü–yolcu mesajlaşma ve karşılıklı puanlama.",
      "İstatistikler ve kullanıcı/ilan moderasyonu sunan Admin Paneli.",
    ],
    stack: ["PHP (PDO API)", "MySQL / MariaDB", "JavaScript", "HTML5 / CSS3", "Docker"],
    image: "/images/projects/yoldaki-arkadasim.jpg",
    gallery: [
      "/images/projects/yoldaki-arkadasim.jpg",
      "/images/projects/yoldaki-arkadasim-2.png",
      "/images/projects/yoldaki-arkadasim-3.png",
      "/images/projects/yoldaki-arkadasim-4.png",
      "/images/projects/yoldaki-arkadasim-5.png",
    ],
    accentTone: "from-teal-400/20 via-emerald-500/10 to-transparent",
  },
  {
    slug: "fittrack-db",
    index: "04",
    title: "FitTrack-DB-Project",
    subtitle: "Spor Salonu İlişkisel Veritabanı & Dashboard",
    category: "Veritabanı & Dashboard",
    badge: "Ders / Portföy Projesi",
    year: "2026",
    role: "Veritabanı Tasarımı & Front-End",
    summary:
      "Bir spor salonunun tüm operasyonlarını Oracle SQL ilişkisel veritabanı mantığıyla yöneten ve 12 kolonlu Grafit + Lime dashboard arayüzüyle sunan kapsamlı proje.",
    details:
      "Veritabanı katmanında Oracle SQL ile 6 ilişkili tablo (uyeler, egitmenler, egzersizler, uyelik_paketleri, abonelikler, antrenman_programi), örnek veriler, analitik/operasyonel sorgular ve otomatik tarih/çakışma tetikleyicileri (triggers.sql) içerir. Görsel ön yüzü (index.html) doğrudan tarayıcıda açılabilen, 12 kolonlu dashboard gridi, canlı SVG grafikler, JOIN tabanlı tablolar, otomatik bitiş tarihi hesaplama, üye detay ekranı ve koyu/açık tema destekli Grafit + Lime arayüze sahiptir.",
    highlights: [
      "Oracle SQL ile 6 ilişkili tablo, örnek veriler ve analitik/operasyonel sorgular.",
      "Otomatik bitiş tarihi hesaplama ve çakışma kontrolü sağlayan tetikleyiciler (triggers.sql).",
      "12 kolonlu dashboard gridi, canlı SVG grafikler ve JOIN tabanlı veri tabloları.",
      "Üye detay ekranı ve koyu/açık tema destekli Grafit + Lime arayüz.",
    ],
    stack: ["Oracle SQL", "PL/SQL Triggers", "HTML5 / CSS3", "JavaScript", "SVG"],
    image: "/images/projects/fittrack-db.jpg",
    gallery: [
      "/images/projects/fittrack-db.jpg",
      "/images/projects/fittrack-db-2.jpg",
      "/images/projects/fittrack-db-3.png",
      "/images/projects/fittrack-db-4.jpg",
      "/images/projects/fittrack-db-5.jpg",
    ],
    accentTone: "from-lime-400/20 via-emerald-500/10 to-transparent",
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
