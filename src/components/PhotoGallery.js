import React, { useEffect, useState } from 'react';
import '../style/PhotoGallery.scss';

const PhotoGallery = () => {
    const [data, setData] = useState([]);
    const [showFullDescription, setShowFullDescription] = useState({});

    useEffect(() => {
        fetch('/dummyData.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const toggleDescription = (id) => {
        setShowFullDescription(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="photo-gallery container">
            <h2 className="section-title">ফটো গ্যালারি</h2>
            <div className="row">
                {data.map(item => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="photo-item">
                            {item.type === 'multiple' ? (
                                <div className="photo-grid">
                                    {item.photos.slice(0, 4).map((photo, index) => (
                                        <div className="photo" key={index}>
                                            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
                                            {index === 3 && item.photos.length > 4 && (
                                                <div className="more">+{item.photos.length - 4}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="photo-single">
                                    <img src={item.photos[0]} alt="Single photo" className="img-fluid" />
                                </div>
                            )}
                            {item.description && (
                                <div className="description-container">
                                    <p className={`description ${showFullDescription[item.id] ? 'full' : ''}`}>
                                        {showFullDescription[item.id]
                                            ? item.description
                                            : `${item.description.slice(0, 53)}...`}
                                    </p>
                                    <span
                                        className="toggle-description"
                                        onClick={() => toggleDescription(item.id)}
                                    >
                                        {showFullDescription[item.id] ? 'সংক্ষেপ করুন' : 'আরো পড়ুন'}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
