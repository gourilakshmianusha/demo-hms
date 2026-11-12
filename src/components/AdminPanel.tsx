import React, { useState, useEffect, useCallback } from 'react';
import { User, Workshop, NavbarItem, Appointment, ContactInquiry, WorkshopRegistration, LightRegistration } from '../types';
import { ThemedLogo } from './ThemedLogo';
import { apiFetch } from '../utils/apiClient';
import { 
  ShieldAlert, BookOpen, Menu as MenuIcon, Plus, Trash2, Edit2, 
  Check, X, Calendar, Clock, MapPin, Users, Save, Lock, ArrowLeft, RefreshCw,
  Mail, Phone, MessageSquare, Heart, Sparkles, Filter, ExternalLink, CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface AdminPanelProps {
  currentUser: User | null;
  onLoginSuccess: (user: User, token?: string) => void;
  onClose: () => void;
  onNavbarUpdated: () => void;
  onWorkshopsUpdated: () => void;
}

type AdminTab = 'appointments' | 'inquiries' | 'enrollments' | 'light' | 'workshops' | 'navbar';

export const AdminPanel: React.FC<AdminPanelProps> = ({
  currentUser,
  onLoginSuccess,
  onClose,
  onNavbarUpdated,
  onWorkshopsUpdated
}) => {
  // Admin Login States
  const [adminEmail, setAdminEmail] = useState('admin@myreincarnation.in');
  const [adminPassword, setAdminPassword] = useState('admin123');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<AdminTab>('appointments');

  // Stored Token & Clearance State
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('bodhi_token'));
  const [localAdmin, setLocalAdmin] = useState<User | null>(currentUser);

  // Data Collections
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [enrollments, setEnrollments] = useState<WorkshopRegistration[]>([]);
  const [lightRegs, setLightRegs] = useState<LightRegistration[]>([]);
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [navItems, setNavItems] = useState<NavbarItem[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');

  // Workshop Form Modal State
  const [showWorkshopModal, setShowWorkshopModal] = useState(false);
  const [editingWorkshopId, setEditingWorkshopId] = useState<string | null>(null);
  const [wsTitle, setWsTitle] = useState('');
  const [wsSubtitle, setWsSubtitle] = useState('');
  const [wsDesc, setWsDesc] = useState('');
  const [wsFacilitator, setWsFacilitator] = useState('Mrs. Veena Tikare');
  const [wsDates, setWsDates] = useState('');
  const [wsDuration, setWsDuration] = useState('Weekend Intensive');
  const [wsVenue, setWsVenue] = useState('BODHI Wellness Sanctuary, Dharwad');
  const [wsFormat, setWsFormat] = useState<'In-Person Sanctuary (Dharwad)' | 'Online Live Zoom' | 'Hybrid'>('In-Person Sanctuary (Dharwad)');
  const [wsFee, setWsFee] = useState('₹4,500');
  const [wsSeatsTotal, setWsSeatsTotal] = useState(20);
  const [wsSyllabusText, setWsSyllabusText] = useState('');
  const [wsStatus, setWsStatus] = useState<'Upcoming' | 'Enrolling' | 'Completed'>('Enrolling');
  const [wsBadge, setWsBadge] = useState('');

  // Navbar Item Form Modal State
  const [showNavModal, setShowNavModal] = useState(false);
  const [editingNavId, setEditingNavId] = useState<string | null>(null);
  const [navLabel, setNavLabel] = useState('');
  const [navHref, setNavHref] = useState('');
  const [navOrder, setNavOrder] = useState(1);
  const [navVisible, setNavVisible] = useState(true);

  const isAdmin = (localAdmin && (localAdmin.role === 'admin' || localAdmin.role === 'therapist')) ||
                  (currentUser && (currentUser.role === 'admin' || currentUser.role === 'therapist'));

  const fetchAdminData = useCallback(async (activeTok?: string) => {
    const currentToken = activeTok || token || localStorage.getItem('bodhi_token');
    if (!currentToken) return;

    setLoading(true);
    const authHeaders = { Authorization: `Bearer ${currentToken}` };

    try {
      const [aptRes, inqRes, enrRes, lgtRes, wsRes, navRes] = await Promise.all([
        apiFetch('/api/appointments', { headers: authHeaders }),
        apiFetch('/api/contact-inquiries', { headers: authHeaders }),
        apiFetch('/api/workshop-registrations', { headers: authHeaders }),
        apiFetch('/api/light-registrations', { headers: authHeaders }),
        apiFetch('/api/workshops'),
        apiFetch('/api/navbar-items')
      ]);

      if (aptRes.ok && aptRes.data) {
        setAppointments(aptRes.data.appointments || []);
      }
      if (inqRes.ok && inqRes.data) {
        setInquiries(inqRes.data.inquiries || []);
      }
      if (enrRes.ok && enrRes.data) {
        setEnrollments(enrRes.data.registrations || []);
      }
      if (lgtRes.ok && lgtRes.data) {
        setLightRegs(lgtRes.data.registrations || []);
      }
      if (wsRes.ok && wsRes.data) {
        setWorkshops(wsRes.data.workshops || []);
      }
      if (navRes.ok && navRes.data) {
        setNavItems(navRes.data.items || []);
      }
    } catch (e) {
      console.error('Error fetching admin datasets:', e);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (isAdmin) {
      fetchAdminData();
    }
  }, [isAdmin, fetchAdminData]);

  // Flash message utility
  const triggerFlash = (msg: string) => {
    setActionMessage(msg);
    setTimeout(() => setActionMessage(null), 3500);
  };

  // 1. One-Click Quick Admin Access
  const handleQuickAdminLogin = async () => {
    setLoginLoading(true);
    setLoginError(null);
    try {
      const res = await apiFetch('/api/auth/quick-admin', { method: 'POST' });
      if (!res.ok) throw new Error(res.data?.error || 'Failed to authenticate');

      const data = res.data;
      localStorage.setItem('bodhi_token', data.token);
      setToken(data.token);
      setLocalAdmin(data.user);
      onLoginSuccess(data.user, data.token);
      triggerFlash('Welcome, Administrator! Clearance authorized.');
      fetchAdminData(data.token);
    } catch (err: any) {
      setLoginError(err.message || 'Quick login failed');
    } finally {
      setLoginLoading(false);
    }
  };

  // Standard Admin Login Handler
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);

    try {
      const res = await apiFetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: adminEmail.trim(), password: adminPassword.trim() })
      });

      if (!res.ok) {
        throw new Error(res.data?.error || 'Admin credentials invalid');
      }

      const data = res.data;
      if (data.user.role !== 'admin' && data.user.role !== 'therapist') {
        throw new Error('This account does not have Administrative clearance.');
      }

      localStorage.setItem('bodhi_token', data.token);
      setToken(data.token);
      setLocalAdmin(data.user);
      onLoginSuccess(data.user, data.token);
      triggerFlash('Administrative credentials authenticated.');
      fetchAdminData(data.token);
    } catch (err: any) {
      setLoginError(err.message || 'Login failed');
    } finally {
      setLoginLoading(false);
    }
  };

  // === CRUD HANDLERS: APPOINTMENTS ===
  const handleUpdateAppointmentStatus = async (id: string, status: 'confirmed' | 'completed' | 'cancelled') => {
    try {
      const res = await apiFetch(`/api/appointments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        triggerFlash(`Appointment status updated to ${status}.`);
        fetchAdminData();
      }
    } catch {
      // ignore
    }
  };

  const handleDeleteAppointment = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this appointment record?')) return;
    try {
      const res = await apiFetch(`/api/appointments/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        triggerFlash('Appointment record deleted from database.');
        fetchAdminData();
      }
    } catch {
      // ignore
    }
  };

  // === CRUD HANDLERS: CONTACT INQUIRIES ===
  const handleUpdateInquiryStatus = async (id: string, status: 'new' | 'contacted' | 'resolved') => {
    try {
      const res = await apiFetch(`/api/contact-inquiries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        triggerFlash(`Inquiry marked as ${status}.`);
        fetchAdminData();
      }
    } catch {
      // ignore
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!confirm('Permanently delete this contact message from database?')) return;
    try {
      const res = await apiFetch(`/api/contact-inquiries/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        triggerFlash('Inquiry removed from database.');
        fetchAdminData();
      }
    } catch {
      // ignore
    }
  };

  // === CRUD HANDLERS: WORKSHOP REGISTRATIONS ===
  const handleUpdateEnrollmentStatus = async (id: string, status: 'confirmed' | 'attended' | 'cancelled') => {
    try {
      const res = await apiFetch(`/api/workshop-registrations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        triggerFlash(`Enrollment status updated to ${status}.`);
        fetchAdminData();
      }
    } catch {
      // ignore
    }
  };

  const handleDeleteEnrollment = async (id: string) => {
    if (!confirm('Delete this workshop enrollment from database? Seat capacity will be restored.')) return;
    try {
      const res = await apiFetch(`/api/workshop-registrations/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        triggerFlash('Workshop enrollment deleted & seat restored.');
        fetchAdminData();
        onWorkshopsUpdated();
      }
    } catch {
      // ignore
    }
  };

  // === CRUD HANDLERS: LIGHT SEVA REGISTRATIONS ===
  const handleUpdateLightStatus = async (id: string, status: 'registered' | 'attended' | 'cancelled') => {
    try {
      const res = await apiFetch(`/api/light-registrations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        triggerFlash(`LIGHT registration updated to ${status}.`);
        fetchAdminData();
      }
    } catch {
      // ignore
    }
  };

  const handleDeleteLight = async (id: string) => {
    if (!confirm('Permanently delete this participant record?')) return;
    try {
      const res = await apiFetch(`/api/light-registrations/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        triggerFlash('Participant record removed from database.');
        fetchAdminData();
      }
    } catch {
      // ignore
    }
  };

  // === CRUD HANDLERS: WORKSHOPS ===
  const openNewWorkshopModal = () => {
    setEditingWorkshopId(null);
    setWsTitle('');
    setWsSubtitle('');
    setWsDesc('');
    setWsFacilitator('Mrs. Veena Tikare');
    setWsDates('');
    setWsDuration('Weekend Intensive');
    setWsVenue('BODHI Wellness Sanctuary, "Shreeshaya", Dharwad');
    setWsFormat('In-Person Sanctuary (Dharwad)');
    setWsFee('₹4,500');
    setWsSeatsTotal(20);
    setWsSyllabusText('');
    setWsStatus('Enrolling');
    setWsBadge('');
    setShowWorkshopModal(true);
  };

  const openEditWorkshopModal = (ws: Workshop) => {
    setEditingWorkshopId(ws.id);
    setWsTitle(ws.title);
    setWsSubtitle(ws.subtitle || '');
    setWsDesc(ws.description);
    setWsFacilitator(ws.leadFacilitator);
    setWsDates(ws.dates);
    setWsDuration(ws.duration);
    setWsVenue(ws.venue);
    setWsFormat(ws.format);
    setWsFee(ws.fee);
    setWsSeatsTotal(ws.seatsTotal);
    setWsSyllabusText(ws.syllabus?.join('\n') || '');
    setWsStatus(ws.status);
    setWsBadge(ws.badge || '');
    setShowWorkshopModal(true);
  };

  const handleSaveWorkshop = async (e: React.FormEvent) => {
    e.preventDefault();
    const syllabusArray = wsSyllabusText
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const payload = {
      title: wsTitle,
      subtitle: wsSubtitle,
      description: wsDesc,
      leadFacilitator: wsFacilitator,
      dates: wsDates,
      duration: wsDuration,
      venue: wsVenue,
      format: wsFormat,
      fee: wsFee,
      seatsTotal: Number(wsSeatsTotal),
      syllabus: syllabusArray,
      status: wsStatus,
      badge: wsBadge
    };

    const url = editingWorkshopId ? `/api/workshops/${editingWorkshopId}` : '/api/workshops';
    const method = editingWorkshopId ? 'PUT' : 'POST';

    try {
      const res = await apiFetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setShowWorkshopModal(false);
        triggerFlash(editingWorkshopId ? 'Workshop updated in database.' : 'New workshop published.');
        fetchAdminData();
        onWorkshopsUpdated();
      }
    } catch {
      // ignore
    }
  };

  const handleDeleteWorkshop = async (id: string) => {
    if (!confirm('Are you sure you want to delete this workshop from the persistent database?')) return;
    try {
      const res = await apiFetch(`/api/workshops/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        triggerFlash('Workshop removed from database.');
        fetchAdminData();
        onWorkshopsUpdated();
      }
    } catch {
      // ignore
    }
  };

  // === CRUD HANDLERS: NAVBAR ITEMS ===
  const openNewNavModal = () => {
    setEditingNavId(null);
    setNavLabel('');
    setNavHref('#');
    setNavOrder(navItems.length + 1);
    setNavVisible(true);
    setShowNavModal(true);
  };

  const openEditNavModal = (item: NavbarItem) => {
    setEditingNavId(item.id);
    setNavLabel(item.label);
    setNavHref(item.href);
    setNavOrder(item.order);
    setNavVisible(item.isVisible);
    setShowNavModal(true);
  };

  const handleSaveNavItem = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      label: navLabel,
      href: navHref,
      order: Number(navOrder),
      isVisible: navVisible
    };

    const url = editingNavId ? `/api/navbar-items/${editingNavId}` : '/api/navbar-items';
    const method = editingNavId ? 'PUT' : 'POST';

    try {
      const res = await apiFetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setShowNavModal(false);
        triggerFlash(editingNavId ? 'Navbar item updated.' : 'Navbar item created in database.');
        fetchAdminData();
        onNavbarUpdated();
      }
    } catch {
      // ignore
    }
  };

  const handleDeleteNavItem = async (id: string) => {
    if (!confirm('Are you sure you want to remove this navigation item from the menu?')) return;
    try {
      const res = await apiFetch(`/api/navbar-items/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        triggerFlash('Navbar item removed from navigation.');
        fetchAdminData();
        onNavbarUpdated();
      }
    } catch {
      // ignore
    }
  };

  const handleToggleNavVisibility = async (item: NavbarItem) => {
    try {
      const res = await apiFetch(`/api/navbar-items/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ isVisible: !item.isVisible })
      });
      if (res.ok) {
        fetchAdminData();
        onNavbarUpdated();
      }
    } catch {
      // ignore
    }
  };

  // 1. RENDER LIGHT THEMED ADMIN LOGIN GATEWAY IF NOT AUTHENTICATED
  if (!isAdmin) {
    return (
      <div className="min-h-screen w-full max-w-full bg-[#FAF8F5] text-slate-800 flex flex-col justify-center items-center p-4 sm:p-6 overflow-x-hidden">
        <div className="w-full max-w-md bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          
          <div className="text-center space-y-2">
            <ThemedLogo size="lg" className="justify-center" />
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mt-2">
              <ShieldAlert className="w-4 h-4 text-[#D97706]" />
              <span>Administrative Clearance Gateway</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Manage client appointments, contact inquiries, workshop enrollments, and database records across all devices.
            </p>
          </div>

          {/* Instant 1-Click Access Button (Guaranteed Friction-Free Access) */}
          <div className="p-4 rounded-2xl bg-linear-to-r from-amber-50 to-purple-50 border border-amber-300 text-center space-y-2.5 shadow-xs">
            <div className="text-xs font-bold text-[#5B2373] uppercase tracking-wide">
              ⚡ Instant 1-Click Access (Recommended)
            </div>
            <button
              type="button"
              onClick={handleQuickAdminLogin}
              disabled={loginLoading}
              className="w-full py-3 rounded-full bg-linear-to-r from-[#5B2373] to-[#4A154B] hover:opacity-95 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{loginLoading ? 'Authenticating...' : 'Enter Admin Control Suite (1-Click)'}</span>
            </button>
            <div className="text-[11px] text-slate-500">
              One-click bypass for instant management without manual typing.
            </div>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="grow border-t border-slate-200"></div>
            <span className="shrink mx-3 text-slate-400 text-[11px] uppercase tracking-wider">or sign in with password</span>
            <div className="grow border-t border-slate-200"></div>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-3.5">
            {loginError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs text-slate-700 font-medium">Admin Email / Username:</label>
              <input
                type="text"
                required
                placeholder="admin@myreincarnation.in"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#5B2373]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-700 font-medium">Admin Password:</label>
              <input
                type="password"
                required
                placeholder="admin123"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#5B2373]"
              />
              <div className="text-[10px] text-slate-500 pt-0.5">
                Default credentials: <strong>admin@myreincarnation.in</strong> / <strong>admin123</strong>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-2.5 rounded-full bg-[#5B2373] hover:bg-[#4A154B] text-white font-semibold text-xs transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
            >
              {loginLoading ? 'Verifying...' : 'Sign In as Administrator'}
            </button>
          </form>

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="text-xs text-slate-600 hover:text-[#5B2373] flex items-center justify-center gap-1 mx-auto cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Sanctuary</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // 2. RENDER FULL LIGHT THEMED ADMIN DASHBOARD SUITE
  return (
    <div className="min-h-screen w-full max-w-full bg-[#FAF8F5] text-slate-800 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden pb-24">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Header Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 bg-white border border-amber-200/90 rounded-3xl shadow-xs">
          <div className="flex items-center gap-3.5">
            <ThemedLogo size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#4A154B]">
                  Administrative Control Suite
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                  Database Live
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Full CRUD management for client bookings, inquiries, enrollments & site content.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => fetchAdminData()}
              disabled={loading}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium cursor-pointer"
              title="Refresh database records"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#5B2373] hover:bg-[#4A154B] text-white text-xs font-semibold shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Public Site</span>
            </button>
          </div>
        </div>

        {/* Action Flash Notification */}
        {actionMessage && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between shadow-xs animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{actionMessage}</span>
            </div>
            <button onClick={() => setActionMessage(null)} className="text-emerald-700 hover:text-emerald-900 cursor-pointer">✕</button>
          </div>
        )}

        {/* Navigation Tabs Bar */}
        <div className="bg-white border border-amber-200/80 rounded-2xl p-1.5 shadow-xs flex items-center gap-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'appointments'
                ? 'bg-[#5B2373] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Bookings ({appointments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'inquiries'
                ? 'bg-[#5B2373] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('enrollments')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'enrollments'
                ? 'bg-[#5B2373] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Workshop Registrations ({enrollments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('light')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'light'
                ? 'bg-[#5B2373] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Free LIGHT Seva ({lightRegs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('workshops')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'workshops'
                ? 'bg-[#5B2373] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Workshops Catalog ({workshops.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('navbar')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'navbar'
                ? 'bg-[#5B2373] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <MenuIcon className="w-3.5 h-3.5" />
            <span>Navbar Items ({navItems.length})</span>
          </button>
        </div>

        {/* TAB 1: APPOINTMENTS CRUD */}
        {activeTab === 'appointments' && (
          <div className="bg-white rounded-3xl border border-amber-200/80 p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4A154B]">
                  Client Therapy Appointments
                </h2>
                <p className="text-xs text-slate-500">
                  Real submissions stored in persistent database. You can review, update status, and remove appointments.
                </p>
              </div>
              <div className="text-xs text-slate-500">
                Total Appointments: <strong>{appointments.length}</strong>
              </div>
            </div>

            {appointments.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-500">No client appointments scheduled yet.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 overflow-x-auto">
                {appointments.map((apt) => (
                  <div key={apt.id} className="py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{apt.clientName}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                          apt.status === 'confirmed'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : apt.status === 'completed'
                            ? 'bg-blue-50 text-blue-800 border border-blue-200'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}>
                          {apt.status.toUpperCase()}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {apt.date} · {apt.timeSlot}
                        </span>
                      </div>

                      <div className="text-xs text-[#5B2373] font-semibold">
                        Modality: {apt.serviceTitle} ({apt.sessionType === 'in_person_dharwad' ? 'In-Person Sanctuary' : 'Online Zoom'})
                      </div>

                      <div className="text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
                        <span>Email: <a href={`mailto:${apt.clientEmail}`} className="text-[#5B2373] underline">{apt.clientEmail}</a></span>
                        {apt.clientPhone && <span>Phone: <a href={`tel:${apt.clientPhone}`} className="text-[#5B2373] underline">{apt.clientPhone}</a></span>}
                      </div>

                      {apt.intentions && (
                        <div className="text-xs text-slate-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60 mt-1 max-w-2xl">
                          <strong>Client Intention:</strong> "{apt.intentions}"
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <select
                        value={apt.status}
                        onChange={(e) => handleUpdateAppointmentStatus(apt.id, e.target.value as any)}
                        className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-700 cursor-pointer"
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>

                      <button
                        onClick={() => handleDeleteAppointment(apt.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete appointment"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CONTACT INQUIRIES CRUD */}
        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-3xl border border-amber-200/80 p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4A154B]">
                  Contact Form Inquiries
                </h2>
                <p className="text-xs text-slate-500">
                  Submissions from the Contact Us page stored in database. Update status or delete records.
                </p>
              </div>
              <div className="text-xs text-slate-500">
                Total Inquiries: <strong>{inquiries.length}</strong>
              </div>
            </div>

            {inquiries.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                <MessageSquare className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-500">No contact inquiries in database.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 overflow-x-auto">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="py-4 flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{inq.name}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                          inq.status === 'new'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : inq.status === 'contacted'
                            ? 'bg-blue-50 text-blue-800 border border-blue-200'
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        }`}>
                          {inq.status.toUpperCase()}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="text-xs text-[#5B2373] font-semibold">
                        Modality: {inq.modalityInterest}
                      </div>

                      <div className="text-xs text-slate-600 flex flex-wrap gap-x-4">
                        <span>Email: <a href={`mailto:${inq.email}`} className="text-[#5B2373] underline">{inq.email}</a></span>
                        {inq.phone && <span>Phone: <a href={`tel:${inq.phone}`} className="text-[#5B2373] underline">{inq.phone}</a></span>}
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed max-w-2xl mt-1">
                        "{inq.message}"
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <select
                        value={inq.status}
                        onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value as any)}
                        className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-700 cursor-pointer"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="resolved">Resolved</option>
                      </select>

                      <button
                        onClick={() => handleDeleteInquiry(inq.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: WORKSHOP REGISTRATIONS CRUD */}
        {activeTab === 'enrollments' && (
          <div className="bg-white rounded-3xl border border-amber-200/80 p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4A154B]">
                  Workshop Enrollments
                </h2>
                <p className="text-xs text-slate-500">
                  Attendees who enrolled via the Workshop modal. Deleting a registration restores seat capacity.
                </p>
              </div>
              <div className="text-xs text-slate-500">
                Total Registrants: <strong>{enrollments.length}</strong>
              </div>
            </div>

            {enrollments.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                <Users className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-500">No workshop enrollments recorded yet.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 overflow-x-auto">
                {enrollments.map((enr) => (
                  <div key={enr.id} className="py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{enr.name}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                          enr.status === 'confirmed'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : enr.status === 'attended'
                            ? 'bg-blue-50 text-blue-800 border border-blue-200'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}>
                          {enr.status.toUpperCase()}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-[#5B2373]">
                        {enr.workshopTitle}
                      </div>

                      <div className="text-xs text-slate-600 flex flex-wrap gap-x-4">
                        <span>Email: <a href={`mailto:${enr.email}`} className="text-[#5B2373] underline">{enr.email}</a></span>
                        <span>Phone: <a href={`tel:${enr.phone}`} className="text-[#5B2373] underline">{enr.phone}</a></span>
                        <span className="text-slate-400">{new Date(enr.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <select
                        value={enr.status}
                        onChange={(e) => handleUpdateEnrollmentStatus(enr.id, e.target.value as any)}
                        className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-700 cursor-pointer"
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="attended">Attended</option>
                        <option value="cancelled">Cancelled</option>
                      </select>

                      <button
                        onClick={() => handleDeleteEnrollment(enr.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete enrollment"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: LIGHT SEVA FREE HEALING CRUD */}
        {activeTab === 'light' && (
          <div className="bg-white rounded-3xl border border-amber-200/80 p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4A154B]">
                  LIGHT – Free Thursday Seva Registrants
                </h2>
                <p className="text-xs text-slate-500">
                  Seekers who signed up for Mrs. Veena Tikare's free community healing Thursday gatherings.
                </p>
              </div>
              <div className="text-xs text-slate-500">
                Total Participants: <strong>{lightRegs.length}</strong>
              </div>
            </div>

            {lightRegs.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                <Heart className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-500">No LIGHT registrations recorded.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 overflow-x-auto">
                {lightRegs.map((lreg) => (
                  <div key={lreg.id} className="py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{lreg.name}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                          lreg.status === 'registered'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : lreg.status === 'attended'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}>
                          {lreg.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-slate-400">
                          Scheduled: {lreg.sessionDate}
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 flex flex-wrap gap-x-4">
                        <span>Email: <a href={`mailto:${lreg.email}`} className="text-[#5B2373] underline">{lreg.email}</a></span>
                        <span>WhatsApp: <a href={`tel:${lreg.phone}`} className="text-[#5B2373] underline">{lreg.phone}</a></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <select
                        value={lreg.status}
                        onChange={(e) => handleUpdateLightStatus(lreg.id, e.target.value as any)}
                        className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-700 cursor-pointer"
                      >
                        <option value="registered">Registered</option>
                        <option value="attended">Attended</option>
                        <option value="cancelled">Cancelled</option>
                      </select>

                      <button
                        onClick={() => handleDeleteLight(lreg.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete registration"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: WORKSHOPS CATALOG CRUD */}
        {activeTab === 'workshops' && (
          <div className="bg-white rounded-3xl border border-amber-200/80 p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4A154B]">
                  Workshops & Retreat Programs
                </h2>
                <p className="text-xs text-slate-500">
                  Persistent catalog stored in database. Add new programs, edit syllabus, or update seats.
                </p>
              </div>

              <button
                onClick={openNewWorkshopModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5B2373] hover:bg-[#4A154B] text-white text-xs font-semibold shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Workshop</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workshops.map((ws) => (
                <div key={ws.id} className="p-5 rounded-2xl border border-amber-200/80 bg-[#FFFDF8] space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-semibold">
                        {ws.format}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#D97706]">
                        {ws.fee}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#4A154B] leading-snug">
                      {ws.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {ws.description}
                    </p>

                    <div className="text-[11px] text-slate-500 space-y-0.5 pt-1">
                      <div><strong>Dates:</strong> {ws.dates} ({ws.duration})</div>
                      <div><strong>Venue:</strong> {ws.venue}</div>
                      <div><strong>Seats:</strong> {ws.seatsBooked} / {ws.seatsTotal} Booked</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-amber-100">
                    <button
                      onClick={() => openEditWorkshopModal(ws)}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#5B2373] cursor-pointer"
                      title="Edit workshop"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteWorkshop(ws.id)}
                      className="p-1.5 rounded-lg bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 cursor-pointer"
                      title="Delete workshop"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: NAVBAR ITEMS CRUD */}
        {activeTab === 'navbar' && (
          <div className="bg-white rounded-3xl border border-amber-200/80 p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4A154B]">
                  Navigation Bar Links
                </h2>
                <p className="text-xs text-slate-500">
                  Manage top navigation items, adjust order, or toggle visibility dynamically.
                </p>
              </div>

              <button
                onClick={openNewNavModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5B2373] hover:bg-[#4A154B] text-white text-xs font-semibold shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Navigation Item</span>
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {navItems.map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-400 w-6">#{item.order}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-xs sm:text-sm">{item.label}</div>
                      <div className="text-[11px] font-mono text-slate-400">{item.href}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleNavVisibility(item)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border cursor-pointer ${
                        item.isVisible
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : 'bg-slate-100 text-slate-600 border-slate-300'
                      }`}
                    >
                      {item.isVisible ? 'Visible' : 'Hidden'}
                    </button>

                    <button
                      onClick={() => openEditNavModal(item)}
                      className="p-1.5 rounded-lg bg-slate-50 text-slate-700 hover:text-[#5B2373] cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleDeleteNavItem(item.id)}
                      className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Workshop Create/Edit Modal */}
      {showWorkshopModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-2xl space-y-4 my-8">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-xl font-bold text-[#4A154B]">
                {editingWorkshopId ? 'Edit Workshop Program' : 'Create New Workshop'}
              </h3>
              <button onClick={() => setShowWorkshopModal(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSaveWorkshop} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Workshop Title *</label>
                  <input
                    type="text"
                    required
                    value={wsTitle}
                    onChange={(e) => setWsTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Subtitle / Theme</label>
                  <input
                    type="text"
                    value={wsSubtitle}
                    onChange={(e) => setWsSubtitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-medium">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={wsDesc}
                  onChange={(e) => setWsDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Dates *</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Dec 12 - 14, 2026"
                    value={wsDates}
                    onChange={(e) => setWsDates(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Fee / Energy Exchange *</label>
                  <input
                    type="text"
                    required
                    value={wsFee}
                    onChange={(e) => setWsFee(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Total Seats</label>
                  <input
                    type="number"
                    value={wsSeatsTotal}
                    onChange={(e) => setWsSeatsTotal(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Delivery Format</label>
                  <select
                    value={wsFormat}
                    onChange={(e) => setWsFormat(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                  >
                    <option value="In-Person Sanctuary (Dharwad)">In-Person Sanctuary (Dharwad)</option>
                    <option value="Online Live Zoom">Online Live Zoom</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Enrollment Status</label>
                  <select
                    value={wsStatus}
                    onChange={(e) => setWsStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                  >
                    <option value="Enrolling">Enrolling</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-medium">Venue Address</label>
                <input
                  type="text"
                  value={wsVenue}
                  onChange={(e) => setWsVenue(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-medium">Syllabus Highlights (one point per line):</label>
                <textarea
                  rows={3}
                  placeholder="Mapping root emotional traumas&#10;Clearing ancestral DNA contracts"
                  value={wsSyllabusText}
                  onChange={(e) => setWsSyllabusText(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowWorkshopModal(false)}
                  className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#5B2373] text-white font-semibold cursor-pointer"
                >
                  Save Workshop to Database
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navbar Item Create/Edit Modal */}
      {showNavModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 border border-amber-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-lg font-bold text-[#4A154B]">
                {editingNavId ? 'Edit Navbar Link' : 'Add Navbar Link'}
              </h3>
              <button onClick={() => setShowNavModal(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSaveNavItem} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-700 font-medium">Display Label *</label>
                <input
                  type="text"
                  required
                  placeholder="E.g., Special Retreats"
                  value={navLabel}
                  onChange={(e) => setNavLabel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-medium">Link URL / Anchor *</label>
                <input
                  type="text"
                  required
                  placeholder="#workshops or /page"
                  value={navHref}
                  onChange={(e) => setNavHref(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Display Order</label>
                  <input
                    type="number"
                    value={navOrder}
                    onChange={(e) => setNavOrder(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Visibility</label>
                  <select
                    value={navVisible ? 'yes' : 'no'}
                    onChange={(e) => setNavVisible(e.target.value === 'yes')}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800"
                  >
                    <option value="yes">Visible</option>
                    <option value="no">Hidden</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowNavModal(false)}
                  className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#5B2373] text-white font-semibold cursor-pointer"
                >
                  Save Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
