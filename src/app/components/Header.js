"use client";
import Link from "next/link";
import { useState } from "react";

const menu = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Matter",
    submenu: [
      { label: "Matter-Certified Device", href: "/matter/devices" },
      { label: "Sub-device Work with M1 Hub", href: "/matter/subdevice" }
    ]
  },
  // {
  //   label: "HomeKit",
  //   submenu: [
  //     { label: "ZMHK-01 Hub", href: "/homekit/zhmk01" },
  //     { label: "HomeKit Devices", href: "/homekit/devices" }
  //   ]
  // },
  {
    label: "Zigbee",
    submenu: [
      { label: "Zigbee Devices", href: "/zigbee/devices" },
      { label: "Zigbee Handler Download", href: "/zigbee/handler" }
    ]
  },
  // {
  //   label: "Wi-Fi",
  //   submenu: [
  //     { label: "Wi-Fi Devices", href: "/wifi/devices" }
  //   ]
  // },
  {
    label: "Motors",
    submenu: [
      { label: "Curtain Motor", href: "/motors/curtain" },
      { label: "Blind Motor", href: "/motors/blind" },
      { label: "Roller Motor", href: "/motors/roller" },
      { label: "Garage Door Motor", href: "/motors/garage" }
    ]
  },
  {
    label: "Switch",
    submenu: [
      { label: "Switch", href: "/switch/switch" },
      { label: "Dimmer Module", href: "/switch/dimmer" },
      { label: "Scene Switch", href: "/switch/scene" }
    ]
  },
  {
    label: "Sensors",
    submenu: [
      { label: "PIR Sensor", href: "/sensors/pir" },
      { label: "Door Sensor", href: "/sensors/door" },
      { label: "Light Sensor", href: "/sensors/light" },
      { label: "Water Leak Sensor", href: "/sensors/water" }
    ]
  },
  // { label: "Smart Plugs", href: "/smartplugs" },
  { label: "DIY", href: "/diy" },
  // {
  //   label: "Support Center",
  //   submenu: [
  //     { label: "Contact Us", href: "/support/contact" },
  //     { label: "User Manual Download", href: "/support/manual" },
  //     { label: "FAQ", href: "/support/faq" },
  //     { label: "App Privacy Policy", href: "/support/privacy" }
  //   ]
  // }
];

function IconBtn({ children, href, label }) {
  return (
    <Link href={href} className="header-icon" aria-label={label}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(null);

  return (
    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          <img src="/logo-light.png" alt="EOZ Logo" height={40} />
        </Link>
        <nav className="main-nav">
          <ul>
            {menu.map((item, i) => (
              <li
                key={item.label}
                onMouseEnter={() => setOpen(i)}
                onMouseLeave={() => setOpen(null)}
                className={item.submenu ? "has-submenu" : ""}
              >
                <Link href={item.href ?? "#"} className="nav-link">
                  {item.label}
                </Link>
                {item.submenu && open === i && (
                  <ul className="submenu">
                    {item.submenu.map(sub => (
                      <li key={sub.label}>
                        <Link href={sub.href}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <IconBtn href="/wishlist" label="Wishlist">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </IconBtn>
          <IconBtn href="/cart" label="Cart">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          </IconBtn>
          <IconBtn href="/login" label="Login">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          </IconBtn>
        </div>
      </div>
    </header>
  );
}
