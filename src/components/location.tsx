import React from "react";

export const LocationLight = () => {
  return (
    <div className="text-center">
      <p className="text-lg text-[#f4f4f4] opacity-50">Current Location:</p>
      <p className="text-2xl">
        55<sup className="text-xs">°F</sup> Berea, KY 4:04 PM EST
      </p>
      <p className="text-lg text-[#f4f4f4] opacity-50">(available Thu-Sun)</p>
    </div>
  );
};

export const LocationDark = () => {
  return (
    <div className="text-right">
      <p className="text-lg text-tertiary opacity-100 font-bold">
        Current Location:
      </p>
      <p className="text-xl font-bold text-primary">
        55<sup className="text-xs">°F</sup> Berea, KY 4:04 PM EST
      </p>
      <p className="text-lg text-tertiary opacity-100 font-bold">
        (available Thu-Sun)
      </p>
    </div>
  );
};
