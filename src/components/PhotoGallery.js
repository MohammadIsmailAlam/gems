import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PhotoGallery.scss';

const PhotoGallery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/dummyData.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="photo-gallery container">
            <h2 className="section-title">ফটো গ্যালারি</h2>
            <div className="row">
                {data.map(item => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="photo-item">
                            {item.type === 'multiple' ? (
                                <div className="photo-grid">
                                    {item.photos.map((photo, index) => (
                                        <div className="photo" key={index}>
                                            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
                                        </div>
                                    ))}
                                    <div className="more">+{item.more}</div>
                                </div>
                            ) : (
                                <div className="photo-single">
                                    <img src={item.photos[0]} alt="Single photo" className="img-fluid" />
                                </div>
                            )}
                            {item.description && <p className="description">{item.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
