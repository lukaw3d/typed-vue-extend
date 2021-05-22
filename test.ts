import Vue from 'vue';
import type { TypedVueExtendOverride } from './index';

const Component = Vue.extend({
  methods: {
    a() {
      return 'a';
    },
    async b() {
      return 'b';
    },
  },
});

const DefaultVueExtendSpec = () => {
  // Expect default VueComponent.extend doesn't detect type error
  Component.extend({
    methods: {
      async b() {
        return 5;
      },
    },
  });
};

export const TypedVueExtendOverrideSpec = () => {
  // Expected usage
  Component.extend({
    methods: {
      async b() {
        return 'bb';
      },
    },
  } as TypedVueExtendOverride<typeof Component>);

  // @ts-expect-error Detects method type mismatch (string)
  Component.extend({
    methods: {
      async b() {
        return 6;
      },
    },
  } as TypedVueExtendOverride<typeof Component>);

  // @ts-expect-error Detects method type mismatch (async)
  Component.extend({
    methods: {
      b() {
        return 'bb';
      },
    },
  } as TypedVueExtendOverride<typeof Component>);

  // @ts-expect-error Detects method typo / doesn't allow new methods
  Component.extend({
    methods: {
      async bbb() {
        return 'bb';
      },
    },
  } as TypedVueExtendOverride<typeof Component>);
};
