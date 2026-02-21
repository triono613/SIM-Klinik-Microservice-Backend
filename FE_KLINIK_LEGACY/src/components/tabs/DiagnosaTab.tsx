import React from 'react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { FileTextIcon, SaveIcon } from 'lucide-react';
export function DiagnosaTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Diagnosa Pasien</h2>
          <p className="text-gray-500">Input rekam medis dan diagnosa dokter</p>
        </div>
        <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border shadow-sm">
          Dokter Pemeriksa:{' '}
          <span className="font-semibold text-gray-900">
            dr. Hendra Gunawan
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="flex items-center mb-6 pb-4 border-b">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 mr-4">
                SA
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Siti Aminah</h3>
                <p className="text-sm text-gray-500">
                  32 Th • Perempuan • No. RM: 001234
                </p>
              </div>
              <div className="ml-auto">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Alergi: Penicillin
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Anamnesa / Keluhan Utama
                </label>
                <textarea
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-[#0066CC] focus:outline-none focus:ring-1 focus:ring-[#0066CC] h-24"
                  placeholder="Pasien mengeluh demam sejak 3 hari yang lalu...">
                </textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input label="Tekanan Darah (mmHg)" placeholder="120/80" />
                <Input label="Suhu Tubuh (°C)" placeholder="36.5" />
                <Input label="Berat Badan (kg)" placeholder="60" />
                <Input label="Tinggi Badan (cm)" placeholder="165" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Diagnosa (ICD-10)
                </label>
                <div className="relative">
                  <Input
                    placeholder="Ketik kode atau nama diagnosa..."
                    icon={<FileTextIcon className="w-4 h-4" />} />

                </div>
              </div>
                 <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tindakan
                </label>
                <div className="relative">
                  <Input
                    placeholder="Ketik kode atau nama tindakan..."
                    icon={<FileTextIcon className="w-4 h-4" />} />

                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Terapi / Obat
                </label>
                <textarea
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-[#0066CC] focus:outline-none focus:ring-1 focus:ring-[#0066CC] h-24"
                  placeholder="Paracetamol 500mg 3x1...">
                </textarea>
              </div>
            </div>
 {/* <div className="mt-6 flex justify-end space-x-3">
              <Button variant="outline">Batal</Button>
              <Button>Simpan Data</Button>
            </div> */}
            <div className="mt-6 flex justify-end space-x-3">
              <Button variant="outline">Simpan Draft</Button>
              <Button>
                Simpan & Selesai
              </Button>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Riwayat Kunjungan
            </h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
              {
                date: '12 Jan 2024',
                diag: 'ISPA',
                doc: 'dr. Hendra'
              },
              {
                date: '10 Nov 2023',
                diag: 'Gastritis',
                doc: 'dr. Sarah'
              },
              {
                date: '05 Aug 2023',
                diag: 'Check-up',
                doc: 'dr. Hendra'
              }].
              map((hist, i) =>
              <div
                key={i}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#0066CC] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <FileTextIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 shadow bg-white">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-900 text-sm">
                        {hist.diag}
                      </div>
                      <time className="font-caveat font-medium text-[#0066CC] text-xs">
                        {hist.date}
                      </time>
                    </div>
                    <div className="text-slate-500 text-xs">{hist.doc}</div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>);

}