/**
 * Numerical Hashing Algorithm: A lightweight and fast cryptographic algorithm
 * for the modern web
 */
exports.NHA = (input: string) => {
    /**
     * Store `input.length` in a variable
     */
    const inputLength = input.length

    /**
     * Make sure `input` has a length greater than 0
     */
    if (!inputLength) return 'Input should have a length greater than 0.'

    /**
     * List to be populated with binary values for each character in `input`
     */
    const binaryValues: number[] = []

    /**
     * Populate `binaryValues` with binary values for each character in `input`
     */
    input.split('').map(i => {
        binaryValues.push(parseInt(i.charCodeAt(0).toString(2)))
    })

    /**
     * List to be populated with binary values for each character in
     * `binaryValues` by their index plus one
     */
    const multipliedBinaryValues: number[] = []

    /**
     * Populate `multipliedBinaryValues` with values from `binaryValues`
     * multiplied by their index + 1
     */
    binaryValues.map((i, index) => {
        multipliedBinaryValues.push(i * (index + 1))
    })

    /**
     * Calculate the sum of `multipliedBinaryValues`
     */
    const multipliedBinaryValuesSum = multipliedBinaryValues.reduce(
        (start, end) => start + end
    )

    /**
     * Generate the first half of the garble
     */
    const garbleFragment1 = () => {
        let result: [number, string]
        result = [0, '']
        multipliedBinaryValuesSum
            .toString(36)
            .split('')
            .map(i => {
                parseInt(i)
                    ? (result[0] += parseInt(i))
                    : i !== '0' && (result[1] += i)
            })

        return result
    }

    /**
     * Generate the second half of the garble
     */
    const garbleFragment2 = () => {
        let numericalResult = 0
        multipliedBinaryValues.sort().map((i, index) => {
            numericalResult += i * (index + 1)
        })

        let result: [number, string]
        result = [0, '']

        numericalResult
            .toString(36)
            .split('')
            .map(i => {
                parseInt(i)
                    ? (result[0] += parseInt(i))
                    : i !== '0' && (result[1] += i)
            })

        return result
    }

    /**
     * Generate the final result
     */
    const result =
        String(garbleFragment1()[0] + garbleFragment2()[0]) +
        garbleFragment1()[1] +
        garbleFragment2()[1]

    /**
     * Return the results after alphabetizing the string
     */
    return result.split('').sort().join('')
}
