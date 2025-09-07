import "./App.css";
import Header from "./components/Header";
import Links from "./components/Links";
import Footer from "./components/Footer";
import ytbImg from "./assets/images/ytb-icon.webp";
import igImg from "./assets/images/ig-icon.webp";
import tiktokImg from "./assets/images/tiktok-icon.webp";
import aniImg from "./assets/images/anilist-icon.webp";
import kofiImg from "./assets/images/kofi.webp";

function App() {
  const linksData = [
    {
      socialName: "Tiktok",
      href: "https://www.tiktok.com/@reinachan0111",
      socialImg: tiktokImg,
    },
    {
      socialName: "Youtube",
      href: "https://www.youtube.com/@reinachan0111",
      socialImg: ytbImg,
    },
    {
      socialName: "Instagram",
      href: "https://www.instagram.com/reinachan.0111/",
      socialImg: igImg,
    },
    {
      socialName: "My Anime List",
      href: "https://anilist.co/user/NCQ/animelist",
      socialImg: aniImg,
    },
    {
      socialName: "Treat me to a coffee",
      href: "https://ko-fi.com/reinachan0111",
      socialImg: kofiImg,
    },
  ];
  return (
    <>
      <div className="container">
        <div>
          {/* Header */}
          <Header
            name="Reina °-°"
            userName="@reinachan0111"
            bio="Living like an NPC"
          ></Header>
        </div>
        <div>
          {/* Links */}
          {linksData.map((link) => (
            <Links
              key={link.href}
              socialName={link.socialName}
              href={link.href}
              socialImg={link.socialImg}
            />
          ))}
        </div>

        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
