import React from "react";
import { DietBlog } from "../../components/DietBlog/DietBlog";

export const Pregnant = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row main-head appointment">Pregnancy</div>
              <div className="row">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores accusantium corporis quasi ut incidunt ea doloremque
                velit deserunt perferendis eaque ad quae, quibusdam, vel
                molestias repellat ipsam veritatis cupiditate error alias, nemo
                consequatur numquam saepe maxime eos! Ipsum totam eos alias
                dolores? Provident ipsum placeat repellat accusamus eveniet
                nulla possimus neque impedit, tenetur, corrupti fugit? Eius,
                assumenda quis magni quia aliquid inventore maiores ipsa
                corrupti tempore tempora quam voluptas accusamus consectetur
                minima nobis, reprehenderit dolores vitae natus et aliquam iusto
                ex illo placeat ab. Minima adipisci cumque expedita! Temporibus
                placeat impedit ipsum obcaecati labore laboriosam distinctio
                doloribus eveniet dolorem officiis?
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
                src="https://pregnantchicken.com/content/images/size/w1000/2022/10/mom-holding-baby-s-hand.jpg"
                alt="Pregnant"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <br />
        <br />
        <br />
        <h1 className="main-head appointment">Blogs</h1>
        <DietBlog></DietBlog>
      </section>
    </div>
  );
};
