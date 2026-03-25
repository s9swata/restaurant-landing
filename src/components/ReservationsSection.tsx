'use client';

import { useState, useMemo } from 'react';

/* ─── Types ─── */
type Nullable<T> = T | null;

const TIME_SLOTS = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'] as const;
const DAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] as const;
const GUEST_OPTIONS = ['1', '2', '3', '4', '5+'] as const;

function getMonthMatrix(year: number, month: number) {
  // Returns a flat array of day numbers (or null for empty slots) for a 7-col grid
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Convert Sunday-first to Monday-first offset
  const offset = (firstDay + 6) % 7;
  const cells: Nullable<number>[] = Array(offset).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function ReservationsSection() {
  const today = useMemo(() => new Date(), []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<Nullable<number>>(null);
  const [selectedTime, setSelectedTime] = useState<Nullable<string>>(null);
  const [selectedGuests, setSelectedGuests] = useState<string>('2');

  const cells = useMemo(() => getMonthMatrix(viewYear, viewMonth), [viewYear, viewMonth]);

  const isPastDay = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(today);
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const formattedDate = selectedDay
    ? `${MONTH_NAMES[viewMonth].slice(0, 3)} ${selectedDay}, ${viewYear}`
    : '—';

  const goToPrevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
    setSelectedDay(null);
  };

  const goToNextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
    setSelectedDay(null);
  };

  return (
    <section id="reservations" className="py-16 md:py-32 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 md:px-12">

        {/* Section Header */}
        <div className="mb-20">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            Reserve Your Evening
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-light text-on-surface leading-tight">
            Secure your table.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Reservation Steps */}
          <div className="lg:col-span-8 space-y-10">

            {/* Progress Steps */}
            <div className="flex items-center relative mb-12">
              <div className="absolute top-4 left-0 w-full h-[1px] bg-outline-variant/30 -z-0" />
              <div className="flex justify-between w-full relative z-10">
                {[{ n: '1', label: 'DateTime' }, { n: '2', label: 'Guests' }, { n: '3', label: 'Details' }].map(
                  (step) => (
                    <div key={step.n} className="flex flex-col items-center gap-3 bg-surface-container-low px-4">
                      <span className="w-8 h-8 rounded-sm bg-primary text-on-primary flex items-center justify-center text-xs font-label">
                        {step.n}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-label text-primary">
                        {step.label}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Step 1: Date & Time */}
            <div className="p-8 bg-surface rounded-sm editorial-shadow">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline text-2xl italic">Select Date &amp; Time</h3>
                <span className="text-[10px] font-label uppercase tracking-widest text-outline">Step 01</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Calendar */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-headline text-xl italic">
                      {MONTH_NAMES[viewMonth]} {viewYear}
                    </h4>
                    <div className="flex gap-4">
                      <button
                        onClick={goToPrevMonth}
                        aria-label="Previous month"
                        className="material-symbols-outlined cursor-pointer text-outline hover:text-primary transition-colors select-none"
                      >
                        chevron_left
                      </button>
                      <button
                        onClick={goToNextMonth}
                        aria-label="Next month"
                        className="material-symbols-outlined cursor-pointer text-outline hover:text-primary transition-colors select-none"
                      >
                        chevron_right
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] uppercase tracking-widest text-outline mb-4">
                    {DAY_LABELS.map((d) => <span key={d}>{d}</span>)}
                  </div>
                  <div className="grid grid-cols-7 gap-y-3 text-center text-sm font-label">
                    {cells.map((day, i) => {
                      if (day === null) return <span key={`empty-${i}`} />;
                      const past = isPastDay(day);
                      const isSelected = selectedDay === day;
                      return (
                        <button
                          key={day}
                          disabled={past}
                          onClick={() => setSelectedDay(day)}
                          className={`w-8 h-8 flex items-center justify-center mx-auto rounded-sm transition-all text-sm font-label
                            ${past ? 'text-outline/30 cursor-not-allowed' : ''}
                            ${isSelected ? 'bg-primary text-on-primary' : ''}
                            ${!past && !isSelected ? 'hover:text-primary hover:bg-primary/10 cursor-pointer' : ''}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-6">
                  <h4 className="font-headline text-xl italic mb-4">Available Times</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {TIME_SLOTS.map((time) => {
                      const active = selectedTime === time;
                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(active ? null : time)}
                          className={`py-3 px-4 border text-sm font-label rounded-sm text-center transition-all ${
                            active
                              ? 'border-primary text-primary bg-primary/5 font-medium'
                              : 'border-outline-variant hover:border-primary hover:text-primary'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  <div className="p-4 bg-secondary-container/20 flex items-start gap-3 rounded-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">info</span>
                    <p className="text-xs text-on-secondary-container leading-relaxed">
                      Evening seatings are typically 2.5 hours. For larger parties, please contact us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Guests */}
            <div className="p-8 bg-surface rounded-sm editorial-shadow space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-headline text-2xl">Number of Guests</h3>
                <span className="text-[10px] font-label uppercase tracking-widest text-outline">Step 02</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {GUEST_OPTIONS.map((n) => (
                  <button
                    key={n}
                    onClick={() => setSelectedGuests(n)}
                    className={`w-14 h-14 border flex items-center justify-center font-label transition-all ${
                      selectedGuests === n
                        ? 'border-2 border-primary text-primary font-bold bg-primary/5'
                        : 'border-outline-variant hover:border-primary hover:text-primary'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Personal Info */}
            <div className="p-8 bg-surface rounded-sm editorial-shadow space-y-10">
              <div className="flex justify-between items-center">
                <h3 className="font-headline text-2xl">Personal Information</h3>
                <span className="text-[10px] font-label uppercase tracking-widest text-outline">Step 03</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-semibold">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 font-body transition-colors placeholder:text-outline/30 text-lg outline-none"
                    placeholder="Giacomo Leopardi"
                    type="text"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 font-body transition-colors placeholder:text-outline/30 text-lg outline-none"
                    placeholder="giacomo@recanati.it"
                    type="email"
                  />
                </div>
                <div className="md:col-span-2 relative group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-semibold">
                    Special Requests
                  </label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 font-body transition-colors placeholder:text-outline/30 resize-none text-lg outline-none"
                    placeholder="Dietary requirements or celebratory notes..."
                    rows={2}
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="w-full bg-primary text-on-primary py-6 rounded-sm font-label uppercase tracking-[0.4em] hover:bg-surface-tint transition-all text-sm">
                Confirm Reservation
              </button>
              <p className="text-[10px] text-center mt-6 text-outline font-label uppercase tracking-[0.2em]">
                By confirming, you agree to our 24-hour cancellation policy.
              </p>
            </div>
          </div>

          {/* Right: Summary Sidebar */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-surface-container-highest p-10 space-y-10 relative overflow-hidden">
              {/* Ghost icon */}
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-9xl">wine_bar</span>
              </div>

              {/* Title */}
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-label text-primary font-bold">
                  Your Experience
                </span>
                <h3 className="font-headline text-4xl">L&apos;Oro d&apos;Italia</h3>
              </div>

              {/* Booking Summary — reactive */}
              <div className="space-y-6 border-y border-outline-variant/30 py-10 relative z-10">
                {[
                  { label: 'Date', value: formattedDate },
                  { label: 'Time', value: selectedTime ?? '—' },
                  { label: 'Guests', value: selectedGuests ? `${selectedGuests} ${selectedGuests === '1' ? 'Person' : 'People'}` : '—' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-[11px] uppercase tracking-widest text-outline">{label}</span>
                    <span className={`text-sm font-label transition-all ${value === '—' ? 'text-outline/40' : 'text-on-surface'}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chef's Pairing Teaser */}
              <div className="space-y-6 relative z-10">
                <div className="flex gap-5 items-center">
                  <div className="w-20 h-20 overflow-hidden rounded-sm grayscale flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      alt="Chef's seasonal pasta pairing"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1jkjm-bbxoOGCCrlPWik44TJ5A7QHiNsr0dX-fIl78F8lvgxHcy6vX-UWdMtVsR6rRbSrmrw-8_3E7QiES5rEBueDDTT82Qmk-i1wDFXdCAWI6GEGY6aDqqGAq8hg0NT3klt3-rXqvwYUau6zGxL6gsEKL-lWvvDY4JlKn6i0CKYkFxIwZ0hhXne6V9FCWQla87nciXKuO4quIq0sAHf7Y5Br7qoQCtHwggrT4Sa2JeH_No3QFquvQ7GpQ2f90GFb0e_uEMg_AjqC"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-headline italic mb-1">Chef&apos;s Seasonal Pairing</h4>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">
                      A curated five-course journey through the vineyards of Tuscany.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Confirmation */}
              <div className="pt-4 relative z-10 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-lg">verified</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-label font-bold">
                    Instant Confirmation
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Visual */}
            <div className="mt-12 group overflow-hidden relative">
              <img
                className="w-full h-64 object-cover grayscale brightness-[0.4] transition-transform duration-1000 group-hover:scale-110"
                alt="Pouring wine into an elegant glass"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1GO12fKoCllb9wlNQuC9yofUlGoPqVMdiGhA9xkVb68dbnpAJKqVKKLoiP4ESfx-aeItogmWuLrz55P3-7p1SFUcRQJs9mWbGoPg46AinJtwMhayIpQUNDhf22kE-rZcp_wJ2bFFadwzGva4WjCxoxuyOPx_Zes-BW5uJY0T"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="font-headline text-xl text-white italic leading-relaxed">
                  &ldquo;Wine is the soul of the table.&rdquo;
                </p>
                <div className="w-12 h-[1px] bg-white/40 mx-auto mt-4" />
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
