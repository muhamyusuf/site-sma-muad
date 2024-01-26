"use client";

export default function IntroSection() {
  return (
    <main className="py-5 relative overflow-hidden">
      <div className="w-full min-h-[400px] md:min-h-[600px] rounded-md flex items-start pt-10 justify-center">
        <div className="flex flex-col items-center text-center z-20">
          <p className="opacity-50 text-white">Bukan Bualan Belaka</p>

          <h2 className="text-xl font-bold mt-5 text-white">
            Prestasi Ciamik{" "}
            <span className="font-bold text-orangePrimary">SMA MuAD</span>{" "}
            <br />
            Baik Akademik Maupun Non Akademik
          </h2>

          <div className="bg-blueSecondary w-[100px] h-1 rounded-lg mt-2" />

          <div className="text-white mt-20">
            <p>
              100 medal emas, 200 perak, 300 perunggu, 400 piala, 500
              sertifikat,
            </p>
          </div>
        </div>
      </div>

      {/* Video Backgorund */}
      <div className="absolute z-10 inset-0 overflow-hidden brightness-50">
        <video
          src="/awwards-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover scale-150"
        />
      </div>
    </main>
  );
}
