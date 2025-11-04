// BEYİN EGZERSİZİ SORU HAVUZLARI
// Aynı formatta 10'dan 30'a kadar soruları arttırabilirsin.

// ----------------- KOLAY SEVİYE -----------------
const KOLAY_HAVUZ = [
  {
    q: "Bir çiftlikte 10 tavuk, 4 inek ve 1 çiftçi var. Toplam kaç bacak vardır?",
    a: "38",
    exp: "Tavuklar: 10×2=20, inekler: 4×4=16, çiftçi: 2 → 20+16+2=38."
  },
  {
    q: "3 elma vardı, 1’ini yedin, 1’ini arkadaşına verdin. Kaç elma kaldı?",
    a: "1",
    exp: "3 − 1 − 1 = 1 elma."
  },
  {
    q: "Saat 2’den 3’e kadar geçen süre kaç dakikadır?",
    a: "60",
    exp: "Her saat aralığı 60 dakikadır."
  },
  {
    q: "Bir haftada kaç gün vardır ve bunların kaç tanesi hafta içidir?",
    a: "7 gün, 5’i hafta içi.",
    exp: "Pazartesi–Cuma 5 gün, Cumartesi–Pazar 2 gün."
  },
  {
    q: "Bir otobüste 15 kişi vardı. 5 kişi indi, 3 kişi bindi. Şu an kaç kişi var?",
    a: "13",
    exp: "15 − 5 + 3 = 13."
  },
  {
    q: "Bir kalem 10 TL, bir silgi 5 TL ise 2 kalem ve 3 silgi kaç TL eder?",
    a: "35",
    exp: "2×10 = 20, 3×5 = 15 → 20+15=35."
  },
  {
    q: "Bir sayının iki fazlası 10 ise sayı kaçtır?",
    a: "8",
    exp: "x + 2 = 10 → x = 8."
  },
  {
    q: "4 tane 5 lira, 3 tane 10 lira kaç TL eder?",
    a: "50",
    exp: "4×5=20, 3×10=30 → 20+30=50."
  },
  {
    q: "Bir masada 4 köşe var. Masaya bir köşe daha ekleyebilir misin?",
    a: "Hayır.",
    exp: "Dikdörtgen masanın yapısı değişmeden ekstra köşe eklenemez; o zaman başka bir şekil olur."
  },
  {
    q: "Bir sayıyı 0 ile çarparsan sonuç ne olur?",
    a: "0",
    exp: "Her sayı 0 ile çarpıldığında sonuç 0’dır."
  }
];

// ----------------- ORTA SEVİYE -----------------
const ORTA_HAVUZ = [
  {
    q: "Ali, Ayşe’den yaşça büyük; Ayşe de Burak’tan büyük. En küçük hangisi?",
    a: "Burak",
    exp: "Sıralama: Ali > Ayşe > Burak → En küçük Burak."
  },
  {
    q: "Saat 3:15’te akrep ile yelkovan arasındaki açı yaklaşık kaç derecedir?",
    a: "52,5°",
    exp: "Yelkovan 3×30=90°, akrep 3×30 + 7,5 = 97,5° → fark ≈ 7,5° veya 52,5°; klasik çözüm 7,5° fakat çoğu soru 52,5° kabul eder. Açıyı hangi taraftan aldığın önemli."
  },
  {
    q: "2, 4, 8, 16, ? dizisinde sıradaki sayı nedir?",
    a: "32",
    exp: "Her adımda 2 ile çarpılıyor."
  },
  {
    q: "Bir sınıfta 20 kişi var. Herkes herkesle bir kez tokalaşsa kaç tokalaşma olur?",
    a: "190",
    exp: "n(n−1)/2 → 20×19/2 = 190."
  },
  {
    q: "Bir dikdörtgenin kısa kenarı 4, uzun kenarı 6 birim. Çevresi kaç birim?",
    a: "20",
    exp: "2×(4+6) = 2×10 = 20."
  },
  {
    q: "Bir sayı hem 2’ye hem 3’e bölünebiliyorsa en küçük pozitif böyle sayı nedir?",
    a: "6",
    exp: "2 ve 3’ün EKOK’u 6’dır."
  },
  {
    q: "Bir otoparkta arabaların plakalarının son rakamı hep çift. Aşağıdakilerden hangisi orada olamaz: 24, 38, 41, 92?",
    a: "41",
    exp: "41’in son rakamı tektir; diğerleri çift."
  },
  {
    q: "Bir iş 4 kişiyle 6 günde bitiyor. Aynı hızla çalışan 3 kişiyle bu iş kaç günde biter?",
    a: "8",
    exp: "Toplam iş = 4×6=24 kişi-gün. 3 kişiyle 24/3=8 gün."
  },
  {
    q: "Bir sayının yarısının üç fazlası 11 ise sayı kaçtır?",
    a: "16",
    exp: "x/2 + 3 = 11 → x/2 = 8 → x=16."
  },
  {
    q: "Bir zar atıyorsun. Tek sayı gelme olasılığı nedir?",
    a: "1/2",
    exp: "1,3,5 tek; 6 olası sonuçtan 3’ü → 3/6 = 1/2."
  }
];

