import React, { useState } from "react";

function Modal({ isOpen, onClose, imageUrl }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt="modal" />
      </div>
    </div>
  );
}

function AtalTinkering() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="atal-tinkering">
      {/* Atal Tinkering Banner */}
      <section className="academics-banner">
          <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
      </section>

      {/* Overview */}
      <section className="overview">
          <div className="container">
              <div className="overview-box">
                  <h2 className="hdng-h2">Atal Tinkering</h2>
              </div>
          </div>
      </section>

      {/* Atal Tinkering Images */}
      <div className="atal-tink-images">
          <div className="container">
              <div className="atal-gallery">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <img
                          key={num}
                          src={`images/atal-images/${num}-IMG.jpg`}
                          alt={`${num}-atal-images`}
                          onClick={() => openModal(`images/atal-images/${num}-IMG.jpg`)}
                      />
                  ))}
              </div>
          </div>
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
}

export default AtalTinkering;