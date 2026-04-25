/**
 * @component WorkCategoryBackButton
 * @page WorkCategory (/app/work/[category]/page.tsx)
 * @description Button section at the bottom of the category page to navigate back to the main portfolio.
 * @shared false
 * @props none
 */

import Link from "next/link";
import SharedReveal from "@/components/shared/SharedReveal";

const WorkCategoryBackButton = () => {
  return (
    <section className="w-full bg-white pb-[60px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[15px] mt-[50px] text-center">
          <div className="w-full px-[15px]">
            <SharedReveal direction="up" delay={0.2}>
              <Link href="/work" className="button button--moema button--round-s">
                Back to Portfolio
              </Link>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCategoryBackButton;

