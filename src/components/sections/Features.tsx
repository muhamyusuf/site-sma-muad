import Image from "next/image";
import { Card } from "@/components/ui/card";

const featureDatas = [
  {
    order: "Firstly",
    title: "Guru Profesional dan Kompeten",
    desc: "Guru yang berpengalaman dan memiliki kompetensi di bidangnya masing-masing akan membimbing siswa dalam proses belajar mengajar",
    image: "/pro-teacher.jpg",
  },
  {
    order: "Secondary",
    title: "Fasilitas Lengkap dan Modern",
    desc: "Banyak fasilitas yang tersedia di SMA MuAD untuk menunjang kegiatan belajar mengajar",
    image: "/good-facility.jpg",
  },
  {
    order: "Thirdly",
    title: "Kurikulum Relevan dan Terkini",
    desc: "Kurikulum yang disusun dengan baik serta mengikuti perkembangan zaman akan membuat siswa siap menghadapi tantangan di masa depan",
    image: "/best-curriculum.jpg",
  },
];

export default function Features() {
  return (
    <main className="py-20">
      {/* Desc */}
      <div className="flex flex-col items-center text-center">
        <p className="opacity-50">Featured in SMA MuAD</p>

        <h2 className="text-xl font-bold mt-5">
          Penunjang Siswa-Siswi{" "}
          <span className="font-bold text-orangePrimary">SMA MuAD</span> <br />
          Dalam Kegiatan Belajar Mengajar
        </h2>

        <div className="bg-blueAccent w-[100px] h-1 rounded-lg mt-2" />
      </div>

      {/* Feature */}
      <div className="flex flex-col mt-10 gap-5">
        {featureDatas.map((item, index) => (
          <Card
            key={index}
            className={`${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } p-5 items-center gap-5 flex flex-col-reverse min-h-[400px] border-none z-30 shadow-none`}
          >
            <div className="md:w-1/2 w-full">
              <p className="opacity-70">
                <span className="font-extrabold">&#xb7;</span> {item.order}
              </p>

              <h3 className="font-bold mt-2 text-3xl">{item.title}</h3>

              <div className="bg-blueAccent w-[100px] h-1 rounded-lg mt-2" />

              <p className="mt-5 text-lg opacity-80">{item.desc}</p>
            </div>

            <div className="md:w-1/2 w-full overflow-hidden">
              <Image
                src={item.image}
                alt="icon"
                width={1280}
                height={700}
                loading="lazy"
                quality={100}
              />
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
