function countFroyoFlavors(flavors) {
    const flavorCounts = {};
    const flavorArray = flavors.split(',');

    for (let i = 0; i < flavorArray.length; i++) {
        const flavor = flavorArray[i].trim();
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    }

    return flavorCounts;
}

function handleFroyoOrders(inputString) {
    const flavorCounts = countFroyoFlavors(inputString);
    console.log('Froyo Flavor Counts:');
    for (const flavor in flavorCounts) {
        console.log(`${flavor}: ${flavorCounts[flavor]}`);
    }
}
