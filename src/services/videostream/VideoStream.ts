// code used from https://github.com/caseymcj/raspberrypi_node_camera_web_streamer/blob/master/videoStream.js
import { Stream } from './types';

export const VideoStream: Stream = {
  acceptConnections: function(expressApp, cameraOptions, resourcePath, isVerbose){
      const raspberryPiCamera = require('raspberry-pi-camera-native');

      if(!cameraOptions){
          cameraOptions = {
              width: 1280,
              height: 720,
              fps: 16,
              encoding: 'JPEG',
              quality: 7
          };
      }

      // start capture
      raspberryPiCamera.start(cameraOptions);
      if(isVerbose) {
          console.log('Camera started.');
      }

      if(typeof resourcePath === 'undefined' || !resourcePath){
          resourcePath = '/stream.mjpg';
      }

      expressApp.get(resourcePath, (req, res) => {

          res.writeHead(200, {
              'Cache-Control': 'no-store, no-cache, must-revalidate, pre-check=0, post-check=0, max-age=0',
              Pragma: 'no-cache',
              Connection: 'close',
              'Content-Type': 'multipart/x-mixed-replace; boundary=--myboundary'
          });
          if(isVerbose)
              console.log('Accepting connection: '+req.hostname);

          // add frame data event listener
      
          let isReady = true;
      
          let frameHandler = (frameData: Buffer) => {
              try{
                  if(!isReady){
                      return;
                  }
      
                  isReady = false;
      
                  if(isVerbose)
                      console.log('Writing frame: '+frameData.length);

                  res.write(`--myboundary\nContent-Type: image/jpg\nContent-length: ${frameData.length}\n\n`);
                  res.write(frameData, function(){
                      isReady = true;
                  });
      
      
              }
              catch(ex){
                  if(isVerbose)
                      console.log('Unable to send frame: '+ex);
              }
          }
      
          let frameEmitter = raspberryPiCamera.on('frame', frameHandler);
      
          req.on('close', ()=>{
              frameEmitter.removeListener('frame', frameHandler);

              if(isVerbose)
                  console.log('Connection terminated: '+req.hostname);
          });
      });
  }
}