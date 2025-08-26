import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { useNavigateHandler } from "@/hooks/useNavigateHandler";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const handleNavigate = useNavigateHandler();

  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-card">
          <h2 className="text-balance font-montserrat text-3xl font-bold lg:text-4xl capitalize">
            Ready to find your dream car?
          </h2>
          <p className="mt-4 max-w-3xl">
            Join thousands of satisfied customers who found their perfect
            vehicle through {company[0].companyName}
            Start your journey today with our extensive inventory and expert
            support.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="custom2"
              size="xl"
              onClick={() => handleNavigate("/listings")}
            >
              <span>Browse All Cars</span>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              onClick={() => handleNavigate("/contact")}
            >
              <span className="text-black">Contact Expert</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
