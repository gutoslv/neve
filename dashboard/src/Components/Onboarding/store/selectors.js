export default {
	getSites: (state) => state.sites,
	getUpsells: (state) => state.upsells,
	getCurrentEditor: (state) => state.editor,
	getCurrentSite: (state) => state.currentSite,
	getPreviewStatus: (state) => state.previewStatus,
	getImportModalStatus: (state) => state.importModalStatus,
	getImportingStatus: (state) => state.importing
};
