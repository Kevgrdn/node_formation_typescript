import { describe, expect, test} from '@jest/globals'

import { Color, IItem, Store } from "../../src/jstore/store.class"
import { resolve } from "path"

/** Données necessaires aux tests */
const filename = resolve(__dirname, "tmp-store.json")
const item01: IItem = {
    name: "Item's name",
    description: "string",
    colors: [ Color.BLUE ],
    price: 20,
    sku: "sku001",
    weight: 1,
    image_url: "https://"
}

describe('Test de la classe Store', () => { 
    let store: Store;

    beforeEach(() => {
        store = new Store({ filename })
    })

    test('Data should be empty by default', () => { 
        expect(store.data.length).toBe(0)
    })
})

describe('Store class, complete suite', () => { 
    let store : Store

    beforeAll(() => {
        store = new Store({filename})
    })

    test('Add an item', () => { 
        expect(store.data.length).toBe(0)

        const addedItem = store.add(item01)

        expect(addedItem.id).toBeGreaterThanOrEqual(1)
        expect(store.data.length).toBe(1)
    })
})