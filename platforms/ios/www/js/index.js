/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        console.log('Received Event: ' + id);
        var SonosStream = window.cordova.plugins.SonosPlugin;
        
        function success(res,roomName){
            
            for(let i=0;i<res.length;i++){
                var newLi = document.createElement('li');
                newLi.innerHTML = res[i] + ' '+ roomName[i];
                
                document.getElementById('list').appendChild(newLi).addEventListener('click',function(){SonosStream.selectDevise(res[i])});
            }
            
        };
        function error(err){alert(err)};
        
        document.getElementById('init').addEventListener('click',function(){
           SonosStream.foundDevise(success,error);
       });
        document.getElementById('getSpeakerInfo').addEventListener('click',function(){
         SonosStream.getSpeakerInfo(function(res){if(res){console.log(JSON.stringify(res))}else{alert('undefined')}},(err)=>{alert(err)});
     });
        document.getElementById('stop').addEventListener('click',function(){
           SonosStream.stop();
       });
        document.getElementById('play').addEventListener('click',function(){
           SonosStream.play();
       });
        document.getElementById('pause').addEventListener('click',function(){
          SonosStream.pause();
      });
        document.getElementById('next').addEventListener('click',function(){
           SonosStream.next();
       });
        document.getElementById('prev').addEventListener('click',function(){
           SonosStream.prev();
       });
        document.getElementById('getVolume').addEventListener('click',function(){
          SonosStream.getVolume(function(res){if(res){console.log(res)}else{alert('undefined')}});
      });
        document.getElementById('setVolume').addEventListener('click',function(){
          SonosStream.setVolume(document.getElementById('inputVolume').value);
      });
        document.getElementById('setMute').addEventListener('click',function(){
            SonosStream.setMute(document.getElementById('inputMute').value);
        });
        document.getElementById('getMute').addEventListener('click',function(){
            SonosStream.getMute(function(res){if(res){console.log(res)}else{alert('undefined')}});
        });
        document.getElementById('setBass').addEventListener('click',function(){
            SonosStream.setBass(document.getElementById('inputBass').value);
        });
        document.getElementById('getBass').addEventListener('click',function(){
            SonosStream.getBass(function(res){if(res){console.log(res)}else{alert('undefined')}});
        });
        document.getElementById('setTreble').addEventListener('click',function(){
          SonosStream.setTreble(document.getElementById('inputTreble').value);
      });
        document.getElementById('getTreble').addEventListener('click',function(){
          SonosStream.getTreble(function(res){if(res){console.log(res)}else{alert('undefined')}});
      });
        document.getElementById('setLoudness').addEventListener('click',function(){
            SonosStream.setLoudness(document.getElementById('inputLoudness').value);
        });
        document.getElementById('getLoudness').addEventListener('click',function(){
            SonosStream.getLoudness(function(res){if(res){console.log(res)}else{alert('undefined')}});
        });
        document.getElementById('playTrack').addEventListener('click',function(){
          SonosStream.playTrackURI('128458657');
      });
        document.getElementById('getTrackInfo').addEventListener('click',function(){
           SonosStream.getTrackInfo(function(res){if(res){console.log(JSON.stringify(res))}else{alert('undefined')}});
       });
        document.getElementById('playFromQueue').addEventListener('click',function(){
          SonosStream.playFromQueue(22);
      });
        document.getElementById('seek').addEventListener('click',function(){
           SonosStream.seek('00:02:31');
       });
        document.getElementById('playmode').addEventListener('click',function(){
           SonosStream.setPlayMode(document.getElementById('inputPlayMode').value);
       });
    }
};

app.initialize();
