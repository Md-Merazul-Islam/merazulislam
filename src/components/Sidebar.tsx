"use client";

import { useState } from "react";
import Image from "next/image";
import userData from "@/data/user.json";

interface User {
    name: string;
    image: string;
    email: string;
    phone?: string;
    location: string;
    linkedin?: string;
    github?: string;
    codeforces?: string;
    leetcode?: string;
    codechef?: string;
}

const user = userData as User;

export default function Sidebar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img
                        src={user.image}
                        alt={user.name}
                        width="80"
                    />
                </figure>

                <div className="info-content">
                    <h1 className="name" title={user.name}>
                        {user.name}
                    </h1>

                    <ul className="social-list">
                        {user.linkedin && (
                            <li className="social-item">
                                <a
                                    href={user.linkedin}
                                    className="social-link "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#0077b5" }}
                                >
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                        )}

                        {user.github && (
                            <li className="social-item">
                                <a
                                    href={user.github}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#ffffff" }}
                                >
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </li>
                        )}

                        {user.codeforces && (
                            <li className="social-item">
                                <a
                                    href={user.codeforces}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Codeforces"
                                    style={{ color: "#1f8acb" }}
                                >
                                    <Image src="/code-forces.svg" alt="Codeforces" width={24} height={24} />
                                </a>
                            </li>
                        )}

                        {user.leetcode && (
                            <li className="social-item">
                                <a
                                    href={user.leetcode}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LeetCode"
                                    style={{ color: "#ffa116" }}
                                >
                                    <Image src="/leetcode.svg" alt="LeetCode" width={24} height={24} />
                                </a>
                            </li>
                        )}

                        {/* {user.codechef && (
                            <li className="social-item">
                                <a
                                    href={user.codechef}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="CodeChef"
                                    style={{ color: "#5b4638" }}
                                >
                                    <ion-icon name="terminal-outline"></ion-icon>
                                </a>
                            </li>
                        )} */}
                    </ul>
                    {/* <p className="title">Backend Engineer</p> */}
                </div>

                <button
                    className="info_more-btn"
                    data-sidebar-btn
                    onClick={() => setIsActive(!isActive)}
                >
                    <span>{isActive ? "Hide Contacts" : "Show Contacts"}</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href={`mailto:${user.email}`} className="contact-link">
                                {user.email}
                            </a>
                        </div>
                    </li>

                    {/* <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href={`tel:${user.phone}`} className="contact-link">
                                {user.phone}
                            </a>
                        </div>
                    </li> */}

                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>{user.location}</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

            </div>
        </aside>
    );
}


