export default function getClass(i) {
    // this is og for size variation
    if (i % 5 === 0) return 'big'
    if (i % 6 === 0) return 'wide'

    // this is just the wide variant
    // return 'wide'
}