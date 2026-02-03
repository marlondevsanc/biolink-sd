import { BioLinkData } from "../modules/biolink/types/biolink.types";

export const BIOLINKS: Record<string, BioLinkData> = {
    sinfoniadigital: {
        username: "sinfoniadigital",
        name: "Sinfonía Digital",
        bio: "Estrategia, diseño y contenido con intención.",
        template: "minimal",
        links: [
            {
                label: "Instagram",
                url: "https://instagram.com/sinfoniadigital",
            },
            {
                label: "WhatsApp",
                url: "https://wa.me/50500000000",
            },
            {
                label: "Portafolio",
                url: "https://sinfoniadigital.com",
            },
        ],
    },
};
