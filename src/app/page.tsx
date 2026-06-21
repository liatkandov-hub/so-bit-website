import { Hero } from "@/components/home/Hero";
import { InsuranceCategories } from "@/components/home/InsuranceCategories";
import { WhyUs } from "@/components/home/WhyUs";
import { Services } from "@/components/home/Services";
import { InsuranceCompanies } from "@/components/home/InsuranceCompanies";
import { RecentArticles } from "@/components/home/RecentArticles";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InsuranceCategories />
      <WhyUs />
      <Services />
      <InsuranceCompanies />
      <RecentArticles />
      <Testimonials />
    </>
  );
}
