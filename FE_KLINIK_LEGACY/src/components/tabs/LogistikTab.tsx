import React from 'react';
import { Card } from '../ui/Card';
import { PackageIcon, AlertTriangleIcon, TrendingDownIcon } from 'lucide-react';
export function LogistikTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Logistik & Farmasi
          </h2>
          <p className="text-gray-500">
            Manajemen stok obat dan alat kesehatan
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Laporan Stok
          </button>
          <button className="px-4 py-2 bg-[#0066CC] text-white rounded-md text-sm font-medium hover:bg-[#0052a3]">
            Restock Barang
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white border-l-4 border-l-red-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Stok Menipis</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">5 Item</h3>
            </div>
            <div className="p-2 bg-red-100 rounded-lg text-red-600">
              <AlertTriangleIcon className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-red-600 mt-4 font-medium">
            Perlu restock segera
          </p>
        </Card>

        <Card className="bg-white border-l-4 border-l-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Item</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">1,240</h3>
            </div>
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <PackageIcon className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-green-600 mt-4 font-medium">
            Semua kategori
          </p>
        </Card>

        <Card className="bg-white border-l-4 border-l-orange-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Obat Keluar (Hari ini)
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">45</h3>
            </div>
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
              <TrendingDownIcon className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">Dari 12 resep dokter</p>
        </Card>
      </div>

      <Card noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3">Kode Barang</th>
                <th className="px-6 py-3">Nama Barang</th>
                <th className="px-6 py-3">Kategori</th>
                <th className="px-6 py-3">Stok</th>
                <th className="px-6 py-3">Satuan</th>
                <th className="px-6 py-3">Exp. Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
              {
                code: 'OBT-001',
                name: 'Paracetamol 500mg',
                cat: 'Obat Bebas',
                stock: 450,
                unit: 'Strip',
                exp: 'Des 2025',
                status: 'Aman'
              },
              {
                code: 'OBT-002',
                name: 'Amoxicillin 500mg',
                cat: 'Obat Keras',
                stock: 20,
                unit: 'Strip',
                exp: 'Okt 2024',
                status: 'Menipis'
              },
              {
                code: 'ALK-001',
                name: 'Spuit 3cc',
                cat: 'Alkes',
                stock: 1000,
                unit: 'Pcs',
                exp: 'Jan 2026',
                status: 'Aman'
              },
              {
                code: 'OBT-003',
                name: 'Vitamin C 500mg',
                cat: 'Suplemen',
                stock: 15,
                unit: 'Botol',
                exp: 'Mar 2025',
                status: 'Menipis'
              },
              {
                code: 'ALK-002',
                name: 'Masker Medis',
                cat: 'Alkes',
                stock: 50,
                unit: 'Box',
                exp: '-',
                status: 'Aman'
              }].
              map((item, i) =>
              <tr key={i} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.code}
                  </td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.cat}</td>
                  <td className="px-6 py-4 font-semibold">{item.stock}</td>
                  <td className="px-6 py-4">{item.unit}</td>
                  <td className="px-6 py-4">{item.exp}</td>
                  <td className="px-6 py-4">
                    <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Aman' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>

                      {item.status}
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>);

}