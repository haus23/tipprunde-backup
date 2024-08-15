import {
  type Config,
  type DefaultClassGroupIds,
  type DefaultThemeGroupIds,
  extendTailwindMerge,
  // biome-ignore lint/nursery/noRestrictedImports: Defining custom exports here
} from 'tailwind-merge';

// biome-ignore lint/nursery/noRestrictedImports: Defining custom exports here
import { type TV, type VariantProps, tv as tvBase } from 'tailwind-variants';

type ClassGroupIds = Extract<
  DefaultClassGroupIds,
  'ring-color' | 'ring-offset-color'
>;
type ThemeGroupIds = Extract<
  DefaultThemeGroupIds,
  'borderRadius' | 'borderColor' | 'opacity'
>;

const mergeConfig: Partial<Config<ClassGroupIds, ThemeGroupIds>> = {
  theme: {
    borderRadius: ['default'],
    borderColor: ['default'],
    opacity: ['hover'],
  },
  classGroups: {
    'ring-color': ['default'],
    'ring-offset-color': ['default'],
  },
};

const twMerge = extendTailwindMerge(mergeConfig);

const tv = ((options, config?) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        ...mergeConfig.theme,
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        ...mergeConfig.classGroups,
      },
    },
  })) satisfies TV;

export { tv, type VariantProps, twMerge };
