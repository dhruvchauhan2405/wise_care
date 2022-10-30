import React from "react";
import { Yogabox } from "../../components/Yogabox/Yogabox";

export const Exercise = () => {
  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col">
            <div className="row">Physical Fitness</div>
            <div className="row">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis animi quidem eligendi officia deserunt, nihil
              explicabo temporibus cumque ducimus illo, perferendis ipsum minus
              consectetur iure cum ipsam aut fuga quae. Explicabo nemo minima
              dignissimos alias eveniet eligendi aspernatur, culpa optio libero
              inventore ipsam, reprehenderit odit beatae rerum quod dolorum
              dolores nobis voluptatem amet blanditiis perspiciatis
              exercitationem numquam impedit quaerat? Dolorem deleniti
              dignissimos quas est natus autem expedita enim sed inventore totam
              fuga, tempora ipsum soluta neque id magnam amet laboriosam
              adipisci in iste saepe et dolores iusto. Excepturi nulla at
              blanditiis. Nam, animi? Eligendi iste voluptatum eum? Quaerat,
              fugiat alias.
            </div>
          </div>
          <div className="col"></div>
        </div>
      </section>
      <section>
        <h1>Exercises</h1>

        <Yogabox></Yogabox>
        <Yogabox></Yogabox>
        <Yogabox></Yogabox>
        <Yogabox></Yogabox>
      </section>
    </div>
  );
};
