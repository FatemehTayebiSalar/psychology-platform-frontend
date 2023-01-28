import PodEpisodes from "../Podcasts/PodEpisodes";

import React, { Component } from 'react';

class EpisodeModal extends Component {
    render() {
        const {data ,modelName} = this.props
        return(
            <div>
                {modelName == "podcast" ? (
                    <PodEpisodes title={data.title} text={data.text} fileURL={data.fileURL}/>
                ) : (
                    <div>Hello Modal</div>
                )}
            </div>
        )
    }
}

export default EpisodeModal;