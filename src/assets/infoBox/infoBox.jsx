import "./infoBox.css";

export const InfoBox = () => {
  return (
    <>
      <div className="infoBox">
        <h1>Education</h1>
        <p className="pBold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          facere similique laborum illum repellendus architecto quaerat!
        </p>
        <p className="study">Fagot University (2018)</p>
        <h1>Skills</h1>
        <ul>
          <li>Coding aplication</li>
          <li>Website design</li>
          <li>Teamwork, multitasking and attention to detail</li>
          <li>Software and Web Development</li>
        </ul>
        <h1>contact</h1>
        <address>
          <p>+3 555 126 45 87</p>
          <p>myemail@myemail.com</p>
          <p>123 Compsoft St., Any City</p>
        </address>
      </div>
    </>
  );
};
