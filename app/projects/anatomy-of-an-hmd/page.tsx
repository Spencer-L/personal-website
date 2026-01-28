import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spencer Lin - Anatomy of an HMD',
};

export default function AnatomyOfAnHMDPage() {
  return (
    <div className="container">
      <div className="row project-content">
        <div className="col-sm project-media">
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/ijIANIJneyo?si=8JsWKblHEU3tCEx-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/2G3xq4znnRc?si=oFAA8A5GuM18LyMD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="mx-auto project-info">
            <h1>Evolving Collaborative Machine Learning Agents</h1>
            <h2>
              Developer
              <br />
              September 2024 - November 2024
            </h2>
            <p>
              This project was my venture into the world of Deep Reinforcement Learning (DRL) agents
              for an ambitious final project in my Deep Learning course at USC. I have always been
              inspired by the natural world and how even the simplest of organisms like ants can not
              only evolve, but collaborate to achieve complex tasks. I wanted to see if I could
              model this behavior using machine learning methodologies and, more importantly, if
              such approaches are scalable to real world applications such as creating more
              intelligent and dynamic video game creatures. After much literature review and
              experimentation with several reinforcement learning algorithms, I decided to explore
              the Multi-Agent Posthumous Credit Assignment (MA-POCA) algorithm further due to its
              good balance between multi-agent collaboration while ensuring agents still learn
              individually as opposed to acting together as a hivemind entity. I combined this
              algorithm with a genetic algorithm so individual agents can be cultivated and pass
              their traits onto the next generation of agents in hopes that a more optimized colony
              of agents can be evolved. If you are interested in learning more about this project,
              please check out the paper and GitHub repository linked below.
            </p>
            <h4>Upshot</h4>
            <p>
              The agents were able to evolve to a point where they could collaborate to achieve
              tasks that were impossible for a single agent to achieve. This was a huge win for me
              as it showed that the agents were able to learn steadily overtime and improve their
              performance over multiple generations. However, I discovered one of the biggest
              challenges in multi-agent DRL for video games is the vision encoding. Video games are
              inherently visual and the agents need to be able to interpret their environments.
              Through my experimentation in a representative video game environment I made with an
              indie-game level of graphical fidelity, I found that the agents struggled to interpret
              their environments and learned suboptimal strategies. Given the ambitious nature and
              short, mad dash of a timeline for this project, there are certainly future directions
              that can be taken to improve the agents&apos; performance such as implementing more
              efficient and effective vision encoders, hyperparameter tuning, reward structure
              tuning, and most importantly, more thorough experimentation comparing the
              agents&apos; performance across different environments and the efficacy of their
              evolutionary behaviour compared to a baseline colony of agents which do not have the
              ability to reproduce.
            </p>
            <h4>Accomplishments</h4>
            <ul>
              <li>
                Combined the MA-POCA algorithm with a genetic algorithm to evolve collaborative
                agents that improve their performance over multiple generations
              </li>
              <li>
                Designed and implemented two collaborative testing environments and reward
                structures for the agents to train in
              </li>
              <li>Conducted hyperparameter tuning to optimize the agents&apos; performance</li>
            </ul>
            <h4>Tools Used</h4>
            <ul>
              <li>Unity ML Agents</li>
            </ul>
            <div className="medialinks">
              <a
                href="https://github.com/Spencer-L/Evolving-ML-Agents"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/GitHub-Logo.png" width={30} height={30} alt="GitHub" />
              </a>
              <a
                href="/assets/pdf/ML-Agents-Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/Paper-Glyph.png" width={30} height={30} alt="Paper" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
