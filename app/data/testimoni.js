// app/data/testimoni.js

export const testimoniData = {
  // Data testimoni text yang sudah ada
  reviews: [
    {
      id: 1,
      customerName: 'Andi B.',
      location: 'Karawang',
      service: 'Servis Kaki-Kaki Komplit',
      rating: 5,
      quote:
        'Mobil saya jadi senyap lagi setelah servis di Raja Oto. Bunyi aneh di bagian bawah hilang total. Pelayanannya cepat dan profesional!',
      category: 'kaki-kaki',
    },
    {
      id: 2,
      customerName: 'Citra Dewi',
      location: 'Surabaya',
      service: 'Servis AC',
      rating: 5,
      quote:
        'AC mobil langsung dingin lagi kayak baru. Pengerjaannya nggak lama dan harganya juga oke. Recommended banget!',
      category: 'ac',
    },
    {
      id: 3,
      customerName: 'Rian H.',
      location: 'Surabaya',
      service: 'Nano Ceramic Coating',
      rating: 5,
      quote:
        'Hasil coatingnya luar biasa, mobil jadi kinclong dan efek daun talasnya dapet banget. Timnya detail dan teliti.',
      category: 'detailing',
    },
    {
      id: 4,
      customerName: 'Dina S.',
      location: 'Karawang',
      service: 'Overhaul Engine',
      rating: 4,
      quote:
        'Mesin mobil saya sekarang jauh lebih halus dan bertenaga. Proses overhaulnya transparan, dijelasin semua part yang diganti.',
      category: 'engine',
    },
    {
      id: 5,
      customerName: 'Joko P.',
      location: 'Karawang',
      service: 'Anti Karat',
      rating: 5,
      quote:
        'Pengerjaan anti karatnya rapi banget sampai ke sela-sela. Dikasih sertifikat garansi juga, jadi lebih tenang.',
      category: 'kaki-kaki',
    },
    {
      id: 6,
      customerName: 'Lina M.',
      location: 'Surabaya',
      service: 'Tune Up Diesel',
      rating: 5,
      quote:
        'Tarikan mobil diesel saya jadi enteng dan asapnya berkurang drastis. Beda banget rasanya sebelum dan sesudah tune up di sini.',
      category: 'engine',
    },
  ],

  // Data testimoni gambar (baru)
  images: [
    {
      id: 1,
      image: '/gallery/testi1.webp',
      name: 'Budi Santoso',
      service: 'Rebuild Kaki-Kaki Premium',
      category: 'kaki-kaki',
    },
    {
      id: 2,
      image: '/gallery/testi2.webp',
      name: 'Andi Wijaya',
      service: 'AC Ultra',
      category: 'ac',
    },
    {
      id: 3,
      image: '/gallery/testi3.webp',
      name: 'Dewi Lestari',
      service: 'Detailing Premium',
      category: 'detailing',
    },
    {
      id: 4,
      image: '/gallery/testi4.webp',
      name: 'Rudi Hermawan',
      service: 'Diesel Super',
      category: 'engine',
    },
  ],

  // Data testimoni video (baru)
  videos: [
    {
      id: 1,
      thumbnail: '/testimoni/video-thumb-1.webp',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
      name: 'Pak Agus',
      service: 'Rebuild Kaki-Kaki Ultra',
      category: 'kaki-kaki',
    },
    {
      id: 2,
      thumbnail: '/testimoni/video-thumb-2.webp',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
      name: 'Bu Ratna',
      service: 'AC Super + Detailing',
      category: 'ac',
    },
    {
      id: 3,
      thumbnail: '/testimoni/video-thumb-3.webp',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
      name: 'Mas Denny',
      service: 'Engine Tune Up',
      category: 'engine',
    },
    {
      id: 4,
      thumbnail: '/testimoni/video-thumb-4.webp',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4',
      name: 'Mbak Yuni',
      service: 'Detailing Ultra',
      category: 'detailing',
    },
  ],
};
