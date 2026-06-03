import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | ViaNova Industrial Solutions</title>
        <meta
          name="description"
          content="Insights, guides and articles on precision measurement, power electronics testing and turnkey industrial automation solutions."
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/blog" />
        <meta property="og:title" content="ViaNova Blog — Measurement, Testing & Automation Insights" />
        <meta property="og:description" content="Practical insights on precision testing, measurement and industrial automation from ViaNova." />
        <meta property="og:url" content="https://vianovaindustrial.solutions/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="pt-32 pb-20 bg-gradient-subtle min-h-screen">
        <div className="container mx-auto px-4">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Insights & Articles
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              ViaNova Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Practical insights on precision testing, measurement and industrial automation.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
