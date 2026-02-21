import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from '../components/Sidebar';
// import { RegistrasiTab } from '../components/tabs/RegistrasiTab';
import { RegistrasiTab } from '../components/tabs/RegistrasiTab';
import { AntrianTab } from '../components/tabs/AntrianTab';
import {TindakanTab } from '../components/tabs/TindakanTab';
import { DiagnosaTab } from '../components/tabs/DiagnosaTab';
import { LogistikTab } from '../components/tabs/LogistikTab';
import { SelesaiTab } from '../components/tabs/SelesaiTab';
import { MenuIcon, PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../pages/AuthContext';

export default function DashboardPage() {
   const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('registrasi');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { token, user, logout } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case 'registrasi':
        return <RegistrasiTab />;
      case 'antrian':
        return <AntrianTab />;
      case 'diagnosa':
        return <DiagnosaTab />;
      case 'tindakan':
        return <TindakanTab />;
      case 'logistik':
        return <LogistikTab />;
      case 'selesai':
        return <SelesaiTab />;
      default:
        return <RegistrasiTab />;
    }
  };


  useEffect(() => {

console.log('token: ', token);
console.log('user: ', user?.role);

  },[]);



  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={ logout } 
        />


      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center space-x-2">
          <div className="bg-[#0066CC] p-1 rounded text-white">
            <PlusIcon className="w-4 h-4" strokeWidth={3} />
          </div>
          <span className="font-bold text-gray-900">HealthCare</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-600">

          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen &&
      <div
        className="fixed inset-0 z-30 bg-gray-800 bg-opacity-50 md:hidden"
        onClick={() => setMobileMenuOpen(false)}>

          <div
          className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl p-4"
          onClick={(e) => e.stopPropagation()}>

            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">Menu</h2>
              <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-500">

                ✕
              </button>
            </div>
            <div className="space-y-2">
              {[
            'registrasi',
            'antrian',
             'diagnosa',
            'tindakan',
            'logistik',
            'selesai'].
            map((tab) =>
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg capitalize ${activeTab === tab ? 'bg-blue-50 text-[#0066CC] font-medium' : 'text-gray-600'}`}>

                  {tab}
                </button>
            )}
              <button
              onClick={logout}
              className="w-full text-left px-4 py-3 text-red-600 mt-4 border-t pt-4">

                Keluar xx
              </button>
            </div>
          </div>
        </div>
      }

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: 0.2
              }}>

              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>);

}