import React, { useEffect } from 'react';

function Results() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const celebrationImages = Array.from({ length: 12 }, (_, index) => `images/result/result-${index + 1}.jpg`);

    return (

        <div className={'resultspage'}>

            {/* ----- Results Banner ----- */}

            <section className="academics-banner">
                <img src="images/result/banner-result.jpg" alt="Result_Banner" />
            </section>

            {/* ----- Results Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Results</h2>
                        <p className="result-page-subtitle">Academic excellence and consistent board performance over the years.</p>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- Latest Results ----- */}
            <section className="results results-section">
                <div className="container">
                    <div className="result-section-card result-section-card--feature">
                        <div className="result-title-wrap">
                            {/* <span className="result-badge">Latest Update</span> */}
                            <h2 className="hdng-h2 result-section-title">Session 2025-26 Results</h2>
                            <p className="result-note-title">Rainbow International School celebrates the outstanding achievement of its Class X students in CBSE Board Examinations 2025-26. Wishing them continued success ahead.</p>
                        </div>
                        <div className="result-image-wrap">
                            <img src="images/homepage/10thresult-2026.jpg" alt="Session 2025-26 result poster" className='result-feature-image' />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Session 2023-24 Results ----- */}
            <section className="results results-section">
                <div className="container">
                    <div className="result-section-card">
                        <div className="result-title-wrap">
                            <span className="result-badge">Class X</span>
                            <h2 className="hdng-h2 result-section-title">Session 2023-24 Results</h2>
                        </div>
                        <div className="result-image-wrap">
                            <img src="images/result/result-2024.jpg" alt="Session 2023-24 result poster" className='result-feature-image' />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- 10th Results 2024 ----- */}
            <section className='cel-images results-section'>
                <div className='container'>
                    <div className="result-section-card">
                        <div className="result-title-wrap">
                            <span className="result-badge">Highlights</span>
                            <h2 className="hdng-h2 result-section-title">Result Celebration</h2>
                        </div>
                        <div className='colmes-images'>
                            {celebrationImages.map((image, index) => (
                                <img src={image} alt={`Result celebration ${index + 1}`} key={image} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* ----- 10th Results 2024 ----- */}

            <section className="results results-section">
                <div className="container">
                    <div className="result-section-card">
                        <div className="result-title-wrap">
                            <span className="result-badge">Archive</span>
                            <h2 className="hdng-h2 result-section-title">Session 2022-23 Results</h2>
                        </div>
                        <div className="result-pdf-wrap">
                            <embed src="pdf/results-2023.pdf" type="application/pdf" className="result-pdf" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="results results-bg results-section">
                <div className="container">
                    <div className="result-section-card">
                        <div className="result-title-wrap">
                            <span className="result-badge">Archive</span>
                            <h2 className="hdng-h2 result-section-title">Session 2021-22 Results</h2>
                        </div>
                        <div className="result-pdf-wrap">
                            <embed src="pdf/results-2022.pdf" type="application/pdf" className="result-pdf" />
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}


export default Results