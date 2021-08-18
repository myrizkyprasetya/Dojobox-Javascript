//Program Switch-Case Javascript
var nilai = parseInt(prompt('Masukkan nilai Anda = ','0-100'));

switch(true){
    case nilai>=90:
        document.write('Grade A');
        break;
    case nilai>=80:
        document.write('Grade B');
        break;
    case nilai>=70:
        document.write('Grade C');
        break;
    case nilai>=60:
        document.write('Grade D');
        break;
    default:
        document.write('Grade E');
}