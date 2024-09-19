export function setupTeleport() {
  const frontDocument = wwLib.getFrontDocument();
  if (frontDocument) {
    const appEl = frontDocument.querySelector("#app");
    if (appEl) {
      return {
        teleportTarget: appEl,
        isTeleportReady: true,
      };
    } else {
      console.error("Target element '#app' not found in front document");
    }
  } else {
    console.error("Unable to get front document");
  }
  return {
    teleportTarget: null,
    isTeleportReady: false,
  };
}
