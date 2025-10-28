import Head from "next/head";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import SolutionSection from "../components/SolutionSection";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{"\u0053\u0055\u004c\u0041\u0042\u0020\u007c\u0020\u0041\u0049\u0020\ub9c8\ucf00\ud305\u0020\uc5f0\uad6c\uc18c"}</title>
        <meta
          name="description"
          content="\u0053\u0055\u004c\u0041\u0042\uc740\u0020\u0041\u0049\ub85c\u0020\ub9c8\ucf00\ud305\u0020\uc778\uc0ac\uc774\ud2b8\ub97c\u0020\ub9cc\ub4e4\uc5b4\ub0b4\ub294\u0020\uc5f0\uad6c\uc18c\uc785\ub2c8\ub2e4\u002e\u0020\ub370\uc774\ud130\u0020\ubd84\uc11d\uacfc\u0020\uc790\ub3d9\ud654\ub97c\u0020\uae30\ubc18\uc73c\ub85c\u0020\ube0c\ub79c\ub4dc\uc758\u0020\uc131\uc7a5\uc744\u0020\uc9c0\uc6d0\ud569\ub2c8\ub2e4\u002e"
        />
        <meta
          property="og:title"
          content="\u0053\u0055\u004c\u0041\u0042\u0020\u007c\u0020\u0041\u0049\u0020\ub9c8\ucf00\ud305\u0020\uc5f0\uad6c\uc18c"
        />
        <meta
          property="og:description"
          content="\u0041\u0049\u0020\uae30\ubc18\u0020\uc720\ud29c\ube0c\u0020\uc778\uc0ac\uc774\ud2b8\uc640\u0020\uc790\ub3d9\ud654\u0020\uc194\ub8e8\uc158\uc73c\ub85c\u0020\ube0c\ub79c\ub4dc\u0020\uc131\uc7a5\uc744\u0020\uac00\uc18d\ud654\ud558\uc138\uc694\u002e"
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <HeroSection />
        <SolutionSection />
        <PortfolioSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
