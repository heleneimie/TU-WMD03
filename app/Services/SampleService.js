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
}

module.exports = SampleService;