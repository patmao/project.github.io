function brm1() {
    var BMR;
    var Calories = 0;
    var Gender;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var ActivityLev1 = document.getElementById("activityLevel1");
    var ActivityLev2 = document.getElementById("activityLevel2");
    var ActivityLev3 = document.getElementById("activityLevel3");
    var ActivityLev4 = document.getElementById("activityLevel4");
    var ActivityLev5 = document.getElementById("activityLevel5");
    (ActivityLev1.checked) ? (Calories += 1.2) : (Calories += 0);
    (ActivityLev2.checked) ? (Calories += 1.375) : (Calories += 0);
    (ActivityLev3.checked) ? (Calories += 1.55) : (Calories += 0);
    (ActivityLev4.checked) ? (Calories += 1.725) : (Calories += 0);
    (ActivityLev5.checked) ? (Calories += 1.9) : (Calories += 0);
    (Gender == "Male") ? BMR = 66.5 + (13.76 * Weight) + (5.003 * Height) - (6.755 * Age) : BMR = 655 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age);
    (Gender == "Female") ? BMR = 655 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age) : BMR = 66.5 + (13.76 * Weight) + (5.003 * Height) - (6.755 * Age);
    GrandCalories = BMR + Calories;
    document.write(Gender + "         ");
    document.write("Your result of BMR is " + BMR + "            ");
    document.write("Calories is " + GrandCalories );
}
document.getElementById("submit").addEventListener("click", brm1, false);

function bmr2() {
    var BMR;
    var Gender;
    var Calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var ActivityLev1 = document.getElementById("activityLevel1");
    var ActivityLev2 = document.getElementById("activityLevel2");
    var ActivityLev3 = document.getElementById("activityLevel3");
    var ActivityLev4 = document.getElementById("activityLevel4");
    var ActivityLev5 = document.getElementById("activityLevel5");
    (ActivityLev1.checked) ? (Calories += 1.2) : (Calories += 0);
    (ActivityLev2.checked) ? (Calories += 1.375) : (Calories += 0);
    (ActivityLev3.checked) ? (Calories += 1.55) : (Calories += 0);
    (ActivityLev4.checked) ? (Calories += 1.725) : (Calories += 0);
    (ActivityLev5.checked) ? (Calories += 1.9) : (Calories += 0);
    (Gender == "Male") ? BMR = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age) : 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age);
    (Gender == "Female") ? BMR = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) : 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age);
    GrandCalories = BMR + Calories;
    document.write(Gender+ "          ");
    document.write("Your result of BMR is " + BMR + "          ");
    document.write("Calories is " + GrandCalories);
}
document.getElementById("submit").addEventListener("click", brm2, false);
