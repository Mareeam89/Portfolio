document.addEventListener("DOMContentLoaded", () => {
    fetchSermons();
    fetchDevotionals();
});

async function fetchSermons() {
    const response = await fetch("http://localhost:5000/api/sermons");
    const sermons = await response.json();
    document.getElementById("sermonList").innerHTML = sermons.map(sermon =>
        `<div>
            <h3>${sermon.title}</h3>
            <p>By ${sermon.preacher}</p>
            <audio controls><source src="${sermon.audioUrl}" type="audio/mpeg"></audio>
        </div>`
    ).join("");
}

async function fetchDevotionals() {
   try {
        const response = await fetch("http://localhost:5000/api/devotionals"); // Replace with your backend API URL
        const devotionals = await response.json();

        const container = document.getElementById("devotionalContainer");
        container.innerHTML = ""; // Clear previous data

        devotionals.forEach(devotional => {
            const devotionalDiv = document.createElement("div");
            devotionalDiv.classList.add("devotional");

            devotionalDiv.innerHTML = `
                <h3>${devotional.title}</h3>
                <p>${devotional.content}</p>
                <small>Published on: ${new Date(devotional.date).toDateString()}</small>
            `;

            container.appendChild(devotionalDiv);
        });
    } catch (error) {
        console.error("Error fetching devotionals:", error);
    }
}
