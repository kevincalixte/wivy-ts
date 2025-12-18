import { Hero } from "@/components/Hero/Hero";
import { Content } from "@/components/Content/Content";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Hero title='Discover WIVY, where every conversation counts.' image='/img/home/home.jpg' />
      </header>

      <main>
        <Content />
      </main>

      <footer>
        <Footer visible={true} />
      </footer>
    </>
  );
}
