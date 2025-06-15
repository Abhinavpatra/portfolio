"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconMoon,
  IconNotebook,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "./theme-provider";

const FloatingDockWrapper = () => {
  const { theme, toggleTheme } = useTheme();

  const items = [
    {
      title: "Home",
      icon: (
        <IconHome className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Blogs",
      icon: (
        <IconNotebook className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
    {
      title: "Mail",
      icon: (
        <IconBrandGmail className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:patraabhinav12@gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/PatraBuilds",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/abhinavpatra",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin />,
      href: "https://www.linkedin.com/in/abhinavpatra1st/",
    },
    {
      title: "Theme",
      icon:
        theme === "light" ? (
          <IconMoon className="hidden w-full h-full sm:block text-neutral-500 dark:text-neutral-300" />
        ) : (
          <IconSun className="hidden w-full h-full sm:block text-neutral-500 dark:text-neutral-300" />
        ),

      onClick: toggleTheme,
    },
  ];

  return (
    <div className="flex items-center justify-end w-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white sm:h-24">
      <FloatingDock
        mobileClassName=" -translate-x-4 -translate-y-8"
        items={items}
      />
    </div>
  );
};
export default FloatingDockWrapper;
