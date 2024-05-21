let pronoun = ['the-dog', 'my-grandma', 'the-mailman', 'my-bird'];
let adj = ['ate', 'peed', 'crushed', 'broke'];
let noun = ['my-homework', 'my-phone', 'the-car'];
let domainExt = ['.com', '.net', '.us', '.io', 'com.br', '.it', '.es'];

function domainGenerator(arr1, arr2, arr3, arr4) {
    let domains = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                for (let l = 0; l < arr4.length; l++) {
                    domains.push(arr1[i] + arr2[j] + arr3[k] + arr4[l]);
                }
            }
        }   
    }
    console.log(domains);
}

domainGenerator(pronoun, adj, noun, domainExt);