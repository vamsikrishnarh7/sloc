import AboutSection from "./AboutSection"
import Reason from "./Reason";
let MainSection = () => {
    return (
        <>
        <main>
        <AboutSection />
        <section className="why-section">
        <div className="container">
          <h2 className="why-section-heading">WHY SLOC?</h2>
          <div className="reasons-container">
            <Reason 
              className = "reasons reason1"
              heading = "Networking"
              content = "Getting into the SVCE Leauge of Coders will connect you with a huge network of coders across India"
            />
            <Reason 
              className = "reasons reason2"
              heading = "Learning"
              content = "There are contests every month to test your skills knowledge, ability to perform in restricted time."
            />
            <Reason 
              className = "reasons reason3"
              heading = "Referrals"
              content = "Our alumni team is really strong and canget you refferals to great companies"
            />
            <Reason 
              className = "reasons reason4"
              heading = "Knowledge tranfer"
              content = "It is a great place to discuss programming problems from worldwide contests"
            />
            <Reason 
              className = "reasons reason5"
              heading = "Career guidance"
              content = "Career guidance from the experienced personnel"
            />
            <Reason 
              className = "reasons reason6"
              heading = "Workshops"
              content = "Great workshops on Data Structures, Algorithms and Web/Android Development as well"
            />
          </div>
        </div>
      </section>
        </main>
        </>
    )
}
export default MainSection;