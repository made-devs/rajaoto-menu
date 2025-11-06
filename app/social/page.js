// app/social/page.jsx
import { socialData } from '../data/socials';
import { SocialSlider } from '../components/SocialSlider';

export default function SocialPage() {
  return (
    // Kita tambahkan class ini biar komponen slidernya bisa ditengah (vertikal)
    <section className="py-8 flex flex-col flex-grow">
      <SocialSlider socialData={socialData} />
    </section>
  );
}
