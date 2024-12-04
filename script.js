function addTask() {
    var task = document.getElementById("input").value;
    var list = document.getElementById("list");
    var reminder = document.getElementById("reminder");
    if (task === "") {
        // Show the reminder message
        reminder.style.display = "block";
    } else {
        // Show the reminder message
        reminder.style.display = "none";

        var listItem = document.createElement("li");
        listItem.innerText = task;

        // Create a container div for the buttons
        var buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container"; // Apply a class for styling
        listItem.appendChild(buttonContainer);

        // Create the Remove button
        var remove = document.createElement("button");
        remove.className = "remove";
        remove.innerText = "Remove";
        buttonContainer.appendChild(remove);
        remove.onclick = function () {
            listItem.classList.add("removing");
            setTimeout(() => list.removeChild(listItem), 300); // Match the animation duration
        };

        // Create the Complete button
        var complete = document.createElement("button");
        complete.className = "complete";
        complete.innerText = "Complete";
        buttonContainer.appendChild(complete);
        complete.onclick = function () {
            // Toggle the Completed class and add the check mark indicator
            listItem.classList.toggle("Completed");

            // Add the check mark only when the task is completed
            if (listItem.classList.contains("Completed")) {
                var indicator = document.createElement("span");
                indicator.className = "indicator";
                indicator.innerText = "✓";
                listItem.appendChild(indicator);
            } else {
                // Remove the check mark indicator when not completed
                var indicator = listItem.querySelector(".indicator");
                if (indicator) {
                    listItem.removeChild(indicator);
                }
            }
        };

        // Append the list item to the list
        list.appendChild(listItem);

        // Clear the input field
        document.getElementById("input").value = "";
    }
}
