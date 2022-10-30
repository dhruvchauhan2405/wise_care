import React from "react";

export const Yogabox = (props) => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="image-testing" src={props.image} alt="Yogasan" />
            </div>
            <div className="col">
              <div className="row">
                <h1>{props.headline}</h1>
              </div>
              <div className="row">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                assumenda eaque hic non sed voluptas voluptate ea dolorem
                accusamus vitae! Odio itaque eius repellendus commodi quae hic
                corporis eveniet maxime fugit in cupiditate aut, distinctio
                voluptates nemo voluptate repudiandae odit reprehenderit animi!
                Commodi modi facere aspernatur obcaecati, saepe quidem nisi!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
