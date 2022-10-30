import React from "react";
import "./DietBlog.css";

export const DietBlog = () => {
  return (
    <div>
      <div>
        <div className="container blog-cont">
          <div>
            <img
              src="https://pregnantchicken.com/content/images/size/w1000/2021/11/Grandparent-names--Website-.jpg"
              className="image-blog"
              alt="Blog image"
            />
          </div>
          <h1 className="main-head">
            Your Pregnant Body – 20 Things They Don't Tell You
          </h1>
          <p className="para">
            Ah yes, you’ve told people you’re pregnant and so the questions
            begin, “how do you feel?”, “are you tired?”, “do you have morning
            sickness?” , “are you hungry?”, etc.
            <br />
            Symptoms like fatigue, nausea, back and joint pain, constant peeing,
            constant hunger and being “emotional” (both good and bad) are all
            considered par for the course when it comes to pregnancy, so no one
            is too surprised by them. However, there are many (many) more
            delights that can come along with a positive pregnancy test that
            people don’t talk about or show you in the movies.
            <br />
            Here are just 20 of the lesser known pregnancy side effects and
            symptoms to give you a bit of a heads up (or scare the crap out of
            you if you’re a teenager that wants to be on a reality show) so you
            know you’re not alone.
            <a href="https://pregnantchicken.com/your-pregnant-body-20-things/">
              Read more...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
