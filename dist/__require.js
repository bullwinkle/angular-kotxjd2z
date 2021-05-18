
const modules = ['@angular/core','@angular/platform-browser','@angular/platform-browser-dynamic','tslib','zone.js/dist/zone'];
export default function require(library) {
  const idx = modules.findIndex(
    (it) =>
      it === library ||
      it.replace(/^((@[^/]*\/)?[^/@]*)(@[^/]*)?(\/[^@]*)?$/, '$1$4') ===
        library // removes version pinned, if any
  );
  if (idx === -1) throw new Error(`Import ${library} not found in project scope: ${modules}`);
  return import('https://srv.divriots.com/packd/@angular/core,@angular/platform-browser,@angular/platform-browser-dynamic,tslib,zone.js/dist/zone').then((module) => module['packd_export_'+idx]);
}