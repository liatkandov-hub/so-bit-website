import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/lib/data/products";
import { getProductContent } from "@/lib/data/product-content";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductOverview } from "@/components/product/ProductOverview";
import { ProductAudience } from "@/components/product/ProductAudience";
import { ProductBenefits } from "@/components/product/ProductBenefits";
import { ProductFaq } from "@/components/product/ProductFaq";
import { ProductArticles } from "@/components/product/ProductArticles";
import { ProductCta } from "@/components/product/ProductCta";
import { LeadForm } from "@/components/leads/LeadForm";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getProductContent(slug);
  if (!content) return {};

  return {
    title: content.product.name,
    description: content.product.shortDescription,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: content.product.name,
      description: content.product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const content = getProductContent(slug);

  if (!content) {
    notFound();
  }

  const { product, heroTagline, overview, audience, benefits, faq, articles } = content;

  return (
    <>
      <ProductHero name={product.name} tagline={heroTagline} icon={product.icon} />
      <ProductOverview productName={product.name} overview={overview} />
      <ProductAudience audience={audience} />
      <ProductBenefits benefits={benefits} />
      <ProductFaq faq={faq} />
      <ProductArticles articles={articles} />
      <section id="lead-form" className="py-16 sm:py-20">
        <div className="container max-w-xl">
          <LeadForm product={product.name} />
        </div>
      </section>
      <ProductCta productName={product.name} />
    </>
  );
}
