import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spencer Lin - River Scroll',
};

export default function QingmingPage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm">
          <div className="mx-auto" style={{ marginTop: '8em' }}>
            <div className="video-responsive">
              <iframe
                src="https://player.vimeo.com/video/705249995?h=d7d88ec941&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Along the River During the Qingming Festival Video"
              />
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>Along the River During the Qingming Festival</h1>
            <h2>
              Solo Developer
              <br />
              April 2022 - April 2022
            </h2>
            <p>
              Along The River During The Qingming Festival is an interactive experience that
              uncovers the ancient Chinese namesake painting stroke by stroke. Audio cues such as
              crowd ambience, nature, and animal sounds hint players to uncover different regions of
              the painting, all tied together with vibrant traditional Chinese music. I chose to
              build this as my final freeform project for an interactive media course at USC not
              only to pay homage to my Chinese heritage, but also to explore the potency of
              traditional Chinese art mixed with modern interactive mediums. I&apos;ve always been
              fascinated by the fact that the original paintings are so vast in their breadth and
              detail that it is simply impossible to take it all in at once. This project really
              strives to capture that essence. Focus too much on one area and you might miss the
              rest of the painting, but focus too much on uncovering all of the painting as it
              scrolls and you might miss the intricate details that make the painting so special.
            </p>
            <h4>Technical</h4>
            <ul>
              <li>Built in Unity</li>
              <li>Music Credit: Lyu Liang - Only in Love of This Jade Blue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
