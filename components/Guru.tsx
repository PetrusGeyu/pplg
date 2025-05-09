import Image from "next/image";

const waliKelas = [
  {
    name: "Emma Handayani",
    role: "Wali Kelas RPL 1",
    image: "/assets/guru/buEmma.jpg",
    message: "Dengan bimbingan dan kasih sayang, mari raih prestasi gemilang!",
  },
  {
    name: "Yefta Arisma",
    role: "Wali Kelas RPL 2",
    image: "/assets/guru/pakYefta.jpg",
    message: "Disiplin adalah kunci, kesuksesan adalah tujuan kita bersama.",
  },
];

const guruRPL = [
  { name: "Fitria Annisya", role: "Kepala Bengkel", image: "/assets/guru/BuFitri.png", message: "Bengkel adalah rumah kedua kita, mari jaga dan manfaatkan dengan baik." },
  { name: "Rizky Ananda Indriani", role: "Web Programming", image: "/assets/guru/BuRizky.png", message: "Jelajahi dunia web, kembangkan kreativitas tanpa batas!" },
  { name: "Yenni Astian Rompas", role: "Desktop Programming", image: "/assets/guru/BuYeni.png", message: "Kuasai logika desktop, bangun aplikasi yang handal dan inovatif." },
  { name: "Raja", role: "OOP", image: "/assets/guru/PakRaja.png", message: "Berpikir objek, solusi terstruktur untuk masalah yang kompleks." },
  { name: "Yarmu", role: "DSA", image: "/assets/guru/PakYarmu.png", message: "Algoritma yang efisien, data terstruktur, fondasi kokoh untuk perangkat lunak." },
  { name: "Yosua Witemorane", role: "MultiMedia", image: "/assets/guru/PakYos.png", message: "Ekspresikan ide melalui visual dan audio, ciptakan karya yang memukau." },
];

export default function Guru() {
  return (
    <section className="text-white font-extrabold py-16 px-6 md:px-20">
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md">
        Wali Kelas
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
        {waliKelas.map((guru, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-lg shadow-md overflow-hidden backdrop-filter backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-105 text-center w-full md:w-auto"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mt-4 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={guru.image}
                alt={guru.name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-1 drop-shadow-md">{guru.name}</h3>
              <p className="text-white text-sm opacity-80 drop-shadow-md">{guru.role}</p>
              {guru.message && (
                <p className="text-white text-sm italic mt-2 opacity-70 drop-shadow-md">&quot;{guru.message}&quot;</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md">
        Guru RPL
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {guruRPL.map((guru, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-lg shadow-md overflow-hidden backdrop-filter backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-105 text-center w-full sm:w-auto"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mt-4 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={guru.image}
                alt={guru.name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-1 drop-shadow-md">{guru.name}</h3>
              <p className="text-white text-sm opacity-80 drop-shadow-md">{guru.role}</p>
              {guru.message && (
                <p className="text-white text-sm italic mt-2 opacity-70 drop-shadow-md">&quot;{guru.message}&quot;</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}