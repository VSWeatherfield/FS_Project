import "./loader.css";

export function Loader() {
  return (
    <div className="main-outlet-wrapper">
      <div className="wrap">
        <div className="lds-ring">
          <div></div>
        </div>
      </div>
    </div>
  );
}
