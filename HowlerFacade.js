class HowlerFacade {
	constructor() {
		this.sounds = {

		};

		this.radio = new Howl({
			src: ['assets/sounds/Radio SFX 4.wav'],
			loop: false
		});
	}

	playRadio() {
		const soundId = this.radio.play();
		return soundId;
	}

	playSound(sound){
		let howlerSound = new Howl({
			src: [sound.sound],
			loop: sound.loop || false,
			volume: sound.volume
		});

		howlerSound.play();
	}

	stopSound() {

	}

	adjustVolume(id, newVolume) {

	}

}
//let radioPlayingSound = sound.play();
//sound.pos(0, 1.6, 0, radioPlayingSound);

function updateHowlerPosition() {
	let cameraPosition = (new THREE.Vector3(0, 1.6, 0)).add(document.querySelector("a-scene").camera.position);
	Howler.pos(cameraPosition.x, cameraPosition.y, cameraPosition.z, radioPlayingSound);
}