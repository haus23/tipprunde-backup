import * as v from 'valibot';

const colorSchemeNames = ['light', 'dark', 'system'] as const;

export const colorSchemeSchema = v.picklist(colorSchemeNames);
export const themeColorSchema = v.picklist(['default']);

export const themeSchema = v.object({
  colorScheme: v.picklist([...colorSchemeNames]),
  themeColor: themeColorSchema,
});

export type Theme = v.InferInput<typeof themeSchema>;
