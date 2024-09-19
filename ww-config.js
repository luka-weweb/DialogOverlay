export default {
  editor: {
    label: {
      en: "Content",
    },
    icon: "view-grid",
  },
  properties: {
    /*
    type: {
      label: {
        en: "Type",
      },
      type: "TextSelect",
      defaultValue: "dialog",
      options: {
        options: [
          { value: "dialog", label: { en: "Dialog" } },
          { value: "modal", label: { en: "Modal" } },
          { value: "sheet", label: { en: "Sheet" } },
          { value: "drawer", label: { en: "Drawer" } },
          { value: "alert", label: { en: "Alert" } },
        ],
      },
    },
    side: {
      label: {
        en: "Side",
      },
      type: "TextSelect",
      defaultValue: "dialog",
      options: {
        options: [
          { value: "top", label: { en: "Top" } },
          { value: "right", label: { en: "Right" } },
          { value: "bottom", label: { en: "Bottom" } },
          { value: "left", label: { en: "Left" } },
        ],
      },
      hidden: (content) => {
        return content.type !== "sheet";
      },
    },
    teleport: {
      label: {
        en: "Teleport",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    modal: {
      label: {
        en: "Modal",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    escapeClose: {
      label: {
        en: "ESC closes",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    */

    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
