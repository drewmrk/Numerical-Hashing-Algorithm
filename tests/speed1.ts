import { performance } from 'perf_hooks'
import NHA from '../src/NHA'

const start = performance.now()

for (let i = 0; i < 1; i++) {
    NHA('Hello')
}

const end = performance.now()

console.log(end - start)
