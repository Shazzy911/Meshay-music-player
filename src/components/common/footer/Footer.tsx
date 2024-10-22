import React from "react";
import Image from "next/image";
import Hero from "@/images/Hero4.png";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import style from "./Footer.module.scss";
import { companyMenu, communitiesMenu, helpMenu } from "@/json/footer.object";
import Footer_links from "@/components/ui/footer-links/Footer_links";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.container_info}>
        <div className={style.app_info}>
          <span>
            <Image src={Hero} alt="Image not found" width={40} height={40} />
            <h2>Meshay</h2>
          </span>

          <p>
            Offering an immersive and User friendly experience for music
            enthusiasts
          </p>
          <span>
            <IoMail />
            <p>Shazzy.mern@gmail.com</p>
          </span>
          <span>
            <FaPhone />
            <p>+92 3028862387</p>
          </span>
        </div>
        <Footer_links heading="Company" values={companyMenu} />
        <Footer_links heading="Communities" values={communitiesMenu} />
        {/* <Footer_links heading="Meshay Plans" values={meshayPlansMenu} /> */}
        <Footer_links heading="Help" values={helpMenu} />
      </div>

      <div className={style.copy_right}>
        <p>
          &copy; {new Date().getFullYear()} Meshay Music. All rights reserved.
        </p>
        <div>
          <Link href={"/"}>
            <span>
              <FaLinkedin />
            </span>
          </Link>
          <Link href={"/"}>
            <span>
              <FaGithub />
            </span>
          </Link>
          <Link href={"/"}>
            <span>
              <FaInstagram />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
