import BackgroundCircle from "@/components/BackgroundCircle";
import Gallery from "@/components/Gallery";
import Guru from "@/components/Guru";
import Hero from "@/components/Hero";
import Siswa from "@/components/Siswa";
import Timeline from "@/components/Timeline";

const Home = () => {
  const siswaRPL1 = [
    {
      "name": "AHMAD RIZKY",
      "desc": "Mimpi tidak akan menjadi kenyataan melalui keajaiban; ia membutuhkan keringat, tekad, dan kerja keras.",
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
      "desc": "Percayalah pada proses, nikmati setiap tahap perkembangan dirimu.",
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
      "desc": "Fokus pada apa yang bisa kamu kontrol dan biarkan yang lainnya mengalir.",
      "image": "/assets/siswa/rpl1/HADI RUSADI-Photoroom.jpg"
    },
    {
      "name": "HAFIZ HAYKAL PRATAMA",
      "desc": "Inspirasi datang dari tindakan. Mulailah bertindak sekarang.",
      "image": "/assets/siswa/rpl1/HAFIZ HAYKAL PRATAMA-Photoroom.jpg"
    },
    {
      "name": "HILAL NAZMI",
      "desc": "Ketekunan adalah ibu dari keberuntungan. Teruslah berusaha.",
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
      "desc": "Berani bermimpi besar dan bekerja keras untuk mewujudkannya.",
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
      "desc": "Latih kesabaran dan ketahanan mental dalam menghadapi setiap ujian.",
      "image": "/assets/siswa/rpl1/MUHAMMAD NADIRRAHMAN AL JAMILI-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD RAFLY RIZALDI",
      "desc": "Manfaatkan setiap kesempatan untuk belajar dan berkembang.",
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
      "desc": "Jadilah pribadi yang bertanggung jawab dan dapat diandalkan.",
      "image": "/assets/siswa/rpl1/SATYA CIPTA WIRAWAN-Photoroom.jpg"
    },
    {
      "name": "SEPTIAN ERIYANO FAZA",
      "desc": "Syukuri setiap pencapaian dan jadikan itu sebagai motivasi untuk terus maju.",
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
      "image": "/assets/siswa/rpl2/ADRIAN JOSHUA MAHARSA-Photoroom.jpg"
    },
    {
      "name": "ADRIANA OLIVIA",
      "desc": "Setiap langkah kecil adalah progres. Konsisten dan tekun akan membawamu pada kesuksesan.",
      "image": "/assets/siswa/rpl2/ADRIANA OLIVIA-Photoroom.jpg"
    },
    {
      "name": "ALGANI SAHAWIT",
      "desc": "Percayalah pada kemampuanmu sendiri dan jangan takut untuk mencoba hal baru.",
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
      "desc": "Jadikan semangat belajar sebagai kunci untuk membuka pintu kesuksesan.",
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
      "desc": "Jadilah agen perubahan yang membawa dampak positif bagi lingkungan sekitarmu.",
      "image": "/assets/siswa/rpl2/KANAROHAN DUMAS HAMARING KINDANGEN-Photoroom.jpg"
    },
    {
      "name": "KEYSHA SALSABILLA",
      "desc": "Kemandirian adalah kunci untuk meraih kebebasan dalam berkarya dan berinovasi.",
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
      "desc": "Hargai setiap proses yang kamu lalui, karena proses akan membentukmu menjadi lebih kuat.",
      "image": "/assets/siswa/rpl2/MUHAMMAD FIKO PRATAMA PUTRA-Photoroom.jpg"
    },
    {
      "name": "MUHAMMAD KATOPASHA",
      "desc": "Jadilah pendengar yang baik dan komunikator yang efektif.",
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
      "desc": "Manfaatkan teknologi dengan bijak untuk meningkatkan produktivitas dan kreativitasmu.",
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
    { src: '/images/kenangan1.jpg', alt: 'Kenangan Masa Sekolah 1' },
    { src: '/images/acara2.jpg', alt: 'Acara Sekolah 2023' },
    { src: '/images/kelas3.jpg', alt: 'Suasana Kelas XII RPL' },
    // ... tambahkan data foto lainnya
  ];
  return (
    <main className="">
      <BackgroundCircle />
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
