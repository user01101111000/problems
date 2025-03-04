// https://www.codewars.com/kata/58ad29bc4b852b14a4000050

function isTriangle(a, b, c) {

    return (a + b > c) && (a + c > b) && (b + c > a);

}

function countingTriangles(V) {

    let count = 0;

    for (let i = 0; i < V.length; i++) {

        for (let j = i + 1; j < V.length; j++) {

            for (let k = j + 1; k < V.length; k++) {

                if (isTriangle(V[i], V[j], V[k])) count++;

            }

        }

    }

    return count;

}