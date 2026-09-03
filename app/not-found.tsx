import Link from "next/link";

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Chevron } from "./components/illustrations";
import { Print } from "./components/print";

export const metadata = {
  title: "Page not found — Rafael Escaleira",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative z-10 flex flex-1 flex-col">
        <section className="relative overflow-hidden bg-background px-6 py-24 md:px-12 md:py-32">
          <div className="relative mx-auto grid max-w-[1120px] items-center gap-14 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="t-eyebrow font-mono">404</p>

              <h1 className="t-section mt-3.5 text-balance">
                This page isn&rsquo;t on the route.
              </h1>

              <p className="t-lead mt-5 max-w-[470px] text-pretty">
                The link may be old, or the address slightly off. Everything else
                is still exactly where you left it.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link href="/" className="btn-primary">
                  Back to the start
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-1.5 text-[17px] text-accent-ink"
                >
                  See my work
                  <Chevron />
                </Link>
              </div>
            </div>

            <div className="justify-self-center lg:justify-self-end">
              <Print
                src="/404.webp"
                alt="A screenprinted astronaut adrift in a debris field, a severed orange tether coiling away"
                width={900}
                height={900}
                priority
                className="max-w-[440px]"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
