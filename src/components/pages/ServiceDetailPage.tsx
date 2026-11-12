import React from 'react';
import { Service } from '../../types';
import { SERVICES_DATA } from '../../data/siteData';
import { 
  ArrowLeft, Calendar, Clock, MapPin, Video, CheckCircle2, 
  Sparkles, Heart, Shield, ArrowRight, UserCheck, Star, HelpCircle
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
  onBookService: (service: Service) => void;
  onSelectOtherService: (service: Service) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onBookService,
  onSelectOtherService
}) => {
  const otherServices = SERVICES_DATA.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="w-full bg-[#FAF8F5] text-slate-800 py-10 sm:py-16 space-y-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200/80 text-xs font-semibold text-slate-700 hover:text-[#5B2373] hover:border-[#5B2373] transition-colors cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Modalities</span>
          </button>

          <span className="text-xs font-mono text-[#D97706] font-semibold uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            {service.category}
          </span>
        </div>

        {/* Hero Banner Card */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 bg-white shadow-md">
          {service.image && (
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white space-y-2">
                {service.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-slate-900 font-bold text-[11px] uppercase tracking-wider mb-1">
                    {service.badge}
                  </span>
                )}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-sm text-white">
                  {service.title}
                </h1>
                <p className="text-sm sm:text-base text-amber-100 max-w-3xl font-light leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Key Facts Strip */}
          <div className="p-6 bg-[#FFFDF8] border-t border-amber-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#5B2373]" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">Duration</div>
                  <div className="font-bold">{service.durationMinutes} Minutes</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#5B2373]" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">Delivery Format</div>
                  <div className="font-bold">{service.format}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#5B2373]" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">Recommended Course</div>
                  <div className="font-bold">{service.recommendedSessions}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#5B2373]" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">Facilitator</div>
                  <div className="font-bold">Mrs. Veena Tikare</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div>
                <div className="text-xl font-bold text-[#4A154B]">{service.investment}</div>
                <div className="text-[10px] text-slate-500">Includes intake & follow-up</div>
              </div>

              <button
                onClick={() => onBookService(service)}
                className="px-6 py-3 rounded-full bg-[#5B2373] hover:bg-[#4A154B] text-white font-semibold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book This Modality</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Core Description & Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview & Philosophy */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#4A154B]">
                Therapeutic Overview & Philosophy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {service.fullDesc}
              </p>

              {service.whyItWorks && (
                <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-amber-200/80 space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D97706] uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-[#D97706]" />
                    <span>How & Why This Modality Works</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {service.whyItWorks}
                  </p>
                </div>
              )}
            </div>

            {/* 4-Phase Step-by-Step Session Structure */}
            {service.protocolSteps && service.protocolSteps.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#D97706]">
                    Clinical & Spiritual Protocol
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#4A154B]">
                    What Happens During Your 1-on-1 Session
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Every session with Mrs. Veena Tikare follows a safe, confidential, step-by-step pathway.
                  </p>
                </div>

                <div className="space-y-4">
                  {service.protocolSteps.map((proto) => (
                    <div
                      key={proto.step}
                      className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF8] border border-amber-100 flex items-start gap-4 transition-all hover:border-amber-300"
                    >
                      <span className="font-serif text-2xl font-bold text-[#5B2373] shrink-0 w-8">
                        {proto.step}
                      </span>
                      <div className="space-y-1">
                        <div className="font-bold text-slate-900 text-sm sm:text-base">
                          {proto.title}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {proto.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Expected Healing Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#5B2373]" />
                  <h3 className="font-serif text-2xl font-bold text-[#4A154B]">
                    Documented Benefits & Outcomes
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#5B2373] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Column: Indications, Preparation, and Booking Box */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Booking CTA Card */}
            <div className="bg-linear-to-br from-[#FFFDF8] to-[#FFF5E6] rounded-3xl p-6 sm:p-7 border border-amber-300 shadow-md space-y-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D97706]">
                Schedule Consultation
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#4A154B]">
                Begin Healing with Mrs. Veena
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sessions are conducted at our peaceful sanctuary "Shreeshaya" in Dharwad, or globally via interactive Zoom video.
              </p>

              <div className="py-2">
                <div className="text-2xl font-bold text-[#4A154B]">{service.investment}</div>
                <div className="text-[11px] text-slate-500">Duration: {service.durationMinutes} Minutes</div>
              </div>

              <button
                onClick={() => onBookService(service)}
                className="w-full py-3.5 rounded-full bg-[#5B2373] hover:bg-[#4A154B] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Appointment Slot</span>
              </button>

              <div className="text-[10px] text-slate-500 pt-1">
                🔒 100% Confidential · Non-Judgmental · Drug-Free
              </div>
            </div>

            {/* Key Indications Card */}
            <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#4A154B] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#D97706]" />
                <span>When to Seek This Therapy:</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {service.indications.map((ind, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Preparation Guidelines */}
            {service.clientPreparation && (
              <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#4A154B] flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#5B2373]" />
                  <span>Session Preparation Notes:</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {service.clientPreparation.map((prep, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#5B2373] font-bold">•</span>
                      <span className="leading-relaxed">{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sanctuary Location Box */}
            <div className="p-5 rounded-3xl bg-[#FFFDF8] border border-amber-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-[#4A154B]">BODHI Wellness Sanctuary</div>
              <div className="text-slate-600 text-[11px] leading-relaxed">
                "Shreeshaya", 1st Main, Narayanpur, Near Haliyal Naka, Dharwad – 580008, Karnataka.
              </div>
              <div className="text-[11px] text-[#5B2373] font-mono">
                Phone / WhatsApp: +91 9449829764
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section: Browse Other Modalities from myreincarnation.in */}
        <div className="pt-8 border-t border-amber-200/80 space-y-6">
          <div className="text-center space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D97706]">
              Explore More Therapies
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#4A154B]">
              Other Certified Healing Modalities at BODHI
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <div
                key={other.id}
                onClick={() => {
                  onSelectOtherService(other);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 hover:-translate-y-1"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-semibold">
                    {other.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#4A154B] leading-snug">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {other.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#4A154B]">{other.investment}</span>
                  <span className="text-[#5B2373] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
