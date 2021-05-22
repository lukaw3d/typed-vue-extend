import type { ExtendedVue } from 'vue/types/vue.d';
import type { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options.d';
import type { TypedVueExtendOverrideSpec } from './test';

/**
 * Ensures extended methods exist and their types match.
 *
 * When extending imported .vue files this only adds compiler typesafety,
 * because editors use vue shims.
 *
 * @see TypedVueExtendOverrideSpec
 */
export type TypedVueExtendOverride<Component> = Component extends ExtendedVue<
  infer V,
  infer D,
  infer M,
  infer C,
  infer P
>
  ? ThisTypedComponentOptionsWithRecordProps<V, D, M, C, P>
  : never;

type SeeUsageExamples = typeof TypedVueExtendOverrideSpec;
