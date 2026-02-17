import { useEffect } from "react";
import { BioLinkTheme } from "../types/biolink.types";

interface Props {
    theme: BioLinkTheme;
    children: React.ReactNode;
}

export default function BioThemeProvider({ theme, children }: Props) {
    const style: React.CSSProperties = {
        "--bg": theme.colors.background,
        "--fg": theme.colors.foreground,
        "--muted": theme.colors.muted,
        "--accent": theme.colors.accent,
        "--border": theme.colors.border,
        "--font-family": theme.typography.fontFamily,
        "--avatar-size": `${theme.avatar.size}px`,
        "--avatar-border": theme.avatar.borderColor,
        "--avatar-shadow": theme.avatar.shadow,
        "--btn-radius": theme.buttons.radius,
        "--btn-border": theme.buttons.borderWidth,
        "--btn-hover-bg": theme.buttons.hoverBg,
        "--btn-hover-fg": theme.buttons.hoverFg,

    } as React.CSSProperties;

    useEffect(() => {
        document.documentElement.style.background =
            theme.colors.background;
    }, [theme.colors.background]);

    return (
        <div style={style} className="min-h-screen">
            {children}
        </div>
    );
}
