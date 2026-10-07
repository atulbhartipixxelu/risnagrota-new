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

function TableTennis() {
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
          <img src="images/table-tennis/3-table-tennis.jpg" alt="Academics_Banner" />
      </section>

      {/* Overview */}
      <section className="overview">
          <div className="container">
              <div className="overview-box">
                  <h2 className="hdng-h2">Khelo India Residential Academy for Table Tennis</h2>
                  <p>The fourth state level table tennis competition was held at the Khelo India Residential Table Tennis Academy of Rainbow International School, Nagrota Bagwan on 23rd September, 2023. On the accomplishment of this event Mr. Munish Sharma, SDM, Nagrota Bagwan graced the occasion as the Chief Guest. Mr. Munish Sharma, the Chief Guest was welcomed and honoured by the President of District Kangra Table Tennis Association, Dr. Chhavi Kashyap with a shawl, Himachali cap and memento. Around 100 players from various schools across the district participated.In his address the Principal Dr. Chhavi Kashyap said that sports help the students to develop leadership skills and equip them with the ability to set goals and build character. Participating in sports can lead to higher self-esteem and better social interaction. It also helps students have a positive outlook on life.</p>
              </div>
          </div>
      </section>

      {/* Atal Tinkering Images */}
      <div className="atal-tink-images">
          <div className="container">
              <div className="atal-gallery">
                  {[1, 2, 3, 4, 5, 6, 7 ].map((num) => (
                      <img
                          key={num}
                          src={`images/table-tennis/${num}-table-tennis.jpg`}
                          alt={`${num}-table-tennis`}
                          onClick={() => openModal(`images/table-tennis/${num}-table-tennis.jpg`)}
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

export default TableTennis;