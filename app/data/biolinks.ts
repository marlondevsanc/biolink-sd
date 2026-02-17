import { BioLinkData } from "../modules/biolink/types/biolink.types";

export const BIOLINKS: Record<string, BioLinkData> = {
    sinfoniadigital: {
        username: "sinfoniadigital",
        animation: "elegant",
        name: "Sinfonía Digital",
        bio: "Un equipo apasionado por el mundo digital, especializado en gestión de redes sociales, producción audiovisual, cobertura de eventos y desarrollo de sitios web",
        avatar: "/assets/Images/sinfoniadigital/logo.png",
        template: "minimal",
        theme: {
            colors: {
                background: "#f4f4f4",
                foreground: "#001d3d",
                muted: "#364151",
                accent: "#ffc300",
                border: "#e5e7eb",
            },
            typography: {
                fontFamily: "Juana",
                nameWeight: 700,
            },
            avatar: {
                size: 180,
                borderColor: "#e5e7eb",
                shadow: "0 8px 20px rgba(0,0,0,0.08)",
            },
            buttons: {
                radius: "14px",
                borderWidth: "1px",
                hoverBg: "#111827",
                hoverFg: "#ffffff",
            }

        },
        links: [
            {
                label: "WhatsApp",
                url: "https://wa.link/306jh6",
            },
            {
                label: "Portafolio",
                url: "https://sinfoniadigitalportafolio.netlify.app/",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/sinfoniadigitalni?igsh=NnhibGxwbHE2dXY0",
            },
             {
                label: "Facebook",
                url: "https://www.facebook.com/profile.php?id=61557617054786",
            },
        ],
    },
};
