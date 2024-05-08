import React from "react";
import AnswerIcon from "../../assests/answerIcon.svg";
import "./Answerbox.css";
const Answerbox = () => {
  return (
    <div className="answer-box">
    <img src={AnswerIcon} />
      <p>
        Namaste! Thank you for using T&C Summarizer. Based on the link you've,
        here is the summarized terms:
        <ul>
          <li>
            <b>Terms Legal Rights:</b> Certa rights protected by law cannot be
            restricted by these Terms of Service.
          </li>
          <li>
            <b>No Intention to Limit Rights:</b> The terms are not meant to limit your
          </li>
          <li>
            <b>legal rights:</b> they describe the relationship between you and Google.
          </li>
          <li>
           <b>Limited Legal Rights for Others:</b> These terms do not grant legal
            rights to other individuals or organizations, even if they benefit
            from the relationship described.
          </li>
          <li>
            <b>Service Availability:</b> Not all services mentioned may be available in
            your country
          </li>
          <li>
            <b>Service-Specific Terms:</b> If there is a conflict between these terms
            and service- specific additional terms, the additional terms take
            precedence for that service.
          </li>
          <li>
            <b>Validity of Terms:</b> If a specific term is deemed invalid or
            unenforceable, it does not affect the validity of other terms.
          </li>
          <li>
           <b> Non-Immediate Enforcement:</b> Failure to immediately enforce these
            terms does not
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Answerbox;
