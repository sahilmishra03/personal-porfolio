import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ActiveStatus from "./ActiveStatus";

export const title = "Avatar with Online Indicator";

const ProfileAvatar = () => (
  // Added "group" to trigger the subtle scale effect on hover
  <div className="relative w-fit group">
    <Avatar className="h-20 w-20 border border-border/40 shadow-sm transition-transform duration-300 group-hover:scale-[1.02] sm:h-28 sm:w-28">
      {/* Updated alt tag from "@armanthakur" to "@sahil" */}
      <AvatarImage 
        alt="@sahil" 
        src="/Coding_Profile.jpg" 
        className="object-cover" 
      />
      {/* Added a fallback just in case the image takes a second to load */}
      <AvatarFallback className="bg-muted text-lg font-medium text-muted-foreground">
        SM
      </AvatarFallback>
    </Avatar>
    
    <ActiveStatus />
  </div>
);

export default ProfileAvatar;