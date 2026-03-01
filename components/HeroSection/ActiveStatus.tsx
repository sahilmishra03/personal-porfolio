"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import axios from "axios";
import { Clock, Code, Gamepad2, Music } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import type { LanyardData, LanyardResponse } from "@/types/discord";
import { CodeTime } from "@/types/wakatime";

const DISCORD_ID = "889514676067635250";

const statusConfig: Record<string, { color: string; label: string }> = {
  online: { color: "bg-green-500", label: "Online" },
  idle: { color: "bg-yellow-500", label: "Idle" },
  dnd: { color: "bg-red-500", label: "Do Not Disturb" },
  offline: { color: "bg-gray-400", label: "Offline" },
};

const statusDotConfig: Record<string, { color: string; shadow: string }> = {
  online: { color: "bg-green-500", shadow: "shadow-green-500/50" },
  idle: { color: "bg-yellow-500", shadow: "shadow-yellow-500/50" },
  dnd: { color: "bg-red-500", shadow: "shadow-red-500/50" },
  offline: { color: "bg-gray-400", shadow: "shadow-gray-400/50" },
};

const ActiveStatus = () => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [discord, setDiscord] = useState<LanyardData | null>(null);
  const [codeTime, setCodeTime] = useState<CodeTime | null>(null);

  // Icon detection
  const getActivityIcon = useCallback((activity: any) => {
    if (activity.name?.toLowerCase().includes("spotify")) return Music;
    if (
      activity.name?.toLowerCase().includes("visual studio code") ||
      activity.name?.toLowerCase().includes("code")
    )
      return Code;
    if (activity.type === 0) return Gamepad2;
    return Code;
  }, []);

  // Format activity
  const formatActivity = useCallback(
    (activity: any, discordData: LanyardData | null) => {
      if (
        activity.name?.toLowerCase().includes("spotify") &&
        discordData?.spotify
      ) {
        return {
          name: "Spotify",
          details: discordData.spotify.song,
          state: discordData.spotify.artist,
          icon: Music,
        };
      }

      return {
        name: activity.name || "Unknown",
        details: activity.details,
        state: activity.state,
        icon: getActivityIcon(activity),
      };
    },
    [getActivityIcon]
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isMounted = true;

    const fetchData = async () => {
      if (!isMounted) return;

      try {
        const [discordRes, wakatimeRes] = await Promise.allSettled([
          axios.get<LanyardResponse>(
            `https://api.lanyard.rest/v1/users/${DISCORD_ID}`,
            { timeout: 5000 }
          ),
          axios.get(
            "https://portfolio-3-backend.vercel.app/api/wakatime/today-time",
            { timeout: 5000 }
          ),
        ]);

        if (!isMounted) return;

        if (discordRes.status === "fulfilled") {
          setDiscord(discordRes.value.data.data);
        } else {
          setDiscord(null);
        }

        if (wakatimeRes.status === "fulfilled") {
          setCodeTime(wakatimeRes.value.data.data[0].grand_total);
        } else {
          setCodeTime(null);
        }
      } catch (err) {
        console.error("Error fetching status:", err);
      }

      if (isMounted) {
        timeoutId = setTimeout(fetchData, 60000);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const status = discord?.discord_status ?? "offline";
  const { color, label } = statusConfig[status] ?? statusConfig.offline;
  const { color: dotColor, shadow } =
    statusDotConfig[status] ?? statusDotConfig.offline;

  // Ignore custom status (type 4)
  const currentActivity = useMemo(() => {
    if (!discord?.activities) return null;

    const realActivity = discord.activities.find(
      (activity) => activity.type !== 4
    );

    return realActivity ? formatActivity(realActivity, discord) : null;
  }, [discord, formatActivity]);

  const ActivityIcon = currentActivity?.icon;

  return (
    <div
      className="absolute right-0 bottom-0 z-10 cursor-help"
      onMouseEnter={() => setIsDisplaying(true)}
      onMouseLeave={() => setIsDisplaying(false)}
    >
      <div className="border-background bg-background relative flex h-[18px] w-[18px] items-center justify-center rounded-full border-[3px] transition-transform duration-300 hover:scale-110">
        <span
          className={`absolute size-2.5 rounded-full ${dotColor} ${shadow} animate-pulse shadow-lg`}
        />
      </div>

      <AnimatePresence>
        {isDisplaying && (
          <motion.div
            initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="border-border/50 bg-background/80 absolute -bottom-1 left-8 z-20 flex w-max flex-col gap-2.5 rounded-xl border p-3 shadow-xl backdrop-blur-xl dark:bg-[#161618]/80"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center">
                <div
                  className={`absolute h-3 w-3 animate-ping rounded-full ${color} opacity-40`}
                />
                <div className={`relative h-2 w-2 rounded-full ${color}`} />
              </div>
              <span className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
                {label}
              </span>
            </div>

            {currentActivity && (
              <div className="border-border/50 bg-muted/30 flex items-center gap-2 rounded-md border px-2.5 py-1.5">
                {ActivityIcon && (
                  <ActivityIcon size={14} className="text-muted-foreground" />
                )}
                <div className="flex flex-col">
                  <span className="text-foreground text-xs font-semibold">
                    {currentActivity.name}
                  </span>
                  {currentActivity.details && (
                    <span className="text-muted-foreground max-w-[150px] truncate text-[10px] font-medium">
                      {currentActivity.details}
                    </span>
                  )}
                  {currentActivity.state && (
                    <span className="text-muted-foreground max-w-[150px] truncate text-[10px] font-medium">
                      {currentActivity.state}
                    </span>
                  )}
                </div>
              </div>
            )}

            {codeTime && (
              <div className="border-border/50 bg-muted/30 flex items-center gap-2 rounded-md border px-2.5 py-1.5">
                <Clock size={14} className="text-muted-foreground" />
                <span className="text-foreground text-xs font-semibold">
                  {codeTime.hours}h {codeTime.minutes}m
                </span>
                <span className="text-muted-foreground text-[10px] font-medium">
                  coded today
                </span>
              </div>
            )}

            {discord && (
              <div className="border-border/50 bg-muted/30 flex items-center gap-2 rounded-md border px-2.5 py-1.5">
                <div className="text-muted-foreground text-[10px] font-medium">
                  {discord.discord_user.global_name ||
                    discord.discord_user.username}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActiveStatus;
