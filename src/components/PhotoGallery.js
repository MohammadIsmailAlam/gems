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
        <div className="container sectional-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <div className="dynamicDiv" id="dd.0.2.0">
                        <div className="row">
                            <div className="col-md-12 pagingBorder">
                                <h2 className="section-title">ফটো গ্যালারি</h2>
                                <div id="theImageGrid">
                                    <ul className="row imagegrid" id="imagegrid">
                                        {data.map(item => (
                                            <li className="col-xs-12 col-sm-6 col-md-4" key={item.id}>
                                                <div className="imgHolder">
                                                    <div className="fauxCrop">
                                                        {item.type === 'multiple' ? (
                                                            item.photos.slice(0, 4).map((photo, index) => (
                                                                <a href="#" key={index}>
                                                                    <img src={photo} alt={`Photo ${index + 1}`} className="grid-image img-responsive" />
                                                                </a>
                                                            ))
                                                        ) : (
                                                            <a href="#">
                                                                <img src={item.photos[0]} alt="Single photo" className="grid-image img-responsive" />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
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
                                                <div className="clearfix"></div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end sample */}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
