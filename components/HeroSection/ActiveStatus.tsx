"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import type { LanyardData, LanyardResponse } from "@/types/discord";
import { CodeTime } from "@/types/wakatime";

const statusConfig: Record<string, { color: string; label: string }> = {
  online: { color: "bg-gray-600", label: "Online" },
  idle: { color: "bg-gray-500", label: "Idle" },
  dnd: { color: "bg-gray-700", label: "Do Not Disturb" },
  offline: { color: "bg-gray-400", label: "Offline" },
};

const ActiveStatus = () => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [discord, setDiscord] = useState<LanyardData | null>(null);
  const [codeTime, setCodeTime] = useState<CodeTime | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const fetchData = async () => {
      try {
        // Fetch both APIs simultaneously for faster loading
        const [discordRes, wakatimeRes] = await Promise.allSettled([
          axios.get<LanyardResponse>("https://api.lanyard.rest/v1/users/1212050219538325516"),
          axios.get("https://portfolio-3-backend.vercel.app/api/wakatime/today-time")
        ]);

        // Handle Discord API response
        if (discordRes.status === 'fulfilled') {
          setDiscord(discordRes.value.data.data);
        } else {
          console.warn('Discord API unavailable:', discordRes.reason);
          setDiscord(null);
        }

        // Handle WakaTime API response
        if (wakatimeRes.status === 'fulfilled') {
          setCodeTime(wakatimeRes.value.data.data[0].grand_total);
        } else {
          console.warn('WakaTime API unavailable:', wakatimeRes.reason);
          setCodeTime(null);
        }
      } catch (err) {
        console.error('Unexpected error in fetchData:', err);
      }

      timeoutId = setTimeout(fetchData, 120000);
    };

    fetchData();

    return () => clearTimeout(timeoutId);
  }, []);

  const status = discord?.discord_status ?? "offline";
  const { color, label } = statusConfig[status] ?? statusConfig.offline;

  return (
    <div 
      className="absolute bottom-0 right-0 z-10 cursor-help"
      onMouseEnter={() => setIsDisplaying(true)}
      onMouseLeave={() => setIsDisplaying(false)}
    >
      {/* The Status Dot Trigger */}
      <div className="relative flex h-[18px] w-[18px] items-center justify-center rounded-full border-[3px] border-background bg-background transition-transform duration-300 hover:scale-110">
        <span className={`absolute size-2.5 rounded-full ${color}`} />
      </div>

      {/* The Tooltip/Popover */}
      <AnimatePresence>
        {isDisplaying && (
          <motion.div
            initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            // Positioned smoothly to the right of the dot
            className="absolute -bottom-1 left-8 z-20 flex w-max flex-col gap-2.5 rounded-xl border border-border/50 bg-background/80 p-3 shadow-xl backdrop-blur-xl dark:bg-[#161618]/80"
          >
            {/* Header: Status */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center">
                <div className={`absolute h-3 w-3 animate-ping rounded-full ${color} opacity-40`} />
                <div className={`relative h-2 w-2 rounded-full ${color}`} />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                {label}
              </span>
            </div>

            {/* WakaTime Stats */}
            {codeTime && (
              <div className="flex items-center gap-2 rounded-md border border-border/50 bg-muted/30 px-2.5 py-1.5">
                <Clock size={14} className="text-muted-foreground" />
                <span className="text-xs font-semibold text-foreground">
                  {codeTime.hours}h {codeTime.minutes}m
                </span>
                <span className="text-[10px] font-medium text-muted-foreground">
                  coded today
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActiveStatus;