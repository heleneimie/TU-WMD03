const assert = require('assert');

const SampleService = require('../app/Services/SampleService');

/**
 * Exécute le fichier de tests SampleService.js
 */
describe('SampleService', function () {

    /**
     * Exécute la fonction add du ficher de tests
     */
    describe('#add', function () {

        it("Vérifier que la méthode retourne 2 avec en paramètres 1 et 1", function () {

            // Arrange (je définis mon contexte)
            const a = 1;
            const b = 1;

            const sampleService = new SampleService();

            // Act (j'exécute la méthode de l'application)
            const result = sampleService.add(a, b);

            // Assert (Je teste que c'est vrai)
            assert.equal(result, 2);

        });

        it("Vérifie que la méthode retourne 3, avec en paramètres 2 et 1", function () {

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

    /**
     * Exécute la fonction isMajor du ficher de tests
     */
    describe('#isMajor', function () {

        let sampleService;

        beforeEach(function () {
            sampleService = new SampleService();
        });

        it("Vérifie que ça retourne true si le paramètre est 18", function () {

            //Arrange
            const age = 18;

            //Act
            const result = sampleService.isMajor(age);

            //Asset
            // assert.ok();
            assert.equal(result, true);

        });
        it("Vérifie que ça retourne false si le paramètre est 17", function () {

            //Arrange
            const age = 17;

            // const sampleService = new SampleService();

            //Act
            const result = sampleService.isMajor(age);

            //Asset
            assert.equal(result, false);

        });
    });

    /**
     * Exécute la fonction displayName du fichier de tests
     */
    describe('#displayName', function () {

        let sampleService;

        beforeEach(function () {
            sampleService = new SampleService();
        });

        it("Vérifie que le prénom et le nom ont été saisis", function () {

            //Arrange
            const firstname = 'Hélène';
            const lastname = 'Gaillard';

            //Act
            const result = sampleService.displayName(firstname, lastname);

            //Assert
            assert.strictEqual(result, "Hélène Gaillard");
            // assert.ok(result, indexOf(' ') > -1);

        });

        it("Vérifie quand le prénom est vide", function () {

            //Arrange
            const firstname = '';
            const lastname = 'Gaillard';

            //Act
            const result = sampleService.displayName(firstname, lastname);

            //Assert
            assert.strictEqual(result, null);

        });
        it("Vérifie quand le nom est vide", function () {
            //Arrange
            const firstname = 'Hélène';
            const lastname = '';

            //Act
            const result = sampleService.displayName(firstname, lastname);

            //Assert
            assert.strictEqual(result, null);

        });
        it("Vérifie quand le prénom et le nom sont vides", function () {
            //Arrange
            const firstname = '';
            const lastname = '';

            //Act
            const result = sampleService.displayName(firstname, lastname);

            //Assert
            assert.strictEqual(result, null);

        });
    });
});
