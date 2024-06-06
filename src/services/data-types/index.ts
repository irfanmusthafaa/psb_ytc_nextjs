export interface SantriTypes {
  active: boolean;
  _id: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  phoneNumber: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  nik: string;
  pendidikan_terakhir: string;
  kota_asal: string;
  alamat: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  nama_ayah: string;
  nama_ibu: string;
  no_telp_ortu: string;
  pekerjaan_ayah: string;
  pekerjaan_ibu: string;
  penghasilan_ortu: number;
  alamat_ortu: string;
  infaq_id: InfaqTypes;
  document_id: DocumentTypes;
  seleksi_id: SeleksiTypes;
}


export interface DataAllSantriTypes {
    data: [ {
        active: boolean;
    _id: string;
    email: string;
    name: string;
    role: string;
    avatar: string;
    phoneNumber: string;
    tanggal_lahir: string;
    jenis_kelamin: string;
    nik: string;
    pendidikan_terakhir: string;
    kota_asal: string;
    alamat: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    nama_ayah: string;
    nama_ibu: string;
    no_telp_ortu: string;
    pekerjaan_ayah: string;
    pekerjaan_ibu: string;
    penghasilan_ortu: number;
    alamat_ortu: string;
    infaq_id: InfaqTypes;
    document_id: DocumentTypes;
    seleksi_id: SeleksiTypes;
    }

    ]
    
  }

export interface InfaqTypes {
  _id: string;
  rekening_tujuan: string;
  atas_nama: string;
  total_transfer: number;
  bukti_pembayaran: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface DocumentTypes {
  _id: string;
  ktp: string;
  kk: string;
  ijazah: string;
  sertifikat: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface SeleksiTypes {
  _id: string;
  soal_seleksi: string;
  link_rekaman: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}


export interface SoalTypes {
  _id: string;
  soal: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface SyaratPendaftaranTypes {
  _id: string;
  syarat_pendaftaran: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface AlurPendaftaranTypes {
  _id: string;
  alur_pendaftaran: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ProgramTypes {
  _id: string;
  program: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface FasilitasTypes {
  _id: string;
  fasilitas: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface CabangTypes {
  _id: string;
  cabang: string;
  alamat: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface BankTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}