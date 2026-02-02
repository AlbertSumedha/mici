import React from "react";

interface BouquetWrapperProps {
  children: React.ReactNode;
}

const BouquetWrapper: React.FC<BouquetWrapperProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Text / Content */}
      {children}

      {/* Falling Bouquet */}
      <img
        src="/bouquet.jpg"
        alt="bouquet"
        className="absolute top-0 left-4 w-20 bouquet-fall pointer-events-none"
      />
    </div>
  );
};

export default BouquetWrapper;
