const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question1('What\'s yor name? Nicknames are also acceptable :)', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

rl.question2('What\'s an activity you like doing?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.close();
});

rl.question3('What do you listen to while doing that?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.close();
});

rl.question4('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.close();
});

rl.question5('What\'s your favourite thing to eat for that meal?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.close();
});

rl.question6('Which sport is your absolute favourite?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.close();
});

rl.question7('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.close();
});