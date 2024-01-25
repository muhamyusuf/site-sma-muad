export default function IntroSection() {
  return (
    <main className="py-5">
      <div className="bg-blueAccentForeground w-full min-h-[300px] md:min-h-[500px] rounded-md flex items-start pt-10 justify-center">
        <div className="flex flex-col items-center text-center">
          <p className="opacity-50">Bukan Bualan Belaka</p>

          <h2 className="text-xl font-bold mt-5">
            Prestasi Ciamik{" "}
            <span className="font-bold text-white">SMA MuAD</span> <br />
            Baik Akademik Maupun Non Akademik
          </h2>

          <div className="bg-blueAccent w-[100px] h-1 rounded-lg mt-2" />
        </div>
      </div>

      {/* Video Backgorund */}
      <div className="flex justify-center items-center -mt-10">
        Dikasi Video Background
      </div>
    </main>
  );
}
