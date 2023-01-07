// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
    const thisDay = new Date(today);
    
    const daysOfTerms = {};
    terms.forEach((term) => {
        const [kindOfTerm, month] = term.split(' ');
        daysOfTerms[kindOfTerm] = +month;
    });
    
    const destructions = [];
    privacies.forEach((privacy, i) => {
        const [startDate, kindOfTerm] = privacy.split(' ');
        const [year, month, date] = startDate.split('.').map((str) => +str);
        const expiredDate = new Date(year, month + daysOfTerms[kindOfTerm] - 1, date);
        
        if (thisDay >= expiredDate) {
            destructions.push(i+1);
        }
    });
    
    return destructions;
}
