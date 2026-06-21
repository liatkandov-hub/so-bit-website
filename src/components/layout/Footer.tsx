import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

import { siteConfig, footerLinkGroups } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="text-xl">SO BIT</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteConfig.address}
            </span>
          </div>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פייסבוק"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground/70 transition-colors hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="אינסטגרם"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground/70 transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="לינקדאין"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground/70 transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerLinkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold">{group.title}</h4>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border/60 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SO BIT מבית שחם אורלן. כל הזכויות שמורות.</p>
          <p>אתר זה מוגן באמצעות פרוטוקול HTTPS</p>
        </div>
      </div>
    </footer>
  );
}
