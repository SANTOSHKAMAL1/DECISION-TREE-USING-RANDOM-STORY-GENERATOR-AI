// script.js

// Story templates with placeholders
const storyTemplates = [
    "Based on your love for {preference}, a {activity} trip with a {budget} budget is perfect for you! We recommend {destination}.",
    "Imagine yourself enjoying {activity} in the {preference}. With a {budget} budget, {destination} awaits you!",
    "Your ideal vacation: {destination}. Enjoy {activity} amidst the beauty of the {preference} with your {budget} budget!"
  ];
  
  // Recommendations based on user choices
  const recommendations = {
    Beach: {
      Adventure: {
        Low: "Goa, India - Affordable water sports and local culture.",
        Medium: "Bali, Indonesia - Exciting water sports and cultural tours.",
        High: "Bora Bora - Luxury villas and water adventures."
      },
      Relaxation: {
        Low: "Kerala, India - Serene beaches and affordable ayurvedic treatments.",
        Medium: "Maldives - Overwater bungalows and spa packages.",
        High: "French Riviera - High-end spas and gourmet dining."
      }
    },
    Mountains: {
      Adventure: {
        Low: "Himalayas - Budget-friendly trekking trails.",
        Medium: "Rockies, Canada - Guided adventure tours and lodges.",
        High: "Swiss Alps - Luxury skiing and gourmet meals."
      },
      Relaxation: {
        Low: "Appalachian Mountains - Peaceful retreats.",
        Medium: "Blue Ridge Mountains - Spa and wellness packages.",
        High: "Alps - High-end resorts with breathtaking views."
      }
    }
  };
  
  // Utility function to replace placeholders in templates
  function generateStory(template, data) {
    return template
      .replace("{preference}", data.preference)
      .replace("{activity}", data.activity)
      .replace("{budget}", data.budget)
      .replace("{destination}", data.destination);
  }
  
  // Generate recommendation and story
  document.getElementById("generate-recommendation").addEventListener("click", () => {
    const preference = document.getElementById("preference").value;
    const activity = document.getElementById("activity").value;
    const budget = document.getElementById("budget").value;
  
    if (preference && activity && budget) {
      // Get recommendation based on user input
      const destination = recommendations[preference][activity][budget];
  
      // Select a random story template
      const randomIndex = Math.floor(Math.random() * storyTemplates.length);
      const storyTemplate = storyTemplates[randomIndex];
  
      // Generate the final story
      const story = generateStory(storyTemplate, { preference, activity, budget, destination });
  
      // Display the story
      document.getElementById("output").innerHTML = story;
    } else {
      document.getElementById("output").innerHTML = "Please make selections for all fields.";
    }
  });
  