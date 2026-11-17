import { ArrowUpRight, Facebook, Github, Linkedin } from "lucide-react";
import { socialProfiles } from "../data/portfolioData";

const profileIcons = {
  github: Github,
  facebook: Facebook,
  linkedin: Linkedin,
};

export default function SocialLinks({ networks, className = "" }) {
  const profiles = socialProfiles.filter((profile) =>
    networks.includes(profile.id),
  );

  return (
    <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${className}`}>
      {profiles.map((profile) => {
        const Icon = profileIcons[profile.id];
        const content = (
          <>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#ccff00]">
              {Icon ? (
                <Icon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <span className="text-[10px] font-bold tracking-tight" aria-hidden="true">
                  {profile.shortLabel}
                </span>
              )}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-white">{profile.name}</span>
              <span className="block break-words text-xs text-slate-400">
                {profile.url ? profile.label : "Profile URL pending"}
              </span>
            </span>
            {profile.url ? (
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-[#ccff00]"
                aria-hidden="true"
              />
            ) : (
              <span className="shrink-0 rounded-full border border-amber-500/20 bg-amber-500/5 px-2 py-1 text-[10px] font-mono text-amber-300">
                Pending
              </span>
            )}
          </>
        );
        const classNames =
          "group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-[#10141f] p-3 transition-colors hover:border-[#ccff00]/35";

        return profile.url ? (
          <a
            key={profile.id}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames}
            aria-label={`Open ${profile.name} profile in a new tab`}
          >
            {content}
          </a>
        ) : (
          <div
            key={profile.id}
            className={`${classNames} cursor-not-allowed opacity-75`}
            role="group"
            aria-label={`${profile.name} profile URL has not been provided`}
            aria-disabled="true"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
