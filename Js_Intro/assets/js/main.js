var uName = [];
do {
    var username = prompt(`Istifadeci adini daxil edin`);
    var toLowerName = username.toLowerCase();
    if (uName.includes(toLowerName)) {
        alert(`Bu istifadeci artiq movcuddur`);
    } else {
        uName.push(toLowerName);
        alert(`Username ugurla elave olundu`);
    }
    console.log(uName);
} while (username != null);