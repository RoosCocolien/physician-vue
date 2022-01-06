module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import '@/components/AppCore/styles.scss';
				`
			}
		}
	}
}