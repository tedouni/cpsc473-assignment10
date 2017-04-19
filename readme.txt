CPSC 473 - Web Front-End Engineering for Internet Applications
Assignment 10 - Spring 2017
Section 2 due April 24.  Section 1 due April 26.
In this assignment, you will finish the Chattrbox application and explore some additional features of ES6..
Complete the following:
Finish Chapter 17, adding the ChatMessage class and ws-client module.
Verify that your code sends a message to the server and receives it back, as in Figure 17.16 on p. 342.
Work through Chapter 18 to finish the Chattrbox application.
WARNING: The code in Chapter 18 is broken.  From Figure 18.2 on, it will not function as described.  Continue all the way to the end of the Chapter, adding the code as shown, then troubleshoot.
Among the problems you will find:
The moment module is installed but not imported into dom.js. Add
import moment from 'moment';
In method drawMessage() of class ChatList on p. 352, the line that reads
$(this.listId).append($messageRow);
should be
this.$list.append($messageRow);
The Chrome DevTools Resources tab in Figure 18.7 on p. 359 has been renamed to Application.
If necessary, consult 'book-solutions/Chapter 18' from the front-end-resources.zip file that you downloaded previously.
Verify that the application has been fixed by opening two browser windows and carrying on a conversation as in Figure 18.8 on p. 362.  If you use the e-mail addresses shown, you should see the appropriate Gravatars.
Push the contents of your chattrbox directory into a new public GitHub repository
Grading
How to know if the assignment has been successfully completed:
Is there an ESLint configuration file?
Have you fixed any issues detected by the linter-eslint plugin?
Is there a package.json file?
Is there a .babelrc file?
Have you run the atom-beautify plugin?
Have you fixed any JavaScript issues displayed in the DevTools Console?
Can multiple clients connect to http://localhost:3001 and participate in a chat?
Do chat messages show up in all connected clients in real-time?
Do you have a new repository for this assignment?
Have you checked in the changes from this assignment and pushed them to GitHub?
