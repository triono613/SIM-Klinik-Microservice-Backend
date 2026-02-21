import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircleIcon, CalendarIcon, DownloadIcon } from 'lucide-react';
export function SelesaiTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Riwayat Selesai</h2>
          <p className="text-gray-500">
            Daftar kunjungan pasien yang telah selesai ditangani
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-white p-1 rounded-md border shadow-sm">
          <button className="px-3 py-1 text-sm font-medium bg-gray-100 rounded text-gray-900">
            Hari Ini
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900">
            Minggu Ini
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900">
            Bulan Ini
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {[
        {
          name: 'Budi Santoso',
          rm: '001230',
          poli: 'Poli Umum',
          doc: 'dr. Hendra',
          diag: 'Common Cold',
          time: '10:30',
          pay: 'Lunas'
        },
        {
          name: 'Rina Wati',
          rm: '001231',
          poli: 'Poli Gigi',
          doc: 'drg. Maya',
          diag: 'Pulpitis',
          time: '10:15',
          pay: 'Lunas'
        },
        {
          name: 'Ahmad Dahlan',
          rm: '001229',
          poli: 'Poli Umum',
          doc: 'dr. Hendra',
          diag: 'Hipertensi',
          time: '09:45',
          pay: 'BPJS'
        },
        {
          name: 'Siti Aminah',
          rm: '001234',
          poli: 'Poli Anak',
          doc: 'dr. Sarah',
          diag: 'Febris',
          time: '09:30',
          pay: 'Lunas'
        }].
        map((item, i) =>
        <Card key={i} className="hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-full text-green-600 mt-1">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      RM: {item.rm}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-600">
                    <span className="flex items-center">
                      <CalendarIcon className="w-3 h-3 mr-1" /> {item.time}
                    </span>
                    <span>•</span>
                    <span>{item.poli}</span>
                    <span>•</span>
                    <span>{item.doc}</span>
                  </div>
                  <p className="text-sm font-medium text-[#0066CC] mt-2">
                    Diagnosa: {item.diag}
                  </p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2">
                <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${item.pay === 'BPJS' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>

                  {item.pay}
                </span>
                <button className="text-sm text-gray-500 hover:text-[#0066CC] flex items-center">
                  <DownloadIcon className="w-4 h-4 mr-1" /> Resume Medis
                </button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>);

}