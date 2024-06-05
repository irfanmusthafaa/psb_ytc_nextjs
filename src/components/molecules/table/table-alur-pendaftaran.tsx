import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Modal, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Expand, Eye, FilePenLine, Maximize2, Trash2 } from "lucide-react";
import {
  AlurPendaftaranTypes,
  SyaratPendaftaranTypes,
} from "@/services/data-types";
import { toast } from "react-toastify";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useGetSyaratPendaftaran } from "@/services/admin/syarat-pendaftaran/get-syarat-pendafataran";
import { createSyaratPendaftaran } from "@/services/admin/syarat-pendaftaran/create-syarat-pendaftaran";
import { editSyaratPendaftaran } from "@/services/admin/syarat-pendaftaran/edit-syarat-pendaftaran";
import { usedeleteSyaratPendaftaran } from "@/services/admin/syarat-pendaftaran/delete-syarat-pendaftaran";
import { useGetAlurPendaftaran } from "@/services/admin/alur-pendaftaran/get-alur-pendaftaran";
import { usedeleteAlurPendaftaran } from "@/services/admin/alur-pendaftaran/delete-alur-pendaftaran";
import { createAlurPendaftaran } from "@/services/admin/alur-pendaftaran/create-alur-pendaftaran";
import { editAlurPendaftaran } from "@/services/admin/alur-pendaftaran/edit-alur-pendaftaran";

const { confirm } = Modal;

interface DataType {
  key?: string;
  id?: string;
  alur_pendaftaran: string;
}

export default function TableAlurPendaftaran() {
  const [data, setData] = useState<AlurPendaftaranTypes[] | null>(null);
  // const [data, setData] = useState<SyaratPendaftaranTypes[]>([]);
  const [modeEdit, setModeEdit] = useState(false);
  const [editedId, setEditedId] = useState<string | undefined>(undefined);
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [Label, setLabel] = useState("");

  const {
    data: dataAlurPendaftaran,
    isLoading,
    isError,
  } = useGetAlurPendaftaran();

  useEffect(() => {
    if (!isLoading && !isError) {
      setData(dataAlurPendaftaran || []);
    }
  }, [dataAlurPendaftaran, isLoading, isError]);

  const { mutate } = usedeleteAlurPendaftaran();

  console.log(data, "data");

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text) => <>{text}</>,
    },
    {
      title: "Alur Pendaftaran",
      dataIndex: "alur_pendaftaran",
      key: "alur_pendaftaran",
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
            onClick={() => handleEdit(record.id, record.alur_pendaftaran)}
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
        alur_pendaftaran: item.alur_pendaftaran,
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
      toast.error("Alur Pendaftaran wajib diisi");
      return;
    }

    createAlurPendaftaran({
      alur_pendaftaran: Label,
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
      toast.error("Alur Pendaftaran wajib diisi");
      return;
    }

    if (!editedId) {
      toast.error("ID tidak ditemukan");
      return;
    }

    editAlurPendaftaran(editedId, {
      syarat_pendaftaran: Label,
    })
      .then(() => {
        setData((prevData) => {
          if (prevData !== null) {
            return prevData.map((item) => {
              if (item._id === editedId) {
                return { ...item, alur_pendaftaran: Label }; // Update data yang diubah
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
      setData((prevData: AlurPendaftaranTypes[] | null) => {
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
            placeholder="Tambah Alur Pendaftaran"
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
