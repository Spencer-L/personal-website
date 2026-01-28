import type { Metadata } from 'next';
import { Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spencer Lin - Memory Space',
};

export default function MemorySpacePage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm">
          <div className="vimeo-video">
            <iframe
              src="https://player.vimeo.com/video/951336252?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Memory Space Video 1"
            />
          </div>
          <div className="vimeo-video">
            <iframe
              src="https://player.vimeo.com/video/898176256?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Peter SooHoo AR at Union Station"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="overlay-container" style={{ width: 600 }}>
              <figure>
                <img
                  src="/assets/images/Memory-Space.png"
                  alt="A split view of Union Station and the intersection of Alameda and Marchessault St"
                  style={{ width: 600, height: 'auto' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="overlay">
                  <div className="overlay-text">
                    Side-by-side of Union Station and where Old Chinatown once stood
                  </div>
                </div>
              </figure>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="overlay-container" style={{ width: 600 }}>
              <figure className="m-3">
                <img
                  src="/assets/images/Memory-Space-AR-View.png"
                  alt="Memory Space AR-view of David Lee"
                  style={{ width: 600, height: 'auto' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="overlay">
                  <div className="overlay-text">AR screenshot of Memory Space</div>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>Memory Space</h1>
            <h2>
              XR Developer
              <br />
              Mobile &amp; Environmental Media Lab
              <br />
              September 2023 - May 2024
            </h2>
            <p>
              In 1933, the demolition of the original Los Angeles Chinatown for the construction of
              Union Station displaced the LA Chinese community. Memory Space is a WebXR experience
              that allows users to explore a geospatially accurate recreation of the original
              Chinatown in its final days to spread awareness and to commemorate it. Users embark on
              an engaging narrative AR experience that follows the story of two real figures: Peter
              Soo Hoo Sr. and David Lee whom recount their lives in Old Chinatown. Volumetric live
              performance capture techniques bring Peter and David to life as photoreal 3D AR
              characters. As a grand finale, users interact with an LLM-powered character in the
              form of a peacock, a wise and culturally significant symbol in Chinese culture, which
              verbally communicates with users and imbues them with an uplifting parting message.
              Please check out the Memory Space website and experiences linked below.
            </p>
            <h4>Awards</h4>
            <ul>
              <li>Niantic 2024 Time Capsule Challenge Grand Prize Winner</li>
              <li>
                Memory Space has just been awarded third phase funding from the National Endowment
                for the Humanities (NEH) and will continue to be developed into an even more
                feature-rich experience.
              </li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>
                Assisted live volumetric captures of actors portraying Peter Soo Hoo Sr. and David
                Lee and integrated them into our 8th Wall experience via Arcturus HoloStream
              </li>
              <li>
                Prototyped a Niantic ARDK Unity-based version of Memory Space as a proof of concept
                to compare performance and features with the 8th Wall version
              </li>
              <li>
                General XR development, optimization, and debugging for WebXR, much of which was
                done during an unstable period in the 8th Wall platform&apos;s maturity
              </li>
            </ul>
            <h4>Partners</h4>
            <ul>
              <li>Huntington-USC Institute on California &amp; the West</li>
              <li>Chinese Historical Society of Southern California</li>
              <li>Metro Art</li>
              <li>Niantic 8th Wall</li>
              <li>Arcturus Studio</li>
              <li>Metastage</li>
            </ul>
            <h4>Tools Used</h4>
            <ul>
              <li>8th Wall</li>
              <li>Inworld AI</li>
              <li>Arcturus HoloSuite</li>
              <li>Unity</li>
              <li>Niantic ARDK + Lightship</li>
            </ul>
            <div className="medialinks">
              <a
                href="https://storymaps.arcgis.com/collections/85c6c5fe5ea142d2970200e7351d59b8?item=5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
              >
                <span className="icon-circle">
                  <Globe />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
