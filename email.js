class Email {
    constructor(fromAddress, emailContents) {
      this.fromAddress = fromAddress;
      this.emailContents = emailContents;
      this.hasBeenRead = false;
      this.isSpam = false;
    }
  
    markAsRead() {
      this.hasBeenRead = true;
    }
  
    markAsSpam() {
      this.isSpam = true;
    }
  }
  
  const inbox = [];
  
  function addEmail(contents, address) {
    const email = new Email(address, contents);
    inbox.push(email);
  }
  
  function getCount() {
    return inbox.length;
  }
  
  function getEmail(index) {
    if (index >= 0 && index < inbox.length) {
      const email = inbox[index];
      email.markAsRead();
      return email.emailContents;
    } else {
      return null;
    }
  }
  
  function getUnreadEmails() {
    return inbox.filter((email) => !email.hasBeenRead);
  }
  
  function getSpamEmails() {
    return inbox.filter((email) => email.isSpam);
  }
  
  function deleteEmail(index) {
    if (index >= 0 && index < inbox.length) {
      inbox.splice(index, 1);
    }
  }
  
  let menuChoice = "";
  
  while (menuChoice !== "7") {
    // Prompt user for menu choice
    menuChoice = prompt("What would you like to do:\n1. Read email\n2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. Get count\n8. Quit?");
  
    if (menuChoice === "1") {
      // Read email option
      const index = Number(prompt("Enter the index of the email you want to retrieve:"));
      const emailContents = getEmail(index);
      if (emailContents) {
        console.log(`Email contents: ${emailContents}`);
        inbox[index].hasBeenRead = true; // Mark the email as read
      } else {
        console.log("Invalid email index or email not found.");
      }
    } else if (menuChoice === "2") {
      // Mark spam option
      let index = Number(prompt("Enter the index of the email you want to mark as spam:"));
      if (index >= 0 && index < inbox.length) {
        inbox[index].markAsSpam();
        console.log("Email marked as spam.");
      } else {
        console.log("Invalid email index or email not found.");
      }
    } else if (menuChoice === "3") {
      // Send email option
      const contents = prompt("Enter email contents:");
      const address = prompt("Enter sender's email address:");
      addEmail(contents, address);
      console.log("Email added successfully.");
    } else if (menuChoice === "4") {
      // Delete email option
      const index = Number(prompt("Enter the index of the email you want to delete:"));
      deleteEmail(index);
      console.log("Email deleted successfully.");
    } else if (menuChoice === "5") {
      // View spam emails option
      const spamEmails = getSpamEmails();
      console.log(`Spam emails: ${spamEmails.length}`);
      spamEmails.forEach((email) => console.log(`- ${email.emailContents}`));
    } else if (menuChoice === "6") {
      // View unread emails option
      const unreadEmails = getUnreadEmails();
      console.log(`Unread emails: ${unreadEmails.length}`);
      unreadEmails.forEach((email) => console.log(`- ${email.emailContents}`));
    } else if (menuChoice === "7") {
      // Get count option
      console.log(`Total emails in inbox: ${getCount()}`);
    } else if (menuChoice === "8") {
      // Quit option
      console.log("Goodbye");
    } else {
      // Invalid input
      console.log("Oops - incorrect input");
    }
  }
  
  console.log("Updated inbox:", inbox);