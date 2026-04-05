import React from 'react';

interface MenuItemProps {
  image: string;
  title: string;
  price: string | number;
  description: string;
  labels?: string[];
}

export default function MenuItem({ image, title, price, description, labels }: MenuItemProps) {
  return (
    <div className="flex gap-6 items-start group">
      {/* 80px Square Image Container */}
      <div className="w-20 h-20 flex-shrink-0 bg-surface-container-low overflow-hidden rounded-sm relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
      </div>

      {/* Content Container */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-1 gap-2">
          <h3 className="font-headline text-lg md:text-xl text-on-surface truncate group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 hidden sm:block" />
          <span className="text-primary font-label text-sm tracking-widest whitespace-nowrap">
            {price}
          </span>
        </div>
        <p className="text-outline font-body text-xs md:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        {labels && labels.length > 0 && (
          <div className="flex gap-2 mt-2">
            {labels.map((label, index) => (
              <span
                key={index}
                className="inline-block bg-secondary-container/30 px-2 py-0.5 rounded-sm text-on-secondary-container font-label text-[9px] uppercase tracking-wider"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
