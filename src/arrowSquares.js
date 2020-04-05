
import UIfx from 'uifx'; 
import clapSound from './my-sounds/1.wav';
import kickSound from './my-sounds/2.mp3';
import hihatSound from './my-sounds/3.mp3';
import openhatSound from './my-sounds/4.mp3';
import boomSound from './my-sounds/5.mp3';
import rideSound from './my-sounds/6.mp3';
import snareSound from './my-sounds/7.mp3';
import tomSound from './my-sounds/8.mp3';
import tinkSound from './my-sounds/9.mp3';


    const clap = new UIfx(clapSound)
    clap.setVolume(0.80)
    const kick = new UIfx(kickSound)
    kick.setVolume(0.80)
    const hihat = new UIfx(hihatSound)
    hihat.setVolume(0.80)
    const openhat = new UIfx(openhatSound)
    openhat.setVolume(0.80)
    const boom = new UIfx(boomSound)
    boom.setVolume(0.80)
    const ride = new UIfx(rideSound)
    ride.setVolume(0.80)
    const snare = new UIfx(snareSound)
    snare.setVolume(0.80)
    const tom = new UIfx(tomSound)
    tom.setVolume(0.80)
    const tink= new UIfx(tinkSound)
    tink.setVolume(0.80)




const arrowSquares=[
     {
        id: 1,
        letter: 'A',
        name: 'clap',
        music: clap,
     },
     {
        id: 2,
        letter: 'S',
        name: 'hihat',
        music: hihat,
     },
    {
        id: 3,
        letter: 'D',
        name: 'kick',
        music: kick,
     },
     {
        id: 4,
        letter: 'F',
        name: 'openhat',
        music: openhat,
     },
     {
        id: 5,
        letter: 'G',
        name: 'boom',
        music: boom,
     },
     {
        id: 6,
        letter: 'H',
        name: 'ride',
        music: ride,

     },
     {
        id: 7,
        letter: 'L',
        name: 'clap',
        music: clap,
     },
     {
        id: 8,
        letter: 'J',
        name: 'snare',
        music: snare,
     },
     {
        id: 9,
        letter: 'K',
        name: 'tom',
        music: tom,
     },
    {
        id: 10,
        letter: 'I',
        name: 'tink',
        music: tink,
     }, 

]

export default arrowSquares
