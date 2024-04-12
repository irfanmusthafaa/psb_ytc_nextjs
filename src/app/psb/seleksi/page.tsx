import { Button, Input } from "antd";

export default function Seleksi() {
  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl">
      <div className=" border-b border-b-gray-200 px-6 py-4 rounded-t-xl">
        <p className="text-black font-semibold text-xl">Test Seleksi</p>
      </div>

      {/* Form */}
      <div className="pt-5 px-6">
        <div className="w-full flex justify-start items-start gap-10">
          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-normal ">
                Upload link video rekaman Anda
              </p>
              <p>Membaca surah Maryam ayat 1-10</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Link Rekaman Video</label>
              <Input placeholder="Link Video" />
            </div>
          </div>
        </div>
      </div>
      {/* End Form */}

      <div className="py-10 px-6 flex justify-start items-center">
        <Button type="primary" className="bg-[#273b83]">
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
