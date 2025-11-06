// app/promo/page.jsx
import { PromoSlider } from "../components/PromoSlider";
import { promoData } from "../data/promos";

export default function PromoPage() {
  return (
    // Tambahkan class ini untuk membuat section ini mengisi sisa ruang
    <section className="py-8 flex-grow flex flex-col justify-center">
      <h1 className="text-center text-2xl font-black tracking-wider mb-6">
        PROMO BULAN INI
      </h1>
      <PromoSlider promos={promoData} />
    </section>
  );
}
