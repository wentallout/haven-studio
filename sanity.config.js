import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {schemaTypes} from './schemas';
import {codeInput} from '@sanity/code-input';

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
export const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineConfig({
  name: 'haven',
  title: 'Haven',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});
