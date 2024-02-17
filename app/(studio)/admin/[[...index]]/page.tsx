"use client";

import config from '@/cms/sanity-config.ts';
import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
  return <NextStudio config={config} />
}