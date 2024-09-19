<template>
  <Teleport
    :to="this.teleport.teleportTarget"
    :disabled="!this.content.teleport && !this.teleport.isTeleportReady"
  >
    <wwLayout path="slot" v-bind="$attrs" :class="sheetClasses"></wwLayout>
  </Teleport>
</template>

<script>
import { setupTeleport } from "./teleport.js";

export default {
  inheritAttrs: false,
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  },
  data() {
    return {
      teleport: { teleportTarget: null, isTeleportReady: false },
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.content.teleport) {
        this.teleport = setupTeleport();
      }
    });
  },
  watch: {
    "content.teleport"(newValue) {
      if (newValue) {
        this.teleport = setupTeleport();
      }
    },
  },
  computed: {
    sheetClasses() {
      return {
        sheet: this.content.type === "sheet",
        [`-${this.content.side}`]: ["left", "right", "top", "bottom"].includes(
          this.content.side
        ),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
}

.sheet {
  position: fixed;

  &.-left {
    top: 0;
    left: 0;
    height: 100% !important;
  }
  &.-right {
    top: 0;
    right: 0;
    height: 100% !important;
  }
  &.-top {
    top: 0;
    left: 0;
    width: 100% !important;
  }
  &.-bottom {
    bottom: 0;
    left: 0;
    width: 100% !important;
  }
}
</style>
