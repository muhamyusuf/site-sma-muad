import { CarouselAlumni } from "../CarouselAlumni";

export default function Alumnis() {
  return (
    <main className="py-20">
      {/* Desc */}
      <div className="flex flex-col items-center text-center">
        <p className="opacity-50">Our Testimonial From Alumni&#x2019;s</p>

        <h2 className="text-xl font-bold mt-5">
          Masih Belum Percaya Dengan{" "}
          <span className="font-bold text-orangePrimary">SMA MuAD</span> ?{" "}
          <br />
          Coba Lihat Testimonial Dari Alumni Kami
        </h2>

        <div className="bg-blueAccent w-[100px] h-1 rounded-lg mt-2" />
      </div>

      {/* Alumni's Carousel */}
      <div className="mt-20">
        <CarouselAlumni />
      </div>
    </main>
  );
}
