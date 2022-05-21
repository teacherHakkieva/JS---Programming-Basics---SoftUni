function examp4(input) {
    let countFilm = Number(input[0]);
    let index = 1;
    let filmName = input[index];
    index++;
    let ratingFilm = Number(input[index])
    let maxRating = Number.MIN_VALUE;
    let minRating = Number.MAX_VALUE;
    let maxFilm = '';
    let minFilm = '';
    let sumRating = 0;

    for (let i = 0; i < countFilm; i++) {
        if (maxRating < ratingFilm) {
            maxRating = ratingFilm;
            maxFilm = filmName;
            sumRating += ratingFilm;
            index++;
            filmName = input[index];
            index++;
            ratingFilm = Number(input[index]);
        } 
       else if (minRating > ratingFilm) {
            minRating = ratingFilm;
            minFilm = filmName;
            sumRating += ratingFilm;
            index++;
            filmName = input[index];
            index++;
            ratingFilm = Number(input[index]);
        } else if(maxRating>ratingFilm||minRating<ratingFilm) {
            sumRating += ratingFilm;
            index++;
            filmName = input[index];
            index++;
            ratingFilm = Number(input[index]);
        }
    }
    console.log(`${maxFilm} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minFilm} is with lowest rating: ${minRating.toFixed(1)}`);
    let avg = sumRating / countFilm;
    console.log(`Average rating: ${avg.toFixed(1)}`);
}
examp4(['5',
    'A Star is Born',
    '7.8',
    'Creed 2',
    '7.3',
    'Mary Poppins',
    '7.2',
    'Vice',
    '7.2',
    'Captain Marvel',
    '7.1'
])