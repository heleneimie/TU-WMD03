const assert = require('assert');

const SampleService = require('../app/Services/SampleService');

describe('SampleService', function() {
    describe('add', function() {

        it('Vérifier que la méthode retourne 2 avec en paramètres 1 et 1', function() {

            // Arrange (je définit mon contexte
            const a = 1;
            const b = 1;

            const sampleService = new SampleService();

            // Act (j'exécute la méthode de l'application)
            const result = sampleService.add(a, b);

            // Assert (Je teste que c'est vrai)
            assert.equal(result, 2);

        });

        it('Vérifie que la méthode retourne 3, avec en paramètres 2 et 1', function () {
            // Arrange
            const a = 2;
            const b = 1;

            const sampleService = new SampleService();

            // Act
            const result = sampleService.add(a, b);

            // Assert
            assert.equal(result, 3);

        });
    });

});