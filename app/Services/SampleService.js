class SampleService {
    /**
     * Doit retourner l'addition des variables a et b
     * @param a
     * @param b
     */

    add(a, b) {
        return a + b;
    }

    /**
     * Doit retourner vrai si l'âge passé en paramètre est strictement supérieur à 18 ans
     * @param age
     * @returns {boolean}
     */
    isMajor(age) {

        if (age > 17) {
            return true;
        }
        return false;
    }

    /**
     * Doit retourner la concaténation du nom et du prénom avec un espace au milieu
     * Doit contrôler que les données ne sont pas vides
     * Doit retourner null s'il y a une erreur dans la saisie des paramètres
     * @param firstname
     * @param lastname
     * @returns string
     */
    displayName(firstname, lastname) {

        if ('' === firstname || '' === lastname) {
            return null;
        }

        // Renvoie une string concaténée
        return firstname + " " + lastname;

        //Renvoie undefined
        // return toString(firstname + " " + lastname);

        //Renvoie NaN
        // return parseInt(firstname + " " + lastname);

    }

}

module.exports = SampleService;