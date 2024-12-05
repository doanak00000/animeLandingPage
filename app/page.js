
"use client"
import Navbar from "./components/header/client/Navbar";
import Hero from "./components/header/server/Hero";
import AIFantasy from "./components/fantasies/server/AIFantasy";
import ClientWrapper from "./components/header/client/ClientWrapper";
import Roleplay from "./components/roleplay/client/Roleplay";
import AIVoice from "./components/aivoice/client/AIVoice";
import CreateAiImage from "./components/createAiImage/server/CreateAiImage";
const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen mx-auto max-w-6xl">
      <div className="container mx-auto px-4">
      <ClientWrapper>
        {/* // this will be better if set up context or redux and make this become server component */}
      {(currentSection, onSectionChange) => (
            <>
              <Navbar onSectionChange={onSectionChange} currentSection={currentSection} />
              <Hero section={currentSection} />
            </>
          )}
      </ClientWrapper>
      <AIFantasy/>
      <Roleplay/>
      <AIVoice/>
      <CreateAiImage/>
      </div>
    </div>
  );
};

export default Home;
