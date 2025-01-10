// https://www.codewars.com/kata/5827bc50f524dd029d0005f2

const getFirstPython = list => {
    const idx = list.map(x => x.language).indexOf('Python');
    return idx < 0 ? 'There will be no Python developers' : list[idx].firstName + ', ' + list[idx].country;
}