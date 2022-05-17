let buttons = document.querySelectorAll(".btn1");
let elements = document.querySelectorAll(".s");
let elements2 = document.querySelectorAll(".s2");
let buttons2 = document.querySelectorAll(".btn2");
let link = document.querySelectorAll(".links")

if (buttons != 0) {
    buttons.forEach(function (item) {
        item.addEventListener("click", function (event) {
            let active = document.querySelector(".active-btn");
            active.classList.remove("active-btn");
            item.classList.add("active-btn");
        });

        let type = item.dataset.type;
        item.addEventListener("click", function (event) {

            if (type == "intro") {
                elements.forEach(function (item) {
                    if (item.classList.contains("intro")) {
                        item.classList.remove("display-false");
                    } else {
                        item.classList.add("display-false");
                    }
                });
            }

            if (type == "explore") {
                elements.forEach(function (item) {
                    if (item.classList.contains("explore")) {
                        item.classList.remove("display-false");
                    } else {
                        item.classList.add("display-false");
                    }
                });
            }

            if (type == "contacts") {
                elements.forEach(function (item) {
                    if (item.classList.contains("contacts")) {
                        item.classList.remove("display-false");
                    } else {
                        item.classList.add("display-false");
                    }
                });
            }
        });
    });
}

if (buttons2 != 0) {
    buttons2.forEach(function (item) {
        item.addEventListener("click", function (event1) {
            let active = document.querySelector(".active-btn-2");
            active.classList.remove("active-btn-2");
            item.classList.add("active-btn-2");
        });

        let type2 = item.dataset.type;
        item.addEventListener("click", function (event) {
            if (type2 == "one") {
                elements2.forEach(function (item) {
                    if (item.classList.contains("one")) {
                        item.classList.remove("display-false-2");
                    } else {
                        item.classList.add("display-false-2");
                    }
                });
            }

            if (type2 == "two") {
                elements2.forEach(function (item) {
                    if (item.classList.contains("two")) {
                        item.classList.remove("display-false-2");
                    } else {
                        item.classList.add("display-false-2");
                    }
                });
            }

            if (type2 == "three") {
                elements2.forEach(function (item) {
                    if (item.classList.contains("three")) {
                        item.classList.remove("display-false-2");
                    } else {
                        item.classList.add("display-false-2");
                    }
                });
            }

            if (type2 == "four") {
                elements2.forEach(function (item) {
                    if (item.classList.contains("four")) {
                        item.classList.remove("display-false-2");
                    } else {
                        item.classList.add("display-false-2");
                    }
                });
            }

            if (type2 == "five") {
                elements2.forEach(function (item) {
                    if (item.classList.contains("five")) {
                        item.classList.remove("display-false-2");
                    } else {
                        item.classList.add("display-false-2");
                    }
                });
            }

            if (type2 == "six") {
                elements2.forEach(function (item) {
                    if (item.classList.contains("six")) {
                        item.classList.remove("display-false-2");
                    } else {
                        item.classList.add("display-false-2");
                    }
                });
            }

            if (type2 == "seven") {
                elements2.forEach(function (item) {
                    if (item.classList.contains("seven")) {
                        item.classList.remove("display-false-2");
                    } else {
                        item.classList.add("display-false-2");
                    }
                });
            }
        });
    });
};