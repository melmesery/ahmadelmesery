"use client";

import React, { createContext, useEffect, useState } from "react";
import { getProfile } from "../sanity/sanity-utils.ts";

const ProfileContext = createContext<any>(null);

const ProfileProvider = ({ children }: any) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const fetchedProfile: any = await getProfile();
        setProfile(fetchedProfile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
