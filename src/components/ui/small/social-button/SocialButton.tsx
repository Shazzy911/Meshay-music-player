import React from "react";
import Image from "next/image";
import { oAuthService } from "@/lib/service/oAuthService";

import style from "./SocialButton.module.scss";
const SocialButton = () => {
  return (
    <div className={style.socialButtons}>
      <button
        type="button"
        onClick={oAuthService.signInWithGithub}
        className={style.githubButton}
      >
        <Image
          src="https://www.svgrepo.com/show/439171/github.svg"
          alt="Github"
          width={15}
          height={15}
        />
        Continue with Github
      </button>
      <button
        type="button"
        onClick={oAuthService.signInWithDiscord}
        className={style.discordButton}
      >
        <Image
          src="https://www.svgrepo.com/show/331368/discord-v2.svg"
          alt="Google"
          width={15}
          height={15}
        />
        Continue with Discord
      </button>
    </div>
  );
};

export default SocialButton;
