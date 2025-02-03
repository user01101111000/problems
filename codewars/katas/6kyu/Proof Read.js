// https://www.codewars.com/kata/583710f6b468c07ba1000017

const proofread = str => {

    const sentences = str.split('. ');

    const correct_sentences = sentences.map(sentence => {
        const true_sentence = sentence.toLowerCase().replaceAll("ie", "ei");
        return true_sentence[0].toUpperCase() + true_sentence.slice(1);
    })

    return correct_sentences.join('. ');

};