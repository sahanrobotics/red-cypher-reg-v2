import DomeGallery from "../components/DomeGallery";
import { MEMORIES_SECTION } from "../config";

export default function MemorySection() {
  return (
    <section id="memories" className="page-section gallery-section">
      <div className="section-header-wrap">
        <span className="section-pre">{MEMORIES_SECTION.preTitle}</span>
        <h2>{MEMORIES_SECTION.title}</h2>
        <p className="section-subtitle">
          {MEMORIES_SECTION.subtitle}
        </p>
      </div>
      
      <div className="gallery-container">
        <DomeGallery 
          images={MEMORIES_SECTION.images.map(img => ({ src: img.image, alt: img.title }))}
          fit={0.65}
          fitBasis="auto"
          minRadius={500}
          overlayBlurColor="#000000" /* PURE BLACK PALETTE */
          grayscale={false}
          openedImageWidth="320px"
          openedImageHeight="420px"
          imageBorderRadius="16px"
          openedImageBorderRadius="24px"
        />
      </div>
    </section>
  );
}
