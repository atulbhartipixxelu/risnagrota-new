import React, { useEffect } from 'react';

    const EnteryForm = () => {
        const downloadPdf = (fileUrl, fileName) => {
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };


    return (

        < div className={'EnteryForm'} >
            < section className="academics-banner entery_form_img" >
                <img src="images/banner_sports.png" alt="Result_Banner" />
            </section >
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="pdf-content">
                        <button onClick={() => downloadPdf('pdf/Table-Tennis-National-Confirmation-letter-2024.pdf', 'Table Tennis National Confirmation letter 2024.pdf')}>Download PDF</button>
                            <embed src="pdf/Table-Tennis-National-Confirmation-letter-2024.pdf" type="application/pdf" width="100%" height="1000px" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="pdf-content">
                            <button onClick={() => downloadPdf('pdf/Table-Tennis.pdf', 'Table Tennis.pdf')}> Download PDF </button>
                            <embed src="pdf/Table-Tennis.pdf" type="application/pdf" width="100%" height="1000px" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default EnteryForm