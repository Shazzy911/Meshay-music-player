import { Howl } from "howler";

class AudioManager {
  private sound: Howl | null = null;
  private onEndCallback?: () => void;

  load(src: string) {
    if (this.sound) this.sound.unload();

    this.sound = new Howl({
      src: [src],
      html5: true,

      onend: () => {
        this.onEndCallback?.(); // 🔥 trigger next song
      },
    });
  }

  onEnd(callback: () => void) {
    this.onEndCallback = callback;
  }

  play() {
    this.sound?.play();
  }

  pause() {
    this.sound?.pause();
  }

  seek(value?: number) {
    if (!this.sound) return 0;
    if (value !== undefined) this.sound.seek(value);
    return this.sound.seek() as number;
  }

  duration() {
    return this.sound?.duration() || 0;
  }
}

// ✅ FIX: named instance (this removes ESLint warning)
const audioManager = new AudioManager();

export default audioManager;
