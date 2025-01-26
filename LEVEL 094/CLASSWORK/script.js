function Grade(grade1, grade2, grade3) {
    const avg = (grade1 + grade2 + grade3) / 3;

    const res = 
        avg > 90 && avg < 100 ? 'A' :
        avg > 70 && avg < 80 ? 'B' :
        avg > 50 && avg < 65 ? 'C' :
        avg > 25 && avg < 50 ? 'D' :
        avg <= 25 ? 'წადი ისწავლე და მერე მოდი' : '';

    console.log('ქულა: ${result}');
}