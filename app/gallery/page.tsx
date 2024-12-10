import Gallery from "@/components/Gallery";

const galleryItems = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397175/ttyz9lpmjzvxprg4pc26.jpg",
    alt: "Reforma de cocina moderna",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397096/y4qgps38o0squksbboto.jpg",
    alt: "Baño renovado",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397012/wixolg0ovovz4damhrn8.jpg",
    alt: "Salón reformado",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733396994/mspqeezxjxg8qcfxl9d5.jpg",
    alt: "Dormitorio actualizado",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733396757/rvy4iclukm3duyo48wsl.jpg",
    alt: "Terraza remodelada",
  },
  {
    id: "6",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733319801/fn7px9zicbna4mwqhm6z.jpg",
    alt: "Oficina en casa",
  },
  {
    id: "7",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397175/ttyz9lpmjzvxprg4pc26.jpg",
    alt: "Reforma de cocina moderna",
  },
  {
    id: "8",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397096/y4qgps38o0squksbboto.jpg",
    alt: "Baño renovado",
  },
  {
    id: "9",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397012/wixolg0ovovz4damhrn8.jpg",
    alt: "Salón reformado",
  },
  {
    id: "10",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733396994/mspqeezxjxg8qcfxl9d5.jpg",
    alt: "Dormitorio actualizado",
  },
  {
    id: "11",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733396757/rvy4iclukm3duyo48wsl.jpg",
    alt: "Terraza remodelada",
  },
  {
    id: "12",
    src: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733319801/fn7px9zicbna4mwqhm6z.jpg",
    alt: "Oficina en casa",
  },
  // Añade más items según sea necesario
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Gallery items={galleryItems} />
    </main>
  );
}
