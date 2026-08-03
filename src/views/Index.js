
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Solafide3DWalkthroughWrapper from 'components/Solafide3DWalkthroughWrapper.tsx';

const INTRO_KEY = 'solafide_intro_seen';

export default function Index() {
  const navigate = useNavigate();

  // On returning visits, skip the intro immediately
  const alreadySeen = React.useMemo(() => !!localStorage.getItem(INTRO_KEY), []);

  React.useEffect(() => {
    if (alreadySeen) {
      navigate('/home', { replace: true });
    }
  }, [alreadySeen, navigate]);

  // Don't flash the intro for returning visitors
  if (alreadySeen) return null;

  const handleComplete = () => {
    localStorage.setItem(INTRO_KEY, '1');
    navigate('/home');
  };

  return (
    <>
      <Helmet>
        <title>Solafide Services | Florida Hardscape Specialists</title>
        <meta name="description" content="Solafide Services — licensed &amp; insured paver sealing, pool deck restoration &amp; pressure washing in Bradenton FL. Serving Sarasota &amp; Manatee County." />
        <link rel="canonical" href="https://solafide-services.com/" />
        <meta name="robots" content="noindex, follow" />
        <meta name="keywords" content="paver sealing Bradenton FL, pool deck restoration near me, pressure washing company Bradenton, paver restoration Sarasota, Manatee County hardscape, licensed and insured hardscape Florida" />
        <meta property="og:title" content="Solafide Services | Florida Hardscape Restoration" />
        <meta property="og:description" content="Paver cleaning, sealing, pool deck restoration, and hardscape services across Florida." />
        <meta property="og:url" content="https://solafide-services.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Solafide Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solafide Services | Florida Hardscape Restoration" />
        <meta name="twitter:description" content="Paver cleaning, sealing, pool deck restoration, and hardscape services across Florida." />
        <meta name="twitter:site" content="@SolafideService" />
      </Helmet>

      {/* Visually hidden H1 for SEO */}
      <h1 style={{
        position: 'absolute', width: '1px', height: '1px', padding: 0,
        margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)',
        whiteSpace: 'nowrap', border: 0,
      }}>
        Solafide Services — Florida Paver Cleaning, Sealing &amp; Pool Deck Restoration Specialists
      </h1>

      {/* Hidden navigation links for crawlers */}
      <nav aria-label="Site navigation" style={{
        position: 'absolute', width: '1px', height: '1px',
        overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap',
      }}>
        <Link to="/home">Homepage — Solafide Services</Link>
        <Link to="/about-us">About Solafide Services</Link>
        <Link to="/contact-us">Contact Us &amp; Free Estimates</Link>
        <Link to="/gallery">Project Gallery</Link>
        <Link to="/residential">Residential Services</Link>
        <Link to="/commercial">Commercial Services</Link>
        <Link to="/clean-seal">Pressure Washing &amp; Clean &amp; Seal</Link>
        <a href="https://www.facebook.com/SolafideL7/" target="_blank" rel="noopener noreferrer">Solafide on Facebook</a>
      </nav>

      <Solafide3DWalkthroughWrapper onComplete={handleComplete} />
    </>
  );
}
