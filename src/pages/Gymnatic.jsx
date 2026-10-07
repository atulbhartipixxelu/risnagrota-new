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

function Gymnastics() {
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
          <img src="images/gymnastics/6-GYM.jpg" alt="Academics_Banner" />
      </section>

      {/* Overview */}
      <section className="overview">
          <div className="container">
              <div className="overview-box">
                  <h2 className="hdng-h2">Gymnastics</h2>
                  <p>Gymnastics is considerably more than simply muscular strength and flexibility. Gymnastics is an excellent sport for developing motor skills, balance, and coordination. It is also one of the most effective strategies to keep your body active. It may also help you enhance your overall health in a fun and engaging way while also instilling confidence and strong decision-making abilities that the child needs.</p>
              </div>
          </div>
      </section>

      {/* Atal Tinkering Images */}
      <div className="atal-tink-images">
          <div className="container">
              <div className="atal-gallery">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ].map((num) => (
                      <img
                          key={num}
                          src={`images/gymnastics/${num}-GYM.jpg`}
                          alt={`${num}-GYM`}
                          onClick={() => openModal(`images/gymnastics/${num}-GYM.jpg`)}
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

export default Gymnastics;