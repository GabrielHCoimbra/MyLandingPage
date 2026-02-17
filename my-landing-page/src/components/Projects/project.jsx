import React, { useEffect, useState } from "react";
import "./project.css";

export default function Project({ link }) {
    

    // getting the project title---------------------------------------------------------
    function getLastSegment(url) {
        if (!url) return "";
        // remove query string and hash
        const clean = url.split(/[?#]/)[0].trim();
        // remove trailing slash
        const trimmed = clean.endsWith('/') ? clean.slice(0, -1) : clean;
        const parts = trimmed.split('/').filter(Boolean);
        return parts.length ? parts[parts.length - 1] : '';
    }

    const title = link ? getLastSegment(link) : "Title of the Project";

    // ---------------------------------------------------------------------------------
    // getting the project description---------------------------------------------------
    const [description, setDescription] = useState("");
    function parseRepo(url) {
        if (!url) return null;
        let s = url.trim();
        if (s.endsWith('.git')) s = s.slice(0, -4);
        // URL form
        try {
            const u = new URL(s);
            const parts = u.pathname.split('/').filter(Boolean);
            if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
        // eslint-disable-next-line no-unused-vars
        } catch (e) { /* empty */ }
        // owner/repo form
        const slashMatch = s.match(/^([^/]+)\/([^/]+)$/);
        if (slashMatch) return { owner: slashMatch[1], repo: slashMatch[2] };
        return null;
    }

    useEffect(() => {
        if (!link) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDescription("Check more about this project on GitHub. Just click below!");
            return;
        }
        const parsed = parseRepo(link);
        if (!parsed) {
            setDescription("Check more about this project on GitHub. Just click below!");
            return;
        }

        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers = token ? { Authorization: `token ${token}` } : {};

        const { owner, repo } = parsed;
        (async () => {
            try {
                const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
                if (!res.ok) {
                    setDescription("Check more about this project on GitHub. Just click below!");
                    return;
                }
                const json = await res.json();
                setDescription(json.description || "Check more about this project on GitHub. Just click below!");
            // eslint-disable-next-line no-unused-vars
            } catch (e) {
                setDescription("Check more about this project on GitHub. Just click below!");
            }
        })();
    }, [link]);
    // ---------------------------------------------------------------------------------
    return (
        <div className="projects">
            <h3>{title}</h3>
            <p className="desc-project">{description}</p>

            <a className="button" href={link} target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
                </svg>
                <p className="text">Go to Project</p>
            </a>
        </div>
    );
}