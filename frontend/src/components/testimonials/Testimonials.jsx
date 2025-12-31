import React from "react";
import "./testimonials.css";
import Ankit from "../../assets/Mansi.jpeg";
import Mansi from "../../assets/Mansi.jpeg";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Ankit Yadav",
      position: "Student at MANIT Bhopal",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:Ankit,
    },
    {
      id: 2,
      name: "Arun Pratap Khichi",
      position: "Student at NIT Agartala",
      message:
        "I've learned more here than in any other place. The interactive lessons make learning enjoyable.",
      image:Ankit,
    },
    {
      id: 3,
      name: "Surendra Kumar Yadav",
      position: "Student at JNU Delhi",
      message:
        "The platform feels practical and real-world ready. Features like secure login, course enrollment, and progress tracking make it feel like a professional ed-tech product.",
      image:Ankit,
    },
    {
      id: 4,
      name: "Mansi Sahu",
      position: "Student at NIT Trichy",
      message:
        "Learnify supports self-paced learning effectively. I can revisit lectures anytime and track my progress, which helps me stay consistent.",
      image: Mansi,
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;