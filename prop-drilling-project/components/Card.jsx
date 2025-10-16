import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src="data:image/png;base64,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"
          alt="image"
        />
        <button>
          save <Bookmark size={15} />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>{props.date}</span>
        </h3>
        <h3>{props.post}</h3>
        <br />
        <div className="clssa">
          <h4>{props.tags[0]}</h4>
          <h4>{props.tags[1]}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;
