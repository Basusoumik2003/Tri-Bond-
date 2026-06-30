import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, loading, user, logout } = useAuth();

  // Get avatar initial for mobile view
  const getAvatarInitial = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#faf8ff]/80 backdrop-blur-md border-b border-[#c7c4d7]/30">
      <nav className="flex justify-between items-center h-20 px-6 md:px-10 xl:px-16 max-w-7xl mx-auto">

        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-[#4648d4] tracking-tight select-none hover:opacity-95 transition-opacity">
          TriBond
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 items-center">
          {['Features', 'Solutions', 'Resources', 'Pricing'].map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-200 ${
                i === 0
                  ? 'text-[#4648d4] font-semibold border-b-2 border-[#4648d4] pb-0.5'
                  : 'text-[#464554] hover:text-[#4648d4]'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex gap-4 items-center">
          {!loading && (
            <>
              {isAuthenticated ? (
                <ProfileDropdown />
              ) : (
                <>
                  <button
                    onClick={() => navigate('/login')}
                    className="text-sm text-[#464554] hover:text-[#4648d4] font-medium cursor-pointer transition-colors duration-200"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => navigate('/login', { state: { mode: 'signup' } })}
                    className="bg-[#4648d4] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#6b38d4] active:scale-95 cursor-pointer transition-all shadow-sm"
                  >
                    Get Started
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#464554] hover:text-[#4648d4] p-2 transition-colors focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 w-full bg-white border-b border-[#c7c4d7]/30 shadow-lg py-6 px-6 flex flex-col gap-5 animate-fadeIn">
          {['Features', 'Solutions', 'Resources', 'Pricing'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-base text-[#464554] hover:text-[#4648d4] font-medium transition-colors"
            >
              {link}
            </a>
          ))}
          <hr className="border-[#c7c4d7]/30 my-1" />
          {!loading && (
            <>
              {isAuthenticated ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 px-2 py-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#4648d4] to-[#6b38d4] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {getAvatarInitial()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#131b2e] truncate">
                        {user?.name || 'User'}
                      </p>
                      <p className="text-xs text-[#464554] truncate">
                        {user?.email || ''}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      console.log('Profile clicked');
                    }}
                    className="w-full text-left text-[#464554] hover:text-[#4648d4] font-medium py-2 cursor-pointer"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      console.log('Dashboard clicked');
                    }}
                    className="w-full text-left text-[#464554] hover:text-[#4648d4] font-medium py-2 cursor-pointer"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      console.log('Settings clicked');
                    }}
                    className="w-full text-left text-[#464554] hover:text-[#4648d4] font-medium py-2 cursor-pointer"
                  >
                    Settings
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full text-left text-red-500 hover:text-red-600 font-medium py-2 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/login');
                    }}
                    className="w-full text-center text-[#464554] hover:text-[#4648d4] font-medium py-2 cursor-pointer"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/login', { state: { mode: 'signup' } });
                    }}
                    className="w-full bg-[#4648d4] text-white py-3 rounded-lg font-semibold hover:bg-[#6b38d4] cursor-pointer transition-all"
                  >
                    Get Started
                  </button>
                </>
              )}
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
