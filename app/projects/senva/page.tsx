import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spencer Lin - SENVA',
};

export default function SenvaPage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm">
          <div className="mx-auto project-media">
            <div className="video-responsive">
              <iframe
                src="https://www.youtube.com/embed/d4mOWeIuvMI?si=XQa8GF_O6t_3jXBy"
                title="SENVA 2 Product Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="video-responsive">
              <iframe
                src="https://www.youtube.com/embed/52_Vu93VWfM"
                title="SENVA 1 Product Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="video-responsive">
              <iframe
                src="https://www.youtube.com/embed/KTqVF-KyONM?si=Xkay4FsbI6WkMhRg"
                title="SENVA 2 Team Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>SENVA</h1>
            <h2>
              Project Lead &amp; Lead Developer
              <br />
              January 2022 - September 2023
            </h2>
            <p>
              Surface Exploration &amp; Navigation Visual Assistant (SENVA) is a proof of concept AR
              heads-up-display built on the HoloLens 2 platform for the NASA SUITS Challenge. SENVA
              aims to assist lunar/martian extraterrestial exploration by lowering the cognitive
              load and improving safety of astronauts. Being designed to work in a high risk
              environment, SENVA employs multimodal input (eye tracking, voice commands, and hand
              gestures) for redundancy, as well as a completely off-cloud natural language powered
              digital assistant trained on Apollo mission transcripts to understand domain-specific
              commands used in spaceflight operations. Additional features leverage the multitude of
              onboard sensors on the HoloLens 2, such as proximity terrain analysis using SLAM,
              dynamic pathfinding based on the location of the user and preloaded digital terrain
              models, search and rescue capabilities, and a blackbox feature for recording telemetry
              data.
            </p>
            <h4>Responsibilities</h4>
            <ul>
              <li>
                Led a multidisciplinary team of 18 students across XR, AI, aeronautical engineering,
                and UI/UX disciplines
              </li>
              <li>
                Developed geospatial localization and navigation features which dynamically
                pathfinds and displays a breadcrumb trail to any user-specified location on a 3D map
              </li>
              <li>
                Developed a pipeline to download and integrate 3D models from Google Earth into
                SENVA for use in navigation features
              </li>
              <li>Trained members on how to develop on Unity and the OpenXR + MRTK frameworks</li>
              <li>
                Developed a streamlined toolchain setup process to expedite development on the
                Hololens 2
              </li>
              <li>
                Authored a 40 page project proposal that was approved by NASA, allowing our team to
                participate in 2023
              </li>
            </ul>
            <div className="medialinks">
              <a
                href="https://github.com/NASA-SUITS-Teams/AEGIS-2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/GitHub-Logo.png" width={30} height={30} alt="GitHub" loading="lazy" decoding="async" />
              </a>
              <a
                href="/assets/pdf/NASA_SUITS_Retrospective.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/Paper-Glyph.png" width={30} height={30} alt="Paper" loading="lazy" decoding="async" />
              </a>
              <a
                href="https://www.instagram.com/nasa.teamaegis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/Instagram-Black.png" width={30} height={30} alt="Instagram" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
