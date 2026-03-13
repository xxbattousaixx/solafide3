import {Helmet} from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
    tags?: string[];
  };
  structuredData?: object;
}

export const SEO = ({
  title,
  description,
  type = "website",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://solafide-services.com",
  keywords = [],
  article,
  structuredData,
}: SEOProps) => {
  const fullTitle = `${title} | Solafide Services`;
  const fullUrl = url.startsWith("http") ? url : `https://solafide-services.com${url}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Solafide Services" />

      {/* Article specific OG tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
