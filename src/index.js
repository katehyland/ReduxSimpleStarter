import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY= 'AIzaSyDBgc-STuVTo8RxNDbWxZP-8pe59d3sWAk'; 
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
        });
    }

    //app boots up, videos is an empty array & our selectedVideo is null.
    //we go into video detail, video detail isn't provided a video so it shows the spinner. At the same tiume, we kick off our request to go grab a list of videos.  
    //when that request is completed, we'll pass in the list of videos into this.state.videos & the first video in that list will be set to selectedVideo. 
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));