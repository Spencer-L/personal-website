import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spencer Lin - Cassia',
};

export default function CassiaPage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm">
          <div className="mx-auto" style={{ width: 360 }}>
            <figure>
              <img src="/assets/images/Cassia-Demo.gif" width={360} height={720} alt="Cassia Demo" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>Cassia</h1>
            <h2>
              Programmer
              <br />
              April 2018
            </h2>
            <p>
              Cassia is a desktop-based animated 2D socially interactive agent designed to serve as
              an information kiosk for public events. Users can interact with Cassia through a touch
              screen and speech recognition.
            </p>
            <h4>Mission</h4>
            <p>
              After hosting quite a few public events on behalf of my environmental nonprofit,
              Planet Save, I noticed that there were a lot of visitors which my small team could not
              engage with due to the sheer volume of people. This resulted in many visitors leaving
              our booth prematurely without having the chance to chat with us and learn about our
              environmental projects. Cassia is designed to as an educational and entertaining agent
              that visitors can interact with so they can learn more about our projects and how they
              can get involved while we are busy engaging with other visitors. Overall, Cassia was
              much loved by our community and was a great success for that year&apos;s community
              Earth Day event, retaining visitor engagement for enough time for our team to speak
              with most people!
            </p>
            <h4>Tools Used</h4>
            <ul>
              <li>Unity</li>
              <li>Animations generated from one still image using Live2D</li>
              <li>Speech recognition handled by Windows Speech API</li>
            </ul>
            <div style={{ marginBottom: '2em' }}>
              <a
                href="https://github.com/Spencer-L/Cassia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/GitHub-Logo.png" width={30} height={30} alt="GitHub" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
