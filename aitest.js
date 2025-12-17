function generateMessage(type) {
  let message = "";

  switch (type) {
    case "calm":
      message = "Take a deep breath. You are safe and everything will be okay.";
      break;
    case "motivation":
      message = "You’ve got this! Keep pushing forward, success is closer than you think.";
      break;
    case "study":
      message = "Review your notes daily, practice past exams, and take short breaks to stay sharp.";
      break;
    default:
      message = "Choose a supportive message type.";
  }

  console.log("AI Output:", message);
}

// Example calls
generateMessage("calm");
generateMessage("motivation");
generateMessage("study");
