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
    slug: "universite-platformu",
    index: "02",
    title: "Üniversite Değerlendirme",
    subtitle: "Full-Stack Öğrenci & Bölüm Platformu",
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
    slug: "kampus-telemetri",
    index: "04",
    title: "Kampüs Telemetri",
    subtitle: "Gerçek Zamanlı Etkinlik & Doluluk Paneli",
    category: "Arayüz & Veri",
    badge: "Yer Tutucu Proje",
    year: "2026",
    role: "Front-End Geliştirici",
    summary:
      "Topluluk etkinlikleri, kütüphane yoğunluğu ve atölye takvimlerini tek ekranda toplayan yüksek kontrastlı kontrol paneli.",
    details:
      "HSD Bandırma etkinlikleri ve kampüs içi organizasyonlar için tasarlanmış, canlı katılım takibi ve program akışını sunan modüler arayüz prototipi.",
    highlights: [
      "Yüksek kontrastlı, karanlık mod odaklı veri kartları.",
      "Modüler bileşen mimarisi ile hızlı uyarlanabilir yapı.",
      "Düşük gecikmeli durum güncellemeleri.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "GSAP"],
    accentTone: "from-amber-400/20 via-orange-500/10 to-transparent",
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
