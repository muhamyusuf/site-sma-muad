import { Card } from "@/components/ui/card";
import Image from "next/image";

const whyDatas = [
  {
    title: "Kurikulum Terbaik",
    desc: "Kurikulum yang disusun oleh para ahli pendidikan dan psikologi anak",
    icon: "/next.svg",
  },
  {
    title: "Kurikulum Terbaik",
    desc: "Kurikulum yang disusun oleh para ahli pendidikan dan psikologi anak",
    icon: "/next.svg",
  },
];

export default function Why() {
  return (
    <main className="py-20">
      {/* Desc */}
      <div className="flex flex-col items-center text-center">
        <p className="opacity-50">Best Educational & Holistic School</p>

        <h2 className="text-xl font-bold mt-5">
          Hal Yang Membedakan{" "}
          <span className="font-bold text-orangePrimary">SMA MuAD</span> <br />
          Dari Sekolah Lainnya
        </h2>

        <div className="bg-blueAccent w-[100px] h-1 rounded-lg mt-2" />
      </div>

      {/* Feature */}
      <div className="flex flex-col md:flex-row mt-10 gap-5">
        {whyDatas.map((item, index) => (
          <Card
            key={index}
            className="p-5 flex flex-col items-center text-center"
          >
            <Image
              src={item.icon}
              alt="icon"
              width={100}
              height={100}
              quality={100}
              className="w-1/6 lg:w-1/12"
            />
            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
