const assert = require('assert');

/* 1er paramètre : Description : le test va s'exécuter sur un tableau.
 * 2e param = callback
 */
describe('Array', function() {

    /* 1er paramètre : Description : le test va s'exécuter sur la fonction indexOf().
     * 2e param = callback
     */
    describe('#indexOf()', function() {

        /* s'exécute avant toutes les itérations, 1 seule fois */
        before( function() console.log("Before") )

        /* s'exécute avant chaque itération */
        beforeEach( function() console.log("Before each") )

        /* s'exécute après chaque itération */
        afterEach( function() console.log("After each") )

        /* s'exécute après toutes les itérations, 1 seule fois */
        after( function() console.log("After") )

        /* Permet de faire l'itération de notre test unitaire.
         * 1er param : Description de ce que doit faire la fonction. 2e param = callback.
         */
        it('vérifier que la variable a === 1', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
        it('vérifier que la variable b === 2', function() {

        })
    })
})