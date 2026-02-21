import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardListIcon,
  UsersIcon,
  StethoscopeIcon,
  FileTextIcon,
  PackageIcon,
  CheckCircleIcon,
  PlusIcon,
  LogOutIcon } from
'lucide-react';
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}
export function Sidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  const menuItems = [
  {
    id: 'registrasi',
    label: 'Registrasi',
    icon: ClipboardListIcon
  },
  {
    id: 'antrian',
    label: 'Antrian',
    icon: UsersIcon
  },
   {
    id: 'diagnosa',
    label: 'Diagnosa',
    icon: FileTextIcon
  },
  {
    id: 'tindakan',
    label: 'Master Tindakan',
    icon: StethoscopeIcon
  },
 
  {
    id: 'logistik',
    label: 'Logistik',
    icon: PackageIcon
  },
  {
    id: 'selesai',
    label: 'Selesai',
    icon: CheckCircleIcon
  }];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 z-10 hidden md:flex">
      {/* Logo Area */}
      <div className="p-6 flex items-center space-x-3 border-b border-gray-100">
        <div className="bg-[#0066CC] p-1.5 rounded-lg text-white">
          <PlusIcon className="w-5 h-5" strokeWidth={3} />
        </div>
        <span className="font-bold text-gray-900 text-lg tracking-tight">
          HealthCare
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                relative w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors
                ${isActive ? 'text-[#0066CC]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
              `}>

              {isActive &&
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#0066CC] opacity-10 rounded-lg"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }} />

              }
              {isActive &&
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#0066CC] rounded-r-full"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }} />

              }
              <item.icon
                className={`w-5 h-5 mr-3 ${isActive ? 'text-[#0066CC]' : 'text-gray-400 group-hover:text-gray-500'}`} />

              <span className="relative z-10">{item.label}</span>
            </button>);

        })}
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center p-3 rounded-lg bg-gray-50 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs mr-3">
            DR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              dr. Hendra
            </p>
            <p className="text-xs text-gray-500 truncate">Dokter Umum</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">

          <LogOutIcon className="w-4 h-4 mr-2" />
          Keluar
        </button>
      </div>
    </aside>);

}