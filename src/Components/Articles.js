import React from "react";
import "../Css/Articles.css";

const Articles = () => {
  return(
    <>
      <div className="articles">
        <h1>Latest Articles</h1>
        <div className="contain"> 
          <div className="card">
            <div className="image">
              <img src="./images/image-confetti.jpg" alt="" />
            </div>
            <div className="card-text">
              <p className="muted-text small">By Claire Robinson</p>
              <h4>Receive money in any currency with no fees</h4>
              <p className="muted-text">
                Our simple budgeting feature allows you to separate out your
                spending So why should you be forced to only receive money in a
                single …
              </p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="./images/image-plane.jpg" alt="" />
            </div>
            <div className="card-text">
              <p className="muted-text small">By Wilson Hutton</p>
              <h4>Treat yourself without worrying about money</h4>
              <p className="muted-text">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="./images/image-restaurant.jpg" alt="" />
            </div>
            <div className="card-text">
              <p className="muted-text small">By Wilson Hutton</p>
              <h4>Take your Easybank card wherever you go</h4>
              <p className="muted-text">
                We want you to enjoy your travels. This is why we don’t charge any
                fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="./images/image-plane.jpg" alt="" />
            </div>
            <div className="card-text">
              <p className="muted-text small">By Claire</p>
              <h4>Robinson Our invite-only Beta accounts are now live!</h4>
              <p className="muted-text">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through the
                site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Articles;