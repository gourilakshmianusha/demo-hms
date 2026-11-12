import React, { useState } from 'react';
import { ImageCarousel } from '../ImageCarousel';
import { SERVICES_CAROUSEL_SLIDES, SERVICES_DATA } from '../../data/siteData';
import { Service } from '../../types';
import { CheckCircle2, Clock, Calendar, ArrowRight, Sparkles, BookOpen, ChevronRight } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
  onViewServiceDetail?: (service: Service) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  onSelectService,
  onViewServiceDetail 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All', 
    'Regression & Mind', 
    'Energy & Aura', 
    'Divination & Intuitive', 
    'Breath & Meditation'
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const handleDetailClick = (service: Service) => {
    if (onViewServiceDetail) {
      onViewServiceDetail(service);
    } else {
      onSelectService(service);
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-slate-800 py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D97706]">
            Comprehensive Clinical & Spiritual Menu
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A154B]">
            Official Modalities & Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Every modality listed directly from <strong>myreincarnation.in</strong>. Click any therapy below to explore its comprehensive clinical protocol, metaphysical mechanisms, and booking options.
          </p>
        </div>

        {/* Carousel - Full Width Framing with Zero Left/Right Corner Gaps */}
        <div className="w-full max-w-6xl mx-auto">
          <ImageCarousel slides={SERVICES_CAROUSEL_SLIDES} aspectRatio="standard" autoPlayInterval={6000} />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#5B2373] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid - 12 Official Modalities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white border border-amber-200/80 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div>
                {/* Service Visual Card Header */}
                {service.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/95 text-slate-900 font-bold shadow-xs">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#5B2373] text-white font-semibold shadow-xs">
                        {service.badge}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-[11px] text-[#D97706] font-semibold">{service.format}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#5B2373]" />
                      <span>{service.durationMinutes}m</span>
                    </span>
                  </div>

                  <div>
                    <h3 
                      onClick={() => handleDetailClick(service)}
                      className="font-serif text-xl font-bold text-[#4A154B] leading-snug hover:text-[#D97706] transition-colors cursor-pointer"
                    >
                      {service.title}
                    </h3>
                    <div className="text-xs text-slate-500 mt-1 font-medium line-clamp-1">
                      {service.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  {service.indications && service.indications.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Primary Focus:
                      </div>
                      <div className="text-xs text-slate-700 flex items-start gap-1.5 line-clamp-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                        <span>{service.indications[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#4A154B]">
                      {service.investment}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {service.recommendedSessions}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="px-4 py-2 rounded-full bg-[#5B2373] hover:bg-[#4A154B] text-white text-xs font-semibold shadow-xs hover:scale-105 transition-all cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>

                <button
                  onClick={() => handleDetailClick(service)}
                  className="w-full py-2 rounded-xl bg-amber-50/70 hover:bg-amber-100/70 border border-amber-200 text-[#5B2373] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>View Detailed Protocol & Symptoms</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
