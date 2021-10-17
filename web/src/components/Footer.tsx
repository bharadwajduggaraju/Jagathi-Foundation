import React from "react";
import { Link } from "react-router-dom";
import {
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";

interface Props {
  socialLinks: SocialLinksType;
  contactInfo: ContactInformationType;
  donateLink: BankAddressType;
}

const Footer: React.FC<Props> = ({ socialLinks, contactInfo, donateLink }) => {
  const navg = (url: string) => {
    return () => {
      window.location.href = url;
    };
  };

  return (
    <footer className="w-full bg-black text-center text-white text-md p-5">
      <div className="flex justify-center lg:py-0 lg:flex-row flex-col pt-2 items-center">
        <div
          className="
              text-center lg:mx-1 m-auto lg:py-4 
            "
        >
          <h1 className="text-xl">Socials</h1>
          <div className="flex mt-3 items-center">
            <div onClick={navg(socialLinks.twitter)}>
              <span
                className="iconify lg:mx-2 mx-1 cursor-pointer"
                data-inline="false"
                data-height="28"
                data-icon="logos:twitter"
              ></span>
            </div>
            <div onClick={navg(socialLinks.facebook)}>
              <span
                className="iconify lg:mx-2 mx-1 cursor-pointer"
                data-inline="false"
                data-height="28"
                data-icon="logos:facebook"
              ></span>
            </div>
            <div onClick={navg(socialLinks.youtube)}>
              <span
                className="iconify lg:mx-2 mx-1 cursor-pointer"
                data-inline="false"
                data-icon="logos:youtube-icon"
                data-height="28"
              ></span>
            </div>
            <div onClick={navg(socialLinks.instagram)}>
              <span
                className="iconify lg:ml-2 mx-1 cursor-pointer text-yellow-500"
                data-inline="false"
                data-height="32"
                data-icon="fe:instagram"
              ></span>
            </div>
          </div>
        </div>
        <div className="text-center lg:mx-3 m-auto py-4 ">
          <h1 className="text-xl">Get In Touch</h1>
          <h2
            className="md:flex cursor-pointer mt-3"
            onClick={navg("mailto:" + contactInfo.email)}
          >
            <span className="px-1">📧</span> {contactInfo.email} <span className="px-1">📧</span>
          </h2>
          <h2 className="lg:flex justify-center items-center">
            <span className="px-1">🏠</span>
            {contactInfo.location}
            <span className="px-1">🏠</span>
          </h2>
        </div>
        <div className="text-center lg:mx-3 m-auto lg:py-4">
          <h1 className="text-xl">Donate</h1>
          <Link to={donateLink}>
            <p>
              To donate, click{" "}
              <span className="text-yellow-500 cursor-pointer">here</span>.
              <br />
              &nbsp;
            </p>
          </Link>
        </div>
      </div>
      <div className="border-t-2 border-yellow-600 lg:w-7/12 md:w-9/12 w-12/12 m-auto py-3 lg:pb-3 pb-6 text-md">
        {new Date().getFullYear()} © All Rights Reserved by Jagathi Foundation.
        <p className="py-1">
          Made With 💗 By {" "}
          <a
            href="https://bharadwaj.duggaraju.com"
            className="text-yellow-500 text-lg"
          >
            Bharadwaj Duggaraju
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
