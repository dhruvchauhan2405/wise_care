import React from "react";
import { Yogabox } from "../../components/Yogabox/Yogabox";

import { Yogabox2 } from "../../components/Yogabox/Yogabox2";
export const Yoga = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row main-head appointment">Yoga</div>
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
      <h1 className="main-head appointment">Yogasans</h1>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Corpse Pose | Savasana"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/Untitled-design-51-2.png"
      ></Yogabox>
      <br />
      <br />
      <br />
      <Yogabox2
        headline="Legs Up the Wall | Viparita Karani"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/Legs-Up-The-Wall-pose-2.jpeg"
      ></Yogabox2>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Cat-Cow Stretch | Marjaryasana-Bitilasana"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/Cat-Cow-Stretch-1.jpeg"
      ></Yogabox>
      <br />
      <br />
      <br />
      <Yogabox2
        headline="Downward Facing Dog | Adho Mukha Shwanasana"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/Downward-Facing-Dog-1.jpeg"
      ></Yogabox2>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Knees to Chest | Apanasana"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/Untitled-design-52-1.png"
      ></Yogabox>
      <br />
      <br />
      <br />
      <Yogabox2
        headline="Bridge Pose | Setu Bandha Sarvangasana"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/Bridge-Pose-1.jpeg"
      ></Yogabox2>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Cobbler’s Pose | Baddha Konasana"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/cobblers-pose-1.jpeg"
      ></Yogabox>
      <br />
      <br />
      <br />
      <Yogabox2
        headline="Chair Pose | Utkatasana"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/Chair-Pose-1.jpeg"
      ></Yogabox2>
      <br />
      <br />
      <br />
      <Yogabox
        headline="Locust Pose | Salabhasana"
        image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/06/Untitled-design-53-1.png"
      ></Yogabox>
      <br />
      <br />
      <br />
    </div>
  );
};
