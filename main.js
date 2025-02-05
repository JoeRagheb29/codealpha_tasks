function calculateAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let result = document.getElementById("result");

    if (!day || !month || !year) {
        result.innerHTML = "Please enter a valid date of birth.";
        return result;
    }
    else {
        if(day > 31 || day < 1) {
            result.innerHTML = "Invalid day please inter from 1 to 31.";
            return result;
        }

        if(month > 12 || month < 1) {
            result.innerHTML = "Invalid month please inter from 1 to 12.";
            return result;
        }
        
        if(year < 1900 || year > 2025) {
            result.innerHTML = "Invalid year please inter from 1900 to 2025.";
            return result;
        }

        let birthDate = new Date(year, month-1, day);
        console.log(birthDate);
        let today = new Date();
        console.log(today)
        
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();
    
        if (ageDays < 0) {
            ageMonths--;
            let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            ageDays += prevMonth.getDate();
        }
    
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
        document.getElementById("result").innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    }
}