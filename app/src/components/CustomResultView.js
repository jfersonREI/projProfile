import Card from "./Card/Card";
import ClientLogo from "./../assets/images/client-fema.png";

export const CustomResultView = ({ result, onClickLink }) => (
  <li className="">
    <Card
      title={result.title.snippet}
      clientName="FEMA"
      clientLogo={ClientLogo}
      popDate={result.acres.raw}
      shortDesc={result.description.snippet}
      businessUnit={result.states.snippet}
      account={result.visitors.raw}
      size="L"
    />

    <div className="sui-result__headerxx">
      {/* Maintain onClickLink to correct track click throughs for analytics*/}{" "}
      <a onClick={onClickLink} href={result.nps_link}>
        {result.title.snippet}
      </a>
    </div>
  </li>
);
