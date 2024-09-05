export default {
  editor: {
    label: {
      en: "My Element",
    },
    icon: "view-grid",
  },
  properties: {
    name: {
      label: {
        en: "Name",
      },
      type: "Text",
      bindable: true,
      defaultValue: "",
    },
    teleport: {
      label: {
        en: "Teleport",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
