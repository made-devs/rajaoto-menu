// app/components/TestimoniCard.jsx
import { Star } from "lucide-react";

// Komponen kecil untuk menampilkan bintang rating
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill={index < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
};

export const TestimoniCard = ({ testimoni }) => {
  const { quote, rating, customerName, location, service } = testimoni;

  return (
    // Menggunakan background gradient dan border untuk desain kartu
    <div className="flex h-full flex-col justify-between rounded-xl border border-zinc-700 bg-gradient-to-br from-[#1F1D20] via-[#333238] to-[#484149] p-6 text-white shadow-lg">
      <blockquote className="italic">&quot;{quote}&quot;</blockquote>
      <div className="mt-4">
        <StarRating rating={rating} />
        <p className="mt-2 font-bold">{customerName}</p>
        <p className="text-sm text-zinc-400">
          {location} - <span className="font-medium">{service}</span>
        </p>
      </div>
    </div>
  );
};
