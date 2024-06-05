import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Modal, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, Eye, FilePenLine, Maximize2, Trash2 } from "lucide-react";
import ModalStatus from "../modal/modal-status";
import { SyaratPendaftaranTypes } from "@/services/data-types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createSoalSeleksi } from "@/services/admin/soal/create-soal";
import { editSoalSeleksi } from "@/services/admin/soal/edit-soal";
import { usedeleteSoalSeleksi } from "@/services/admin/soal/delete-soal";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useGetSyaratPendaftaran } from "@/services/admin/syarat-pendaftaran/get-syarat-pendafataran";
import { createSyaratPendaftaran } from "@/services/admin/syarat-pendaftaran/create-syarat-pendaftaran";
import { editSyaratPendaftaran } from "@/services/admin/syarat-pendaftaran/edit-syarat-pendaftaran";
import { usedeleteSyaratPendaftaran } from "@/services/admin/syarat-pendaftaran/delete-syarat-pendaftaran";

const { confirm } = Modal;

interface DataType {
  key?: string;
  id?: string;
  syarat_pendaftaran: string;
}

export default function TableSyaratPendaftaran() {
  const [data, setData] = useState<SyaratPendaftaranTypes[] | null>(null);
  // const [data, setData] = useState<SyaratPendaftaranTypes[]>([]);
  const [modeEdit, setModeEdit] = useState(false);
  const [editedId, setEditedId] = useState<string | undefined>(undefined);
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [Label, setLabel] = useState("");

  const {
    data: dataSyaratPendaftaran,
    isLoading,
    isError,
  } = useGetSyaratPendaftaran();

  useEffect(() => {
    if (!isLoading && !isError) {
      setData(dataSyaratPendaftaran || []);
    }
  }, [dataSyaratPendaftaran, isLoading, isError]);

  const { mutate } = usedeleteSyaratPendaftaran();

  console.log(data, "data");

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text) => <>{text}</>,
    },
    {
      title: "Syarat Pendaftaran",
      dataIndex: "syarat_pendaftaran",
      key: "syarat_pendaftaran",
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
            onClick={() => handleEdit(record.id, record.syarat_pendaftaran)}
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

  console.log(data, "penddd");

  const dataSource: DataType[] = data
    ? data.map((item, index) => ({
        key: (index + 1).toString(),
        id: item._id,
        syarat_pendaftaran: item.syarat_pendaftaran,
      }))
    : [];

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;
      if (id === "Label") setLabel(value);
    }
  };

  const handleCreate = () => {
    if (!Label) {
      toast.error("Syarat Pendaftaran wajib diisi");
      return;
    }

    createSyaratPendaftaran({
      syarat_pendaftaran: Label,
    });

    toast.success("Tambah Data Berhasil");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  // Edit Soal
  const handleEdit = (id: string | undefined, soal: string) => {
    setModeEdit(true);
    setLabel(soal);
    setEditedId(id);
  };

  const handleCancelEdit = () => {
    setModeEdit(false);
    setLabel("");
    setEditedId(undefined);
  };

  const handleUpdate = () => {
    if (!Label) {
      toast.error("Syarat Pendaftaran wajib diisi");
      return;
    }

    if (!editedId) {
      toast.error("ID tidak ditemukan");
      return;
    }

    editSyaratPendaftaran(editedId, {
      syarat_pendaftaran: Label,
    })
      .then(() => {
        setData((prevData) => {
          if (prevData !== null) {
            return prevData.map((item) => {
              if (item._id === editedId) {
                return { ...item, syarat_pendaftaran: Label }; // Update data yang diubah
              } else {
                return item;
              }
            });
          } else {
            return null;
          }
        });
        toast.success("Update Soal Berhasil");
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
      setData((prevData: SyaratPendaftaranTypes[] | null) => {
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
            id="Label"
            onChange={handleInput}
            placeholder="Tambah Syarat Pendaftaran"
            value={Label}
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
