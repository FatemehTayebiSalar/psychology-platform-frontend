import PodEpisodes from "../Podcasts/PodEpisodes";

import React, { Component } from 'react';
import VideoEpisodes from "../Videos/VideoEpisdes";

class EpisodeModal extends Component {
    render() {
        const {data ,modelName} = this.props
        return(
            <div>
                {modelName === "podcast" ? (
                    <PodEpisodes title={data.title} text={data.text} fileURL={data.fileURL}/>
                ) : (
                    <VideoEpisodes title={data.title} text={data.text} fileURL={data.fileURL}/>
                )}
            </div>
        )
    }
}

export default EpisodeModal;