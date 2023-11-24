import React from "react";
import LinkedinIcon from "../../../assets/linkedinIcon.svg";
import EmailIcon from "../../../assets/emailIcon.svg";
import GithubIcon from "../../../assets/githubIcon.svg";
import DefaultUser from "../../../assets/defaultUser.png";

function CardCollaborator({fullname, image, description, linkedinLink, emailLink, githubLink}) {
  return (
    <div className="p-6 border rounded-xl bg-white">
      <div className="flex gap-x-2 items-center">
        <img
          src={image === "" ? DefaultUser : image }
          className="w-10 h-10 rounded-full object-cover"
          alt="img-profile"
        />
        <h3 className="font-medium">{fullname}</h3>
      </div>
      <p className="w-full text-gray-500 py-3">
        {description}
      </p>
      <div className="flex items-center gap-x-8">
        <a
          className="flex gap-2 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href={linkedinLink}
        >
          <img src={LinkedinIcon} alt="linkedin-icon" />
          <p className="text-gray-500 hover:text-black">LinkeIn</p>
        </a>
        <a
          className="flex gap-2 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href={emailLink}
        >
          <img src={EmailIcon} alt="email-icon" />
          <p className="text-gray-500 hover:text-black">Email</p>
        </a>
        <a
          className="flex gap-2 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href={githubLink}
        >
          <img src={GithubIcon} alt="github-icon" />
          <p className="text-gray-500 hover:text-black">Github</p>
        </a>
      </div>
    </div>
  );
}

export default CardCollaborator;
