import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { loop: true };

const IMAGES = [
  "/logos/ae.png",
  "/logos/cali.png",
  "/logos/filamu.png",
  "/logos/fleta.png",
  "/logos/ietm.png",
  "/logos/kcc.png",
  "/logos/kcc70.png",
  "/logos/kenyatta.png",
  "/logos/kitfest.png",
  "/logos/kitft.png",
  "/logos/kta.png",
  "/logos/nimpa.png",
  "/logos/taps.png",
];

const FoundersScroll = () => {
  return (
    <div className=" container mx-auto">
      <h2 className=" section-title mb-8 md:mb-16 text-center mx-auto">
        Founder
      </h2>
      <p className="subtitle mb-8">
        This section highlights my leadership and contributions in the
        organizations i&apos;ve founded or been a part of, alongside showcasing
        the logos of those organizations.
      </p>
      <EmblaCarousel images={IMAGES} options={OPTIONS} />
    </div>
  );
};

export default FoundersScroll;
