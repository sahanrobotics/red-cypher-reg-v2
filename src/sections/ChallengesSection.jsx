import DomeGallery from "../components/DomeGallery";
import PixelCard from "../components/PixelCard"; // Adjust this path if necessary
import { CHALLENGES_SECTION } from "../config";

export default function ChallengesSection() {
  return (
    <section id="challenges" className="page-section gallery-section">
      <div className="section-header-wrap">
        <span className="section-pre">{CHALLENGES_SECTION.preTitle}</span>
        <h2>{CHALLENGES_SECTION.title}</h2>
        <p className="section-subtitle">
          {CHALLENGES_SECTION.subtitle}
        </p>
      </div>
      
      <div className="gallery-container">
        <DomeGallery 
          images={CHALLENGES_SECTION.tracks}
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

      <div className="challenges-grid-details">
        {CHALLENGES_SECTION.tracks.map((challenge, index) => (
          <PixelCard 
            key={index} 
            variant="default"
            gap={6} 
            speed={40} 
            colors="#27272a,#3f3f46,#52525b" /* Dark greys to match the pure black theme */
          >
            {/* The inner content needs position relative/absolute to sit above the pixel canvas */}
            <div 
              className="track-card" 
              style={{ 
                position: 'relative', 
                zIndex: 10, 
                padding: '1.5rem', 
                textAlign: 'center' 
              }}
            >
              <h4>{challenge.title}</h4>
              <p>{challenge.desc}</p>
            </div>
          </PixelCard>
        ))}
      </div>
    </section>
  );
}