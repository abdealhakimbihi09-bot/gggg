import { AppData } from './types';

export const APP_DATA: AppData = {
  page_info: {
    title: "Download Plants vs Zombies 2 (MOD, Unlimited Coins/Gems/Suns) 12.7.1 Free on Android",
    game_icon_url: "https://picsum.photos/seed/pvzmod/200/200", // Placeholder for game icon
    version: "12.7.1",
    platforms: ["Android", "iOS", "PC"],
    rating: "4.3",
    reviews: "1.6M+",
    downloads: "900M+",
    developer: "ELECTRONIC ARTS",
    updated_date: "Feb 2025",
    size: "902 MB"
  },
  header: {
    site_name: "likomy.site",
    breadcrumb: ["Home", "Games", "PvZ 2 MOD"],
    top_button: {
      text: "DOWNLOAD ORIGINAL",
      color: "neon-green"
    }
  },
  main_sections: {
    hero_card: {
      show_verified_badge: true,
      show_download_button: true,
      download_button_text: "GO TO DOWNLOAD",
      style: "rounded dark glass card with green border glow"
    },
    screenshots_slider: {
      title: "Screenshots",
      auto_play: true,
      interval_seconds: 4,
      transition: "smooth-slide",
      images: [
        "https://picsum.photos/seed/pvzscreen1/800/450",
        "https://picsum.photos/seed/pvzscreen2/800/450",
        "https://picsum.photos/seed/pvzscreen3/800/450",
        "https://picsum.photos/seed/pvzscreen4/800/450"
      ]
    },
    full_description: {
      title: "FULL DESCRIPTION",
      content: "Experience the award-winning hit action-strategy adventure where you meet, greet, and defeat legions of hilarious zombies from the dawn of time, to the end of days. This modified version (MOD) unlocks the full potential of your gameplay. With Unlimited Coins, Gems, and Suns, you can instantly upgrade your plants, unlock premium content without grinding, and dominate the battlefield with ease. Whether you are a veteran strategist or a new recruit, this MOD gives you the freedom to experiment with every plant combination available.",
      key_features: [
        "Unlimited Coins: Purchase upgrades instantly.",
        "Unlimited Gems: Unlock premium items.",
        "Unlimited Suns: Create any plant instantly during battles.",
        "New Zombie Variants: Stronger and faster enemies.",
        "Custom MOD Enhancements: Improved balance and performance."
      ]
    }
  },
  download_section: {
    two_cards: [
      {
        title: "Download PvZ 2 MOD (Unlimited Coins/Gems/Suns)",
        version: "12.7.1",
        size: "902 MB",
        recommended: true,
        button_text: "APK"
      },
      {
        title: "Download Original PvZ 2",
        version: "12.7.1",
        size: "902 MB",
        recommended: false,
        button_text: "APK"
      }
    ]
  },
  footer: {
    copyright_text: "© 2025 likomy.site — All rights reserved.",
    minimal_style: true
  }
};