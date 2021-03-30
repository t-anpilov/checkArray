import  isSorted  from '../app/task1'

import { expect } from 'chai'

describe('check if array is sorted by ascending', function() {
    it('check if next element is bigger', function() {

        let result1 = isSorted([-Infinity, -5, 0, 3, 9])
        let result2 = isSorted([-32, -5.4, 10, 3, 9])
        let result3 = isSorted([-Infinity, -5, 0, 12, 9, 35, 44, 56, 51])

        expect(result1).to.equal(true)
        expect(result2).to.equal(false)
        expect(result3).to.equal(false)
    })
    
})