## Installation

Cloner le projet : https://github.com/heleneimie/TU-WMD03.git

Se déplacer dans le projet : _cd TU-WMD03_

Initialiser NodeJS : _npm init_
Installer le framework de test Mocha (environnement dev) : _npm install mocha -D_
Installer le module Assert (environnement dev) -> permet de tester l'égalité des champs : _npm install assert -D_

1 - A la racine, créer un dossier test.
2 - Ajouter un fichier index-spec.js dans le dossier test.

Documentation de Mocha : https://mochajs.org/#getting-started

3 - Dans le fichier index-spec.js, ajouter les tests (_ex. documentation ci-dessous_) :

```
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
}); 
```

## Exécution des tests

Exécuter la commande : _./node_modules/.bin/mocha_
