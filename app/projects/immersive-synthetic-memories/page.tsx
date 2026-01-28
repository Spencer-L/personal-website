import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spencer Lin - Immersive Synthetic Memories',
};

export default function ImmersiveSyntheticMemoriesPage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm project-media">
          <div className="video-responsive">
            <iframe
              src="https://player.vimeo.com/video/1047619407?h=b3fac053c1&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Immersive Synthetic Memories"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="overlay-container" style={{ width: 550 }}>
              <figure className="m-3">
                <img
                  src="/assets/images/Stereo_Synthetic_Memory.jpg"
                  alt="Stereoscopic Immersive Synthetic Memory"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="overlay">
                  <div className="overlay-text">Stereo Immersive Synthetic Memory</div>
                </div>
              </figure>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="overlay-container" style={{ width: 450 }}>
              <figure className="m-2">
                <img
                  src="/assets/images/Synthetic_Memory_Comparison.JPG"
                  alt="Synthetic Memory Comparison"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="overlay">
                  <div className="overlay-text">Comparison of Synthetic Memory to Original</div>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>Immersive Synthetic Memories</h1>
            <h2>
              Student Assistant
              <br />
              Mobile &amp; Environmental Media Lab
              <br />
              September 2024 - December 2024
            </h2>
            <p>
              Was there ever a time you wished you could relive a memory, but you couldn&apos;t
              quite remember it? Maybe you dug through your phone; perhaps the good &apos;ol family
              photo album... but still nothing. In these cases, generative AI may be the perfect
              tool to help recreate those special moments. But, to take things even further, what if
              you can completely immerse yourself into that memory to relive it once more as if you
              were seeing it from the first person? That&apos;s where Immersive Synthetic Memories
              comes in. This is a project born out of a class I helped teach at the USC School of
              Cinematic Arts under Professor Scott Fisher. By combining a mixture of commercial and
              open-source AI technologies with VR headsets, we developed a novel pipeline to
              generate 180 degrees stereoscopic immersive videos, complete with AI-generated spatial
              audio.
            </p>
            <h4>The Process</h4>
            <p>
              We partnered with Barcelona-based company Domestic Data Streamers (DDS) to develop the
              process of creating these memories. Previously, DDS specialized in generating 2D
              synthetic memories using commercially available tools, whereas our lab specialized in
              XR applications. By combining our expertise, we built a novel generative AI pipeline
              and came up with a process that involves a 15 to 20 minute interview with the guest,
              whilst a team of prompters generate the synthetic memory in real-time. The guest is
              then invited to don a VR headset and experience the memory. The results were
              astounding, with many guests reporting the experience as &quot;uncannily
              accurate&quot; and &quot;emotionally moving&quot; as you can see in the comparison
              photo to the left! More details about our process to come in our upcoming paper!
            </p>
            <h4>Accomplishments</h4>
            <ul>
              <li>
                Assisted teaching and provided technical support for the development of the
                Immersive Synthetic Memories generative AI pipeline
              </li>
              <li>
                Facilitated and presented Immersive Synthetic Memories at the{' '}
                <b>2024 Flux Festival</b>
              </li>
            </ul>
            <h4>Tools I Worked With</h4>
            <ul>
              <li>ComfyUI</li>
              <li>Stable Diffusion</li>
              <li>Unity</li>
              <li>immerGallery</li>
            </ul>
            <div className="medialinks">
              <a
                href="https://mobilemedia.usc.edu/projects/immersive-synthetic-memories-2024/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/Website-Glyph.png" width={30} height={30} alt="Website" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
