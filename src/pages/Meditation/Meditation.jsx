import React from "react";
import music from "../../assets/Music/music2.mp3";
import "./Meditation.css";

export const Meditation = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <h1 className="main-head">Meditation</h1>
            </div>

            <div className="row">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores accusantium corporis quasi ut incidunt ea doloremque
              velit deserunt perferendis eaque ad quae, quibusdam, vel molestias
              repellat ipsam veritatis cupiditate error alias, nemo consequatur
              numquam saepe maxime eos! Ipsum totam eos alias dolores? Provident
              ipsum placeat repellat accusamus eveniet nulla possimus neque
              impedit, tenetur, corrupti fugit? Eius, assumenda quis magni quia
              aliquid inventore maiores ipsa corrupti tempore tempora quam
              voluptas accusamus consectetur minima nobis, reprehenderit dolores
              vitae natus et aliquam iusto ex illo placeat ab. Minima adipisci
              cumque expedita! Temporibus placeat impedit ipsum obcaecati labore
              laboriosam distinctio doloribus eveniet dolorem officiis?
            </div>
            <br />
          </div>
          <div className="col">
            <br />
            <br />
            <br />
            <br />

            <img
              className="image-testing"
              src="https://as2.ftcdn.net/v2/jpg/04/29/98/53/1000_F_429985307_Soobm8JrTAq3kOCM1GlJfq1J46COIvKb.jpg"
              alt="Heart"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="main-head appointment">Nature Sounds</div>
        <div className="row">
          <div className="col">
            <div className="row cardi">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/koRbYQyPU0U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="row cardi">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/E7qRkUYu580"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col">
            <div className="row cardi">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/D1lH55N72U0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="row cardi">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Hg1-NHJ7-sY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h1 className="main-head appointment">
            Sit Straight and Close your Eyes
          </h1>
        </div>
      </div>
    </div>
  );
};
