import type { Metadata } from 'next';
import SocialLinks from '@/components/SocialLinks';

export const metadata: Metadata = {
  title: 'Spencer Lin - About',
};

export default function About() {
  return (
    <div style={{ marginTop: '6%', textAlign: 'center' }}>
      <p style={{ textAlign: 'center' }}>
        <img
          src="/assets/images/Segovia PFP Circle.png"
          width={250}
          height={250}
          alt="Spencer Lin"
        />
      </p>
      <br />
      <h1 style={{ textAlign: 'center' }}>Who is Spencer Lin?</h1>
      <br />

      <p className="bio" style={{ margin: '0 auto' }}>
        Glad you asked! I&apos;m the founder of Estuary, a one-stop-shop B2B2C infra provider to
        create &amp; deploy AI characters. My background is in AI &amp; XR researching and
        developing bleeding edge spatially intelligent AI agents. I was previously a researcher at
        the Institute for Creative Technologies and am a visiting researcher at the Mobile &amp;
        Environmental Media Lab at the USC School of Cinematic Arts. I have also collaborated with
        NASA to develop multimodal fully-local AI-powered AR HUDs. I hold a Master&apos;s and
        Bachelor&apos;s degree in Computer Science and minor in Immersive Media from USC.
      </p>

      <div style={{ textAlign: 'center' }}>
        <br />
        <h1>Let&apos;s Connect!</h1>
        <br />
        <SocialLinks showEmail />
      </div>
    </div>
  );
}
