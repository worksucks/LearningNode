// console.log(process.env);
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
      var instruction = input.toString().trim();
      switch(instruction) {
          case '/exit':
              process.stdout.write('Quitting app!\n');
              process.exit();
              break;
          case '/sayhello':
              process.stdout.write('hello!\n');
              break;
          case '/info':
              console.log(process.env);
              //process.stdout.write(process.env);
              break;
          default:
              process.stderr.write('Wrong instruction!\n');
      };
    }
});
