import React from "react";
import { Yogabox } from "../../components/Yogabox/Yogabox";
import { Yogabox2 } from "../../components/Yogabox/Yogabox2";

export const Exercise = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row main-head appointment">Physical Fitness</div>
          <div className="row">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis animi quidem eligendi officia deserunt, nihil explicabo
            temporibus cumque ducimus illo, perferendis ipsum minus consectetur
            iure cum ipsam aut fuga quae. Explicabo nemo minima dignissimos
            alias eveniet eligendi aspernatur, culpa optio libero inventore
            ipsam, reprehenderit odit beatae rerum quod dolorum dolores nobis
            voluptatem amet blanditiis perspiciatis exercitationem numquam
            impedit quaerat? Dolorem deleniti dignissimos quas est natus autem
            expedita enim sed inventore totam fuga, tempora ipsum soluta neque
            id magnam amet laboriosam adipisci in iste saepe et dolores iusto.
            Excepturi nulla at blanditiis. Nam, animi? Eligendi iste voluptatum
            eum? Quaerat, fugiat alias.
          </div>
        </div>
        <div className="col">
          <br />
          <br />
          <br />
          <br />
          <img
            src="https://as1.ftcdn.net/v2/jpg/03/05/59/32/1000_F_305593240_tsLw1F5Nk22hVpuVUNjOPdQrE4WF6zyq.jpg"
            alt="yoga"
            className="image-testing"
          />
        </div>
      </div>
      <h1 className="main-head appointment">Exercises</h1>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Press-up"
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pushup-gif-1544694650.gif?crop=1.00xw:0.893xh;0,0.107xh&resize=320:*"
      ></Yogabox>
      <br />
      <br />
      <br />
      <Yogabox2
        headline="Dumbbell standing shoulder press"
        image="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-press.gif?resize=640:*"
      ></Yogabox2>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Skipping"
        image="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/skip.gif?crop=0.7515923566878981xw:1xh;center,top&resize=320:*"
      ></Yogabox>
      <br />
      <br />
      <br />
      <Yogabox2
        headline="Dumbbell squat"
        image="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/squat.gif?resize=640:*"
      ></Yogabox2>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Lateral raise"
        image="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/latraise.gif?resize=640:*"
      ></Yogabox>
      <br />
      <br />
      <br />
      <Yogabox2
        headline="Bicep curl"
        image="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bicepcurl.gif?resize=640:*"
      ></Yogabox2>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Dumbbell step-up"
        image="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-step-up.gif?resize=640:*"
      ></Yogabox>
      <br />
      <br />
      <br />
      <Yogabox2
        headline="Plank"
        image="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/plank.gif?resize=640:*"
      ></Yogabox2>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Crunch"
        image="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/crunches.gif?resize=640:*"
      ></Yogabox>
      <br />
      <br />
      <br />
    </div>
  );
};
