import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { StethoscopeIcon, PlusIcon } from 'lucide-react';
export function TindakanTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tindakan Medis</h2>
          <p className="text-gray-500">
            Daftar tindakan dan prosedur medis yang tersedia
          </p>
        </div>
        <Button icon={<PlusIcon className="w-4 h-4 mr-2" />}>
          Tambah Tindakan
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card noPadding>
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="font-semibold text-gray-900">Katalog Tindakan</h3>
              <div className="flex space-x-2">
                <select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Semua Kategori</option>
                  <option>Umum</option>
                  <option>Gigi</option>
                  <option>Bedah Minor</option>
                </select>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {[
              {
                name: 'Konsultasi Dokter Umum',
                code: 'TM-001',
                price: 'Rp 50.000',
                category: 'Umum'
              },
              {
                name: 'Pemeriksaan Gula Darah',
                code: 'TM-002',
                price: 'Rp 25.000',
                category: 'Lab'
              },
              {
                name: 'Pencabutan Gigi (Ringan)',
                code: 'TM-003',
                price: 'Rp 150.000',
                category: 'Gigi'
              },
              {
                name: 'Nebulizer',
                code: 'TM-004',
                price: 'Rp 75.000',
                category: 'Umum'
              },
              {
                name: 'Jahit Luka (1-3 jahitan)',
                code: 'TM-005',
                price: 'Rp 100.000',
                category: 'Bedah Minor'
              },
              {
                name: 'Pembersihan Karang Gigi',
                code: 'TM-006',
                price: 'Rp 200.000',
                category: 'Gigi'
              }].
              map((item, i) =>
              <div
                key={i}
                className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-[#0066CC]">
                      <StethoscopeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        Kode: {item.code} • {item.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{item.price}</p>
                    <button className="text-xs text-[#0066CC] hover:underline mt-1">
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-[#0D9488] text-white">
            <h3 className="text-lg font-bold mb-2">Tindakan Populer</h3>
            <p className="text-teal-100 text-sm mb-4">
              Tindakan yang paling sering dilakukan bulan ini.
            </p>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <span>Konsultasi Umum</span>
                <span className="bg-teal-700 px-2 py-0.5 rounded text-xs">
                  142x
                </span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span>Cek Gula Darah</span>
                <span className="bg-teal-700 px-2 py-0.5 rounded text-xs">
                  89x
                </span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span>Nebulizer</span>
                <span className="bg-teal-700 px-2 py-0.5 rounded text-xs">
                  56x
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>);

}