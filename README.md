# The Pink Panther project

The goal of this project is to build a react-based rendering of a video, where each pixel is represented as a react component. 

### This has been done already.

Well I've never seen it, nor do I need to. The outcome of this isn't an something I expect will be useful as a way to actually present a video. The ultimate goal is to experiment with different ways of increasing performance and to be able to see the effects of the performance gains. I want to answer questions like:
- What resolution can this handle?
- How much data is being streamed from the backend?
- How many FPS can we
- What is the maximum volume of my laptop fans?

## Overall structure

The plan is to use react for the front end, rails for the backend (maybe ActionCable for streaming data via sockets to the FE?) and ImageMagick for processing the video.

### Overall process
1. Process video -> store/queue
2. Process data?
3. grab data from store/queue
4. Process data?
5. Send data to FE
6. Render video frame

### Different toggles to control:
- Resolution
- Compression
- Frames per second
- Frame update methods
- Video processing methods
- Data transfer mechanisms
- React patterns
