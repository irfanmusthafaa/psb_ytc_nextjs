import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Modal, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, Eye, FilePenLine, Maximize2, Trash2 } from "lucide-react";
import {
  AlurPendaftaranTypes,
  CabangTypes,
  FasilitasTypes,
  ProgramTypes,
  SyaratPendaftaranTypes,
} from "@/services/data-types";
import { toast } from "react-toastify";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useGetFasilitas } from "@/services/admin/fasilitas/get-fasilitas";
import { usedeleteFasilitas } from "@/services/admin/fasilitas/delete-fasilitas";
import { createFasilitas } from "@/services/admin/fasilitas/create-fasilitas";
import { editFasilitas } from "@/services/admin/fasilitas/edit-fasilitas";
import { useGetCabang } from "@/services/admin/cabang/get-fasilitas";
import { usedeleteCabang } from "@/services/admin/cabang/delete-cabang";
import { createCabang } from "@/services/admin/cabang/create-cabang";
import { editCabang } from "@/services/admin/cabang/edit-cabang";

const { confirm } = Modal;

interface DataType {
  key?: string;
  id?: string;
  cabang: string;
  alamat: string;
}

export default function TableCabang() {
  const [data, setData] = useState<CabangTypes[] | null>(null);
  const [modeEdit, setModeEdit] = useState(false);
  const [editedId, setEditedId] = useState<string | undefined>(undefined);
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [Cabang, setCabang] = useState("");
  const [Alamat, setAlamat] = useState("");

  const { data: dataCabang, isLoading, isError } = useGetCabang();

  useEffect(() => {
    if (!isLoading && !isError) {
      setData(dataCabang || []);
    }
  }, [dataCabang, isLoading, isError]);

  const { mutate } = usedeleteCabang();

  console.log(data, "data");

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text) => <>{text}</>,
    },
    {
      title: "Cabang",
      dataIndex: "cabang",
      key: "cabang",
      render: (text) => <>{text}</>,
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "alamat",
      render: (text) => <>{text}</>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="dashed"
            className="flex justify-center items-center  gap-2  text-gray-700  border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
            onClick={() => handleEdit(record.id, record.cabang, record.alamat)}
          >
            <FilePenLine />
          </Button>
          <Button
            onClick={() => showDeleteConfirm(record.id)}
            type="dashed"
            className="flex justify-center items-center  gap-2  text-gray-700  border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
          >
            <Trash2 />
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource: DataType[] = data
    ? data.map((item, index) => ({
        key: (index + 1).toString(),
        id: item._id,
        cabang: item.cabang,
        alamat: item.alamat,
      }))
    : [];

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;
      if (id === "Cabang") setCabang(value);
    }
    if (e) {
      const { id, value } = e.target;
      if (id === "Alamat") setAlamat(value);
    }
  };

  const handleCreate = () => {
    if (!Cabang) {
      toast.error("Cabang wajib diisi");
      return;
    }
    if (!Alamat) {
      toast.error("Alamat wajib diisi");
      return;
    }

    createCabang({
      cabang: Cabang,
      alamat: Alamat,
    });

    toast.success("Tambah Data Berhasil");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  // Edit Soal
  const handleEdit = (
    id: string | undefined,
    cabang: string,
    alamat: string
  ) => {
    setModeEdit(true);
    setCabang(cabang);
    setAlamat(alamat);
    setEditedId(id);
  };

  const handleCancelEdit = () => {
    setModeEdit(false);
    setCabang("");
    setAlamat("");
    setEditedId(undefined);
  };

  const handleUpdate = () => {
    if (!Cabang) {
      toast.error("Cabang wajib diisi");
      return;
    }
    if (!Alamat) {
      toast.error("Alamat wajib diisi");
      return;
    }

    if (!editedId) {
      toast.error("ID tidak ditemukan");
      return;
    }

    editCabang(editedId, {
      cabang: Cabang,
      alamat: Alamat,
    })
      .then(() => {
        setData((prevData) => {
          if (prevData !== null) {
            return prevData.map((item) => {
              if (item._id === editedId) {
                return { ...item, cabang: Cabang, alamat: Alamat }; // Update data yang diubah
              } else {
                return item;
              }
            });
          } else {
            return null;
          }
        });
        toast.success("Update Data Berhasil");
        handleCancelEdit();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Gagal memperbarui data");
      });
  };

  // Delete
  const handleDelete = (id: string | undefined) => {
    if (id) {
      mutate(id);
      setDeletedId(id);
      toast.success("Berhasil menghapus data");

      //agar data update tanpa reload
      setData((prevData: CabangTypes[] | null) => {
        if (prevData) {
          return prevData.filter((item) => item._id !== id);
        } else {
          return null;
        }
      });
    } else {
      toast.error("ID tidak valid");
    }
  };

  const showDeleteConfirm = (id: string | undefined) => {
    confirm({
      title: "Apakah yakin akan menghapus data ini?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      okText: "Hapus",
      okType: "danger",
      cancelText: "Batal",
      onOk() {
        handleDelete(id);
      },
      onCancel() {
        return null;
      },
    });
  };

  return (
    <>
      <div className="pt-3">
        <div className="w-full flex justify-between gap-3 mb-3">
          <Input
            id="Cabang"
            onChange={handleInput}
            placeholder="Tambah Cabang"
            value={Cabang}
          />
          <Input
            id="Alamat"
            onChange={handleInput}
            placeholder="Tambah Alamat"
            value={Alamat}
          />
          {modeEdit ? (
            <Space>
              <Button type="primary" onClick={handleUpdate}>
                Simpan
              </Button>
              <Button onClick={handleCancelEdit}>Batal</Button>
            </Space>
          ) : (
            <Button
              type="primary"
              onClick={() => {
                handleCreate();
              }}
            >
              Tambah Data
            </Button>
          )}
        </div>

        <Table columns={columns} dataSource={dataSource} className="w-full" />
      </div>
    </>
  );
}
