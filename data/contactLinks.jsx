import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

export const contactLinks = [
    {
        src: "https://linkedin.com/in/dmytro-sorokine-040536303",
        icon: faLinkedin,
        color: "hover:text-[#0077B5]",
        text: 'Dmytro Sorokine',
    },
    {
        src: "https://github.com/SorokineDmytro",
        icon: faSquareGithub,
        color: "hover:text-[#a173d4]",
        text: 'Dmytro Sorokine',
    },
    {
        src: "mailto:dmytro.sorokine@epitech.eu",
        icon: faSquareEnvelope,
        color: "hover:text-[#d44638]",
        text: 'dmytro.sorokine@epitech.eu',
    },
    {
        src: "tel:0603304670",
        icon: faSquarePhone,
        color: "hover:text-[#34DA4F]",
        text: '06 03 30 46 70',
    },
]