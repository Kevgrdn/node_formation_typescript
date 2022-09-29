import { describe, expect, test} from '@jest/globals'
import { Color, IItem, Store } from "../../src/jstore/store.class"
import { resolve } from "path"
import { diff } from 'jest-diff'
import {faker} from '@faker-js/faker'

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

/** Fonction permettant de générer des items via le package Faker. */
function itemGenerator(): IItem {
    return{
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        colors: [ Color.BLUE ],
        price: parseInt(faker.commerce.price()),
        sku: faker.random.alphaNumeric(6),
        weight: parseInt(faker.random.numeric(2)),
        image_url: faker.image.imageUrl()
    }
}

const item02 = itemGenerator()

/**
 * Describe : Description d'une batterie de tests.
 * 
 * BeforeEach : Action qui s'execute a chaque début de test.
 * 
 * BeforeAll : Action que s'éxécute pour tous les tests.
 * 
 * Test : Méthode permettant d'effectuer des tests.
 * 
 * Expect : Méthode permettant de tester.
 * 
 * Diff : Pour voir la différence entre deux objets par exemple.
 * 
 */
describe('Test de la classe Store', () => { 
    let store: Store;

    beforeEach(() => {
        store = new Store({ filename })
    })

    test('Data should be empty by default', () => { 
        expect(store.data.length).toBe(0)
    })
})

describe('Test de la classe Store, suite', () => { 
    let store : Store

    beforeAll(() => {
        store = new Store({filename})
    })

    test('Ajoute un Item', () => { 
        expect(store.data.length).toBe(0)

        const addedItem = store.add({...item01})

        expect(addedItem.name).toBe(item01.name)
        expect(typeof addedItem).toBe("object")
        expect(addedItem.id).toBeGreaterThanOrEqual(1)
        expect(store.data.length).toBe(1)
        
        if (addedItem.id) {
            const item = store.getOne(addedItem.id)
            
            /** Teste du diff */
            // const result = diff(item, item01)
            // console.log(result);

            expect(item?.id).toBe(addedItem.id)
            expect(store.data.findIndex(item => item.id === addedItem.id)).toBeGreaterThan(-1)
        }
        else{
            throw new Error("no id on addedItem")
        }
    })

    test('Remplace un Item.', () => { 
        expect(store.data.length).toBe(1)
        const firstItem = store.data[0]

        if (!firstItem.id) {
            throw new Error("No id on 1st product.")
        };
        
        const isReplaced = store.replace(firstItem.id, item02)

        expect(isReplaced).toBeTruthy()
        expect(store.data.length).toBe(1)
        
        const replacedItem = store.getOne(firstItem.id)

        if (!replacedItem) {
            throw new Error("item not found")
        };
        
        expect(firstItem.name).not.toBe(replacedItem.name)
    })

    test('Update un Item partiellement.', () => { 
        const firstItem = store.data[0]

        if (!firstItem.id) {
            throw new Error("No id on 1st product.")
        };    

        const newName = faker.commerce.productName()
        const updatedItem = store.update(firstItem.id, { name: newName})

        expect(updatedItem).toBeTruthy()

        if (updatedItem) {
            expect(updatedItem.name).toBe(newName)
        }
    })

    test("Suppression d'un Item", () => { 
        const firstItem = store.data[0]
        
        if (!firstItem.id) {
            throw new Error("No Id on item");
        }

        store.remove(firstItem.id)

        expect(store.data.length).toBe(0)
        expect(store.getOne(firstItem.id)).toBeFalsy()
    })
})