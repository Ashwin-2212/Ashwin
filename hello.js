// Classification logic
function classifyItem(name, weight) {
  let lower = name.toLowerCase();

  if (lower.includes("plastic")) return { type: "Plastic", recyclable: true };
  else if (lower.includes("glass")) return { type: "Glass", recyclable: true };
  else if (lower.includes("metal")) return { type: "Metal", recyclable: true };
  else if (lower.includes("wood")) return { type: "Wood", recyclable: false };

  // Rule-based by weight
  if (weight < 3) return { type: "Plastic", recyclable: true };
  else if (weight >= 3 && weight <= 5) return { type: "Glass", recyclable: true };
  else if (weight > 5 && weight <= 10) return { type: "Wood", recyclable: false };
  else return { type: "Metal", recyclable: true };
}

// Handle adding items
function addItem() {
  const nameInput = document.getElementById("itemName").value.trim();
  const weightInput = parseFloat(document.getElementById("itemWeight").value);

  if (!nameInput || isNaN(weightInput)) {
    alert("Please enter both name and weight.");
    return;
  }

  const result = classifyItem(nameInput, weightInput);

  const li = document.createElement("li");
  li.textContent = `${nameInput} (${weightInput} kg) → ${result.type} | Recyclable: ${result.recyclable ? "Yes" : "No"}`;

  document.getElementById("resultList").appendChild(li);

  // Clear input fields
  document.getElementById("itemName").value = "";
  document.getElementById("itemWeight").value = "";
}
