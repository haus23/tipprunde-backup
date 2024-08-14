import type {
  Config,
  DefaultClassGroupIds,
  DefaultThemeGroupIds,
} from 'tailwind-merge';
import { type TV, tv as tvBase } from 'tailwind-variants';

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

export const tv = ((options, config?) =>
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
