function addAnnouncement() {
    let input = document.getElementById("announcement");
    let list = document.getElementById("announcement-list");

    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
}

