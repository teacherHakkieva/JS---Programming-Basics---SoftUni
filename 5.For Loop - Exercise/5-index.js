function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    let isHaveMoney=true;
  

    for (let i = 0; i < openTabs; i++) {
        let currentOpenTab = input[index];
        index++
        if (currentOpenTab === 'Facebook') {
            money -= 150;
        } else if (currentOpenTab === 'Instagram') {
            money -= 100;
        } else if (currentOpenTab === 'Reddit') {
            money -= 50;
        }

        if (money <= 0) {
            isHaveMoney=false;
            console.log('You have lost your salary.');
            break;
        }
    }
    if (isHaveMoney) {
        console.log(money);
    }
}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);
    salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])
    
