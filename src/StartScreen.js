function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <butto className="btn btn-ui">Let's Start</butto>
    </div>
  );
}

export default StartScreen;
