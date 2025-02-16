import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    { href: "https://www.linkedin.com/in/dhruv-goyal-55aa901b6/", icon: <FaLinkedin /> },
    { href: "https://github.com/GoyalDhruv", icon: <FaGithub /> },
    { href: " http://discordapp.com/users/dhruv0010", icon: <FaDiscord /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-4 text-black px-10">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    ©Nova 2024. All rights reserved
                </p>

                <div className="flex justify-center gap-4  md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <span
                    className="text-center text-sm font-light hover:underline md:text-right cursor-pointer"
                >
                    Privacy Policy
                </span>
            </div>
        </footer>
    );
};

export default Footer;