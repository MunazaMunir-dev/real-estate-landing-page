// ========================================
// MOBILE MENU
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

    // Mobile menu link click hone par close

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });
}


// ========================================
// PROPERTY SEARCH
// ========================================

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const location = document.querySelector(
            '.search-field:nth-child(1) select'
        ).value;

        const propertyType = document.querySelector(
            '.search-field:nth-child(2) select'
        ).value;

        const price = document.querySelector(
            '.search-field:nth-child(3) select'
        ).value;

        const properties =
            document.querySelectorAll(".property-card");

        let found = false;
        let count = 0;

        properties.forEach(function (property) {

            const propertyLocation =
                property.querySelector(
                    ".property-location"
                ).textContent;

            const propertyName =
                property.querySelector("h3").textContent;

            // Location match

            const locationMatch =
                location === "Select Location" ||
                propertyLocation.includes(location);

            // Property type match

            const typeMatch =
                propertyType === "Select Type" ||
                propertyName
                    .toLowerCase()
                    .includes(
                        propertyType.toLowerCase()
                    );

            // Price match

            let priceMatch = true;

            if (price !== "Select Price") {

                const propertyPrice =
                    property
                        .querySelector(
                            ".property-bottom strong"
                        )
                        .textContent;

                const priceNumber =
                    parseInt(
                        propertyPrice.replace(
                            /[$,]/g,
                            ""
                        )
                    );

                if (price === "$100k - $300k") {

                    priceMatch =
                        priceNumber >= 100000 &&
                        priceNumber <= 300000;

                }

                else if (price === "$300k - $500k") {

                    priceMatch =
                        priceNumber >= 300000 &&
                        priceNumber <= 500000;

                }

                else if (price === "$500k - $1M") {

                    priceMatch =
                        priceNumber >= 500000 &&
                        priceNumber <= 1000000;

                }

                else if (price === "$1M+") {

                    priceMatch =
                        priceNumber >= 1000000;

                }

            }


            // Show / hide property

            if (
                locationMatch &&
                typeMatch &&
                priceMatch
            ) {

                property.style.display = "block";

                found = true;
                count++;

            }

            else {

                property.style.display = "none";

            }

        });


        // Search result

        if (!found) {

            alert(
                "No property found matching your search."
            );

        }

        else {

            alert(
                `${count} ${count === 1 ? "property" : "properties"} found!`
            );

            document
                .getElementById("properties")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

}


// ========================================
// PROPERTY VIEW BUTTON
// ========================================

const propertyButtons =
    document.querySelectorAll(
        ".property-bottom a"
    );

propertyButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const propertyCard =
                button.closest(
                    ".property-card"
                );

            const propertyName =
                propertyCard
                    .querySelector("h3")
                    .textContent;

            const propertyPrice =
                propertyCard
                    .querySelector("strong")
                    .textContent;

            const message =
                document.getElementById(
                    "message"
                );

            if (message) {

                message.value =
                    `I am interested in ${propertyName} (${propertyPrice}). I would like to schedule a viewing.`;

            }

        }
    );

});


// ========================================
// CONTACT FORM
// ========================================

const propertyForm =
    document.getElementById(
        "propertyForm"
    );

if (propertyForm) {

    propertyForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();

            // IMPORTANT:
            // HTML mein ID "propertyType" hai

            const propertyType =
                document
                    .getElementById(
                        "propertyType"
                    )
                    .value;


            if (
                name === "" ||
                phone === "" ||
                email === "" ||
                propertyType === ""
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;

            }


            alert(
                `Thank you ${name}! Your property viewing request has been received.`
            );


            propertyForm.reset();

        }
    );

}


// ========================================
// SMOOTH NAVIGATION
// ========================================

const allLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );

allLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                targetId !== "#" &&
                document.querySelector(
                    targetId
                )
            ) {

                event.preventDefault();

                document
                    .querySelector(targetId)
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        }
    );

});