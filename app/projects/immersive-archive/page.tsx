import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spencer Lin - Immersive Archive',
};

export default function ImmersiveArchivePage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm project-media">
          <div className="video-responsive">
            <iframe
              src="https://player.vimeo.com/video/915002628?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="The Immersive Archive Trailer"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="overlay-container" style={{ width: 300 }}>
              <figure className="m-2">
                <img
                  src="/assets/images/Mondrian-Room.PNG"
                  alt="Vector line graphic recreation of the original Mondrian room experience"
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="overlay">
                  <div className="overlay-text">Recreation of the Mondrian Room</div>
                </div>
              </figure>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="overlay-container" style={{ width: 550 }}>
              <figure className="m-2">
                <img
                  src="/assets/images/Vectorizer-Tool-Banner.png"
                  alt="Vectorizer tool demo"
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="overlay">
                  <div className="overlay-text">Demo of Mesh-To-Line tool</div>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>Immersive Archive</h1>
            <h2>
              Lead Engineer
              <br />
              Mobile &amp; Environmental Media Lab
              <br />
              June 2023 - Present
            </h2>
            <p>
              While Extended Reality (XR) is a rapidly expanding medium, it has a long and rich
              history that has yet to be preserved. Immersive Archive aims to preserve the history
              of XR by conducting extensive research, collecting artifacts, and developing digital
              simulations of seminal XR works in history on modern XR platforms such as Meta Quest
              headsets. As the principal engineer of this project, I developed several experiences
              as well as integrated the work of other developers and creatives on the team. My
              proudest achievement in this project is creating a Mesh-to-Line tool that can
              automatically convert 3D models into retro vector line graphics which can be used to
              performantly simulate the look of early VR headsets whilst seamlessly integrating into
              the modern 3D modeling workflows the art team uses. Check out the Immersive Archive
              website linked below.
            </p>
            <h4>Mesh-to-Line</h4>
            <p>
              Mesh-to-Line works by analyzing and extracting the silhouette and crease edges of a 3D
              model. It uses the Edge Buffer algorithm for silhouette edge detection and normal
              vector voting algorithm for crease edge detection. If you are interested in learning
              the technical details of this tool, please check out the technical paper linked below.
              Open-source release of Mesh-to-Line coming soon.
            </p>
            <h4>Awards</h4>
            <ul>
              <li>Best in Show AWEsome AUGGIE Award at AWE 2024</li>
            </ul>
            <h4>Press</h4>
            <ul>
              <li>
                <a
                  href="https://www.forbes.com/sites/charliefink/2023/08/10/siggraph-2023-highlights/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forbes SIGGRAPH 2023 Highlights
                </a>
              </li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>
                Developed several simulated VR experiences of the first-ever VR headset, the NASA
                VIEWLAB HMD, which was presented at <b>AWE 2024</b>
              </li>
              <li>
                Developed a digitized VR simulation of the Sensorama and Sutherland HMD which was
                presented at <b>SIGGRAPH 2023</b> in the Immersive Pavilion
              </li>
              <li>
                Developed a webXR postcard that allows users to &quot;take home&quot; a digital twin
                of the Sensorama which can be placed in mobile AR
              </li>
            </ul>
            <h4>Tools Used</h4>
            <ul>
              <li>Unity</li>
              <li>8th Wall</li>
              <li>Blender</li>
            </ul>
            <div className="medialinks">
              <a href="https://immersivearchive.org/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/Website-Glyph.png" width={30} height={30} alt="Website" loading="lazy" decoding="async" />
              </a>
              <a
                href="/assets/pdf/Mesh-to-Line-Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/Paper-Glyph.png" width={30} height={30} alt="Paper" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
