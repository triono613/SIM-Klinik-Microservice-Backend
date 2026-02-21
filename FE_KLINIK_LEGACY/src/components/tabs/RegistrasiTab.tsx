import React, { useState } from 'react';
import { PlusIcon, UserIcon, LockIcon } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../../pages/AuthContext';


interface PasienFormData {
  nikPasien: string;
  nama: string;
  tglLhr: string;
  jk: string;
  notelp: string;
  email: string;
  alamat: string;
}

interface PostResponse {
  message: string;
  access_token: string;
  token_type: string;
  user: {
    id: string;
    nama: string;
    email: string;
    role: string;
  }
}

export function RegistrasiTab() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

    const { token, user, logout } = useAuth();

  const [formData, setFormData] = useState<PasienFormData>({
    nikPasien: '',
    nama: '',
    tglLhr: '',
    jk: '',
    notelp: '',
    email: '',
    alamat: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // setSuccess('');
    // setLoading(true);

    console.log('formData: token ', formData,'-', token);
     console.log('token: ', formData);

    if (!token) {
      setError('Anda harus login terlebih dahulu.');
      // setLoading(false);
      return;
    }
    // const newPost: PostData = {nikPasien ,nama, tglLhr: new Date(tglLhr), jk, notelp, email, alamat };
    const API_URL = import.meta.env.VITE_PROJECT_URL + "api/pasien";

    try {

      const payload = {
        nik_pasien: formData.nikPasien.trim(),
        nama_pasien: formData.nama.trim(),
        tanggal_lahir: formData.tglLhr,           // "YYYY-MM-DD"
        jenis_kelamin: formData.jk,
        no_telp: formData.notelp.trim(),
        email_pasien: formData.email.trim(),
        alamat: formData.alamat.trim(),
      };
      console.log('formDatax: ', formData);


      const response = await axios.post<PostResponse>(
        API_URL,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,    //
          },
          // timeout: 12000,
        }
      );

      console.log('response: ', response)
      setMessage(response.data.message);
      // setToken(response.data.access_token);

      setError('');
      // navigate('/dashboard', { replace: true });
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(`Error post: ${axiosError.message}`);
      setMessage('');
    }


    setTimeout(() => {
      setIsLoading(false);

    }, 1000);
  };





  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Registrasi Pasien
          </h2>
          <p className="text-gray-500">
            Pendaftaran pasien baru dan pencarian data pasien lama
          </p>
          <p className='text-green-500'>
             { message }
          </p>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button>Pasien Baru</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Registration Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
              Formulir Pendaftaran
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name='nikPasien'
                  label="NIK"
                  type="text"
                  placeholder="3201xxxxxxxxxxxx"
                  value={formData.nikPasien}
                  onChange={handleChange}
                  icon={<UserIcon className="w-5 h-5" />}
                  required
                />

                <Input
                  name='nama'
                  label="Nama Lengkap"
                  type="text"
                  placeholder="Nama sesuai KTP"
                  value={formData.nama}
                  onChange={handleChange}
                  icon={<UserIcon className="w-5 h-5" />}
                  required />
                <Input
                  name="tglLhr"
                  label="Tanggal Lahir"
                  type="date"
                  
                  value={formData.tglLhr}
                  onChange={handleChange}
                  icon={<UserIcon className="w-5 h-5" />}
                  required />

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Jenis Kelamin
                  </label>
                  <select name="jk" value={formData.jk} onChange={handleChange} required
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-[#0066CC] focus:outline-none focus:ring-1 focus:ring-[#0066CC]">
                    <option value="">Pilih</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
                <Input
                  name='notelp'
                  placeholder="08xxxxxxxxxx"
                  label="No. Telepon"
                  type="text"
                  value={formData.notelp}
                  onChange={handleChange}
                  icon={<UserIcon className="w-5 h-5" />}
                  required />
                <Input
                  name='email'
                  label="Alamat Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com" />

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat Lengkap
                  </label>
                  <textarea className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-[#0066CC] focus:outline-none focus:ring-1 focus:ring-[#0066CC] h-24"
                    name='alamat'
                    value={formData.alamat}
                    onChange={handleChange}
                    rows={3} />
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <Button variant="outline">Batal</Button>
                <Button>Simpan Data</Button>
              </div>
            </form>
          </Card>
        </div>

        {/* Quick Search */}
        <div className="space-y-6">
          <Card className="bg-[#E0F2FE] border-blue-100">
            <h3 className="text-lg font-semibold text-[#0066CC] mb-2">
              Cari Pasien
            </h3>
            <p className="text-sm text-blue-700 mb-4">
              Cari data pasien yang sudah terdaftar untuk kunjungan ulang.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Cari nama atau NIK..."
                className="w-full pl-10 pr-4 py-2 rounded-md border-blue-200 focus:ring-2 focus:ring-[#0066CC] focus:border-transparent" />

              {/* <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-blue-400" /> */}
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Kunjungan Terakhir
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) =>
                <div
                  key={i}
                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-100">

                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium mr-3">
                    BP
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Budi Pratama
                    </p>
                    <p className="text-xs text-gray-500">
                      2 Hari yang lalu • Poli Umum
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>);

} 