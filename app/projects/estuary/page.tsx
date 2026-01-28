import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spencer Lin - Estuary',
};

export default function EstuaryPage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm project-media">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1007756913?h=7616224e0b"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />

          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/m5wO7E0zet8?si=YKagc6zh5XpSRAbl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>Estuary</h1>
            <h2>
              Project Lead
              <br />
              September 2023 - Present
            </h2>
            <p>
              Estuary is an open-source multimodal framework for building off-cloud low-latency
              real-time conversational AI agents. Leveraging an edge computing architecture and
              integration with open-source AI models, researchers and developers are afforded the
              maximum flexibility of which AI models they would like to use without being constrained
              by hardware architecture incompatibilities or the limitations of cloud computing.
              Furthermore, as an open-source project, Estuary is designed to be a community-driven
              project that can be easily extended as well as run completely off-cloud, ensuring user
              privacy and data security. Finally, integration with Unity gives developers a familiar
              environment to build their agents in, and the ability to deploy their agents to a wide
              variety of platforms.
              <br />
              <br />
              If you are interested in using or contributing to Estuary, please feel free to check
              out our website, GitHub, or Discord community server linked at the bottom. Please give
              us a star on GitHub if you&apos;d like to support us!
            </p>
            <h4>Conferences</h4>
            <ul>
              <li>
                Case Study surveying the current needs of researchers and developers and how well
                Estuary addresses those research gaps accepted at{' '}
                <b>
                  <a href="https://arxiv.org/abs/2504.14427" target="_blank" rel="noopener noreferrer">
                    CHI 2025
                  </a>
                </b>
              </li>
              <li>
                Technical Demonstration accepted and presented at{' '}
                <b>
                  <a href="https://arxiv.org/abs/2410.20116" target="_blank" rel="noopener noreferrer">
                    IVA 2024
                  </a>
                </b>
              </li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>
                Leading a multidisciplinary team of researchers and developers to develop an
                open-source multimodal framework for building off-cloud low-latency real-time
                socially interactive agents
              </li>
              <li>
                Developed for, designed a study, IRB approved, recruited domain experts, conducted
                live user study, conducted qualitative analysis, and first author (the whole
                shebang) on a case study paper accepted at CHI 2025
              </li>
              <li>
                Developed an embodied, semantically aware, conversational agent on the Apple Vision
                Pro using Estuary that can intelligently interact with dynamic environments and
                users in realtime
              </li>
              <li>
                First author and demonstrated Estuary at the ACM Intelligent Virtual Agents 2024
                conference
              </li>
            </ul>
            <h4>Key Tools Used</h4>
            <ul>
              <li>Unity + Polyspatial + AR Foundation</li>
              <li>PyTorch</li>
              <li>LangChain</li>
              <li>HuggingFace</li>
              <li>Ollama</li>
              <li>NVivo</li>
            </ul>
            <div className="medialinks">
              <a href="https://estuary-ai.github.io/#/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/Website-Glyph.png" width={30} height={30} alt="Website" loading="lazy" decoding="async" />
              </a>
              <a href="https://github.com/estuary-ai" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/GitHub-Logo.png" width={30} height={30} alt="GitHub" loading="lazy" decoding="async" />
              </a>
              <a href="https://discord.gg/r6GDWkzbM9" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/Discord-Logo.png" width={35} height={35} alt="Discord" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
