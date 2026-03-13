import { Badge, Button } from "reactstrap";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {SEO}  from "./SEO.tsx";
import ColorNavbar from 'components/Navbars/ColorNavbar.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

interface BlogPostContent {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

const blogPostsContent: Record<string, BlogPostContent> = {
  "waterfall-features-guide": {
    id: "waterfall-features-guide",
    title: "Creating Stunning Waterfall Features for Your Outdoor Space",
    category: "Outdoor Features",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=1200&h=600&fit=crop&q=80",
    content: [
      "Adding a waterfall feature to your outdoor space creates an immediate sense of tranquility and luxury. At Solafide Services, we've installed countless waterfall features that transform ordinary backyards into private retreats.",
      "The key to a successful waterfall installation lies in proper planning and professional execution. Water features require careful consideration of water flow, pump sizing, filtration, and structural integrity. Our team brings years of expertise to ensure your waterfall not only looks beautiful but operates flawlessly for years to come.",
      "Design options range from natural stone cascades that blend seamlessly with your landscape to modern architectural statements featuring clean lines and dramatic drops. We work closely with each client to understand their vision and create a custom solution that enhances their property's unique character.",
      "Maintenance is surprisingly simple with proper installation. Our sealed waterfall systems minimize water loss, and built-in filtration keeps the water crystal clear. Regular seasonal maintenance ensures optimal performance and longevity.",
      "Whether you're looking for the soothing sounds of a gentle cascade or the dramatic presence of a multi-tiered waterfall, professional installation makes all the difference. Contact us to discuss your vision and receive a detailed consultation."
    ]
  },
  "masonry-maintenance": {
    id: "masonry-maintenance",
    title: "Essential Masonry Maintenance: Protecting Your Investment",
    category: "Maintenance",
    date: "2025-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&q=80",
    content: [
      "Quality masonry work represents a significant investment in your property. With proper maintenance, your stonework, brick, or concrete structures can last for generations while maintaining their beauty and structural integrity.",
      "The first line of defense is regular inspection. We recommend examining your masonry at least twice yearly, checking for cracks, loose mortar, or signs of water damage. Early detection of issues prevents minor problems from becoming costly repairs.",
      "Cleaning is essential but must be done correctly. Different materials require specific cleaning methods. Natural stone, for example, can be damaged by harsh chemicals or high-pressure washing. Our team uses appropriate techniques for each material type to maintain its appearance without causing harm.",
      "Sealing is one of the most important maintenance steps, particularly for porous materials like natural stone and certain concrete finishes. Quality sealants protect against water penetration, freeze-thaw damage, and staining. The type and frequency of sealing depends on your specific materials and local climate conditions.",
      "Repointing, or replacing deteriorated mortar joints, is crucial for brick and stone structures. This isn't just cosmetic—proper mortar joints are essential for structural stability and weather resistance. Professional repointing matches the original mortar composition and technique for seamless results.",
      "Don't overlook drainage. Proper water management around masonry structures prevents most serious damage. Ensure gutters, downspouts, and grading direct water away from your masonry work.",
      "For comprehensive maintenance and repairs, trust experienced professionals who understand the unique requirements of different masonry materials and techniques. Regular professional maintenance is far more cost-effective than major restoration work."
    ]
  },
  "outdoor-lighting-design": {
    id: "outdoor-lighting-design",
    title: "Outdoor Lighting Design: Illuminating Your Property's Best Features",
    category: "Lighting",
    date: "2025-01-05",
    readTime: "6 min read",
    image: "https://cdn.mos.cms.futurecdn.net/s8aH66vsWqK8TXs5L7GvuQ-1024-80.jpg?w=1200&h=600&fit=crop&q=80",
    content: [
      "Professional outdoor lighting transforms your property after sunset, enhancing both beauty and functionality. A well-designed lighting system highlights architectural features, improves safety, and extends your outdoor living hours.",
      "Strategic placement is everything. Path lighting ensures safe navigation while creating ambiance. Uplighting showcases trees, stone walls, and architectural elements. Downlighting from trees or structures provides moonlight-like illumination for patios and gathering spaces.",
      "Modern LED technology has revolutionized outdoor lighting. Today's fixtures are energy-efficient, long-lasting, and available in various color temperatures to suit different moods and purposes. Warm whites typically work best for residential applications, creating inviting spaces.",
      "Layering is key to professional results. Combine different lighting types—ambient, task, and accent—to create depth and visual interest. This approach also provides flexibility to adjust lighting levels for different occasions.",
      "Don't forget about your masonry and stonework. Proper lighting can dramatically enhance textured surfaces, highlighting the craftsmanship of your stone walls, patios, or outdoor kitchen. Grazing light across textured surfaces creates stunning shadow play.",
      "Smart controls and timers add convenience and security. Modern systems can be controlled via smartphone apps, automated based on sunset times, or integrated with motion sensors for security lighting.",
      "Professional installation ensures proper wiring, transformer sizing, and fixture placement. Our team designs lighting systems that complement your landscape while meeting all electrical codes and safety requirements."
    ]
  },
  "residential-vs-commercial": {
    id: "residential-vs-commercial",
    title: "Residential vs Commercial Masonry: Understanding the Differences",
    category: "Industry Insights",
    date: "2024-12-28",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop&q=80",
    content: [
      "While both residential and commercial masonry require skilled craftsmanship, these project types have distinct characteristics that influence everything from design to execution to maintenance.",
      "Scale and scope differ significantly. Residential projects typically focus on outdoor living spaces, retaining walls, chimneys, and decorative elements. Commercial work often involves structural masonry for buildings, extensive hardscaping, and large-scale installations requiring coordination with multiple trades.",
      "Building codes and regulations are more stringent for commercial projects. Commercial masonry must meet specific load-bearing requirements, fire ratings, and accessibility standards. Documentation, inspections, and permitting processes are typically more involved.",
      "Timeline considerations vary. Residential clients often have flexible schedules and may prefer work during specific seasons. Commercial projects frequently have strict deadlines tied to business openings or building occupancy schedules, requiring larger crews and extended work hours.",
      "Material selection reflects different priorities. Residential projects often emphasize aesthetic choices that reflect personal taste. Commercial work balances appearance with durability, maintenance requirements, and budget constraints across large areas.",
      "The design process differs as well. Residential masonry often involves close collaboration with homeowners to realize their vision for outdoor living spaces. Commercial projects typically follow architect specifications and must satisfy multiple stakeholders including property managers, corporate decision-makers, and sometimes public planning boards.",
      "Maintenance planning is crucial for both but approached differently. Residential clients often handle their own maintenance with periodic professional service. Commercial properties typically have ongoing maintenance contracts to protect their investment and maintain appearance standards.",
      "At Solafide Services, we bring appropriate expertise to both residential and commercial projects, understanding that each requires specific knowledge, equipment, and project management approaches."
    ]
  },
  "stone-sealing-benefits": {
    id: "stone-sealing-benefits",
    title: "The Complete Guide to Stone Sealing and Protection",
    category: "Protection",
    date: "2024-12-20",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop&q=80",
    content: [
      "Stone sealing is one of the most important steps in protecting your natural stone investment. Whether you have a stone patio, walkway, retaining wall, or outdoor kitchen, proper sealing extends the life and beauty of your stonework.",
      "Understanding why sealing matters starts with understanding stone porosity. Natural stone is porous to varying degrees, allowing water, oils, and other substances to penetrate the surface. This can lead to staining, discoloration, freeze-thaw damage, and surface degradation over time.",
      "Not all sealers are created equal. Penetrating sealers soak into the stone, providing protection from within while maintaining the natural appearance. Topical sealers create a protective layer on the surface and can enhance color or add sheen. The right choice depends on your stone type and desired appearance.",
      "Application timing is critical. New installations should cure properly before sealing—typically 30-60 days for mortar joints. Existing stonework should be thoroughly cleaned and completely dry before sealer application. Weather conditions matter too; ideal application occurs during dry periods with moderate temperatures.",
      "Different stones require different sealing frequencies. Dense stones like granite may need sealing every 3-5 years, while more porous stones like limestone or sandstone benefit from annual sealing. High-traffic areas and exposure to harsh weather may require more frequent treatment.",
      "The sealing process itself requires expertise. Proper surface preparation, even application, and adequate drying time are essential for optimal results. Over-application can create a hazy appearance, while under-application leaves gaps in protection.",
      "Don't confuse sealing with coating. Sealers protect while maintaining the stone's natural breathability. This is crucial for exterior applications where moisture needs to escape to prevent damage.",
      "Professional sealing services ensure appropriate product selection, proper application, and lasting protection. Our team assesses your specific stone type, exposure conditions, and maintenance preferences to recommend the ideal sealing solution."
    ]
  },
  "concrete-artistry": {
    id: "concrete-artistry",
    title: "Concrete as Art: Modern Design Possibilities in Masonry",
    category: "Design Trends",
    date: "2024-12-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=600&fit=crop&q=80",
    content: [
      "Modern concrete has evolved far beyond basic gray slabs. Today's decorative concrete techniques transform this versatile material into stunning design elements that rival natural stone in beauty while offering unique advantages.",
      "Stamped concrete replicates the appearance of stone, brick, slate, or even wood. Advanced stamping techniques and color options create remarkably realistic textures that are difficult to distinguish from natural materials. This approach offers the look of premium materials at a fraction of the cost.",
      "Stained concrete introduces rich, variegated colors that penetrate the surface. Acid stains create earth-tone hues with natural variation, while water-based stains offer broader color palettes. The result is unique, one-of-a-kind surfaces that add character to any space.",
      "Polished concrete has gained popularity for both indoor and outdoor applications. The process grinds and polishes the surface to reveal aggregate and create a lustrous finish. The result is durable, low-maintenance, and surprisingly elegant.",
      "Exposed aggregate finishes showcase decorative stones embedded in the concrete surface. By removing the surface layer, these installations reveal beautiful natural stones in a durable concrete matrix—perfect for pool decks, patios, and driveways.",
      "Custom concrete work opens endless possibilities. From countertops to fire features, modern techniques allow complex forms, integrated lighting, and embedded elements. The material's workability before curing enables designs impossible with natural stone.",
      "Sustainability is another advantage. Concrete's thermal mass helps regulate temperature, and modern mixes often incorporate recycled materials. Its durability means less frequent replacement compared to other materials.",
      "Professional installation is essential for decorative concrete. Timing, technique, and finishing skills determine the final appearance. Our team stays current with the latest techniques to deliver exceptional results that showcase concrete's artistic potential."
    ]
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = postId ? blogPostsContent[postId] : null;

  const structuredData = post ? {
    // "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Solafide Services",
      "url": "https://solafide-services.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Solafide Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://solafide-services.com/favicon-96x96.png"
      }
    },
    "description": post.content[0],
    "articleSection": post.category,
    "url": `https://solafide-services.com/blog/${post.id}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://solafide-services.com/blog/${post.id}`
    }
  } : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-primary dark:bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.content[0]}
        type="article"
        url={`/blog/${post.id}`}
        keywords={[
          post.category.toLowerCase(),
          "masonry",
          "stonework",
          "concrete",
          "outdoor features",
          "professional installation",
          post.title.toLowerCase().split(" ").slice(0, 5).join(" ")
        ]}
        article={{
          publishedTime: post.date,
          author: "Solafide Services",
          section: post.category,
          tags: [post.category, "masonry", "stonework"]
        }}
        structuredData={structuredData}
      />
      <ColorNavbar />
      <div className="min-h-screen bg-primary dark:bg-primary" style={{ marginTop: '130px' }}>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8 max-w-4xl">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 hover:bg-accent/10 text-foreground hover:text-accent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article */}
      <main>
        <article 
          className="container mx-auto px-4 pb-16 max-w-4xl"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <header className="mb-8">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30" itemProp="articleSection">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6" itemProp="headline">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.date} itemProp="datePublished">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <meta itemProp="author" content="Solafide Services" />
          </header>

          <figure className="aspect-video bg-muted rounded-lg overflow-hidden mb-8" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <img 
              src={post.image} 
              alt={`${post.title} - Professional masonry and stonework guide`}
              className="w-full h-full object-cover"
              itemProp="url"
              loading="lazy"
            />
            <meta itemProp="width" content="1200" />
            <meta itemProp="height" content="675" />
          </figure>

          <div className="prose prose-lg max-w-none" itemProp="articleBody">
            {post.content.map((paragraph, index) => (
              <h5 key={index} className="mb-6 text-card-foreground leading-relaxed">
                {paragraph}
              </h5>
            ))}
          </div>

          <footer className="mt-12 pt-8 border-t border-border/20">
            <Link to="/blog">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" aria-label="Return to blog home">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Read More Articles
              </Button>
            </Link>
          </footer>
        </article>
      </main>

      <DemoFooter />
    </div>
    </>
  );
};

export default BlogPost;
