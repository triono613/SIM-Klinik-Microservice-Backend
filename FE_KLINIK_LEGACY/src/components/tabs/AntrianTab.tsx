import React, { useEffect, useState } from 'react';
import { Card } from '../ui/Card';
import { UsersIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../pages/AuthContext';


interface DataAntrianPasien {
  nama_pasien: string;
  tanggal_kunjungan: string;
  status_pasien: string;
}

export function AntrianTab() {
   const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  
   const { token, user, logout } = useAuth();
   const [queues, setQueues] = useState<DataAntrianPasien[]>([]);
  

  async function getDataPasien(){
    try {
      
       const API_URL = import.meta.env.VITE_PROJECT_URL + 'api/antrian';
       const response: AxiosResponse<DataAntrianPasien> = await axios.get(API_URL,{
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,    //
          },
          // timeout: 12000,
        }
      );

     console.log('Cek struktur data:', response.data);

    // Jika API langsung mengembalikan array:
    setQueues(response.data);;

    }
    catch (err){
      const exiosErr = err as AxiosError;
      setError(`Error post: ${exiosErr.message}`);
      setMessage('');
    }
  }


  useEffect(()=>{
    getDataPasien();

  },[]);

   useEffect(()=>{
      console.log('queues: ', queues)

  },[queues]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Antrian Pasien</h2>
          <p className="text-gray-500">
            Monitor antrian poliklinik secara real-time
          </p>
        </div>
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Online
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-100">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
              <UsersIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-600">Total Antrian</p>
              <p className="text-2xl font-bold text-blue-900">24 Pasien</p>
            </div>
          </div>
        </Card>
        <Card className="bg-teal-50 border-teal-100">
          <div className="flex items-center">
            <div className="p-3 bg-teal-100 rounded-lg text-teal-600 mr-4">
              <ClockIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-teal-600">
                Rata-rata Waktu Tunggu
              </p>
              <p className="text-2xl font-bold text-teal-900">15 Menit</p>
            </div>
          </div>
        </Card>
        <Card className="bg-purple-50 border-purple-100">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg text-purple-600 mr-4">
              <UsersIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-purple-600">
                Selesai Diperiksa
              </p>
              <p className="text-2xl font-bold text-purple-900">12 Pasien</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Queue List */}
      <Card noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
              <tr>
                {/* <th className="px-6 py-3">No. Antrian</th> */}
                <th className="px-6 py-3">Nama Pasien</th>
                <th className="px-6 py-3">Waktu Daftar</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>

              
              {queues.map((queue, index) =>
              <tr
                key={queue.id_kunjungan}
                className="bg-white border-b hover:bg-gray-50">

                  <td className="px-6 py-4">{queue.nama_pasien}</td>
                  <td className="px-6 py-4">{queue.tanggal_kunjungan}</td>
                  {/* <td className="px-6 py-4 text-gray-500">{queue.status_pasien}</td> */}
                  <td className="px-6 py-4">
                    {queue.status_pasien } &nbsp;
                    <span 
                    className={`inline-flex items-center 'text-gray-500'}`}>
                      {queue.status_pasien === 'Registrasi' &&
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    }
                      {/* {queue.status_pasien} */}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#0066CC] hover:text-[#0052a3] font-medium flex items-center">
                      Panggil <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </button>
                  </td>
                </tr>
              )}

              {
                
                // queues && (
                //   <tr className="bg-white border-b hover:bg-gray-50">
                //     <td className="px-6 py-4 font-medium text-gray-900">
                      
                //       {queues.nama_pasien}
                //       </td>
                //     <td className="px-6 py-4">{queues.tanggal_kunjungan}</td>
                //     <td className="px-6 py-4">
                //       <span
                //       className={`px-2 py-1 rounded-full text-xs font-medium ${queues.status_pasien === 'Registrasi' ? 'bg-blue-100 text-blue-800' : queues.status_pasien === 'Hadir' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                //       </span>
                //         {queues.status_pasien}
                //     </td>
                //     </tr>
                //       )

              }
            </tbody>
          </table>
        </div>
      </Card>
    </div>);

}