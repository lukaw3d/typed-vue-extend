import Vue from 'vue';

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
