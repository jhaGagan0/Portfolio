export default function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="mb-0" style={{ fontSize: "2.5rem" }}>About Me</h2>
        </div>

        <div className="col-md-5 order-1 order-md-0 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src="https://i.postimg.cc/jqcm11NB/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-styl.avif"
            alt="Gagan"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-7 order-2 order-md-1">
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            I'm a <strong>Data Analyst</strong> and aspiring <strong>Data Scientist</strong> with hands-on experience in Python, SQL, Power BI, and Machine Learning. I enjoy working with real-world data to uncover insights, build interactive dashboards, and develop practical AI/ML solutions that solve meaningful problems.
            <br /><br />
            My experience includes NLP-based machine learning projects, business intelligence dashboards, and data storytelling focused on turning complex information into clear, actionable insights. I've worked with tools and libraries such as <strong>Pandas, NumPy, Scikit-learn, NLTK, SpaCy, Power BI, and Tableau</strong>, along with SQL for advanced querying and analysis.
            <br /><br />
            I also co-authored a peer-reviewed research paper presented at the <strong>ICSDCT 2025</strong>, where I explored data-driven machine learning approaches for water quality evaluation. Alongside academics, I actively participate in hackathons, coding contests, and cloud-based learning programs, with achievements including <strong>Google Cloud Arcade Legend Tier</strong> and finalist recognition at <strong>HackArena 2.0</strong>.
            <br /><br />
            My goal is to grow into a <strong>Data Scientist</strong> who combines analytics, machine learning, and business understanding to create impactful, data-driven solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
