import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Modal, Space, Table, Tag, Typography } from "antd";
import type { TableProps } from "antd";
import { Expand, Eye, FilePenLine, Maximize2, Trash2 } from "lucide-react";
import {
  AlurPendaftaranTypes,
  BankTypes,
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
import { useGetBank } from "@/services/user/bank/get-bank";
import { usedeleteBank } from "@/services/admin/bank/delete-bank";
import { createBank } from "@/services/admin/bank/create-bank";
import { editBank } from "@/services/admin/bank/edit-bank";

const { confirm } = Modal;

interface DataType {
  key?: string;
  id?: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export default function TableBank() {
  const [data, setData] = useState<BankTypes[] | null>(null);
  const [modeEdit, setModeEdit] = useState(false);
  const [editedId, setEditedId] = useState<string | undefined>(undefined);
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [Name, setName] = useState("");
  const [BankName, setBankName] = useState("");
  const [NoRekening, setNoRekening] = useState("");

  const { data: dataBank, isLoading, isError } = useGetBank();

  useEffect(() => {
    if (!isLoading && !isError) {
      setData(dataBank || []);
    }
  }, [dataBank, isLoading, isError]);

  const { mutate } = usedeleteBank();

  console.log(data, "data");

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text) => <>{text}</>,
    },

    {
      title: "Nama Bank",
      dataIndex: "bankName",
      key: "bankName",
      render: (text) => <>{text}</>,
    },
    {
      title: "No Rekening",
      dataIndex: "noRekening",
      key: "noRekening",
      render: (text) => <>{text}</>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
            onClick={() =>
              handleEdit(
                record.id,
                record.name,
                record.bankName,
                record.noRekening
              )
            }
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
        name: item.name,
        bankName: item.bankName,
        noRekening: item.noRekening,
      }))
    : [];

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e) {
      const { id, value } = e.target;
      if (id === "Name") setName(value);
    }
    if (e) {
      const { id, value } = e.target;
      if (id === "BankName") setBankName(value);
    }
    if (e) {
      const { id, value } = e.target;
      if (id === "NoRekening") setNoRekening(value);
    }
  };

  const handleCreate = () => {
    if (!BankName) {
      toast.error("Nama Bank wajib diisi");
      return;
    }
    if (!NoRekening) {
      toast.error("No Rekening wajib diisi");
      return;
    }
    if (!Name) {
      toast.error("Nama wajib diisi");
      return;
    }
    createBank({
      name: Name,
      bankName: BankName,
      noRekening: NoRekening,
    })
      .then(() => {
        toast.success("Tambah Data Berhasil");
        setData((prevData: any) => {
          if (prevData !== null) {
            return [
              ...prevData,
              {
                _id: Math.random().toString(),
                name: Name,
                bankName: BankName,
                noRekening: NoRekening,
              },
            ];
          } else {
            return null;
          }
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Gagal menambah data");
      });
  };

  // Edit Soal
  const handleEdit = (
    id: string | undefined,
    name: string,
    bankName: string,
    noRekening: string
  ) => {
    setModeEdit(true);
    setName(name);
    setBankName(bankName);
    setNoRekening(noRekening);
    setEditedId(id);
  };

  const handleCancelEdit = () => {
    setModeEdit(false);
    setName("");
    setBankName("");
    setNoRekening("");
    setEditedId(undefined);
  };

  const handleUpdate = () => {
    if (!BankName) {
      toast.error("Nama Bank wajib diisi");
      return;
    }
    if (!NoRekening) {
      toast.error("No Rekening wajib diisi");
      return;
    }
    if (!Name) {
      toast.error("Nama wajib diisi");
      return;
    }

    if (!editedId) {
      toast.error("ID tidak ditemukan");
      return;
    }

    editBank(editedId, {
      name: Name,
      bankName: BankName,
      noRekening: NoRekening,
    })
      .then(() => {
        setData((prevData) => {
          if (prevData !== null) {
            return prevData.map((item) => {
              if (item._id === editedId) {
                return {
                  ...item,
                  name: Name,
                  bankName: BankName,
                  noRekening: NoRekening,
                }; // Update data yang diubah
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
      setData((prevData: BankTypes[] | null) => {
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
      <div>
        <div className="w-full flex justify-between gap-3 mb-5">
          <div className="w-1/4 flex flex-col gap-1">
            <Typography>No Rekening: </Typography>
            <Input
              id="NoRekening"
              onChange={handleInput}
              placeholder="Tambah NoRekening"
              value={NoRekening}
            />
          </div>
          <div className="w-1/4 flex flex-col gap-1">
            <Typography>Bank: </Typography>
            <Input
              id="BankName"
              onChange={handleInput}
              placeholder="Tambah BankName"
              value={BankName}
            />
          </div>
          <div className="w-1/4 flex flex-col gap-1">
            <Typography>Atas Nama: </Typography>{" "}
            <Input
              id="Name"
              onChange={handleInput}
              placeholder="Tambah Atas Nama"
              value={Name}
            />
          </div>

          <div className="flex justify-end  items-end">
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
        </div>

        <Table columns={columns} dataSource={dataSource} className="w-full" />
      </div>
    </>
  );
}
