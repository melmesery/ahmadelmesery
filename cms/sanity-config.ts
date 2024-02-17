import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import schemas from './schemas/index.ts';

const config = defineConfig({
  name: 'default',
  title: 'Website',
  projectId: '5y7g0aey',
  dataset: 'production',
  apiVersion: "2023-12-05",
  basePath: "/admin",
  plugins: [visionTool()],
  schema: {
    types: schemas,
  },
})

export default config;