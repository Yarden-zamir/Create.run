// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	global.itemsToHide.forEach(item => {
		event.hide(item)
		console.log("hiding " + item);
	});
})
onEvent('jei.remove.categories', event => {
	global.categoriesToHide.forEach(cat => {
		event.remove(cat)
	});
})