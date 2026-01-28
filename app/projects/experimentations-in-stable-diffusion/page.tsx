'use client';

export default function StableDiffusionPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm project-media">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              />
            </div>

            <div className="carousel-container">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/assets/images/stable_diffusion/Blue_Mountain_1.png"
                    className="d-block w-100"
                    alt="Blue Mountain"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/stable_diffusion/Blue_Yellow_Cat.png"
                    className="d-block w-100"
                    alt="Blue Yellow Cat"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/stable_diffusion/Stable_Diffusion_Poster_Blank.png"
                    className="d-block w-100"
                    alt="Stable Diffusion Poster"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/stable_diffusion/Blue_Yellow_Shepherd.png"
                    className="d-block w-100"
                    alt="Blue Yellow Shepherd"
                  />
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <div className="row g-0">
              <div className="overlay-container" style={{ width: 150 }}>
                <figure>
                  <img
                    src="/assets/images/stable_diffusion/Leia.jpg"
                    alt="A portrait of my cat, Leia"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </figure>
              </div>
              <div className="overlay-container" style={{ height: 291, width: 196 }}>
                <figure>
                  <img
                    src="/assets/images/stable_diffusion/Chang_Yu_Blue_Vase.jpeg"
                    alt="Chang Yu's blue vase painting"
                    style={{ width: 'auto', height: 291 }}
                  />
                </figure>
              </div>
              <div className="overlay-container" style={{ width: 150 }}>
                <figure>
                  <img
                    src="/assets/images/stable_diffusion/Blue_Leia.png"
                    alt="Style transferred Leia"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </figure>
              </div>
            </div>
          </div>

          <div
            id="yaoguaiCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ marginTop: '1em' }}
          >
            <div className="carousel-indicators">
              {[...Array(9)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#yaoguaiCarousel"
                  data-bs-slide-to={i}
                  className={i === 0 ? 'active' : ''}
                  aria-current={i === 0 ? 'true' : undefined}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="carousel-container">
              <div className="carousel-inner">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img
                      src={`/assets/images/stable_diffusion/yaoguais/yaoguai_${i + 1}.png`}
                      className="d-block w-100"
                      alt={`Yaoguai ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#yaoguaiCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#yaoguaiCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>Experimentations in Stable Diffusion</h1>
            <h2>
              Mad Scientist
              <br />
              For All Humankind
              <br />
              June 2024 - Present
            </h2>
            <p>[PAGE UNDER CONSTRUCTION]</p>
            <h4>Style Transfer</h4>
            <p>
              The following images were generated using IPAdapter in ComfyUI using a mixture of
              methodologies including image-to-image, image + image-to-image, as well as image +
              predetermined latent image to image. The styles transferred were from Chang Yu, a
              Chinese painter from the 20th century who was himself notable for combining
              traditional Chinese painting styles with Western styles. Chang Yu seemed to be a
              clever choice to experiment with for a project all about style transferring. It was my
              hopes to not only transfer the style of Chang Yu to sketches and photos, but also to
              examine how well stable diffusion models can interpret abstract art and painterly
              styles from different continents.
            </p>
            <h4>Yaoguais</h4>
            <p>
              A lot of times, we are often left bewildered by what AI might gift to us. In this
              case, imagine me leaving my computer to churn out what I had hoped would be a batch of
              Chang Yu-inspired pics of my cat, only to return to... this. I generated a few more
              batches only to get more of these creatures, or as I like to call them, yaoguais. I
              did what any reasonable person would do and promptly restarted my computer. Upon
              generating my next batch, however, I was back to getting cats. What happened? Some
              faulty NVIDIA drivers? The perfect gamma ray performing an amazing bit shift in my
              VRAM? Perhaps only the AI Omnissiah shall know. But what I do know is I was left with
              this collection of yaoguais, which over time, have begun to grow on me! In any case,
              it&apos;s important to document even failures and oddities however funny they are, so
              here they are!
            </p>
            <h4>Acknowledgements</h4>
            <ul>
              None of this would be possible without the amazing open-source community:
              <li>ComfyUI</li>
              <li>Stable Diffusion</li>
              <li>IPAdapter</li>
              <li>CyberRealistic Pony</li>
              <li>Flux</li>
            </ul>
            <h4>Tools Used</h4>
            <ul>
              <li>ComfyUI</li>
              <li>Stable Diffusion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
