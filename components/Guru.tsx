import Image from "next/image";

const waliKelas = [
  {
    name: "Salsabian Ayudhanita P.",
    role: "Wali Kelas XI RPL 1",
    image: "/assets/guru/buEmma.jpg",
  },
  {
    name: "Jonathan Joestar",
    role: "Wali Kelas XI RPL 2",
    image: "/assets/guru/pakYefta.jpg",
  },
];

const guruRPL = [
  { name: "Fitria Annisa", role: "Sistem Komputer", image: "/assets/guru/BuFitri.png" },
  { name: "Fienny Rompas", role: "Web Programming", image: "/assets/guru/BuRizky.png" },
  { name: "Fifi", role: "AI/ML", image: "/assets/guru/BuYeni.png" },
  { name: "Riky", role: "Multimedia", image: "/assets/guru/PakRaja.png" },
  { name: "Yoshua Wironomo", role: "Backend Laravel", image: "/assets/guru/PakYarmu.png" },
  { name: "Yenny", role: "Web Programming", image: "/assets/guru/PakYos.png" },
];

export default function Guru() {
  return (
    <section className=" text-white font-extrabold py-16 px-6 md:px-20">
    <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md">
  Wali Kelas
</h2>


      <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
        {waliKelas.map((guru, idx) => (
          <div key={idx} className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-white">
              <Image
                src={guru.image}
                alt={guru.name}
                width={160}
                height={160}
                className="object-cover w-full h-full z-1"
              />
            </div>
            <p className="text-white text-center drop-shadow-md">{guru.name}</p>
            <p className="text-white text-center drop-shadow-md">{guru.role}</p>
          </div>
        ))}
      </div>

      <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md">
  Guru RPL
</h2>


      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {guruRPL.map((guru, idx) => (
          <div key={idx} className="text-center">
            <div className="w-36 h-36 md:w-40 md:h-40 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-white">
              <Image
                src={guru.image}
                alt={guru.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="font-semibold">{guru.name}</p>
            <p className="text-sm text-white/70">{guru.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
