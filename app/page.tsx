import ProjectCard from '@/components/ProjectCard';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <div className="main" style={{ marginTop: '10px', paddingTop: '20px' }}>
      <div className="d-flex justify-content-center">
        <h1 className="main__title">Featured Projects</h1>
      </div>

      {/* Bento Grid Layout */}
      <div className="bento-grid">
        {/* Featured Project - Estuary (spans 3 columns) */}
        <ProjectCard
          href="/projects/estuary"
          imageSrc="/assets/images/Estuary-Front-Page.png"
          alt="Estuary"
          className="span-3"
          delay={0}
          priority={true}
        />

        {/* Immersive Archive */}
        <ProjectCard
          href="/projects/immersive-archive"
          imageSrc="/assets/images/Immersive-Archive-Logo.jpeg"
          alt="Immersive Archive"
          delay={0.1}
        />

        {/* SENVA (spans 2 columns) */}
        <ProjectCard
          href="/projects/senva"
          imageSrc="/assets/images/SENVA-Logo.jpg"
          alt="SENVA"
          className="span-2"
          delay={0.15}
        />

        {/* Synthetic Memories (spans 2 columns) */}
        <ProjectCard
          href="/projects/immersive-synthetic-memories"
          imageSrc="/assets/images/Stereo_Synthetic_Memory.jpg"
          overlayText="Immersive Synthetic Memories"
          className="span-2"
          delay={0.2}
        />

        {/* Memory Space (spans 2 columns) */}
        <ProjectCard
          href="/projects/memory_space"
          imageSrc="/assets/images/Chinatown-Banner.jpeg"
          alt="Memory Space"
          className="span-2"
          delay={0.25}
          aspectRatio="2/1"
        />

        {/* Stable Diffusion (tall item, spans 2 rows) */}
        <ProjectCard
          href="/projects/experimentations-in-stable-diffusion"
          imageSrc="/assets/images/stable_diffusion/Stable_Diffusion_Poster_Cropped.png"
          alt="Experimentations in Stable Diffusion"
          className="row-span-2"
          delay={0.3}
          aspectRatio="1/2"
        />

        {/* PawPals Connect */}
        <ProjectCard
          href="/projects/pawpals-connect"
          imageSrc="/assets/logos/Paw_Pals_Logo_2.png"
          alt="PawPals Connect"
          delay={0.35}
          aspectRatio="1/1"
        />

        {/* ML Agents (spans 2 columns) */}
        <ProjectCard
          href="/projects/mlagents"
          imageSrc="/assets/images/Reproducing-Agents-Environment.png"
          overlayText="Evolving Collaborative Machine Learning Agents"
          className="span-2"
          delay={0.4}
        />

        {/* Qingming (spans 2 columns) */}
        <ProjectCard
          href="/projects/qingming"
          imageSrc="/assets/images/Qingming-Festival.jpg"
          overlayText={<>Along The River During The Qingming Festival</>}
          alt="Along The River During The Qingming Festival"
          className="span-2"
          delay={0.45}
        />

        {/* Cassia */}
        <ProjectCard
          href="/projects/cassia"
          imageSrc="/assets/images/Cassia-Final.jpg"
          overlayText="Cassia - Animated 2D Socially Interactive Agent"
          alt="Cassia"
          delay={0.5}
          aspectRatio="1/1.8"
        />
      </div>

      {/* Social Links */}
      <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>
        <SocialLinks />
      </div>
    </div>
  );
}
