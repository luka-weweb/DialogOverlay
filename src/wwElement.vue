<template>
  <Teleport
    :to="teleportTarget"
    v-if="isTeleportReady"
    :disabled="this.content.teleport"
  >
    <wwLayout v-bind="$attrs" path="slot" />
  </Teleport>
</template>

<script>
import { Teleport } from "vue";

export default {
  inheritAttrs: false,
  inject: ["activeTabProvided"],
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  },
  data() {
    return {
      teleportTarget: null,
      isTeleportReady: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.setupTeleport();
    });
  },
  methods: {
    setupTeleport() {
      const frontDocument = wwLib.getFrontDocument();
      if (frontDocument) {
        const appEl = frontDocument.querySelector("#app");
        if (appEl) {
          this.teleportTarget = appEl;
          this.isTeleportReady = true;
        } else {
          console.error("Target element '#app' not found in front document");
        }
      } else {
        console.error("Unable to get front document");
      }
    },
  },
  watch: {
    "content.teleport"(newValue) {
      this.setupTeleport();
    },
  },
};
</script>

<style scss></style>
