import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/VideoGallery.scss';

const VideoGallery = () => {
    return (
        <div className="video-gallery container">
            <h2 className="section-title">ভিডিও গ্যালারি</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="video-item">
                        <div className="video-placeholder"></div>
                        <p className="description">২০২৩ সালের রজতজয়ন্তী পৃষ্ঠপোষক অনুষ্ঠান</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="video-item">
                        <div className="video-placeholder"></div>
                        <p className="description">২০২৩ সালের রজতজয়ন্তী পৃষ্ঠপোষক অনুষ্ঠান</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="video-item">
                        <div className="video-placeholder"></div>
                        <p className="description">২০২৩ সালের রজতজয়ন্তী পৃষ্ঠপোষক অনুষ্ঠান</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
