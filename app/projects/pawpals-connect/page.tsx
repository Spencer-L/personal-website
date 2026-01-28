'use client';

import type { Metadata } from 'next';

export default function PawPalsConnectPage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm project-media">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1050537383?badge=0"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            style={{ marginBottom: '1em' }}
          />

          <div id="pawpals_carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#pawpals_carousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#pawpals_carousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#pawpals_carousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#pawpals_carousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#pawpals_carousel"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              />
            </div>

            <div className="carousel-container">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/assets/images/pawpals_connect/PawPals_Connect_1.JPG"
                    className="d-block w-100"
                    alt="PawPals Connect 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/pawpals_connect/PawPals_Connect_3.PNG"
                    className="d-block w-100"
                    alt="PawPals Connect 3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/pawpals_connect/Red_Bull_Tower.JPG"
                    className="d-block w-100"
                    alt="Red Bull Tower"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/pawpals_connect/PawPals_Connect_2.JPG"
                    className="d-block w-100"
                    alt="PawPals Connect 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/pawpals_connect/MIT_Reality_Hack_2025_Awards.png"
                    className="d-block w-100"
                    alt="MIT Reality Hack 2025 Awards"
                  />
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#pawpals_carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#pawpals_carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>PawPals Connect</h1>
            <h2>
              MIT Reality Hack Hackathon Team Lead
              <br />
              January 2025
            </h2>
            <p>
              Paw Pals Connect is a multiplayer social AR app for the Apple Vision Pro that features
              off-cloud LLM-driven virtual dogs designed to connect you with fellow virtual pet
              owners! The vision is rather than &quot;solving loneliness&quot; by giving people a
              virtual pet, Paw Pals are supposed to learn more about you overtime and create happy
              coincidences in real life so that you can organically connect with fellow humans! We
              leveraged Estuary, an open-source multimodal framework for building low-latency
              real-time socially interactive agents to bring our PawPals to life.
              <br />
              <br />I developed this project with a team of 4 other multidisciplinary students at
              the 2025 MIT Reality Hack Hackathon over the span of two days. Our work was warmly
              received by the judges and mentors with many remarking on the novelty of our concept
              and the high degree of technical sophistication in our design, going one step further
              to prioritize privacy and data security of conversational data by leveraging
              Estuary&apos;s completely off-cloud capabilities.
              <br />
              <br />
              If you are interested in using or contributing to{' '}
              <b>
                <a href="https://estuary-ai.github.io/" target="_blank" rel="noopener noreferrer">
                  Estuary
                </a>
              </b>
              , please feel free to check out our project website where you can find our GitHub
              repo, documentation, and Discord Server! Please give us a star on GitHub if
              you&apos;d like to support us!
            </p>
            <h4>Awards</h4>
            <ul>
              <li>Best Use of Apple Vision Pro Award at MIT Reality Hack 2025</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Concepted and led this project with a completely new team formed at the hackathon</li>
              <li>Set up the project architecture and development environment for the team</li>
              <li>
                Developed an embodied, semantically aware, conversational agent on the Apple Vision
                Pro using Estuary that can intelligently interact with dynamic environments and
                users in realtime
              </li>
              <li>
                Trained the team on how to develop for Apple Vision Pro and troubleshooted technical
                issues in a high stress high radio noise environment
              </li>
            </ul>
            <h4>Key Tools Used</h4>
            <ul>
              <li>Estuary</li>
              <li>Unity + Polyspatial + AR Foundation</li>
              <li>PyTorch</li>
              <li>LangChain</li>
              <li>HuggingFace</li>
              <li>Ollama</li>
            </ul>
            <div className="medialinks">
              <a
                href="https://devpost.com/software/paw-pals-connect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/Website-Glyph.png" width={30} height={30} alt="Website" />
              </a>
              <a
                href="https://github.com/Spencer-L/Paw-Pals-Connect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/GitHub-Logo.png" width={30} height={30} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
