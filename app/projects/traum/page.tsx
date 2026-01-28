import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spencer Lin - For Traum',
};

export default function TraumPage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm">
          <div className="mx-auto" style={{ width: 360 }}>
            <figure>{/* Image placeholder */}</figure>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto" style={{ width: 350, textAlign: 'left' }}>
            <h1>For Traum</h1>
            <h2>
              Game Director
              <br />
              July 2020 - Present
            </h2>
            <p>
              For Traum is a 2.5D silhouette-style combat platformer built in Unity that examines
              morality through the context of policing in the futuristic city of Traum where an
              obedient law enforcer begins to question her duties.
            </p>
            <h4>Responsibilities</h4>
            <ul>
              <li>
                Led and recruited a team of 40 multidisciplinary students from multiple universities
                including USC, ArtCenter, UCLA, and NEU
              </li>
              <li>Directed the vision of the game and story, making design documentation</li>
              <li>
                Programmed smooth player controls and movement as well as other miscellaneous
                obstacles
              </li>
              <li>Led weekly meetings using Agile development cycle</li>
            </ul>
            <div style={{ marginBottom: '2em' }}>
              <img
                src="/assets/images/Instagram-Black.png"
                width={30}
                height={30}
                alt="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
