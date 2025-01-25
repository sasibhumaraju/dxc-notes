import React from 'react';
import warnAudio from '../audio/warning.mp3'

class AudioPlayer {
    audio = new Audio(warnAudio);
    listOfClients = [{n:0,i:false},{n:1,i:false},{n:2,i:false},{n:3,i:false},{n:4,i:false},{n:5,i:false},{n:6,i:false},{n:7,i:false},{n:8,i:false},{n:9,i:false}]

    playAudio(n) {
        this.listOfClients[n].i = true;
        this.audio.play();
    }

    isAnyPlaying() {
        var seed = false;
        this.listOfClients.forEach((o)=>{
            seed = seed || o.i;
        })
        return seed;
    }

    stopAudio(n) {
        if(this.listOfClients[n].i == true) {
            this.listOfClients[n].i = false;    

            if(this.isAnyPlaying() == false) {
                this.audio.pause();
                this.audio.currentTime = 0;      
            }
        }
    }

    toggleAudio() {

        var muted = localStorage.getItem("dxc:muted")
        console.log(localStorage.getItem("dxc:muted"))
        if( muted === "true" ) {
            this.audio.muted = false;
            localStorage.setItem("dxc:muted",false);
            console.log("true -> false")
        } else {
            this.audio.muted = true;    
            localStorage.setItem("dxc:muted",true); 
            console.log("false -> true")
        }

        console.log(localStorage.getItem("dxc:muted"))
    }

    getIsMuted() {
        var muted = localStorage.getItem("dxc:muted")
        console.log("hello : " + muted);
        if( muted === null || muted === "false") {
            localStorage.setItem("dxc:muted",false);
            this.audio.muted = false;
            return false;   
        }
        else {
            this.audio.muted = muted;
            return "true";}
    }
    
}

const audioPlayer = new AudioPlayer()

export default audioPlayer;
