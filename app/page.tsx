
import Gallery from "@/components/Gallery";
import Guru from "@/components/Guru";
import Hero from "@/components/Hero";
import Siswa from "@/components/Siswa";
import Timeline from "@/components/Timeline";

const Home = () => {
  const siswaRPL1 = [
    {
      "name": "AHMAD RIZKY",
      "desc": "Di dunia ini, yang terpenting adalah hasil akhir.",
      "image": "/assets/siswa/rpl1/AHMAD RIZKY-Photoroom.jpg"
    },
    {
      "name": "ALVIN RUSDI CANIAGO",
      "desc": "Kesuksesan bukanlah tujuan akhir, melainkan perjalanan tanpa akhir untuk terus menjadi lebih baik.",
      "image": "/assets/siswa/rpl1/ALVIN RUSDI CANIAGO-Photoroom.jpg"
    },
    {
      "name": "ANDIRES DOZENOV CHRISTIAN",
      "desc": "Setiap hari adalah kesempatan baru untuk menulis babak baru dalam kisah suksesmu.",
      "image": "/assets/siswa/rpl1/ANDIRES DOZENOV CHRISTIAN-Photoroom.jpg"
    },
    {
      "name": "AXEL NATHANIEL BANGAS",
      "desc": "Jangan pernah meremehkan kekuatan dari langkah kecil yang diambil secara konsisten.",
      "image": "/assets/siswa/rpl1/AXEL NATHANIEL BANGAS -Photoroom.jpg"
    },
    {
      "name": "DEAN PANDEHEN SAHAY",
      "desc": "Rintangan adalah bagian dari perjalanan. Hadapi dengan berani dan jadikan pelajaran.",
      "image": "/assets/siswa/rpl1/DEAN PANDEHEN SAHAY-Photoroom.jpg"
    },
    {
      "name": "EVAN OKTAVIANUS",
"desc": "狗会汪汪汪 羊会咩咩咩 鸡会什么?",
      "image": "/assets/siswa/rpl1/EVAN OKTAVIANUS-Photoroom.jpg"
    },
    {
      "name": "FADIL MUHAMMAD",
      "desc": "Jadilah pribadi yang gigih dan pantang menyerah dalam mengejar impian.",
      "image": "/assets/siswa/rpl1/FADIL MUHAMMAD-Photoroom.jpg"
    },
    {
      "name": "GUSTI ADITYA RAMADHANNOOR",
      "desc": "Kembangkan potensi diri secara maksimal dan berikan kontribusi terbaikmu.",
      "image": "/assets/siswa/rpl1/GUSTI ADITYA RAMADHANOOR-Photoroom.jpg"
    },
    {
      "name": "HADI RUSADI",
      "desc": "Сосредоточьтесь на том, что вы можете контролировать, и позвольте остальному происходить само собой.",
      "image": "/assets/siswa/rpl1/HADI RUSADI-Photoroom.jpg"
    },
    {
      "name": "HAFIZ HAYKAL PRATAMA",
      "desc": "Inspirasi datang dari tindakan. Mulailah bertindak sekarang.",
      "image": "/assets/siswa/rpl1/HAFIZ HAYKAL PRATAMA-Photoroom.jpg"
    },
    {
      "name": "HILAL NAZMI",
      "desc": "모든 길은 결국저를 통합니다",
      "image": "/assets/siswa/rpl1/HILAL NAZMI-Photoroom.jpg"
    },
    {
      "name": "IHSAN NABIL",
      "desc": "Setiap tantangan adalah kesempatan untuk menunjukkan siapa dirimu sebenarnya.",
      "image": "/assets/siswa/rpl1/IHSAN NABIL -Photoroom.jpg"
    },
    {
      "name": "IRJA AFRIANTO",
      "desc": "Jangan bandingkan dirimu dengan orang lain. Fokus pada perkembangan pribadimu.",
      "image": "/assets/siswa/rpl1/IRJA AFRIANTO-Photoroom.jpg"
    },
    {
      "name": "KRISTIAN AGALLIASIS TAGUH",
      "desc": "Jadilah pembelajar seumur hidup. Ilmu adalah kekuatan.",
      "image": "/assets/siswa/rpl1/KRISTIAN AGALLIASIS TAGUH-Photoroom.jpg"
    },
    {
      "name": "LODIFA BENTAR ALZIKRI",
      "desc": "Anjay, sekolah SMK menyenangkan",
      "image": "/assets/siswa/rpl1/LODIFA BENTAR ALZIKRI-Photoroom.jpg"
    },
    {
      "name": "MALIK ABBAS ABDUL ROHMAN",
      "desc": "Konsistensi dalam tindakan kecil akan menghasilkan dampak yang besar.",
      "image": "/assets/siswa/rpl1/MALIK ABBAS ABDUL ROHMAN-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD ADIYAKSA",
      "desc": "Optimisme adalah kunci untuk membuka pintu peluang.",
      "image": "/assets/siswa/rpl1/MUHAMMAD ADIYAKSA-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD BAKRI",
      "desc": "Hargai setiap proses pembelajaran, karena di sanalah kamu bertumbuh.",
      "image": "/assets/siswa/rpl1/MUHAMMAD BAKRI-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD FACHRIJA ZULFIE",
      "desc": "Jadilah pribadi yang adaptif dan mampu menghadapi perubahan.",
      "image": "/assets/siswa/rpl1/MUHAMMAD FACHRIJA ZULFIE-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD FIKRI AS'AD SUPRATMAN",
      "desc": "Kembangkan kemampuan berpikir kritis dan problem-solving.",
      "image": "/assets/siswa/rpl1/MUHAMMAD FIKRI AS_AD SUPRATMAN-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD NADIR RAHMAN AL JAMILI",
      "desc": "Lerne fleißig und hör nicht auf zu lernen",
      "image": "/assets/siswa/rpl1/MUHAMMAD NADIRRAHMAN AL JAMILI-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD RAFLY RIZALDI",
      "desc": "Apapun situasi nya, tidur pun sodap ni😂",
      "image": "/assets/siswa/rpl1/MUHAMMAD RAFLY RIZALDI-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD REZKY",
      "desc": "Berikan yang terbaik dalam setiap hal yang kamu lakukan.",
      "image": "/assets/siswa/rpl1/MUHAMMAD REZKY-Photoroom.jpg"
    },
    {
      "name": "RAUF SHIDDIQ SASONGKO",
      "desc": "Jalin hubungan yang baik dengan orang lain dan belajar dari pengalaman mereka.",
      "image": "/assets/siswa/rpl1/RAUF SHIDDIQ SASONGKO-Photoroom.jpg"
    },
    {
      "name": "REINHART GABRIEL MARSHALL",
      "desc": "Rayakan setiap kemajuan, sekecil apapun.",
      "image": "/assets/siswa/rpl1/REINHART GABRIEL MARSHALL -Photoroom.jpg"
    },
    {
      "name": "RHANI SILVIHNA",
      "desc": "Tetapkan tujuan yang jelas dan fokus untuk mencapainya.",
      "image": "/assets/siswa/rpl1/RHANI SILVIHNA -Photoroom.jpg"
    },
    {
      "name": "RICHARD WINHART RICHWANTO",
      "desc": "Kembangkan kreativitas dan inovasi dalam setiap tindakanmu.",
      "image": "/assets/siswa/rpl1/RICHARD WINHART RICHWANTO-Photoroom.jpg"
    },
    {
      "name": "RIHHADATUL AISYA",
      "desc": "Percayalah pada intuisimu dan berani mengambil keputusan.",
      "image": "/assets/siswa/rpl1/RIHHADATUL AISYA-Photoroom.jpg"
    },
    {
      "name": "SATYA CIPTA WIRAWAN",
      "desc": "Kesempatan memang tidak datang dua kali, tapi kesempatan akan datang kepada mereka yang tidak pernah berhenti mencoba.",
      "image": "/assets/siswa/rpl1/SATYA CIPTA WIRAWAN-Photoroom.jpg"
    },
    {
      "name": "SEPTIAN ERIYANO FAZA",
      "desc": "Ayo Sekolah Disini. sapnu puas 😁🤪",
      "image": "/assets/siswa/rpl1/SEPTIAN ERIYANO FAZA-Photoroom.jpg"
    }
  ]

  const siswaRPL2 =[
    {
      "name": "ABEL GABRIEL",
      "desc": "Teruslah belajar dan mengembangkan diri, setiap tantangan adalah kesempatan untuk tumbuh.",
      "image": "/assets/siswa/rpl2/ABEL GABRIEL-Photoroom.jpg"
    },
    {
      "name": "ADRIAN JOSHUA MAHARSA",
      "desc": "Jangan pernah berhenti bermimpi dan berusaha, masa depan yang cerah menantimu.",
      "image": "/assets/siswa/rpl2/adrian.jpg"
    },
    {
      "name": "ADRIANA OLIVIA",
      "desc": "Setiap langkah kecil adalah progres. Konsisten dan tekun akan membawamu pada kesuksesan.",
      "image": "/assets/siswa/rpl2/ADRIANA OLIVIA-Photoroom.jpg"
    },
    {
      "name": "ALGANI SAHAWIT",
      "desc": "Cerita kita tak lagi sama, semoga kita jadi orang kaya.",
      "image": "/assets/siswa/rpl2/Algani Sahawit (XII RPL 2)-Photoroom .jpg"
    },
    {
      "name": "ARGA RIZKI ANANTA",
      "desc": "Kegagalan bukanlah akhir, melainkan pelajaran berharga untuk melangkah lebih baik.",
      "image": "/assets/siswa/rpl2/ARGA RIZKI ANANTA-Photoroom.jpg"
    },
    {
      "name": "AVIN PRASETYA",
      "desc": "Fokus pada tujuanmu dan berikan yang terbaik dalam setiap tindakanmu.",
      "image": "/assets/siswa/rpl2/AVIN PRASETYA-Photoroom.jpg"
    },
    {
      "name": "DANIEL AGUNG GERALDY",
      "desc": "Its fine to fake it until you make it, until you do, until its true",
      "image": "/assets/siswa/rpl2/DANIEL AGUNG GERALDY-Photoroom.jpg"
    },
    {
      "name": "DANUARTHA PRATAMA",
      "desc": "Jangan sia-siakan waktu yang ada, manfaatkan setiap detik untuk meraih impianmu.",
      "image": "/assets/siswa/rpl2/danu.jpg"
    },
    {
      "name": "DIMAS SABILUL ROSAD",
      "desc": "Kreativitas adalah kunci inovasi. Teruslah berkreasi dan menghasilkan karya yang bermanfaat.",
      "image": "/assets/siswa/rpl2/DIMAS SABILUL ROSAD-Photoroom.jpg"
    },
    {
      "name": "DORA DAMAYANTI",
      "desc": "Disiplin adalah jembatan antara tujuan dan pencapaian. Terapkan disiplin dalam setiap aspek kehidupanmu.",
      "image": "/assets/siswa/rpl2/DORA DAMAYANTI-Photoroom.jpg"
    },
    {
      "name": "FAIS ZAM ZAM KHAIRUL RAZAK",
      "desc": "Ketekunan akan mengalahkan bakat jika bakat tidak bekerja keras. Teruslah tekun dalam usahamu.",
      "image": "/assets/siswa/rpl2/FAIS ZAM ZAM KHAIRUL RAZAK-Photoroom (1).jpg"
    },
    {
      "name": "FERY BAKTI SETIAWAN",
      "desc": "Jadilah pribadi yang adaptif dan mampu menghadapi perubahan dengan pikiran terbuka.",
      "image": "/assets/siswa/rpl2/FERY BAKTI SETIAWAN-Photoroom.jpg"
    },
    {
      "name": "FRANSISCA SELVIANA",
      "desc": "Kembangkan kemampuan komunikasi dan kolaborasi, karena kesuksesan seringkali diraih bersama.",
      "image": "/assets/siswa/rpl2/Fransisca (XII RPL 2)-Photoroom.jpg"
    },
    {
      "name": "HARDINAN FAUZI",
      "desc": "Integritas adalah fondasi kepercayaan. Jaga selalu integritas dalam setiap tindakanmu.",
      "image": "/assets/siswa/rpl2/HARDINAN FAUZI-Photoroom.jpg"
    },
    {
      "name": "IZZA AFZAL MURTAZA",
      "desc": "Berpikir positif akan menciptakan energi positif yang akan menarik kesuksesan.",
      "image": "/assets/siswa/rpl2/IZZA AFZAL MPhotoroom (2).jpg"
    },
    {
      "name": "JANUARY AD GEA",
      "desc": "Jangan takut mengambil risiko yang terukur, karena di balik risiko terdapat peluang besar.",
      "image": "/assets/siswa/rpl2/JANUARY AD GEA-Photoroom.jpg"
    },
    {
      "name": "JULIO ALEXANDER",
      "desc": "Teruslah haus akan ilmu pengetahuan dan jangan pernah berhenti belajar.",
      "image": "/assets/siswa/rpl2/JULIO ALEXANDER-Photoroom.jpg"
    },
    {
      "name": "KANAROHAN DUMAS HAMARING KINDANGEN",
      "desc": "We're getting old so make it gold",
      "image": "/assets/siswa/rpl2/KANAROHAN DUMAS HAMARING KINDANGEN-Photoroom.jpg"
    },
    {
      "name": "KEYSHA SALSABILLA",
      "desc": "Jangan melupakan titik terendah mu, karena itu adalah awal dari langkah mu yang sebenarnya.",
      "image": "/assets/siswa/rpl2/Keisya (XII RPL 20-Photoroom.jpg"
    },
    {
      "name": "MAJIDI",
      "desc": "Fokus pada solusi, bukan hanya pada masalah. Jadilah pribadi yang proaktif.",
      "image": "/assets/siswa/rpl2/Majidi.jpg"
    },
    {
      "name": "MUHAMMAD AFRIZAL TAUFIK",
      "desc": "Latih kemampuan problem-solving, karena tantangan akan selalu ada dalam perjalananmu.",
      "image": "/assets/siswa/rpl2/MUHAMMAD AFRIZAL TAUFIK-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD FIKO PRATAMA PUTRA",
      "desc": "Thighs? I love them tbh.",
      "image": "/assets/siswa/rpl2/MUHAMMAD FIKO PRATAMA PUTRA-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD KATOPASHA",
      "desc": "Hi sayang ᘻ",
      "image": "/assets/siswa/rpl2/MUHAMMAD KATOPASHA-Photoroom.jpg"
    },
    {
      "name": "OLGANOPENDA KAHAMBIT",
      "desc": "Kembangkan rasa ingin tahu yang besar dan jangan pernah berhenti bertanya.",
      "image": "/assets/siswa/rpl2/OLGANOPENDA KAHAMBIT-Photoroom.jpg"
    },
    {
      "name": "PANDU SIGIT PAMUNGKAS",
      "desc": "Berani keluar dari zona nyaman akan membuka peluang-peluang baru yang menarik.",
      "image": "/assets/siswa/rpl2/PANDU SIGIT PAMUNGKAS-Photoroom.jpg"
    },
    {
      "name": "PETRUS HENDRICK GEYU",
      "desc": "Mau Punya Cewe Gothic :)",
      "image": "/assets/siswa/rpl2/PETRUS HENDRICK GEYU-Photoroom.jpg"
    },
    {
      "name": "REYNALDO KURNIAWAN",
      "desc": "Jalin relasi yang baik dengan orang lain, karena jaringan yang kuat adalah aset berharga.",
      "image": "/assets/siswa/rpl2/REYNALDO KURNIAWAN-Photoroom.jpg"
    },
    {
      "name": "SALWA ZAHRA PUTRI",
      "desc": "Rayakan setiap pencapaian, sekecil apapun, sebagai motivasi untuk terus maju.",
      "image": "/assets/siswa/rpl2/SALWA ZAHRA PUTRI-Photoroom.jpg"
    },
    {
      "name": "TESALONIKA SAPUTRA",
      "desc": "Belajarlah dari kesalahan dan jadikan itu sebagai batu loncatan untuk menjadi lebih baik.",
      "image": "/assets/siswa/rpl2/TESALONIKA SAPUTRA-Photoroom.jpg"
    },
    {
      "name": "VALERINO PUTRA CHARIS",
      "desc": "Tumbuhkan rasa empati dan peduli terhadap sesama.",
      "image": "/assets/siswa/rpl2/VALERINO PUTRA CHARIS-Photoroom.jpg"
    },
    {
      "name": "ZACHARY DAFFA ATVIAPUTRA",
      "desc": "Yakinlah pada potensi dirimu dan teruslah berusaha untuk menjadi versi terbaik dari dirimu.",
      "image": "/assets/siswa/rpl2/ZACHARY DAFFA ATVIAPUTRA-Photoroom.jpg"
    }
  ]

  const galleryImages = [
    { src: '/assets/pplg2/pplg2_ (1).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (2).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (3).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (4).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (5).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (6).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (7).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (8).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (9).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (10).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (11).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (12).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (13).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (14).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (15).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (16).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (17).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (18).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (19).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (20).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (21).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (22).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (23).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (24).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (25).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (26).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (27).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (28).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (29).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (30).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (31).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (32).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (33).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (34).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (35).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (36).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (37).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (38).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (39).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (40).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (41).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (42).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (43).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (44).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (45).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (46).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (47).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (48).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (49).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (50).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (51).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (52).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (53).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (54).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (55).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (56).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (57).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (58).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (59).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (60).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (61).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (62).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (63).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (64).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (65).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (66).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (67).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (68).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (69).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (70).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (71).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (72).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (73).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (74).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (75).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (76).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (77).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (78).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (79).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (80).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (81).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (82).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (83).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (84).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (85).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (86).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (87).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (88).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (89).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (90).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (91).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (92).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (93).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (94).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (95).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (96).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (97).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (98).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (99).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (100).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (101).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (102).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (103).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (104).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (105).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (106).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (107).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (108).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (109).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (110).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (111).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (112).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (113).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (114).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (115).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (116).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (117).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (118).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (119).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (120).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (121).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (122).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (123).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (124).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (125).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (126).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (127).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (128).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (129).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (130).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (131).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (132).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (133).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (134).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (135).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (136).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (137).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (138).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (139).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (140).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (141).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (142).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (143).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (144).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (145).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (146).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (147).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (148).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (149).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (150).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (151).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (152).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (153).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (154).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (155).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (156).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (157).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (158).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (159).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (160).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (161).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (162).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (163).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (164).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (165).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (166).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (167).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (168).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (169).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (170).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (171).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (172).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (173).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (174).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (175).jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg2/pplg2_ (176).jpg', alt: 'Kenangan Masa Sekolah 1' },

    { src: '/assets/pplg1/1.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/2.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/3.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/4.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/5.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/6.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/7.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/8.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/9.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/10.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/11.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/12.NEF', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/13.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/14.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/15.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/16.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/17.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/18.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/19.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/20.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/21.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/22.NEF', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/23.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/24.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/25.jpg', alt: 'Kenangan Masa Sekolah 1' },

    { src: '/assets/pplg1/26.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/27.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/28.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/29.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/30.jpeg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/31.jpeg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/32.jpeg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/33.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/assets/pplg1/34.jpg', alt: 'Kenangan Masa Sekolah 1' },
     { src: '/assets/pplg1/35.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/36.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/37.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/38.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/39.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/40.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/41.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/42.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/43.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/44.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/45.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/46.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/47.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/48.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/49.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/50.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/51.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/52.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/53.jpg', alt: 'Kenangan Masa Sekolah 1' },

  { src: '/assets/pplg1/54.jpeg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/55.jpeg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/56.jpeg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/57.jpeg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/58.jpeg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/59.jpeg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/60.jpeg', alt: 'Kenangan Masa Sekolah 1' },

  { src: '/assets/pplg1/61.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/62.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/63.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/64.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/65.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/66.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/67.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/68.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/69.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/70.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/71.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/72.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/73.jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg1/74.jpg', alt: 'Kenangan Masa Sekolah 1' },

  { src: '/assets/pplg2/rp (1).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (2).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (3).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (4).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (5).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (6).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (7).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (8).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (9).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (10).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (11).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (12).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (13).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (14).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (15).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (16).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (17).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (18).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (19).jpg', alt: 'Kenangan Masa Sekolah 1' },
  { src: '/assets/pplg2/rp (20).jpg', alt: 'Kenangan Masa Sekolah 1' },
  ];
  return (
    <main className="">
      <Hero />
      <Timeline />
      <Guru />
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md">
        Siswa
      </h1>
      <Siswa title="RPL 1" data={siswaRPL1} />
      <Siswa title="RPL 2" data={siswaRPL2} />
      <Gallery images={galleryImages} />
    </main>
  );
};

export default Home;
