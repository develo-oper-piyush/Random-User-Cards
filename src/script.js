function getUsers() {
    let rn = Math.floor(Math.random() * 10);

    fetch("https://randomuser.me/api/?results=3")
        .then((raw) => raw.json())
        .then((data) => {
            document.querySelector("#container").innerHTML = "";

            data.results.forEach((user) => {
                // 1. Create elements
                const container = document.querySelector("#container");
                const card = document.createElement("div");
                const imageDiv = document.createElement("div");
                const contentDiv = document.createElement("div");
                const img = document.createElement("img");
                const heading = document.createElement("h1");
                const paragraph = document.createElement("p");
                const statusDiv = document.createElement("div");

                if (rn % 2 == 0) {
                    st = "In-Active";
                    st_color = "bg-red-600";
                } else {
                    st = "Active";
                    st_color = "bg-cyan-600";
                }

                // 2. Set IDs, text, and attributes
                imageDiv.id = "image-div";
                heading.textContent = user.name.first + " " + user.name.last;
                paragraph.textContent =
                    user.location.street.number +
                    ", " +
                    user.location.street.name +
                    ", " +
                    user.location.city +
                    ", " +
                    user.location.state +
                    ", " +
                    user.location.country +
                    ", " +
                    user.location.postcode;
                statusDiv.textContent = st;
                img.src = user.picture.large;
                img.alt = "Userimage";

                // 3. Assign Tailwind-like classes
                card.className =
                    "bg-[#21373c] w-80 rounded-md ring-2 ring-slate-700 flex p-2 justify-center items-center gap-4 shadow-md shadow-indigo-800 transition-all duration-300 hover:shadow-indigo-500";
                imageDiv.className =
                    "overflow-hidden w-20 h-20 bg-amber-300 rounded-full cursor-pointer ring-2 ring-slate-700 bg-cover";
                contentDiv.id = "content";
                contentDiv.className = "w-40";
                paragraph.className = "text-sm font-light text-[0.8rem]";
                statusDiv.className = `ml-6 mt-1 w-15 h-4 ${st_color} rounded-full flex justify-center items-center text-[0.7rem] cursor-pointer shadow-xl hover:shadow-0 transition-all duration-300 p-1`;

                // 4. Build the nested structure
                imageDiv.appendChild(img);
                contentDiv.append(heading, paragraph, statusDiv);
                card.append(imageDiv, contentDiv);

                // 5. Append to the document body
                container.appendChild(card);
            });
        });
}

getUsers();

document.querySelector("#btn").addEventListener("click", () => {
    getUsers();
});
