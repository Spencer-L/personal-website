import ProjectCard from '@/components/ProjectCard';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <div className="main" style={{ marginTop: '10px', paddingTop: '20px' }}>
      <div className="d-flex justify-content-center">
        <h1 className="main__title">Featured Projects</h1>
      </div>

      {/* Featured Project - Estuary */}
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-auto flex-shrink-1 p-2">
            <ProjectCard
              href="/projects/estuary"
              imageSrc="/assets/images/Estuary-Front-Page.png"
              width={800}
              alt="Estuary"
            />
          </div>
        </div>
      </div>

      {/* Second Row - Immersive Archive & SENVA */}
      <div className="d-flex justify-content-center">
        <div className="row" style={{ gap: '20px' }}>
          <div className="col-auto flex-shrink-1 p-2">
            <ProjectCard
              href="/projects/immersive-archive"
              imageSrc="/assets/images/Immersive-Archive-Logo.jpeg"
              width={280}
              alt="Immersive Archive"
            />
          </div>
          <div className="col-auto flex-shrink-1 p-2">
            <ProjectCard
              href="/projects/senva"
              imageSrc="/assets/images/SENVA-Logo.jpg"
              width={500}
              alt="SENVA"
            />
          </div>
        </div>
      </div>

      {/* Third Row - Synthetic Memories, Memory Space, Stable Diffusion */}
      <div className="d-flex justify-content-center">
        <div className="row" style={{ gap: '10px' }}>
          <div className="col-auto flex-shrink-1 p-2">
            <ProjectCard
              href="/projects/immersive-synthetic-memories"
              imageSrc="/assets/images/Stereo_Synthetic_Memory.jpg"
              width={515}
              overlayText="Immersive Synthetic Memories"
            />
            <ProjectCard
              href="/projects/memory_space"
              imageSrc="/assets/images/Chinatown-Banner.jpeg"
              width={515}
              alt="Memory Space"
            />
          </div>
          <div className="col p-2">
            <ProjectCard
              href="/projects/experimentations-in-stable-diffusion"
              imageSrc="/assets/images/stable_diffusion/Stable_Diffusion_Poster_Cropped.png"
              width={280}
              alt="Experimentations in Stable Diffusion"
            />
          </div>
        </div>
      </div>

      {/* PawPals Connect */}
      <div className="d-flex justify-content-center">
        <ProjectCard
          href="/projects/pawpals-connect"
          imageSrc="/assets/logos/Paw_Pals_Logo_2.png"
          width={300}
          alt="PawPals Connect"
        />
      </div>

      {/* Fourth Row - ML Agents, Qingming, Cassia */}
      <div className="d-flex justify-content-center">
        <div className="row" style={{ gap: '10px' }}>
          <div className="col-auto flex-shrink-1 p-2">
            <ProjectCard
              href="/projects/mlagents"
              imageSrc="/assets/images/Reproducing-Agents-Environment.png"
              width={500}
              overlayText="Evolving Collaborative Machine Learning Agents"
            />
            <ProjectCard
              href="/projects/qingming"
              imageSrc="/assets/images/Qingming-Festival.jpg"
              width={500}
              overlayText={<>Along The River During<br />The Qingming Festival</>}
              alt="Along The River During The Qingming Festival"
            />
          </div>
          <div className="col p-2">
            <ProjectCard
              href="/projects/cassia"
              imageSrc="/assets/images/Cassia-Final.jpg"
              width={285}
              overlayText={<>Cassia-<br />Animated 2D Socially Interactive Agent</>}
              alt="Cassia"
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <SocialLinks />
      </div>
    </div>
  );
}
