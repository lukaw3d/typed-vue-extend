## How to use

```ts
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


import type { TypedVueExtendOverride } from 'typed-vue-extend';
Component.extend({
  methods: {
    // Type checked that method exists and return type matches.
    async b() {
      return 'bb';
    },
  },
} as TypedVueExtendOverride<typeof Component>);
```

See [./test.ts](./test.ts)

Note: editors commonly use shims-vue.d.ts for Component.vue imports. In those cases editor will not show errors detected by TypedVueExtendOverride - only compilation will.
