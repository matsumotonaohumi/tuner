import { Players, Part, Time } from 'tone';

const synth = new Tone.Synth().toMaster();

document.querySelector("[type=button]").addEventListener("click", e => {
    synth.triggerAttackRelease("C4", "8n"); // 8分音符「♪」の、「ド」を弾く
});