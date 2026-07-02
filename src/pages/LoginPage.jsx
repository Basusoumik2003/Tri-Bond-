import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiEye, FiEyeOff, FiArrowLeft, FiMail, FiLock, FiUser, FiCheckCircle } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { MdVerified, MdCheckCircle } from 'react-icons/md';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register } = useAuth();
  
  // Check if navigation state requests signup mode
  const initialIsSignUp = location.state?.mode === 'signup';
  
  const [isSignUp, setIsSignUp] = useState(initialIsSignUp);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [authError, setAuthError] = useState('');

  // Sync state if navigation changes
  useEffect(() => {
    if (location.state?.mode) {
      setIsSignUp(location.state.mode === 'signup');
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (isSignUp && !formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms of Service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setAuthError('');

    let result;
    if (isSignUp) {
      result = await register(formData.name, formData.email, formData.password);
    } else {
      result = await login(formData.email, formData.password);
    }

    setIsLoading(false);

    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setAuthError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-sans lg:grid lg:grid-cols-12">
      
      {/* ── LEFT COLUMN: BRANDING & MOCKUP (Visible on lg screens) ── */}
      <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-[#4648d4] via-[#6063ee] to-[#6b38d4] text-white p-12 flex-col justify-between relative overflow-hidden">
        
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8455ef]/20 rounded-full blur-3xl pointer-events-none -translate-x-20 translate-y-20" />

        {/* Header/Logo */}
        <div className="relative z-10 flex items-center gap-2">
          <Link to="/" className="text-2xl font-extrabold tracking-tight hover:opacity-90 transition-opacity">
            TriBond
          </Link>
          <span className="bg-white/15 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase">
            v2.0
          </span>
        </div>

        {/* Middle Content: Graphic / Copy */}
        <div className="relative z-10 my-auto flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold leading-tight">
              Connect. Collaborate. Deliver.
            </h2>
            <p className="text-white/80 text-base leading-relaxed max-w-sm">
              The unified collaboration platform designed to bring remote and distributed teams closer together.
            </p>
          </div>

          {/* Interactive illustration mockup */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-2xl space-y-4 max-w-sm relative group overflow-hidden">
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full duration-1000 transition-all pointer-events-none" />
            
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="text-[10px] font-mono tracking-wider text-white/55">ACTIVE CALL</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">AM</div>
                  <div>
                    <div className="text-xs font-semibold">Alex Mercer</div>
                    <div className="text-[10px] text-white/60">UX Designer</div>
                  </div>
                </div>
                <div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-bold">
                  Speaking
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">SK</div>
                  <div>
                    <div className="text-xs font-semibold">Sora Kim</div>
                    <div className="text-[10px] text-white/60">Frontend Dev</div>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[11px] text-white/70">
              <span>Channel: #q4-redesign</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live Sync
              </span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="space-y-1 border-l-2 border-[#faf8ff]/30 pl-4">
            <p className="text-sm italic text-white/90">
              "TriBond has completely streamlined our team workflow. Real-time feedback has never been this smooth."
            </p>
            <p className="text-xs font-bold text-white/75">
              — Sarah Chen, Design Lead
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-xs text-white/60">
          &copy; 2024 TriBond Collaboration Inc. All rights reserved.
        </div>
      </div>

      {/* ── RIGHT COLUMN: AUTHENTICATION FORM (Centered on all screen sizes) ── */}
      <div className="flex-1 lg:col-span-7 flex flex-col justify-center items-center px-6 py-12 md:px-16 xl:px-24">
        
        {/* Back Link */}
        <div className="w-full max-w-md mb-8 self-center lg:self-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#464554] hover:text-[#4648d4] font-medium transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md bg-white border border-[#c7c4d7]/35 rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden">
          
          {/* Top glow border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4648d4] via-[#6063ee] to-[#6b38d4]" />

          {/* SUCCESS STATE */}
          {isSuccess ? (
            <div className="py-10 flex flex-col items-center justify-center text-center animate-fadeIn">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-200">
                <FiCheckCircle size={36} className="animate-bounce" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#131b2e] mb-2">
                Authentication Successful
              </h3>
              <p className="text-[#464554] text-sm max-w-xs">
                Welcome back! We are preparing your secure environment and redirecting you now.
              </p>
              
              {/* Spinner loader */}
              <div className="mt-8 flex gap-1 justify-center items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4648d4] animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4648d4] animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4648d4] animate-bounce" />
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-[#131b2e] tracking-tight">
                  {isSignUp ? 'Create account' : 'Welcome back'}
                </h1>
                <p className="text-sm text-[#464554] mt-1.5">
                  {isSignUp
                    ? 'Join thousands of collaborative teams today.'
                    : 'Enter your credentials to access your workspaces.'}
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3.5 mb-6">
                <button
                  type="button"
                  onClick={() => alert('Google OAuth coming soon! Please use email & password for now.')}
                  className="flex items-center justify-center gap-2 border border-[#c7c4d7]/40 hover:border-[#4648d4]/40 hover:bg-[#faf8ff] px-4 py-3 rounded-xl text-sm font-semibold active:scale-98 cursor-pointer transition-all"
                >
                  <FcGoogle size={18} />
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => alert('GitHub OAuth coming soon! Please use email & password for now.')}
                  className="flex items-center justify-center gap-2 border border-[#c7c4d7]/40 hover:border-[#4648d4]/40 hover:bg-[#faf8ff] px-4 py-3 rounded-xl text-sm font-semibold active:scale-98 cursor-pointer transition-all"
                >
                  <FaGithub size={18} className="text-[#131b2e]" />
                  GitHub
                </button>
              </div>

              {/* Separator */}
              <div className="relative flex py-3 items-center mb-6">
                <div className="flex-grow border-t border-[#c7c4d7]/20" />
                <span className="flex-shrink mx-4 text-xs text-[#464554] font-medium uppercase tracking-wider bg-white px-2">
                  Or continue with
                </span>
                <div className="flex-grow border-t border-[#c7c4d7]/20" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Auth Error Message */}
                {authError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {authError}
                  </div>
                )}
                
                {/* Full Name Input (Sign Up Only) */}
                {isSignUp && (
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-[#131b2e] uppercase tracking-wide">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#464554]/60">
                        <FiUser size={18} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={`w-full pl-11 pr-4 py-3 bg-[#faf8ff]/50 border rounded-xl text-sm transition-all outline-none focus:ring-2 focus:ring-[#4648d4]/20 ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#c7c4d7]/50 focus:border-[#4648d4] focus:bg-white'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
                  </div>
                )}

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-[#131b2e] uppercase tracking-wide">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#464554]/60">
                      <FiMail size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={`w-full pl-11 pr-4 py-3 bg-[#faf8ff]/50 border rounded-xl text-sm transition-all outline-none focus:ring-2 focus:ring-[#4648d4]/20 ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#c7c4d7]/50 focus:border-[#4648d4] focus:bg-white'
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-xs font-bold text-[#131b2e] uppercase tracking-wide">
                      Password
                    </label>
                    {!isSignUp && (
                      <button
                        type="button"
                        onClick={() => alert('Password reset link sent to registered email (Mocked)')}
                        className="text-xs text-[#4648d4] hover:text-[#6b38d4] font-semibold transition-colors cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#464554]/60">
                      <FiLock size={18} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={`w-full pl-11 pr-11 py-3 bg-[#faf8ff]/50 border rounded-xl text-sm transition-all outline-none focus:ring-2 focus:ring-[#4648d4]/20 ${
                        errors.password
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#c7c4d7]/50 focus:border-[#4648d4] focus:bg-white'
                      }`}
                      placeholder={isSignUp ? 'Create password' : '••••••••'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#464554]/60 hover:text-[#4648d4] transition-colors cursor-pointer"
                    >
                      {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-red-500 mt-1 font-medium">{errors.password}</p>}
                </div>

                {/* Terms checkbox (Sign Up) or Remember Me (Sign In) */}
                {isSignUp ? (
                  <div className="space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="mt-0.5 rounded border-[#c7c4d7] text-[#4648d4] focus:ring-[#4648d4] h-4 w-4"
                      />
                      <span className="text-xs text-[#464554] leading-relaxed">
                        I agree to the{' '}
                        <button type="button" className="text-[#4648d4] font-semibold hover:underline cursor-pointer">Terms of Service</button>{' '}
                        and{' '}
                        <button type="button" className="text-[#4648d4] font-semibold hover:underline cursor-pointer">Privacy Policy</button>.
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.agreeToTerms}</p>
                    )}
                  </div>
                ) : (
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      disabled={isLoading}
                      className="rounded border-[#c7c4d7] text-[#4648d4] focus:ring-[#4648d4] h-4 w-4"
                    />
                    <span className="text-xs text-[#464554] font-medium">Keep me signed in</span>
                  </label>
                )}

                {/* Primary Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#4648d4] hover:bg-[#6b38d4] active:scale-[0.98] disabled:bg-[#4648d4]/60 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 text-sm cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : isSignUp ? (
                    'Create Account'
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              {/* Toggles */}
              <div className="mt-8 text-center">
                <p className="text-sm text-[#464554]">
                  {isSignUp ? 'Already have an account?' : 'New to TriBond?'}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(!isSignUp);
                      setFormData({ name: '', email: '', password: '', agreeToTerms: false });
                      setErrors({});
                    }}
                    className="text-[#4648d4] hover:text-[#6b38d4] font-bold ml-1.5 transition-colors focus:outline-none cursor-pointer"
                  >
                    {isSignUp ? 'Sign In' : 'Create an account'}
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
