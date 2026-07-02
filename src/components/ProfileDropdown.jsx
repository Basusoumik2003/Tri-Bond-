import React, { useState } from 'react';
import { FiUser, FiLayout, FiSettings, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const ProfileDropdown = ({ onClose }) => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Get avatar initial (first letter of name or email)
  const getAvatarInitial = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  // Get avatar URL or null
  const avatarUrl = user?.profilePicture || null;
  const avatarInitial = getAvatarInitial();

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  };

  const dropdownItems = [
    { icon: FiUser, label: 'My Profile', action: () => console.log('Profile clicked') },
    { icon: FiLayout, label: 'Dashboard', action: () => console.log('Dashboard clicked') },
    { icon: FiSettings, label: 'Settings', action: () => console.log('Settings clicked') },
    { icon: FiLogOut, label: 'Logout', action: handleLogout, isDestructive: true },
  ];

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-1.5 pr-3 rounded-full hover:bg-[#faf8ff] transition-all duration-200 group"
        aria-label="User menu"
      >
        {/* Avatar */}
        <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-[#4648d4] to-[#6b38d4] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={user?.name || 'User'}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white font-bold text-sm">{avatarInitial}</span>
          )}
        </div>
        
        {/* User Name (Desktop) */}
        <span className="hidden lg:block text-sm font-semibold text-[#464554] group-hover:text-[#4648d4] transition-colors">
          {user?.name || 'User'}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Content */}
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-[#c7c4d7]/30 z-50 overflow-hidden animate-slideDown">
            {/* User Info Header */}
            <div className="bg-gradient-to-r from-[#4648d4] to-[#6b38d4] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 flex items-center justify-center border-2 border-white/30">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={user?.name || 'User'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg">{avatarInitial}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm truncate">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-white/70 text-xs truncate">
                    {user?.email || ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {dropdownItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    if (item.label !== 'Logout') {
                      setIsOpen(false);
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-5 py-3 text-sm transition-colors ${
                    item.isDestructive
                      ? 'text-red-500 hover:bg-red-50'
                      : 'text-[#464554] hover:bg-[#faf8ff] hover:text-[#4648d4]'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
