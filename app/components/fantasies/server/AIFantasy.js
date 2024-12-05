import { Suspense } from "react";
import AIFantasyContent from "../client/AIFantasyContent";

async function getFantasies() {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "The Teacher Pet",
          description:
            "You are a university math professor. One of your students failed her final, and is looking for some extra help.",
          image: "/images/fantasy/fantasy.png",
          views: "55.5k",
          likes: 64,
          avatar: "/images/fantasy/avatarFantasy.png",
        },
        {
          title: "Late Payment",
          description:
            "Jennifer is your landlord, but unfortunately with recent struggles at work, you’ve been missing your rent payments.",
          image: "/images/fantasy/fantasy.png",
          views: "654.5k",
          likes: 168,
          avatar: "/images/fantasy/avatarFantasy.png",
        },
        {
          title: "Jerk Off Instructions",
          description:
            "Your hot roommate catches you trying to please yourself, and she's not happy about it.",
          image: "/images/fantasy/fantasy.png",
          views: "55.5k",
          avatar: "/images/fantasy/avatarFantasy.png",
          likes: 64,
        },
        {
          title: "Unexpected Date",
          description:
            "You unexpectedly find yourself on a romantic date with someone you didn’t think you’d ever meet.",
          image: "/images/fantasy/fantasy.png",
          views: "75.3k",
          avatar: "/images/fantasy/avatarFantasy.png",
          likes: 128,
        },
        {
          title: "Forgotten Promise",
          description:
            "A childhood friend returns to fulfill a long-forgotten promise.",
          image: "/images/fantasy/fantasy.png",
          views: "80.2k",
          avatar: "/images/fantasy/avatarFantasy.png",
          likes: 142,
        },
        {
          title: "Dangerous Game",
          description:
            "You’re caught in a dangerous game with someone who knows all your secrets.",
          image: "/images/fantasy/fantasy.png",
          views: "90.7k",
          avatar: "/images/fantasy/avatarFantasy.png",
          likes: 153,
        },
      ]);
    }, 300); 
  });
}

export default async function AIFantasy() {
  const fantasies = await getFantasies();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AIFantasyContent fantasies={fantasies} />
    </Suspense>
  );
}
