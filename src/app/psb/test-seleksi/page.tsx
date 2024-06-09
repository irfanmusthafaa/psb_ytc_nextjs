"use client";

import { SantriTypes } from "@/services/data-types";
import { useGetProfileUser } from "@/services/user/profil/get-profil";
import { createSeleksi } from "@/services/user/seleksi/create-seleksi";
import { EditSeleksi } from "@/services/user/seleksi/edit-seleksi";
import { useGetSoalSeleksi } from "@/services/user/seleksi/get-soal-seleksi";
import { Button, Input, Select } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface SoalSeleksiData {
  soal: string;
  _id: any;
  value: string;
  label: string;
}

export default function Seleksi() {
  const [Profile, setProfile] = useState<SantriTypes | null>(null);
  const [Soal, setSoal] = useState<SoalSeleksiData[]>([]);
  const [SelectedSoal, setSelectedSoal] = useState("");
  const [editedId, setEditedId] = useState<string | undefined>(undefined);

  const [SoalSeleksi, setSoalSeleksi] = useState("");
  const [LinkRekaman, setLinkRekaman] = useState("");

  const {
    data: dataProfile,
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
  } = useGetProfileUser();
  const {
    data: dataSoal,
    isLoading: isLoadingSoal,
    isError: isErrorSoal,
  } = useGetSoalSeleksi();

  useEffect(() => {
    if (!isLoadingProfile && !isErrorProfile && dataProfile) {
      setProfile(dataProfile || {});
      setProfile(dataProfile);

      if (dataProfile?.seleksi_id?.soal_seleksi) {
        const soal = dataProfile?.seleksi_id.soal_seleksi;
        setSoalSeleksi(soal);
      }

      if (dataProfile?.seleksi_id?.link_rekaman) {
        const link = dataProfile?.seleksi_id.link_rekaman;
        setLinkRekaman(link);
      }
      if (dataProfile?.seleksi_id?._id) {
        setEditedId(dataProfile?.seleksi_id?._id);
      }
    }
    setSoal(dataSoal);
  }, [
    dataSoal,
    dataProfile,
    // dataProfile?.seleksi_id?.soal_seleksi,
    dataProfile?.seleksi_id?.link_rekaman,
    isLoadingProfile,
    isErrorProfile,
    isLoadingSoal,
    isErrorSoal,
  ]);

  console.log(editedId, "id");
  console.log(SoalSeleksi, "soal");
  console.log(LinkRekaman, "link");
  console.log(Profile, "profi");

  const soalOptions =
    Soal?.map((item) => ({
      key: item._id,
      value: item.soal,
      label: item.soal ?? "",
    })) ?? [];

  const handleChangeSoal = (value: string) => {
    setSoalSeleksi(value);
  };

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;
      if (id === "LinkRekaman") setLinkRekaman(value);
    }
  };

  const handleSubmit = async () => {
    if (!SoalSeleksi) {
      toast.error("Soal Seleksi wajib diisi");
      return;
    }
    if (!LinkRekaman) {
      toast.error("Link Rekaman wajib diisi");
      return;
    }

    try {
      if (editedId) {
        await EditSeleksi(editedId, {
          soal_seleksi: SoalSeleksi,
          link_rekaman: LinkRekaman,
        });
        toast.success("Edit Infaq Success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        await createSeleksi({
          soal_seleksi: SoalSeleksi,
          link_rekaman: LinkRekaman,
        });
        toast.success("Create Infaq Success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      toast.error("Update Infaq Failed");
    }
    // createSeleksi({
    //   soal_seleksi: SoalSeleksi,
    //   link_rekaman: LinkRekaman,
    // });

    // toast.success("Update Seleksi Berhasil");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  return (
    <div className="bg-white h-auto m-8 box-border w-max-full rounded-xl text-black">
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
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Soal Seleksi</label>
              <Select
                // defaultValue={SoalSeleksi}
                placeholder="Pilih soal seleksi"
                onChange={handleChangeSoal}
                options={soalOptions}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Link Rekaman Video</label>
              <Input
                id="LinkRekaman"
                value={LinkRekaman}
                onChange={handleInput}
                placeholder="Link Video"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Form */}

      <div className="py-10 px-6 flex justify-start items-center">
        <Button
          type="primary"
          className="bg-[#273b83]"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit Infaq
          {/* {isEditMode ? "Edit Infaq" : "Submit Infaq"} */}
        </Button>
      </div>
    </div>
  );
}
