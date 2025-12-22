import {Button,Card, CardHeader, CardTitle, Badge} from "reactstrap";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {SEO}  from "./SEO.tsx";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "waterfall-features-guide",
    title: "Creating Stunning Waterfall Features for Your Outdoor Space",
    excerpt: "Discover how custom waterfall installations can transform your backyard into a serene oasis. Learn about design options, maintenance, and the benefits of professional installation.",
    category: "Outdoor Features",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=800&h=500&fit=crop&q=80"
  },
  {
    id: "masonry-maintenance",
    title: "Essential Masonry Maintenance: Protecting Your Investment",
    excerpt: "Learn the best practices for maintaining your masonry work to ensure it lasts for decades. From sealing to repairs, we cover everything you need to know.",
    category: "Maintenance",
    date: "2025-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80"
  },
  {
    id: "outdoor-lighting-design",
    title: "Outdoor Lighting Design: Illuminating Your Property's Best Features",
    excerpt: "Professional outdoor lighting can dramatically enhance your home's curb appeal and security. Explore the latest trends and techniques in landscape lighting.",
    category: "Lighting",
    date: "2025-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=500&fit=crop&q=80"
  },
  {
    id: "residential-vs-commercial",
    title: "Residential vs Commercial Masonry: Understanding the Differences",
    excerpt: "While both require expert craftsmanship, residential and commercial masonry projects have unique requirements. Learn what sets them apart and why it matters.",
    category: "Industry Insights",
    date: "2024-12-28",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop&q=80"
  },
  {
    id: "stone-sealing-benefits",
    title: "The Complete Guide to Stone Sealing and Protection",
    excerpt: "Proper sealing is crucial for protecting your stone surfaces from weathering and staining. Discover the different types of sealants and when to apply them.",
    category: "Protection",
    date: "2024-12-20",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop&q=80"
  },
  {
    id: "concrete-artistry",
    title: "Concrete as Art: Modern Design Possibilities in Masonry",
    excerpt: "Gone are the days of plain concrete. Explore how modern techniques transform concrete into stunning decorative elements for both residential and commercial spaces.",
    category: "Design Trends",
    date: "2024-12-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop&q=80"
  }
];

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Solafide Services Blog",
    "description": "Expert insights on masonry, stonework, outdoor features, and professional craftsmanship",
    "url": "https://solafide-services.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Solafide Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://solafide-services.com/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Solafide Services"
      },
      "url": `https://solafide-services.com/blog/${post.id}`
    }))
  };

  return (
    <>
      <SEO
        title="Masonry & Design Blog"
        description="Expert insights on masonry, stonework, concrete artistry, outdoor features, and professional craftsmanship. Learn from trained professionals about maintenance, design trends, and installation best practices."
        type="website"
        url="/blog"
        keywords={[
          "masonry blog",
          "stonework tips",
          "concrete design",
          "outdoor features",
          "waterfall installation",
          "outdoor lighting",
          "stone sealing",
          "masonry maintenance",
          "residential masonry",
          "commercial masonry"
        ]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-primary dark:bg-primary">
      {/* Header */}
      <header className="border-b border-border/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Solafide Services Home">
            <span className="text-2xl font-bold text-accent">Solafide</span>
            <span className="text-2xl font-bold text-card-foreground">• Services</span>
          </Link>
          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            <Link to="/" className="text-card-foreground hover:text-accent transition-colors">
              Home
            </Link>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Latest Insights
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
            Masonry & Design Blog
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Expert insights on masonry, stonework, outdoor features, and professional craftsmanship
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="sr-only">Latest Masonry and Design Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 bg-card hover:-translate-y-1 rounded-lg"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Card className="h-full border-0">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={`${post.title} - Professional masonry and stonework guide`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      itemProp="image"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30" itemProp="articleSection">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      <h3 itemProp="headline">{post.title}</h3>
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <time dateTime={post.date} itemProp="datePublished">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`} itemProp="url">
                      <Button variant="ghost" className="w-full group/btn hover:bg-accent/10" aria-label={`Read full article: ${post.title}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 mt-16 py-8 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Solafide Services. Professional Masonry & Stone Specialists.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Blog;
