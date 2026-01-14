import { Sun, Leaf, Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const footerLinks = {
  company: [
    { label: "About Us", href: "#", isExternal: false },
    { label: "Careers", href: "#", isExternal: false },
    { label: "Press", href: "#", isExternal: false },
    { label: "Blog", href: "#", isExternal: false },
  ],
  support: [
    { label: "Help Center", href: "#", isExternal: false },
    { label: "Contact Us", href: "contact", isInternal: true },
    { label: "System Monitoring", href: "#", isExternal: false },
    { label: "Warranty Info", href: "#", isExternal: false },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy", isPage: true },
    { label: "Terms of Service", href: "/terms", isPage: true },
    { label: "Cookie Policy", href: "#", isExternal: false },
    { label: "Licensing", href: "#", isExternal: false },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; isInternal?: boolean; isPage?: boolean }) => {
    if (link.isInternal) {
      e.preventDefault();
      scrollToSection(link.href);
    }
    // For isPage links, let them navigate normally
    // For external links (#), prevent default but don't do anything
    if (!link.isInternal && !link.isPage && link.href === "#") {
      e.preventDefault();
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Sun className="w-8 h-8 text-accent" />
                <Leaf className="w-4 h-4 text-emerald-400 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold">SunPower Elite</span>
            </a>
            <p className="text-emerald-200 mb-6 max-w-sm">
              Empowering American homeowners with premium solar solutions since 2015. 
              Your trusted partner in clean energy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-emerald-200">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>123 Solar Way, Austin, TX 78701</span>
              </div>
              <a href="tel:+18007867693" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(800) SUN-POWER</span>
              </a>
              <a href="mailto:hello@sunpowerelite.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@sunpowerelite.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.isInternal ? `#${link.href}` : link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-200">
          <p>© 2025 SunPower Elite. All rights reserved.</p>
          <p>Licensed Contractor #12345678 | BBB A+ Rated</p>
        </div>
      </div>
    </footer>
  );
}
