ServerEvents.recipes(event => {
  event.remove({output: 'cobblefordays:tier_1'})
  event.remove({output: 'cobblefordays:tier_2'})
  event.remove({output: 'cobblefordays:tier_3'})
  event.remove({output: 'cobblefordays:tier_4'})
  event.remove({output: 'cobblefordays:tier_5'})

    event.shaped('cobblefordays:tier_1', [
        'CCC',
        'WGL',
        'CCC'
      ], {
        C: '#minecraft:logs',
        // Item.of('id', '{key: value}'), it's recommended to use /kubejs hand
        // If you want to add a count its Item.of('id', count, '{key: value}'). This won't work here though as crafting table recipes to do accept stacked items
        L: Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}').weakNBT(),
        // Same principle, but if its an enchantment, there's a helper method
        W: Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),
        G: 'minecraft:glass'
      })
    event.shaped('cobblefordays:tier_2', [
        'CCC',
        'WGL',
        'CCC'
      ], {
        C: '#forge:cobblestone',
        // Item.of('id', '{key: value}'), it's recommended to use /kubejs hand
        // If you want to add a count its Item.of('id', count, '{key: value}'). This won't work here though as crafting table recipes to do accept stacked items
        L: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:lava"}}').weakNBT(),
        // Same principle, but if its an enchantment, there's a helper method
        W: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),
        G: 'cobblefordays:tier_1'
      })
    event.shaped('cobblefordays:tier_3', [
        'CCC',
        'WGL',
        'CCC'
      ], {
        C: 'minecraft:iron_ingot',
        // Item.of('id', '{key: value}'), it's recommended to use /kubejs hand
        // If you want to add a count its Item.of('id', count, '{key: value}'). This won't work here though as crafting table recipes to do accept stacked items
        L: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:lava"}}').weakNBT(),
        // Same principle, but if its an enchantment, there's a helper method
        W: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),
        G: 'cobblefordays:tier_2'
      })
    event.shaped('cobblefordays:tier_4', [
        'CCC',
        'WGL',
        'CCC'
      ], {
        C: 'minecraft:gold_ingot',
        // Item.of('id', '{key: value}'), it's recommended to use /kubejs hand
        // If you want to add a count its Item.of('id', count, '{key: value}'). This won't work here though as crafting table recipes to do accept stacked items
        L: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:lava"}}').weakNBT(),
        // Same principle, but if its an enchantment, there's a helper method
        W: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),
        G: 'cobblefordays:tier_3'
      })

    event.shaped('cobblefordays:tier_5', [
        'CCC',
        'WGL',
        'CCC'
      ], {
        C: 'minecraft:diamond',
        // Item.of('id', '{key: value}'), it's recommended to use /kubejs hand
        // If you want to add a count its Item.of('id', count, '{key: value}'). This won't work here though as crafting table recipes to do accept stacked items
        L: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:lava"}}').weakNBT(),
        // Same principle, but if its an enchantment, there's a helper method
        W: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),
        G: 'cobblefordays:tier_4'
      })
    })

    