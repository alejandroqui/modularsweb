import { useState } from 'react';

export default function Productos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const rawImages = import.meta.glob('../imgs/*/*.jpg', {
    eager: true,
    import: 'default',
  });

  const productos = {};

  Object.entries(rawImages).forEach(([path, img]) => {
    const match = path.match(/..\/imgs\/([^/]+)\/(\d+)\.jpg$/);
    if (match) {
      const ref = match[1];
      const index = parseInt(match[2], 10);
      if (!productos[ref]) productos[ref] = [];
      productos[ref][index - 1] = img;
    }
  });

  const productosArray = Object.entries(productos).map(([ref, images]) => ({
    ref,
    images,
  }));

  const mostrarMas = () => setVisibleCount((prev) => prev + 6);

  const openModal = (images) => {
    setSelectedImages(images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImages([]);
  };

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % selectedImages.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      (prev - 1 + selectedImages.length) % selectedImages.length
    );

  return (
    <section id="productos" className="bg-[#fdf6ec] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2d5d25] mb-12 text-center">
          Nuestros Productos
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {productosArray.slice(0, visibleCount).map(({ ref, images }) => (
            <div
              key={ref}
              className="bg-white shadow-xl rounded-2xl overflow-hidden text-center min-h-[420px] flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(images)}
            >
              <img
                src={images[0]}
                alt={`Producto ${ref}`}
                className="w-full h-[360px] object-cover"
              />
              <div className="bg-[#2d5d25] text-white p-3 text-base font-medium">
                {ref}
              </div>
            </div>
          ))}
        </div>

        {visibleCount < productosArray.length && (
          <div className="mt-10 text-center">
            <button
              onClick={mostrarMas}
              className="bg-[#2d5d25] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#244b1f] transition"
            >
              Mostrar más productos
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white p-4 rounded-xl max-w-4xl w-full shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 hover:text-red-500 text-3xl"
            >
              ×
            </button>

            <img
              src={selectedImages[currentIndex]}
              alt={`Producto`}
              className="w-full max-h-[75vh] object-contain rounded"
            />

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevImage}
                className="bg-[#2d5d25] text-white px-5 py-2 rounded hover:bg-[#244b1f]"
              >
                Anterior
              </button>
              <span className="text-gray-700 text-lg font-medium">
                {currentIndex + 1} / {selectedImages.length}
              </span>
              <button
                onClick={nextImage}
                className="bg-[#2d5d25] text-white px-5 py-2 rounded hover:bg-[#244b1f]"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

