import React from 'react';

const VideoListItem = ({ video }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
        <div className="video-list media">
        <div className="media-left">
            <img className="media-object" src={imageUrl} />
                </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
            </div>
        </li>

    );
};
// each video list item, which is intended to show a single video (thumbnail/title) for now will just show a single line that says "video"
export default VideoListItem;