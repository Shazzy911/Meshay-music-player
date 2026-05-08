import { Howl } from "howler";

class AudioManager {
  private sound: Howl | null = null;

  load(src: string) {
    if (this.sound) {
      this.sound.unload();
    }

    this.sound = new Howl({
      src: [src],
      html5: true, // important for large audio files
    });
  }

  play() {
    this.sound?.play();
  }

  pause() {
    this.sound?.pause();
  }

  stop() {
    this.sound?.stop();
  }

  seek(value?: number) {
    if (!this.sound) return 0;

    if (value !== undefined) {
      this.sound.seek(value);
    }

    return this.sound.seek() as number;
  }

  duration() {
    return this.sound?.duration() || 0;
  }

  isPlaying() {
    return this.sound?.playing() || false;
  }
}

const audioManager = new AudioManager();
export default audioManager;
