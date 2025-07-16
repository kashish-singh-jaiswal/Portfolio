AOS.init();

  const typewriter = new Typewriter(document.getElementById('typewriter'), {
    loop: true,
    delay: 75,
  });

  typewriter
    .typeString("Hi, I'm Kashish")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Full Stack Developer")
    .pauseFor(1000)
    .start();