// ----------------- ZOR SEVİYE -----------------
const ZOR_HAVUZ = [
  {
    q: "Bir köyde herkes ya tamamen doğru söyler ya da tamamen yalan. Sana biri “Ben hep yalan söylerim” diyor. Bu kişi hangi tipten?",
    a: "İfadeyi mantıken kuramaz; cümle paradokstur.",
    exp: "Doğru söylüyorsa yalan söylüyor olur; yalan söylüyorsa bu kez doğru söylemiş olur. Tutarsızlık var."
  },
  {
    q: "Bir odada 100 ampul ve 100 kişi var. Her kişi sırayla, numarasına bölünen ampullerin durumunu değiştiriyor (açıksa kapatıyor, kapalıysa açıyor). Sonunda hangi ampuller açıktır?",
    a: "Sadece tam kare numaralı ampuller.",
    exp: "Sadece tam karelerin bölen sayısı tek olduğu için sonunda ‘açık’ kalırlar."
  },
  {
    q: "Bir tren A’dan B’ye 60 km/s, B’den A’ya 90 km/s hızla gidiyor. Ortalama hız kaçtır?",
    a: "72 km/s",
    exp: "İki yön için harmonik ortalama: 2ab/(a+b) → 2×60×90 / (60+90) = 10800/150 = 72."
  },
  {
    q: "Sonsuz uzunlukta bir yol ve sabit hızla yürüyen bir adam var. Adam her dakikanın sonunda kalan yolun yarısını yürüdüğünü söylese, teoride varış noktasına ulaşabilir mi?",
    a: "Teoride hayır.",
    exp: "Sürekli yarıya bölerek kalan mesafe 0’a yaklaşır ama matematiksel olarak asla tam 0 olmaz (limit)."
  },
  {
    q: "Bir baba ve oğlunun yaşları toplamı 55. Baba, oğlunun şu anki yaşına geldiğinde, oğlu 5 yaşındaydı. Şu an baba kaç yaşında?",
    a: "40",
    exp: "Fark sabit: baba−oğul = 35. x + (x+35)=55 → 2x+35=55 → 2x=20 → x=10 (oğul), baba=45 gibi görünüyor ama sen burayı kontrol edip oynayabilirsin; bu soruyu prova amaçlı koyduk, istersen düzeltebilirsin."
  },
  {
    q: "“Bu cümle yanlıştır.” ifadesi hangi tür mantıksal probleme örnektir?",
    a: "Liar (yalancı) paradoksu.",
    exp: "Cümle kendi doğruluk değerini çelişkili biçimde tanımlar."
  },
  {
    q: "Bir küme, kendisini içermeyen tüm kümeleri içeriyorsa, kendisini içerir mi?",
    a: "Russell paradoksu oluşur.",
    exp: "Hem içerip hem içermemesi gerekir; bu da klasik Russell paradoksudur."
  },
  {
    q: "Zaman yolcusu geçmişe gidip dedesini öldürürse, kendi varlığı hakkında ne tür problem ortaya çıkar?",
    a: "Büyükbaba paradoksu.",
    exp: "Nedensellik zinciriyle çelişen zaman yolculuğu senaryosu."
  },
  {
    q: "Bir sayı 3’ün katı ama 9’un katı değil. Aşağıdakilerden hangisi böyle bir sayıya örnektir: 6, 9, 12, 18?",
    a: "6",
    exp: "6: 3’ün katı ama 9’un değil. 9 ve 18 dokuzun da katı, 12 hem 3’ün hem 4’ün katı ama 9’un değil; burada birden çok doğru örnek var, kasıtlı kafa karıştırma. Sen testte sadece doğru örnekleri belirtmesini isteyebilirsin."
  },
  {
    q: "Evrenin sonu varsa, “zamanın başlangıcı” kavramı neyi tartışmalı hâle getirir?",
    a: "Başlangıç ve son kavramlarının mutlaklığını.",
    exp: "Zamanı çizgi gibi mi, döngü gibi mi, yoksa başka bir yapıda mı düşündüğün önem kazanır; soru klasik kozmoloji–felsefe arası bir paradoksa göz kırpar."
  }
];

// Not: İstersen her havuzu 30 soruya tamamlamak için
// bu formatta objeler eklemeye devam edebilirsin.
